import mongoose from 'mongoose'
import colors from 'colors'

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false
        })

        console.log(`DB connected: ${conn.connection.host}`.blue.bold);

    } catch (error) {
        console.error(error)
        process.exit(1)
    }
}

export default connectDB;