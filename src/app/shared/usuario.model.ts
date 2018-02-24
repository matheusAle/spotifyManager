import {Playlist} from "./playlist.model";

export class Usuario {
  
  display_name: string
  email: string
  prifile_image: string
  id: string
  playlists: Map<string, Playlist> = new Map()
  
  constructor(arg) {
    return Object.assign(this, arg);
  }
}
