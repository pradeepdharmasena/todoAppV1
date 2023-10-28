import { CanActivateFn } from '@angular/router';

export const signinGuard: CanActivateFn = (route, state) => {
  if(route.routeConfig?.path === '/home'){
    return false
  }
  return true;
};
