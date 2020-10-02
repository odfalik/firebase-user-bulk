const users = require('./users.json');
var admin = require('firebase-admin');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://<DATABASE_NAME>.firebaseio.com'
});

const timeout = function (ms) { return new Promise(resolve => setTimeout(resolve, ms)); }

for (let i = 0; i < users.length; i++) {
    setTimeout(function timer() {
        let user = users[i];
        admin.auth().updateUser(user.uid, { disabled: true }).then(record => {
            console.log(record);
        })
    }, i * 300);
}