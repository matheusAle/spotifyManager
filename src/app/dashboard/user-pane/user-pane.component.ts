import { Component, OnInit } from '@angular/core';
import {SpotifyService} from '../../spotify.service';
import {DragulaService} from "ng2-dragula";

@Component({
  selector: 'app-user-pane',
  templateUrl: './user-pane.component.html',
  styleUrls: ['./user-pane.component.scss']
})
export class UserPaneComponent implements OnInit {
  
  playlists: Array<any> = []
  
  
  
  constructor( public api: SpotifyService, private dragulaService: DragulaService ) {
    
    let p: Map<string, any> = api.usuario.playlists
    let int: IterableIterator<string> = p.keys()
    let key: IteratorResult<string>

    do {
      key = int.next()
      let get = p.get(key.value)
      if (get != undefined && get != null)
        this.playlists.push(get)
    } while (!key.done)
    
    
  }

  ngOnInit() {
  }

}
