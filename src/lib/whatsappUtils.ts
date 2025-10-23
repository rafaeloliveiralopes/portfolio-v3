import i18n from "./i18n";

/**
 * Utility function to build a WhatsApp URL with localized message.
 *
 * @param phone - Phone number with country code (e.g., "+55 62 99213-6842")
 * @param key - Translation key for the message (default: "whatsapp.ctaMessage")
 * @param vars - Variables for interpolation in the message (e.g., { name: "Rafael" })
 * @returns Formatted WhatsApp URL with encoded message
 */
export const buildWhatsAppUrl = (
  phone: string,
  key = "whatsapp.ctaMessage",
  vars: Record<string, string> = {}
): string => {
  // Get the localized message from i18n
  const message = i18n.t(key, vars);

  // Encode the message for URL
  const encodedMessage = encodeURIComponent(message);

  // Normalize phone number by removing all non-numeric characters
  const digits = phone.replace(/\D/g, "");

  // Build and return the WhatsApp URL
  return `https://wa.me/${digits}?text=${encodedMessage}`;
};
