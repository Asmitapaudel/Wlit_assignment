const http=require("http")

const server=http.createServer((req,res)=>{
    const url =req.url
    const method =req.method
    console.log(url)
    // res.end("Hello form my server")

    if(url=="/about" && method=="GET"){
         res.end("Hello form about")
    }
    if(url=="/contact" && method=="GET"){
        //   res.writeHead(200, { "Content-Type": "text/html" });
        res.end(`
  <h1>Contact Page</h1>
  <p>9846623778</p>
`);
    }
    
})

server.listen(3009
    ,()=>{
    console.log("server running at 3009")
})

