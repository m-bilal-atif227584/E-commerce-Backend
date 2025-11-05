import express from 'express'
import {config} from 'dotenv'
import cors from 'cors'
import cookieParser from 'cookie-parser';
import fileUpload from 'express-fileupload';
import { createTables } from './Utils/createTables.js';
import { errorMiddleware } from './Middlewares/errorMiddleware.js';
import router from './Router/authRoutes.js';
import productRouter from './Router/productRoutes.js';
import adminRouter from './Router/adminRoutes.js';
import orderRouter from './Router/orderRoutes.js';

const app = express();
config({ path: "./.env" })

app.use(cors({
    origin: [process.env.FRONTEND_URL],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
    allowedHeaders: ["Content-Type", "Authorization"],
}))

app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(
    fileUpload({
        tempFileDir: "./uploads",  //Is uploads folder me files jo data me ayngi wo store hongi.
        useTempFiles: true,
    })
)

app.use("/api/v1/auth", router)
app.use("/api/v1/product", productRouter)
app.use("/api/v1/admin", adminRouter)
app.use("/api/v1/order", orderRouter)

createTables()

app.use(errorMiddleware);

export default app;

//The app is now configured with CORS, cookie parsing, JSON body parsing, URL-encoded body parsing, and file upload.