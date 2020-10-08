import express from 'express';
import authorize from '../middlewares/auth.js'



import { createUser, getUser,getUserById,signUser, updateUser, deleteUser } from '../controllers/users.js'

const router = express.Router();


router.get('/', (req,res) => {
    res.send(users)
})

router.post('/create', createUser)

router.post('/signin', signUser)

router.get('/getUserProfil/:id',authorize,getUserById )

router.get('/:id',authorize,getUser )

router.delete('/:id',deleteUser)

router.patch('/:id', updateUser)

export default router;