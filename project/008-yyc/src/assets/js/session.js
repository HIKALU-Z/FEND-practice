export default {
  uinfo() {
    return JSON.parse(localStorage.getItem('uinfo'));
  },
  logout(url) {
    // console.log('out!')
    localStorage.removeItem('uinfo');
    location.href = url || '/#/login';
  },
  login(row) {
    localStorage.setItem('uinfo', JSON.stringify(row));
  },
  is_admin() {
    let info = this.uinfo();
    return info && info.is_admin;
  }
};
