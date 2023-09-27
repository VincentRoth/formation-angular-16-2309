import { inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivateFn,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { CurrentUserService } from './current-user.service';
import { Right } from './right';

export const hasRightGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
): boolean | UrlTree => {
  const right: Right = (route.data as { right: Right }).right;
  const currentUserService = inject(CurrentUserService);
  const router = inject(Router);

  /*
  const hasRight = currentUserService.hasRight(right);
  if (hasRight) {
    return hasRight
  } else {
    return router.parseUrl('/');
  }
  */

  return currentUserService.hasRight(right) || router.parseUrl('/');
};
