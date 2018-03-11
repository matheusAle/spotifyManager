import { Routes} from '@angular/router';
import {CallbackComponent} from '../../callback/callback.component';
import {DashboardComponent} from '../../dashboard/dashboard.component';
import {SolicitarAcessoComponent} from '../../solicitar-acesso/solicitar-acesso.component';
import {RouterGuard} from './router-guard';

export const ROUTES: Routes = [
  {path: '', component: SolicitarAcessoComponent },
  {path: 'callback', component: CallbackComponent},
  {path: 'painel', component: DashboardComponent, canActivate: [ RouterGuard ]}
]
