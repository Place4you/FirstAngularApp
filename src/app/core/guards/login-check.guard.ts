import { CanActivateFn } from '@angular/router';

export const loginCheckGuard: CanActivateFn = (route, state) => {
  debugger;
  

  const loggedCheck = localStorage.getItem('loggedUser');
  if(loggedCheck! == null){
    return true;

  }
  else{

    return false;
  }
};
