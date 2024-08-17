import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const loginCheckGuard: CanActivateFn = (route, state) => {
  // router to navigate
  let router = inject(Router);


  const loggedCheck = localStorage.getItem('loggedUser');
  if(loggedCheck){
    router.navigateByUrl('/layout/add-navbar');
    return true;

  }
  else{
    router.navigateByUrl('login');
    return false;
  }
};
