import {Musica} from "./musica.model";

export class Playlist {
  id: string
  image_url: string
  name: string
  canEdit: boolean
  tracks_url: string
  tracks: Array<Musica> = new Array()
  tracks_total: Number
  
  constructor(args){
    return Object.assign(this, args)
  }
}
