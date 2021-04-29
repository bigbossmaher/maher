function askPassword(ok , fail){
  let password = prompt("password?" , '' );
  if(password == "rockstar" ) ok();
  else fail();
}

let user = {
  name : 'John',
  loginOk(){
    alert( this.name logged in ) ;
  },
    loginFail(){
    alert( this.name faild to log in ) ;
  }
  
  
};

askpassword(user.loginOk , user.loginFail);
  
