let input1=document.getElementById("inp");

let numbers="0123456789"
let uppercase="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowercase="abcdefghijklmnopqrstuvwxyz";
let specialchar="!\"#$%&'()*+,-./";
let characters=numbers+lowercase+uppercase+specialchar;
let but=document.getElementById("but");
let password=""
let lcount=0
let ucount=0
let ncount=0
let scount=0

function reset(){
    password=""
    ncount=0
    lcount=0
    ucount=0
    scount=0
}
function passwordgenerator(){
    
    
    console.log("entering"+password)
    while(password.length<9)
    {
        
        let randnum=Math.floor(Math.random()*characters.length)
        let char=characters.substring(randnum,randnum+1)
        if(password.length<4)
        {
            
            console.log(char+" "+char.charCodeAt(0))
            if(char.charCodeAt(0)>=48 && char.charCodeAt(0)<=57 && ncount===0)
            {
                password=password+char
                ncount=ncount+1
            }
            else if(char.charCodeAt(0)>=65 && char.charCodeAt(0)<=90 && ucount===0)
            {
                password=password+char
                ucount=ucount+1
            }
            else if(char.charCodeAt(0)>=97 && char.charCodeAt(0)<=122 && lcount===0)
            {
                password=password+char
                lcount=lcount+1
            }
            else if(char.charCodeAt(0)>=33 && char.charCodeAt(0)<=47 && scount===0)
            {
                password=password+char
                scount=scount+1
            }
            console.log(password)
            console.log("ncount="+ncount+" lcount="+lcount+" ucount="+ucount+" scount="+scount)
        }
        else
        password=password+char

       
    }
    input1.value=password;
   reset()
 
}