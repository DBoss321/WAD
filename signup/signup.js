window.fname = [],window.lname = [],window.phone = [],window.email = [],window.pswd = [];
window.data = 5;
$(".submit").click(function(){
    let fn = $('.textBox')[0].value;
    let ln = $('.textBox')[1].value;
    let p  = $('.textBox')[2].value;
    let e = $('.textBox')[3].value;
    let pw = $('.textBox')[4].value;

    fname.push(fn);
    lname.push(ln);
    phone.push(p);
    email.push(e);
    pswd.push(pw);

    var cont = false;
    var numberOfUsers = email.length;
    if(fname.length>=2){
        cont = true;
    }
    if(cont==true){
        for(var i=0;i<numberOfUsers;i++){
            if(email[i] == e){
                console.log("Entered");
                alert("This email id is already registered. Try to login");
                break;
            }
        }
        fname.pop();
        lname.pop();
        phone.pop();
        email.pop();
        pswd.pop();
        window.location.href = "login.html";
    }
    
})
  
// export{fname,lname,phone,email,pswd};