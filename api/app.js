import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

const app = express()

app.use(cors())
app.use(cookieParser())

//routes
// import userRouter from "./routes/user.routes.js"
// import playlistrouter from "./routes/playlist.routes.js"
// import videoRouter from "./routes/video.routes.js"
import wasteImageRouter from "../routes/wasteImage.router.js"


//routes declare
// app.use("/api/v1/users", userRouter)
// app.use("/api/v1/playlist",playlistrouter)
// app.use("/api/v1/videos", videoRouter)
app.use('/api/v1/testing',wasteImageRouter)
app.use('/api/v1/image',wasteImageRouter)


export {app}