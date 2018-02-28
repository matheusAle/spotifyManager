import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs/Observable";
import {SpotifyService} from "./spotify.service";

@Injectable()
export class RouterGuard implements CanActivate {
  
  constructor(private api: SpotifyService){}
  
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return !this.api.usuarioValido()
  }
  
}
