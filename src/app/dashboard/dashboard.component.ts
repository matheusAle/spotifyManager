import {
  Component, ComponentFactory, ComponentFactoryResolver, ComponentRef, HostListener, Injector, OnDestroy, OnInit, ViewChild,
  ViewContainerRef
} from '@angular/core';
import {SpotifyService} from '../core/services/spotify.service';
import {PlaylistViewComponent} from "./playlist-view/playlist-view.component";
import {MatSnackBar} from "@angular/material";
import {SessionService} from '../core/services/session.service';
import {Router} from '@angular/router';

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
      private session: SessionService,
      private router: Router
  ) {

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
    this.session.getPlaylistsAbertas()
      .forEach((value) => this.criarPlaylistView(value))
  }

  public dropEvent(event) {
    if (this.playlistsAbertas.has(event.dragData)) {
      this.snackBar.open('Está playlist já está aberta!',null , {duration: 1500});
    } else {
      this.criarPlaylistView(event.dragData)
    }
  }

  @HostListener('window:beforeunload')
  public salvarSessao() {
    // salva os ids das playlists abertas
    let keys = []
    this.playlistsAbertas.forEach((value, key) => {
      keys.push(key)
    })
    this.session.setPlaylistsAbertas(keys)

    this.session.salvarSessao()
    alert('destroy')
  }

  sair() {
    this.session.clear()
    localStorage.clear()
    this.router.navigate(['/'])
  }
}
