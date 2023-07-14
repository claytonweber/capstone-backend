const express = require('express');

const app = express();

async function getAllUser(res,req) {
    let users;
    try {
        const userData = await fetchUsers();

        if(users) {
            res.send(users);
        } else {
            res.send('no users found')
        }
    } catch(error) {
        console.log(error);
    }
    
}

app.get('api/users', getAllUsers);

app.listen(8080, () => {
    console.log("Listening at port 8080");
})

