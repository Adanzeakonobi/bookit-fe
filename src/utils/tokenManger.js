class TokenManager {
  static setToken(token) {
    localStorage.setItem('token', token);
  }

  static getToken() {
    return localStorage.getItem('token');
  }

  static destroyToken() {
    localStorage.removeItem('token');
  }

  static hasToken() {
    return !!this.getToken();
  }
}

export default TokenManager;
