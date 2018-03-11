import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { SolicitarAcessoComponent } from './solicitar-acesso/solicitar-acesso.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserPaneComponent } from './dashboard/user-pane/user-pane.component';
import { PlaylistViewComponent } from './dashboard/playlist-view/playlist-view.component';
import {MaterialModule} from './core/material.module';
import {CallbackComponent} from './callback/callback.component';
import {RouterModule} from '@angular/router';
import {ROUTES} from './core/router/routes.routes';
import {HttpClientModule} from '@angular/common/http';
import {DndModule} from 'ng2-dnd';
import {AppServiceModule} from './core/services/appService.module';
import {environment as env} from '../environments/environment';
import {AppRouterModule} from './core/router/appRouter.module';

@NgModule({
  declarations: [
    AppComponent,
    SolicitarAcessoComponent,
    DashboardComponent,
    UserPaneComponent,
    PlaylistViewComponent,
    CallbackComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppServiceModule,
    MaterialModule,
    HttpClientModule,
    RouterModule,
    AppRouterModule,
    DndModule.forRoot()
  ],
  providers: [
  ],
  bootstrap: [AppComponent],
  entryComponents: [ PlaylistViewComponent ],
})
export class AppModule {

  constructor () {
    let host = window.location.protocol + '//' + window.location.host;

    // se o app estiver rodando no github pages
    if (host.indexOf('github') != -1 ) {
      host = host.concat('/spotifyManager')
    }
    env.redirect_uri = host.concat('/callback')
  }

}
