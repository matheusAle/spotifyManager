import {Component, EventEmitter, Inject, OnInit, Output} from '@angular/core';
import {DragulaService} from "ng2-dragula";
import {SpotifyService} from "../../spotify.service";

@Component({
  selector: 'app-playlist-view',
  templateUrl: './playlist-view.component.html',
  styleUrls: ['./playlist-view.component.scss']
})
export class PlaylistViewComponent implements OnInit {

  @Output() destruir: EventEmitter<string> = new EventEmitter<string>()
  public playlistID: string
  public playlistData: any = {name: 'playlist', tracks: {total: 23}}
  public load_status: string  = 'carregando playlist'
  
  
  constructor( private api: SpotifyService) {
  }
  
  public carregarPlaylist(id: string): void {
    this.playlistID = id
  }
  
  ngOnInit(){}

  close(event) {
    this.destruir.emit(this.playlistID)
  }
}
