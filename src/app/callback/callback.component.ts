import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {environment as env} from '../../environments/environment';
import {Access} from '../shared/Access.model';
import {SpotifyService} from '../core/services/spotify.service';
import {Router} from '@angular/router';
import {SessionService} from '../core/services/session.service';
@Component({
  selector: 'app-callback',
  templateUrl: './callback.component.html',
  styleUrls: ['./callback.component.scss']
})
export class CallbackComponent implements OnInit{

  public msg_status: string = 'lendo os dados'

  constructor(private api: SpotifyService,
              private router: Router,
              private session: SessionService ) { }

  ngOnInit() {
    let access = this.lerOsParamentrosDaUrl(window.location.href)
    access.expires_in = new Date().getMilliseconds() + access.expires_in

    this.session.setAccessToken(access)

    this.api.pegarInformacoesDoUsuario()
      .then(resp => {
        this.msg_status = 'carregando suas playlists'
        this.api.carregarPlaylists()
          .then(resp => {
            this.router.navigate(['/painel'])
          })
          .catch(m => this.msg_status = m);
      })
      .catch(m => this.msg_status = m);
  }

  /**
   * Lê os paramentros da url e os trasforma em um objeto do tipo Access.
   * */
  public lerOsParamentrosDaUrl(url: string): Access {
    let access = new Access(null)
    url = url.split('#')[1] // pega os parametros na url
    for (let param of url.split('&')) {
      let data = param.split('=')
      access[data[0]] = data[1]
    }
    return access
  }
}
