import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {ROUTES} from './routes.routes';


@NgModule({
  imports: [
    RouterModule.forRoot(ROUTES)
  ]
})
export class AppRouterModule {
}
