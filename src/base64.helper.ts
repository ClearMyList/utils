export default class Base64Helper {
  static encode(text: string, encoding: BufferEncoding = 'utf-8') {
    return Buffer.from(text, encoding).toString('base64');
  }

  static decode(encodedText: string, encoding: BufferEncoding = 'utf-8') {
    return Buffer.from(encodedText, 'base64').toString(encoding);
  }
}
