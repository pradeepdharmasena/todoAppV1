import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';



export const HomeGuard: CanActivateFn = (route, state) => {
  const token = localStorage.getItem("token");
  if(token == "" ||token == undefined){
    const router: Router = inject(Router);
    router.navigate(['']);
    return false;

  }
  else if(state.url.toString() === '/signin'){
    return false
  }
  //history.replaceState(null, '', null);
  history.pushState(null, '/about')
  return true;
};
