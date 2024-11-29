import { app } from "./app.js";


try {
    app.listen(8000,()=>{
        console.log(`the server is running 8000`)
    })
} catch (error) {
    console.log(error)
}