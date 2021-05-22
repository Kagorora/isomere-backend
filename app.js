import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/dbConfig.js'
import morgan from 'morgan'

const app = express()

dotenv.config({ path: './config/config.env'});

connectDB()

if(process.env.NODE_ENV === 'development'){
  app.use(morgan('dev'))
}

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`App is running in ${process.env.NODE_ENV} on Port ${port}`)
})
