import express from 'express'
import { createProfile, fetchAllProfiles, fetchSingleProfile } from '../controllers/users.js';
const userRoute = express.Router()

userRoute.post('/createprofile',createProfile)
userRoute.get('/allprofiles',fetchAllProfiles)
userRoute.get('/singleprofile/:id',fetchSingleProfile)




export default userRoute;
