
export class Musica {
  album_name: string
  artists_name: string
  id: string
  name: string
  preview_url: string
  
  constructor(args) {
    return Object.assign(this, args)
  }
  
  
}
