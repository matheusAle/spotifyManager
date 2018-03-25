import {SpotifyService} from "./spotify.service";
import {Injectable} from "@angular/core";
import {Musica} from "../../shared/musica.model";


/**
 * Serviço responsavel por manipular as respostas aos eventos
 * de drag and drop de musicas em playlist
 * */
@Injectable()
export class MusicaManager {

  private musicaSendoCarregada:  any = {}

  constructor(private spotifyService: SpotifyService) {}


  /**
   * Metodo chamado quando o usuario começar a arastar um musica.
   * Esse metodo controi o objeto para o atributo dndMusica
   * */
  public dropInitEvent(musica: Musica, playlist: string, index: number){
    this.musicaSendoCarregada = musica
    this.musicaSendoCarregada.playlist_drag = playlist
    this.musicaSendoCarregada.start_index = index
  }


  /**
   * Metodo chamado quado o usuario soltar uma musica na playlist
   * */
  public dropEndEvent(musica: Musica, playlist: string,  index: number){
    this.musicaSendoCarregada.playlist_drop = playlist
    this.musicaSendoCarregada.new_index = index

    /*console.log({
      playlist_atual: this.musicaSendoCarregada.name,
      musica_carregada: this.musicaSendoCarregada
    })*/

    this.determinarAcao(this.musicaSendoCarregada)

    this.musicaSendoCarregada = {}
  }


  /**
   * <p>Determina que ações deve ser tomada após o evento de drop de uma musica.</p>
   * <p>Se os atributo playlist_drag e playlist_drop forem iguais,
   * então a musica será reordenada dentro da playlist_drag.</p>
   * <p>Se estes atributos forem diferentes, subentende-se que a musica foi arastada da
   * playlist_drag para a playlist_drop. A aplicação removerá a musica da playlist_drag
   * e adicionará à musica na playlist_drop.</p>
   * */
  private determinarAcao(musica){
    // se a musica for largada na mesma playlist que começou a ser arrastada
    if (musica.playlist_drag == musica.playlist_drop) {
      this.reordenarMusica(musica.playlist_drag, musica.start_index, musica.new_index, musica.id)
    } else {
      this.removerMusicaDaPlaylist(musica.playlist_drag, musica.id)
      this.adicionarMusicaNaPlaylist(musica.playlist_drop, musica.id, musica.new_index)
    }
  }


  private reordenarMusica(playlist: string, oldIndex: number, newindex: number, musicaID: string) {
    console.log(['reordenar', arguments]);
    this.spotifyService.reordenarPlaylist(playlist, oldIndex, newindex)
      .then((resposta) => console.log(resposta));
  }

  private removerMusicaDaPlaylist(playlist_drag: any, id: string) {
    console.log(['remover', arguments]);

  }

  private adicionarMusicaNaPlaylist(playlist_drag: string, id: string, new_index: number) {
    console.log(['adicionar', arguments]);

  }
}
