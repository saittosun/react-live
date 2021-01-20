export function authHeader() {
    // return authorization header with jwt token
    let user = JSON.parse(localStorage.getItem('user'));

    if (user && user.token) {
        return { 'Authorization': 'Bearer ' + user.token };
    } else {
        return {};
    }
}
// headers: {'Content-Type':'application/x-www-form-urlencoded'}
// ,
//   "proxy": "http://localhost:4000"
// "start": "cross-env PORT=8000 react-scripts start",