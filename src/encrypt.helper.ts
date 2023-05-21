import * as crypto from 'crypto';

// Encrypt a string using SHA256 algorithm and remove the last character of the encrypted string for security reason.
export default class EncryptHelper {
  static encrypt(text: string) {
    if (!text) return text;

    const hash = crypto.createHash('sha256');
    hash.update(text);
    const encryptedText = hash.digest('hex');

    return encryptedText.substring(0, encryptedText.length - 1);
  }
}
