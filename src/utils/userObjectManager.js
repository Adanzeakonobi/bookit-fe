import EncryptionManager from './encryptionManager';

const crypto = new EncryptionManager('myOtherSecretKey');

class UserObjectManager {
  static userHash = crypto.hash('user');

  static setUserObject = (user) => {
    const encryptedUser = crypto.encrypt(JSON.stringify(user));
    localStorage.setItem(UserObjectManager.userHash, encryptedUser);
  }

  static getUserObject = () => {
    const user = localStorage.getItem(UserObjectManager.userHash);
    if (user) {
      return JSON.parse(crypto.decrypt(user));
    }
    return null;
  }

  static destroyUserObject = () => localStorage.removeItem(UserObjectManager.userHash);

  static hasUserObject = () => !!this.getUserObject();
}

export default UserObjectManager;
