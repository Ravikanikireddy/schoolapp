import { CanActivateFn, Router } from '@angular/router';

export const authenticationGuard: CanActivateFn = (route, state) => {
  if(localStorage.getItem('token')){
  return true;
  }
  else{
    alert("You need to login to access this page!")
    var router = new Router;
     router.navigateByUrl("/login")
    return false;
  }
};
