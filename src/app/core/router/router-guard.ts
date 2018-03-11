import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs/Observable";
import {SpotifyService} from "../services/spotify.service";
import {SessionService} from '../services/session.service';

@Injectable()
export class RouterGuard implements CanActivate {

  constructor(private session: SessionService, private router: Router){}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    let ret = this.session.usuarioValido()
    if (ret) {
      this.router.navigate(['/'])
    }
    return !ret
  }

}
