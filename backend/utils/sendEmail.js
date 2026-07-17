import "dotenv/config";

const sendEmail = async (options) => {
  try {
    console.log("===== BREVO DEBUG =====");
    console.log("EMAIL_USER:", process.env.EMAIL_USER);
    console.log(
      "BREVO_API_KEY EXISTS:",
      !!process.env.BREVO_API_KEY
    );

    const BREVO_API_KEY = process.env.BREVO_API_KEY;

    if (!BREVO_API_KEY) {
      throw new Error("BREVO_API_KEY not found in .env");
    }

    if (!process.env.EMAIL_USER) {
      throw new Error("EMAIL_USER not found in .env");
    }

    const payload = {
      sender: {
        name: "Real Estate Platform",
        email: process.env.EMAIL_USER,
      },
      to: [
        {
          email: options.email,
        },
      ],
      subject: options.subject,
      htmlContent: options.message,
    };

    const response = await fetch(
      "https://api.brevo.com/v3/smtp/email",
      {
        method: "POST",
        headers: {
          accept: "application/json",
          "content-type": "application/json",
          "api-key": BREVO_API_KEY,
        },
        body: JSON.stringify(payload),
      }
    );

    const result = await response.json();

    console.log("BREVO RESPONSE:");
    console.log(result);

    if (!response.ok) {
      throw new Error(
        result.message || JSON.stringify(result)
      );
    }

    console.log(
      "Email sent successfully. Message ID:",
      result.messageId
    );

    return result;
  } catch (error) {
    console.error("BREVO ERROR:");
    console.error(error);
    throw error;
  }
};

export default sendEmail;