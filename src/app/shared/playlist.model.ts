import {Musica} from "./musica.model";

export class Playlist {
  id: string
  image_url: string
  name: string
  tracks_url: string
  tracks: Array<Musica> = new Array()
  tracks_total: string

  constructor(args) {
    return Object.assign(this, args)
  }
}
