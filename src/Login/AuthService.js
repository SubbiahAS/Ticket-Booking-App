// // AuthService.js
// const AuthService = {
//     authenticate(username, password) {
//       // Replace this with real API/service call
//       const validUser = { username: 'subbiah', password: '1234' };
  
//       if (username === validUser.username && password === validUser.password) {
//         return true;
//       } else {
//         return false;
//       }
//     },
//   };
  
//   export default AuthService;

const AuthService = {
  authenticate(username, password) {
    // Replace with actual authentication API call
    const validUser = { username: 'admin', password: '1234' };

    return username === validUser.username && password === validUser.password;
  },
};

export default AuthService;
