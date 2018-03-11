
import {Injectable, OnDestroy} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {environment as env} from '../../../environments/environment';
import {Access} from '../../shared/Access.model';
import 'rxjs/operator/toPromise'
import {Usuario} from "../../shared/usuario.model";
import {Playlist} from "../../shared/playlist.model";
import {Musica} from "../../shared/musica.model";
import {SessionService} from './session.service';
/**
 * Classe que gerencia a comunicação do app com a API do spotify.
 *
 * */
@Injectable()
export class SpotifyService {


  private headers

  constructor( private connection: HttpClient,
               private router: Router,
               private session: SessionService ){

  }


  public solicitarAcesso() {
    let url: string = `${env.spotifyOAuthUrl}?client_id=${env.client_id}&redirect_uri=${env.redirect_uri}&scope=${env.scope}&response_type=token`
    window.location.href = encodeURI(url)
  }

  public pegarInformacoesDoUsuario(): Promise<Usuario> {


    return new Promise<Usuario>((resolve, reject) => {
      this.connection.get( `${env.spotify_api}/me`, this.session.getHeader())
        .toPromise()
        .then((resp: any) => {
          if (!!resp.error){
            console.log('spotify.service: ' + resp)
            reject('Erro, para continuar você precisa nos dar acesso as suas informações!')
          }
          this.session.setUsuario(new Usuario({
              display_name: resp.display_name,
              email: resp.email,
              id: resp.id,
              profile_image: resp.images[0] == undefined? undefined : resp.images[0].url
          }))
          resolve(this.session.getUsuario())
        })
    })
  }

  /**
   * Carrega a lista de playlists do usuario.
   *
   * Este metodo recebe como paramentro uma string.
   * Este paramentro não deve ser passado durante a invocação do mentodo, pois,
   * ele é usado internamente para carregar as demais paginas de playlists do usuario
   *
   * @param url Url? da prozima pagina de playlists do usuario.
   *
   * @return Pomise que busca e salva as playlists do usuario.
   * */
  public carregarPlaylists(url?: string): Promise<any>{

    //faz a soliciração para a primeira pagina de playlists caso uma url não tenha sido especificada
    let req_url = !!!url ? `${env.spotify_api}/me/playlists` : url

    return new Promise<any>((resolve, reject) => {
      this.connection.get(req_url, this.session.getHeader())
        .toPromise()
        .then((resp: any) => {

          // caso seja retornado um erro pela plataforma do spotify
          if (!!resp.error){
            console.log(['spotify.service: ',resp])
            reject('Erro ao ler as suas playlists')
          }

          // caso exista mais paginas de playlists
          if (resp.next != null){
            this.carregarPlaylists(resp.next).then((r: any) => {
              this.salvarPlayLists(r)
              resolve(resp)
            })
          } else {
            this.salvarPlayLists(resp)
            resolve(resp)
          }
        })
    })
  }

  /**
   * Carrega as musicas da playlist informado.
   *
   * Obs.: O paramentro <i>tracks_url</i>  não deve ser informado, pois ele é
   * de uso interno do serviço.
   * @param playlist da playlist que deseja carregar as musicas.
   * @param tracks_url (Opcional) url da pagina de musicas.
   * */
  public carregarMusicas(playlist: Playlist, tracks_url?: string): Promise<Playlist> {

    // filtra apenas os campos necessarios para o funcionamento da aplicação
    let fields = 'items(track(album.name,artists.name,name,id,preview_url)),next'

    return new Promise<Playlist>((resolve, reject) => {
      this.connection.get( `${playlist.tracks_url}?${fields}`, this.session.getHeader())
        .toPromise()
        .then((resp: any) => {

          // caso seja retornado um erro pela plataforma do spotify
          if (!!resp.error){
            console.log(['spotify.service: ', resp])
            reject('Erro ao ler as músicas')
          }

          // caso exista mais paginas de playlists
          if (resp.items.next != null){
            this.carregarMusicas(playlist, resp.items.next).then((r: any) => {
              this.salvarMusicas(r, playlist)
              resolve(resp)
            })
          } else {
            this.salvarMusicas(resp, playlist)
            resolve(playlist)
          }
        })
    })
  }

  private salvarPlayLists(data: any): void{
    data.items.forEach((item) => {
      if (item.collaborative || this.session.isUserPlaylist(item.owner.id)) {
        this.session.addPlaylist(new Playlist({
            name: item.name,
            id: item.id,
            image_url: item.images[2] == undefined ?  undefined : item.images[2].url,
            tracks_url: item.tracks.href,
            tracks_total: item.total
          })
        )
      }
    })
  }

  private salvarMusicas(resp: any, playlist: Playlist){
    let playlist_tracks = playlist.tracks
    resp.items.forEach((item) => {
      playlist_tracks.push(new Musica({
        album_name: item.track.album.name,
        artists_name: item.track.artists[0].name,
        id: item.track.id,
        name: item.track.name,
        preview_url: item.track.preview_url
      }))
    })
  }

}
