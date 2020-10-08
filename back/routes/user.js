import express from 'express';


import { createUser, getUser, updateUser, deleteUser } from '../controllers/users.js'

const router = express.Router();


router.get('/', (req,res) => {
    res.send(users)
})

router.post('/', createUser)

router.get('/:id',getUser )

router.delete('/:id',updateUser)

router.patch('/:id', deleteUser)

export default router;