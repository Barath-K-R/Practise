const http=require('node:http')

const sevrer=http.createServer((req,res)=>{
    console.log(req.url)
     if(req.url==="/")
     {
        res.writeHead(200,{"content-type":"text/plain"})
        res.end("home page")
     }
     else if(req.url==="/about"){
        res.writeHead(200,{"content-type":"text/plain"})
        res.end("about page")
     }
     else if(req.url==="/api"){
        res.writeHead(200,{"content-type":"text/plain"})
        res.end(JSON.stringify({
            fname:"Barath",
            lname:"Ravichandran"
        }))
     }
     else{
        res.writeHead(400)
        res.end('page not found')
     }
 })

 sevrer.listen(3000,()=>console.log("listening"))
     