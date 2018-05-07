let $ =require('jquery')
let fs=require('fs')

let filename='contacts'
let i=0;

$("#log-to-file").on('click',()=>{
  let usrNameText=$('#usrName').val()
  let passwordText=$('#Password').val()

  let data=fs.readFileSync(filename,'utf-8').split('\n')

  data.forEach((contact,index)=>{
    let[name,email,usr,pass]=String(contact).split(',')

    let[property1,usrName]=String(usr).split(':')
    let[property2,password]=String(pass).split(':')

    if(usrNameText==usrName && passwordText==password){
      i=1;
    }

  })

  if(i==1){
    $('#message').text("Success")
    i=0;
  }
  else {
      $('#message').text("Error")
  }



})
