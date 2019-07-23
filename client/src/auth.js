class Auth {
  constructor(){
    this.isAuthenticated = false;
  }
  login(cb){
    const merchantId = localStorage.getItem('merchant_id') ;
    console.log('string login', merchantId)
    if(merchantId){
      this.isAuthenticated = true;
    }else{
      this.isAuthenticated = false;
    }
    cb()
 
  }

  logout(cb){
    this.isAuthenticated = false;
    cb()
  }

  isAuthenticated(){
    console.log('Authenticated -> ',this.isAuthenticated)
    return this.isAuthenticated;
  }

}

export default new Auth();
