
let FileInput =document.getElementById("file");
let FullName =document.getElementById("FullName");
let EmailAdress =document.getElementById("EmailAdress");
let GitUserName =document.getElementById("GitUserName");
let Submit_btn = document.getElementById("Submit_btn");

let FormContentContainer=document.getElementById('FormContentContainer'); 
let TicketContentContainer=document.getElementById('TicketContentContainer'); 

let file_error =document.getElementById('file_error');
let fullname_error =document.getElementById('fullname_error');
let email_error =document.getElementById('email_error');
let username_error =document.getElementById('username_error');



let name;
let email;
let username ;
let file;

let reader= new FileReader();

const maxsize=500*1024;

const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

FullName.addEventListener('focus', function() {
    FullName.style.backgroundColor='#01224dd5';
    FullName.style.color='white';
    FullName.placeholder=''   
});

FullName.addEventListener('blur', function() {
    FullName.style.backgroundColor='#01224dd5';
    FullName.style.color='white';
    FullName.placeholder='Fullname'   
});



EmailAdress.addEventListener('focus', function() {
    EmailAdress.style.backgroundColor='#01224dd5';
    EmailAdress.style.color='white';
    EmailAdress.placeholder=''
});

EmailAdress.addEventListener('blur', function() {
    EmailAdress.style.backgroundColor='#01224dd5';
    EmailAdress.style.color='white';
    EmailAdress.placeholder='example@gmail.com'
});



GitUserName.addEventListener('focus', function() {
    GitUserName.style.backgroundColor='#01224dd5';
    GitUserName.style.color='white';
    GitUserName.placeholder='';
});

GitUserName.addEventListener('blur', function() {
    GitUserName.style.backgroundColor='#01224dd5';
    GitUserName.style.color='white';
    GitUserName.placeholder='@yourusername';
});

// form code starts from here

Submit_btn.addEventListener('click',function(e){

    e.preventDefault();

     name = FullName.value;
    email = EmailAdress.value;
   username = GitUserName.value;




//    file validation starts here

   file=FileInput.files[0];
   const allowedextension= ['image/png', 'image/jpg'];

   if(!file){
    username_error.innerText=''
    file_error.innerText='please upload a file!'
    return;
   }
   if(!allowedextension.includes(file.type.toLowerCase())){
     username_error.innerText=''
       file_error.innerText='invalid file type please upload png or jpg image!'
    return;
   }
  else if(file.size>maxsize){
    alert('File size exceeds the 500kb limits.!')
    file_error.innerText='File size exceeds the 500kb limits.!'
    return;
   }

   // fullname starts here
else if(name.trim()===''){
     file_error.innerText=''
    fullname_error.innerText='Fullname is required!'
      
}
//    email validation inputs starts here


else if(email.trim()===''){
fullname_error.innerText=''
email_error.innerText='email is required!'
return;
}
else if(!emailPattern.test(email)){
    alert('email is invalid!')
    email_error.innerText='email is invalid!'
    return;
}

// username validtion starts here
else if(username.trim()===''){
email_error.innerText=''
username_error.innerText='@username is required!'
return;
}else{
    FullName.value = '';
EmailAdress.value = '';
GitUserName.value = '';
FileInput.value = '';
file_error.innerText = '';
fullname_error.innerText = '';
email_error.innerText = '';
username_error.innerText = '';

    alert('every field is successed');
    reader.readAsDataURL(file) 
    reader.onload=function(e){
    profileImg.src=e.target.result;
  }

HeaderName.innerText=name;
ProfileName.innerText=name;
sentEmailText.innerText=email;
ProfileUsername.innerText=username;
cardDate.innerText=ForamtData();
ticketCode.innerText='#'+GeneratedTicketCode();

// FormContentContainer.classList.add('Inactive');
// FormContentContainer.classList.remove('active');

// TicketContentContainer.classList.add('active');
// TicketContentContainer.classList.remove('Inactive');

FormContentContainer.style.display='none';
TicketContentContainer.style.display='block';
TicketContentContainer.style.opacity='1';

}

})


// Form validation ends here


let HeaderName=document.getElementById('HeaderName');
let sentEmailText=document.getElementById('sentEmailText');
let cardDate=document.getElementById('cardDate');
let ProfileUsername=document.getElementById('ProfileUsername');
let profileImg=document.getElementById('profileImg');
let ProfileName=document.getElementById('ProfileName');
let ticketCode=document.getElementById('ticketCode');






// all functions atarts here

function ForamtData(){
let currentData=new Date();
let mothSNames=["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
let month=mothSNames[currentData.getMonth()]
let day=currentData.getDay();
let year=currentData.getFullYear();

let formattdDate= `${month}  ${day}, ${year} / Austin,   Tx`

return formattdDate;
}


function GeneratedTicketCode(length=10){
let characters='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstwxyz0123456789';
let generatedcode=''
for (let index = 0; index < length; index++) {
 
 code = Math.floor(Math.random() * characters.length)
generatedcode += characters[code]   
}
return generatedcode;
}
