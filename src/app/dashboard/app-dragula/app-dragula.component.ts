import { Component, OnInit } from '@angular/core';
import {DragulaService} from "ng2-dragula";

@Component({
  selector: 'app-app-dragula',
  template: '<span></span>'
})
export class AppDragulaComponent{

  constructor(private dgService: DragulaService) {
    this.dgService.drop.subscribe(val => console.log(val))
  
    // faz com que os item da sacola de playlists não sejam soltos no painel de edição de playlists
    // faz com que os items da sacola de edição não sejam movidos
    dgService.setOptions('playlist-bag',{
      accepts: () => { return false },
      moves: (el, source, handle, sibling) => { return !this.isPlaylistView(source) }
    })
  }
  
  /**
   * Verifica se o elemento informado é o painel de edição de playlist com base no nome da tag html.
   * @return boolean
   * @param arg Elemento html
   * */
  public isPlaylistView(arg): boolean{
    return arg.nodeName == 'MAT-SIDENAV-CONTENT'
  }
}
