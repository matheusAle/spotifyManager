import { Component, OnInit } from '@angular/core';
import {SpotifyService} from '../../core/services/spotify.service';
import {MusicaPreviewService} from "../../core/services/musica-preview.service";
import {SessionService} from '../../core/services/session.service';
import {promise} from 'selenium-webdriver';
import {Playlist} from '../../shared/playlist.model';
import {Usuario} from '../../shared/usuario.model';

@Component({
  selector: 'app-user-pane',
  templateUrl: './user-pane.component.html',
  styleUrls: ['./user-pane.component.scss']
})
export class UserPaneComponent implements OnInit {

  public playlists: Array<any> = []
  public usuario: Usuario


  constructor( public session: SessionService, public previewService: MusicaPreviewService) {
    this.usuario = session.getUsuario()

    new Promise<Playlist[]>((resolve, reject) => {
      let playlists = new Array<Playlist>()
      session.getUsuario().playlists.forEach((value) => {
        playlists.push(value)
      })
      resolve(playlists)
    }).then(resposta => this.playlists = resposta)

  }

  ngOnInit() {
  }

}
