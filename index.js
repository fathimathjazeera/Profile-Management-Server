import dotenv from 'dotenv'
import express from 'express'
import cors from 'cors'


dotenv.config()

const app= express()


const port = process.env.PORT;





app.use(express.json())
app.use(cors())







app.listen(port, () => console.log(`Server running on ${port}`));