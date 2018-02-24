import {
  Component, ComponentFactory, ComponentFactoryResolver, ComponentRef, Injector, OnInit, ViewChild,
  ViewContainerRef
} from '@angular/core';
import {SpotifyService} from '../spotify.service';
import {usuario} from '../shared/usuario.mock';
import {access} from '../shared/access.mock';
import {PlaylistViewComponent} from "./playlist-view/playlist-view.component";
import {DragulaService} from "ng2-dragula";
import {MatSnackBar} from "@angular/material";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  @ViewChild('playlistsContainer', { read: ViewContainerRef }) containerPlaylist
  
  private playlistsAbertas: Map<string, ComponentRef<PlaylistViewComponent>> = new Map()
  
  
  constructor(
      public api: SpotifyService,
      private resolver: ComponentFactoryResolver,
      private dragulaService: DragulaService,
      private injector: Injector,
      public snackBar: MatSnackBar
  ) {
    
    
    // recebe as informações de cancelamento do evento e de arrastar
    dragulaService.cancel.subscribe(val => {
      
      if (val[0] == 'playlist-bag') {
  
        let id: string = val[1].id // pega o id da playlist do spotify definida como id do container html.
        if (this.playlistsAbertas.has(id)) {
          this.snackBar.open('Está playlist já está aberta!',null , {duration: 2000});
        } else {
          this.criarPlaylistView(val[1].id)
        }
      }
    })
  }
  
  /**
   * Cria uma nova view de playlist.
   * {@link https://netbasal.com/dynamically-creating-components-with-angular-a7346f4a982d}
   * */
  criarPlaylistView(playlistId){
    let factory: ComponentFactory<PlaylistViewComponent> = this.resolver.resolveComponentFactory(PlaylistViewComponent)
    let novaView = this.containerPlaylist.createComponent(factory)
    novaView.instance.carregarPlaylist(playlistId)
    
    novaView.instance.destruir.subscribe(data => {
      this.playlistsAbertas.get(data).destroy()
      this.playlistsAbertas.delete(data)
    })
    
    this.playlistsAbertas.set(playlistId, novaView)
    
  }
  
  ngOnInit() {
  }

}
