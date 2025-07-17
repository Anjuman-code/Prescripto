import nodemailer from "nodemailer";

const MAX_RETRIES = 3;
const RETRY_DELAY = 1000; // 1 second

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const sendMailWithRetry = async ({
  to,
  subject,
  text = "",
  html = "",
  retryCount = 0,
}) => {
  try {
    if (!to || !subject) {
      throw new Error("Missing required fields: 'to' or 'subject'");
    }

    // Validate email configuration
    if (!process.env.EMAIL_ADDRESS || !process.env.EMAIL_PASSWORD) {
      throw new Error(
        "Email configuration missing: EMAIL_ADDRESS or EMAIL_PASSWORD not set in environment variables"
      );
    }

    // Enhanced Gmail configuration with multiple fallback options
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false, // Use STARTTLS
      auth: {
        user: process.env.EMAIL_ADDRESS,
        pass: process.env.EMAIL_PASSWORD, // This should be an App Password
      },
      // Reduced timeouts for faster failure detection
      connectionTimeout: 10000, // 10 seconds
      greetingTimeout: 5000, // 5 seconds
      socketTimeout: 10000, // 10 seconds
      pool: true,
      maxConnections: 1,
      rateDelta: 20000,
      rateLimit: 5,
      tls: {
        rejectUnauthorized: false,
        ciphers: "SSLv3",
      },
    });

    // Skip verification to reduce response time
    console.log("� Preparing to send email...");

    const mailOptions = {
      from: `"Prescripto Admin" <${process.env.EMAIL_ADDRESS}>`,
      to,
      subject,
      text: text || html.replace(/<[^>]+>/g, ""),
      html,
    };

    console.log("🔄 Sending email...");
    const info = await transporter.sendMail(mailOptions);
    console.log("✅ Email sent successfully:", info.response);
    console.log("✅ Message ID:", info.messageId);

    // Close the connection
    transporter.close();

    return true;
  } catch (error) {
    console.error("❌ Error sending email:", error.message);
    console.error("❌ Error code:", error.code);
    console.error("❌ Full error:", error);

    // Provide more specific error messages
    if (error.code === "EAUTH") {
      console.error(
        "❌ Authentication failed. Check your email and App Password."
      );
    } else if (error.code === "ECONNECTION") {
      console.error("❌ Connection failed. Check your internet connection.");
    } else if (error.code === "ETIMEDOUT") {
      console.error("❌ Connection timeout. Try again later.");
    }

    // If we have retries left, try again
    if (retryCount < MAX_RETRIES) {
      console.log(
        `📧 Retrying email send... Attempt ${retryCount + 1}/${MAX_RETRIES}`
      );
      await sleep(RETRY_DELAY * (retryCount + 1));
      return sendMailWithRetry({
        to,
        subject,
        text,
        html,
        retryCount: retryCount + 1,
      });
    }
    return false;
  }
};

// Wrapper function for background processing
const sendMail = async (options) => {
  // Fire and forget - don't await the result
  sendMailWithRetry(options).catch((error) => {
    console.error("📧 Background email process failed:", error);
  });
  return true; // Always return true since we're processing in background
};

export default sendMail;
