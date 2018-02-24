import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { SolicitarAcessoComponent } from './solicitar-acesso/solicitar-acesso.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ToolbarComponent } from './dashboard/toolbar/toolbar.component';
import { UserPaneComponent } from './dashboard/user-pane/user-pane.component';
import { PlaylistViewComponent } from './dashboard/playlist-view/playlist-view.component';
import {MaterialModule} from './material.module';
import {CallbackComponent} from './callback/callback.component';
import { SpotifyService } from './spotify.service';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {ROUTES} from './routes.routes';
import {DragulaModule} from "ng2-dragula";
import {AppDragulaComponent} from "./dashboard/app-dragula/app-dragula.component";

@NgModule({
  declarations: [
    AppComponent,
    SolicitarAcessoComponent,
    DashboardComponent,
    ToolbarComponent,
    UserPaneComponent,
    PlaylistViewComponent,
    CallbackComponent,
    AppDragulaComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES),
    DragulaModule
  ],
  providers: [SpotifyService],
  bootstrap: [AppComponent],
  entryComponents: [ PlaylistViewComponent ],
})
export class AppModule { }
