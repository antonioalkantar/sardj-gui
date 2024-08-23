import { CanActivateChildFn, CanActivateFn, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';

export const authGuard: CanActivateFn = (route, state) => {
  return checkAuth(state);
};

export const authChildGuard: CanActivateChildFn = (route, state) => {
  return checkAuth(state);
};

const checkAuth = (state: RouterStateSnapshot): Observable<boolean> => {
  // const store = inject(Store<AuthState>);
  // const router = inject(Router);
  // return store.select(selectIsUserAuthenticated).pipe(
  //   tap((isAuthenticated) => {
  //     if (!isAuthenticated) {
  //       router.navigate(['/public/login'], {
  //         queryParams: { returnUrl: state.url },
  //       });
  //     }
  //   }),
  //   map((isAuthenticated) => isAuthenticated),
  // );
  return of(true);
};
