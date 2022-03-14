const fs = require('fs')
const http = require('http')

function createFun(){
    let objeto = {
        id: Math.floor(Math.random()*10+1),
        title: "Producto " + Math.floor(Math.random()*10+1),
        price: Math.floor(Math.random()*(10**6))/100,
        thumbail: "Foto " + Math.floor(Math.random()*10+1),
    }
    return objeto
}

let x = createFun()
console.log(x.title)



const server = http.createServer((pet,resp)=>{
    let x = createFun()
    resp.end(JSON.stringify(x,null,'\t'))
})


server.listen(8080,()=>{
    console.log("Listener PORT:8080")
})



//{
//    id: numero aleatorio 1-10,
//    title: Producto 1-10
//    price: 0-9999.99
//    thumbnail:  Foto 1-10
//}