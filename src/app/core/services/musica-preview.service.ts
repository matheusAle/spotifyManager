import {Injectable} from "@angular/core";

@Injectable()
export class MusicaPreviewService {
  
  public url: string = ''
  
  public preview(url) {
    console.log(url)
    this.url = url
  }
}
