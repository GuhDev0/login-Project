import  express  from "express";
import router from "./router/use.router";
const app = express();
const PORT = 3001   
app.use(express.json())

app.use('/user', router)


app.listen(PORT,()=>{
    console.log(`Servidor aberto na  porta  ${PORT}`)
})

