import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {environment as env} from '../../environments/environment';
import {Access} from '../shared/Access.model';
import {SpotifyService} from '../spotify.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-callback',
  templateUrl: './callback.component.html',
  styleUrls: ['./callback.component.scss']
})
export class CallbackComponent implements OnInit{
  
  public msg_status: string = 'lendo os dados'

  constructor(private api: SpotifyService, private router: Router) { }

  ngOnInit() {
    this.api.lerOsParamentrosDaUrl(window.location.href)
    this.api.pegarInformacoesDoUsuario()
      .then(resp => {

        this.msg_status = 'carregando suas playlists'
        this.api.carregarPlaylists()
          .then(resp => {
            console.log(this.api.usuario)
            this.router.navigate(['/painel'])
          })
          .catch(m => this.msg_status = m);
      })
      .catch(m => this.msg_status = m);
  }


}
