import EncryptionManager from './encryptionManager';

const crypto = new EncryptionManager('mySecretKey');

class TokenManager {
  static tokenHash = crypto.hash('token');

  static userHash = crypto.hash('user');

  static setToken = (token) => {
    const encryptedToken = crypto.encrypt(token);
    localStorage.setItem(TokenManager.tokenHash, encryptedToken);
  }

  static getToken = () => {
    const token = localStorage.getItem(TokenManager.tokenHash);
    if (token) {
      return crypto.decrypt(token);
    }
    return null;
  }

  static destroyToken = () => localStorage.removeItem(TokenManager.tokenHash);

  static hasToken = () => !!this.getToken();

  static setUser = () => {
    const user = JSON.stringify({ name: 'John Doe' });
    const encryptedUser = crypto.encrypt(user);
    localStorage.setItem(TokenManager.userHash, encryptedUser);
  }

  static getUser = () => {
    const user = localStorage.getItem(TokenManager.userHash);
    if (user) {
      return JSON.parse(crypto.decrypt(user));
    }
    return null;
  }

  static destroyUser = () => localStorage.removeItem(TokenManager.userHash);

  static hasUser = () => !!this.getUser();
}

export default TokenManager;
