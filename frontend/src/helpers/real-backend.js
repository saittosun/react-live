// array in local storage for registered users
// let users = JSON.parse(localStorage.getItem('users')) || [];
//Fetch the registered users from backend https://aplaudoapi.azurewebsites.net/api/artists/
import axios from 'axios';
// const axios = require('axios').default;
let users = axios.get('/api/artists')
    .then(response => response.data)
// .then(data => console.log(data));
// data:[{
//     ArtistId: 10,
//     ArtistFirstName: 'Anthony',
//     ArtistLastName: 'Well',
//     ArtistNickName: 'Fredrick',
//     EmailAddress: null,
//     Password: null
//   },]

// let users = fetch('/api/artists', {
//     method: 'GET',
//     headers: {
//         "Content-type": "application/json;charset=UTF-8"
//     }
// })
//     .then((response) => response.text())


export function configureRealBackend() {
    let realFetch = window.fetch;
    window.fetch = function (url, opts) {
        const { method, headers } = opts;
        const body = opts.body && JSON.parse(opts.body);

        return new Promise((resolve, reject) => {
            // wrap in timeout to simulate server api call
            // setTimeout(handleRoute, 500);

            // eslint-disable-next-line no-unused-vars
            function handleRoute() {
                switch (true) {
                    case url.endsWith('/api/artists/userlogin') && method === 'POST':
                        return authenticate();
                    case url.endsWith('/api/artists') && method === 'POST':
                        return register();
                    case url.endsWith('/api/artists') && method === 'GET':
                        return getUsers();
                    case url.endsWith('/changepassword') && method === 'PUT':
                        return updateUser();
                    case url.match(/\/artists\/\d+$/) && method === 'DELETE':
                        return deleteUser();
                    default:
                        // pass through any requests not handled above
                        return realFetch(url, opts)
                            .then(response => resolve(response))
                            .catch(error => reject(error));
                }
            }

            // route functions

            function authenticate() {
                // const { EmailAddress, Password } = body;
                // const user = users.find(x => x.EmailAddress === EmailAddress && x.Password === Password);

                // if (!user) return error('Email or password is incorrect');
                // return ok({
                //     id: user.id,
                //     ArtistPhoto: user.ArtistPhoto,
                //     ArtistFirstName: user.ArtistFirstName,
                //     ArtistLastName: user.ArtistLastName,
                //     ArtistNickName: user.ArtistNickName,
                //     EmailAddress: user.EmailAddress,
                //     token: 'fake-jwt-token'
                // });
            }

            function register() {
                const user = body;

                // if (users.find(x => x.EmailAddress === user.EmailAddress)) {
                //     return error(`This email  ${user.EmailAddress} is already registered`);
                // }

                // assign user id and a few other properties then save
                // user.id = users.length ? Math.max(...users.map(x => x.id)) + 1 : 1;
                // users.push(user);
                axios.post('/api/artists', user);
                localStorage.setItem('users', JSON.stringify(users));

                return ok();
            }

            function updateUser() {
                const user = body;

                // if (users.find(x => x.EmailAddress === user.EmailAddress)) {
                //     return error(`This email  ${user.EmailAddress} is already registered`);
                // }

                // assign user id and a few other properties then save
                // user.id = users.length ? Math.max(...users.map(x => x.id)) + 1 : 1;
                // users.push(user);
                axios.put("/api/artists/changepassword", user)
                localStorage.setItem('users', JSON.stringify(users));

                return ok();
            }

            function getUsers() {
                if (!isLoggedIn()) return unauthorized();

                return ok(users);
            }

            function deleteUser() {
                if (!isLoggedIn()) return unauthorized();

                users = users.filter(x => x.id !== idFromUrl());
                localStorage.setItem('users', JSON.stringify(users));
                return ok();
            }

            // helper functions

            function ok(body) {
                resolve({ ok: true, text: () => Promise.resolve(JSON.stringify(body)) });
            }

            function unauthorized() {
                resolve({ status: 401, text: () => Promise.resolve(JSON.stringify({ message: 'Unauthorized' })) });
            }

            function error(message) {
                resolve({ status: 400, text: () => Promise.resolve(JSON.stringify({ message })) });
            }

            function isLoggedIn() {
                return headers['Authorization'] === 'Bearer fake-jwt-token';
            }

            function idFromUrl() {
                const urlParts = url.split('/');
                return parseInt(urlParts[urlParts.length - 1]);
            }
        });
    }
}
