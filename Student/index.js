// const firebaseConfig = {
//   apiKey: "AIzaSyAhzAmrI2-cAJ6BpdDAOZQrZrXipzQxAHQ",
//   authDomain: "studentteacher-943b5.firebaseapp.com",
//   databaseURL: "https://studentteacher-943b5-default-rtdb.firebaseio.com",
//   projectId: "studentteacher-943b5",
//   storageBucket: "studentteacher-943b5.appspot.com",
//   messagingSenderId: "628858466677",
//   appId: "1:628858466677:web:484906e49dedcea8db633c"
// };

// //   initialize firebase
// firebase.initializeApp(firebaseConfig);

// //   import {getDatabase, ref, child, onValue, get}
// //   from "https://www.gstatic.com/firebasejs/9.1.1/firebase-database.js";
// //   const Db = getDatabase();

// //   reference dont change
// var db = firebase.database().ref("st");

// document.getElementById('contactForm').addEventListener("submit",submitForm);

// function submitForm(e){
//   e.preventDefault();

//   var fname = getElementVal('firstName');
//   var lname = getElementVal('lastName');
//   var Class = getElementVal('initials');
//   var div = getElementVal('div');
//   var rollno = getElementVal('hs');
//   var classTeacher = getElementVal('ct');
//   var tname = getElementVal('tn');
//   var option = getElementVal('option');
//   var message = getElementVal('msg');
//   var dob = getElementVal('dob');
//   var day = getElementVal('day');

//   saveMessages(fname,lname,Class,div,rollno,classTeacher,tname,option,message,dob,day);

//   // enable alert
//   document.querySelector('.alert').style.display = "block";

//   // disable alert
//   setTimeout(() => {
//       document.querySelector('.alert').style.display = "none";
//   }, 3000);

//   // reset the form 
//   document.getElementById('contactForm').reset();
// }

// const saveMessages = (fname,lname,Class,div,rollno,classTeacher,tname,option,message,dob,day) => {
//   var newStudentDetail = db.push();

//   newStudentDetail.set({
//       fname: fname,
//       lname: lname,
//       Class: Class,
//       div: div,
//       rollno: rollno,
//       classTeacher: classTeacher,
//       tname: tname,
//       option: option,
//       message: message,
//       dob: dob,
//       day: day,
//   })
// }

// const getElementVal = (id) => {
//   return document.getElementById(id).value;
// }


var fname = ["Krishna", "Jayanand", "Devang", "Narendra", "Vivek", "Tejas", "Yash", "Meghraj"];
var lname = ["Hari", "Shah", "Mandade", "Kumar", "Nagar", "Shete", "Patil", "Salunke"];
var cls = [1,2,3,4,5,6,7,8];
var rno = [101,102,103,104,105,106,107,108];
var tname = ["A","B","C","D","E","F","G","H"];
var doubt = ["Studies", "Portion", "Syllabus", "Events", "Club", "Doubts", "Material", "Exams"];
var date = ["01/05/2023","02/05/2023","03/05/2023","04/05/2023","05/05/2023","06/05/2023","07/05/2023","08/05/2023"];

$(".submit").click(function(){
    let fn = $('.form-label')[0].value;
    let ln = $('.form-label')[1].value;
    let c  = $('.form-label')[2].value;
    let r = $('.form-label')[3].value;
    let teacher = $('.form-label')[4].value;
    let dbt = $('.form-label')[5].value;
    let dat = $('.form-label')[6].value;

    fname.push(fn);
    lname.push(ln);
    cls.push(c);
    rno.push(r);
    tname.push(teacher);
    doubt.push(dbt);
    date.push(dat);

});

// code for adding values in the cards
{
var i=0;
$(".card-title")[i].innerText = doubt[i];
  $(".card-subtitle")[i].innerText = tname[i];
  $(".c1")[0].innerText = fname[i];
  $(".c1")[1].innerText = lname[i];
  $(".c1")[2].innerText = cls[i];
  $(".c1")[3].innerText = rno[i];
  $(".c1")[4].innerText = date[i];

  i=1;
  $(".card-title")[i].innerText = doubt[i];
  $(".card-subtitle")[i].innerText = tname[i];
  $(".c2")[0].innerText = fname[i];
  $(".c2")[1].innerText = lname[i];
  $(".c2")[2].innerText = cls[i];
  $(".c2")[3].innerText = rno[i];
  $(".c2")[4].innerText = date[i];

  i=2;
  $(".card-title")[i].innerText = doubt[i];
  $(".card-subtitle")[i].innerText = tname[i];
  $(".c3")[0].innerText = fname[i];
  $(".c3")[1].innerText = lname[i];
  $(".c3")[2].innerText = cls[i];
  $(".c3")[3].innerText = rno[i];
  $(".c3")[4].innerText = date[i];

  i=3;
  $(".card-title")[i].innerText = doubt[i];
  $(".card-subtitle")[i].innerText = tname[i];
  $(".c4")[0].innerText = fname[i];
  $(".c4")[1].innerText = lname[i];
  $(".c4")[2].innerText = cls[i];
  $(".c4")[3].innerText = rno[i];
  $(".c4")[4].innerText = date[i];

  i=4;
  $(".card-title")[i].innerText = doubt[i];
  $(".card-subtitle")[i].innerText = tname[i];
  $(".c5")[0].innerText = fname[i];
  $(".c5")[1].innerText = lname[i];
  $(".c5")[2].innerText = cls[i];
  $(".c5")[3].innerText = rno[i];
  $(".c5")[4].innerText = date[i];

  i=5;
  $(".card-title")[i].innerText = doubt[i];
  $(".card-subtitle")[i].innerText = tname[i];
  $(".c6")[0].innerText = fname[i];
  $(".c6")[1].innerText = lname[i];
  $(".c6")[2].innerText = cls[i];
  $(".c6")[3].innerText = rno[i];
  $(".c6")[4].innerText = date[i];

  i=6;
  $(".card-title")[i].innerText = doubt[i];
  $(".card-subtitle")[i].innerText = tname[i];
  $(".c7")[0].innerText = fname[i];
  $(".c7")[1].innerText = lname[i];
  $(".c7")[2].innerText = cls[i];
  $(".c7")[3].innerText = rno[i];
  $(".c7")[4].innerText = date[i];

  i=7;
  $(".card-title")[i].innerText = doubt[i];
  $(".card-subtitle")[i].innerText = tname[i];
  $(".c8")[0].innerText = fname[i];
  $(".c8")[1].innerText = lname[i];
  $(".c8")[2].innerText = cls[i];
  $(".c8")[3].innerText = rno[i];
  $(".c8")[4].innerText = date[i];
}


// $(".approve")[0].click(function(){

// })

$("#btn").click(function(){
  location.replace("C:/Users/ADMIN/OneDrive/Desktop/Internship Assignments/Student-Teacher-Booking-System/student/index.html");
})

// redirecting to the appointments page and adding the card
$("#sbtn").click(function(){
  
  getValue();
})

// getting the details from the form 
function getValue(){
  fname.push($(".field")[0].value)
  lname.push($(".field")[1].value)
  cls.push($(".field")[2].value)
  rno.push($(".field")[3].value)
  tname.push($(".field")[4].value)
  doubt.push($(".field")[5].value)
  date.push($(".field")[6].value)
}
