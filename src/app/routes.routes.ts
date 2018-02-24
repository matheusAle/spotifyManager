import {Router, Routes} from '@angular/router';
import {AppComponent} from './app.component';
import {CallbackComponent} from './callback/callback.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {SolicitarAcessoComponent} from './solicitar-acesso/solicitar-acesso.component';
import {PlaylistViewComponent} from "./dashboard/playlist-view/playlist-view.component";

export const ROUTES: Routes = [
  {path: '', component: SolicitarAcessoComponent},
  {path: 'callback', component: CallbackComponent},
  {path: 'painel', component: DashboardComponent},
  {path: 'painel/:id', component: DashboardComponent},
]
