import "dotenv/config"
import app from "./src/app.js"


const PORTA = 3000


app.listen(PORTA, () => {
    console.log("servidor escutando")
})


// string de conexão