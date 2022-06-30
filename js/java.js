

let flag =1;
let cnt = Number( prompt("enter number" , "enter number"));

 for (let i = 1; i <= cnt; i++) {
  
   if(i % 7 === 0 || i / 10 === 7 || i % 10 === 7)
  {
    document.write(i + "BOOM"+ "<br>");
    flag++;
    if(flag===2)
    {
        document.write(i + "duble boom" + "<br>");
    }
  }
  else {document.write(i + "not BOOM" + "<br>")
  flag = 0;}

  }