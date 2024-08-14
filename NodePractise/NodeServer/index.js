 const http=require("node:http")
const fs=require("node:fs")
 const server=http.createServer((req,res)=>{
      const superhero={
        fname:"bruce",
        lname:"wayne"
      }
      const name="Barath"
      // FOR JSON RESPONSE
      // res.writeHead(200,{"content-type":"application/json"});
      // res.end(JSON.stringify(superhero));

    //FOR HTML RESPONSE
    let html=fs.readFileSync("./index.html","utf-8")
    res.end(html)

    fs.createReadStream("./index.html").pipe(res)
    
    //MANIPULATING HTML
    // html=html.replace("{{name}}",name)
    // res.end(html)

 })

 server.listen(3000,()=>{
    console.log("server listening on port 3000")
 })