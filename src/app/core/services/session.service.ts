import {Usuario} from '../../shared/usuario.model';
import {Access} from '../../shared/Access.model';
import {Playlist} from '../../shared/playlist.model';
import {PlaylistViewComponent} from '../../dashboard/playlist-view/playlist-view.component';
import {ComponentRef} from '@angular/core';


export class SessionService {

  private access: Access = new Access(null)
  private usuario: Usuario
  private playlistsAbertas = new Array<string>()

  public getHeader(): any{
    return {
      headers: {
        'Authorization': `${this.access.token_type} ${this.access.access_token}`
      }
    }
  }

  public setUsuario(u: Usuario) {
    this.usuario = u;
  }

  public getUsuario(): Usuario {
    return this.usuario
  }

  public getPlaylistById(id: string){
    return this.usuario.playlists.get(id)
  }

  public isUserPlaylist(playlistOwnerId: string): boolean{
    return playlistOwnerId == this.usuario.id
  }

  public usuarioValido(): boolean {
    return this.access.access_token == undefined
  }

  public addPlaylist(p: Playlist){
    this.usuario.playlists.set(p.id, p)
  }

  public setAccessToken(access: Access) {
    this.access = access
  }


  public fecharPlaylist(key){

  }

  public setPlaylistsAbertas(ids: Array<string>) {
    this.playlistsAbertas = ids;
  }

  public salvarSessao(){

    // transforma o mapa de playlists em um vetor
    // remove a musicas salvas das playlists
    let playlists = []
    this.usuario.playlists.forEach(value => {
      value.tracks = []
      playlists.push(value)
    })

    let data = {
      access: this.access,
      usuario: this.usuario,
      usuario_playlists: playlists,
      playlistsAbertas: this.playlistsAbertas
    }

    localStorage.setItem('sessao', JSON.stringify(data));
  }


  /**
   * Carrrega os valores da chave sessão no localStorage
   *
   * @return {boolean}
   */
  public carregarSessaoAnterior(): boolean{
    // recupera os dados sa sessão anterior.
    let dados = JSON.parse(localStorage.getItem('sessao'))

    if (dados != null) {

      // recupera os valores apenas se o token nção tiver expirado
      if (new Date().getTime() < dados.access.expires_in) {
        this.access = dados.access
        this.playlistsAbertas = dados.playlistsAbertas
        this.usuario = new Usuario(dados.usuario)


        // recria o mapa de playlists do objeto usuario

        this.usuario.playlists = new Map<string, Playlist>()
        dados.usuario_playlists.forEach((value: Playlist) => {
          this.usuario.playlists.set(value.id, value)
        })

        return true
      }
    }

    return false
  }

  public getPlaylistsAbertas(): Array<string>{
    return this.playlistsAbertas
  }


  /**
   * Limpa todos os dados da sessão e o valor da key 'sessao' no localStorage
   *
   */
  clear() {
    localStorage.removeItem('sessao')
    this.access = undefined
    this.usuario = undefined
    this.playlistsAbertas = undefined
  }
}
