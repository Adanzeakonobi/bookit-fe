import CryptoJS from 'crypto-js';

export default class EncryptionManager {
  constructor(encryptionKey) {
    this.encryptionKey = encryptionKey;
    this.lastHash = '';
  }

  hash = (value) => {
    const hash = CryptoJS.SHA256(value).toString();
    this.lastHash = hash;
    return hash;
  };

  encrypt = (value) => {
    const encJson = CryptoJS.AES.encrypt(JSON.stringify(value), this.encryptionKey).toString();
    const encData = CryptoJS.enc.Base64.stringify(CryptoJS.enc.Utf8.parse(encJson));
    return encData;
  }

  decrypt = (value) => {
    const decData = CryptoJS.enc.Base64.parse(value).toString(CryptoJS.enc.Utf8);
    const bytes = CryptoJS.AES.decrypt(decData, this.encryptionKey).toString(CryptoJS.enc.Utf8);
    return JSON.parse(bytes);
  }
}
