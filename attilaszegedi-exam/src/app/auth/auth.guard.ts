import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

import { LoginComponent} from './login/login.component';

export const authGuard: CanActivateFn = () => {
  const logincomponent = inject(LoginComponent);
  const router = inject(Router);
  return logincomponent.isLoggedIn ? true : router.navigate(['/login']);
};
