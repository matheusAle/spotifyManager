import {NgModule} from '@angular/core';
import {SpotifyService} from './spotify.service';
import {MusicaManager} from './musica-manager.service';
import {RouterGuard} from '../router/router-guard';
import {MusicaPreviewService} from './musica-preview.service';
import {SessionService} from './session.service';


@NgModule({
  providers: [
    RouterGuard,
    SpotifyService,
    MusicaManager,
    MusicaPreviewService,
    SessionService,
    AppServiceModule
  ]
})
export class AppServiceModule {

}
