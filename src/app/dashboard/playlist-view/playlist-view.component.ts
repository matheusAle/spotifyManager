import {Component, EventEmitter, Inject, OnInit, Output} from '@angular/core';
import {DragulaService} from "ng2-dragula";
import {SpotifyService} from "../../spotify.service";
import {Playlist} from "../../shared/playlist.model";

@Component({
  selector: 'app-playlist-view',
  templateUrl: './playlist-view.component.html',
  styleUrls: ['./playlist-view.component.scss']
})
export class PlaylistViewComponent implements OnInit {

  @Output() destruir: EventEmitter<string> = new EventEmitter<string>()
  public playlist: Playlist
  public load_status: string  = 'carregando playlist'
  
  
  constructor( private api: SpotifyService) {}
  
  public carregarPlaylist(id: string): void {
    this.api.carregarMusicas(this.api.getPlaylistById(id))
      .then(playlist => {
        this.playlist = playlist
      })
      .catch(err => {
        this.playlist = undefined
        this.load_status = err
      })
  }
  
  ngOnInit(){}

  close(event) {
    this.destruir.emit(this.playlist.id)
  }
}
