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
    localStorage.clear()
    cb()
  }

  getAuthenticated(){
    const merchantId = localStorage.getItem('merchant_id');
    console.log('id ->> ',merchantId)
    return merchantId ? true : false
  }

}

export default new Auth();
