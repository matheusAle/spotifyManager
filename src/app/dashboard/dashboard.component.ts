import {
  Component, ComponentFactory, ComponentFactoryResolver, ComponentRef, Injector, OnInit, ViewChild,
  ViewContainerRef
} from '@angular/core';
import {SpotifyService} from '../spotify.service';
import {PlaylistViewComponent} from "./playlist-view/playlist-view.component";
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
      private injector: Injector,
      public snackBar: MatSnackBar,
  ) {
  
  
    // let id: string = val[1].id // pega o id da playlist do spotify definida como id do container html.
    // if (this.playlistsAbertas.has(id)) {
    //   this.snackBar.open('Está playlist já está aberta!',null , {duration: 2000});
    // } else {
    //   this.criarPlaylistView(val[1].id)
    // }
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
  
  public dropEvent(event) {
    if (this.playlistsAbertas.has(event.dragData)) {
      this.snackBar.open('Está playlist já está aberta!',null , {duration: 1500});
    } else {
      this.criarPlaylistView(event.dragData)
    }
  }

}
