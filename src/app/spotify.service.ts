
import {Injectable, OnDestroy} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {environment as env} from '../environments/environment';
import {Access} from './shared/Access.model';
import 'rxjs/operator/toPromise'
import {usuario} from "./shared/usuario.mock";
import {Usuario} from "./shared/usuario.model";
import {Playlist} from "./shared/playlist.model";
import {Musica} from "./shared/musica.model";
/**
 * Classe que gerencia a comunicação do app com a API do spotify.
 *
 * */
@Injectable()
export class SpotifyService {

  public access: Access = new Access(null)
  public usuario: Usuario

  constructor(
    private connection: HttpClient
  ){}

  
  public solicitarAcesso() {
    let url: string = `${env.spotifyAuthoUrl}?client_id=${env.client_id}&redirect_uri=${env.redirect_uri}&scope=${env.scope}&response_type=token`
    window.location.href = encodeURI(url)

  }

  public pegarInformacoesDoUsuario(): Promise<Usuario> {
    return new Promise<Usuario>((resolve, reject) => {
      this.connection.get(
        `${env.spotify_api}/me`,
        {headers: {'Authorization': `${this.access.token_type} ${this.access.access_token}`}}
      ).toPromise()
        .then((resp: any) => {
          if (!!resp.error){
            console.log('spotify.service: ' + resp)
            reject('Erro, para continuar você precisa nos dar acesso as suas informações!')
          }
          this.usuario = new Usuario({
              display_name: resp.display_name,
              email: resp.email,
              id: resp.id,
              profile_image: resp.images[0] == undefined ? undefined : resp.images[0].url
          })
          resolve(this.usuario)
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
    return new Promise<any>((resolve, reject) => {
      this.connection.get(
        !!!url? `${env.spotify_api}/me/playlists` : url,
        {headers: {'Authorization': `${this.access.token_type} ${this.access.access_token}`}}
      ).toPromise()
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
   * Mapeia as playlists do usuario de acordo com seus ids
   * @data resposta http da api do spotify.
   * */
  private salvarPlayLists(data: any): void{
    for (let item of data.items)
      this.usuario.playlists.set(item.id, new Playlist({
        name: item.name,
        id: item.id,
        canEdit: item.collaborative || item.owner.id == this.usuario.id,
        image_url: item.images[2] == undefined ? undefined : item.images[2].url,
        tracks_url: item.href
      }))
  }
  
  public carregarMusicas(tracks_url: string, playlistID: string): Promise<Musica> {
    return new Promise<Musica>((resolve, reject) => {
      this.connection.get(
        `${env.spotify_api}`,
        {headers: {'Authorization': `${this.access.token_type} ${this.access.access_token}`}}
      ).toPromise()
        .then((resp: any) => {
          
          // caso seja retornado um erro pela plataforma do spotify
          if (!!resp.error){
            console.log(['spotify.service: ',resp])
            reject('Erro ao ler as músicas')
          }
  
          // caso exista mais paginas de playlists
          if (resp.next != null){
            this.carregarMusicas(resp.next, playlistID).then((r: any) => {
              this.salvarMusicas(r, playlistID)
              resolve(resp)
            })
          } else {
            this.salvarMusicas(resp, playlistID)
            resolve(resp)
          }
          
        })
    })
  }


  /**
   * Lê os paramentros da url e os trasforma em um objeto do tipo Access.
   * */
  public lerOsParamentrosDaUrl(url: string){
    url = url.split('#')[1] // pega os parametros na url
    for (let param of url.split('&')) {
      let data = param.split('=')
      this.access[data[0]] = data[1]
    }
  }
  
  
  public getPlaylistById(id: string){
    return this.usuario.playlists.get(id)
  }
  
  private salvarMusicas(resp: any, playlistID){
    let playlist_tracks = this.getPlaylistById(playlistID).tracks
    for (let item of resp.items) {
      playlist_tracks.add(new Musica({
        album_name: item.track.album.name,
        artists_name: item.track.artists.name,
        id: item.track.name,
        name: item.track.name,
        preview_url: item.track.preview_url
      }))
    }
  }
}
