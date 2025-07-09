import dotenv from 'dotenv'
import express from 'express'
import cors from 'cors'
import { connectDb } from './config/db.js'
import userRoute from './routes/userRoute.js'


dotenv.config()

const app= express()


const port = process.env.PORT;
const db_url = process.env.DATABASE_URL

connectDb(db_url)


app.use(express.json())
app.use(cors())


app.use('/api',userRoute)




app.listen(port, () => console.log(`Server running on ${port}`));