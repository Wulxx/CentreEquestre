import {v4 as uuidv4 } from 'uuid';
var users = [];

export const createUser = (req, res) => {
    console.log(req.body)
    const {email, pseudo, password } = req.body;

        if (email && pseudo && password){
            const user;
            const userId = uuidv4();
            const userWithid = { ... user, id: userId, email: email, pseudo: pseudo, password : password};
            users.push(userWithid);

        }


    res.send(userWithid);
}

export const getUser = (req, res) => {
    const { id } = req.params;
    let currentUser = users.find((user) => user.id === id);
    console.log(currentUser)
    res.send(currentUser)
}

export const deleteUser = (req,res) => {

    const { id } = req.params;

    users = users.filter((user) => user.id !== id)
    res.send(users)
}

export const updateUser = (req,res) => {
    const { id } = req.params;
    const { firstName, lastName, age } = req.body;

    var currentUser = users.find((user) => user.id === id);

    if (firstName) currentUser.firstName = firstName;
    if (lastName) currentUser.lastName = lastName;
    if (age) currentUser.age = age;

    res.send(users)

}