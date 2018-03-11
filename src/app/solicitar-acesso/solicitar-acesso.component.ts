import { Component, OnInit } from '@angular/core';
import {SpotifyService} from '../core/services/spotify.service';
import {environment} from "../../environments/environment";
import {SessionService} from '../core/services/session.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-solicitar-acesso',
  templateUrl: './solicitar-acesso.component.html',
  styleUrls: ['./solicitar-acesso.component.scss']
})
export class SolicitarAcessoComponent implements OnInit {

  constructor(private spotifyService: SpotifyService,
              private session: SessionService,
              private router: Router){

    if (!environment.production)
      this.conectar()
  }

  conectar(): void {

    let valida = this.session.carregarSessaoAnterior()

    if (valida) {
      this.router.navigate(['/painel'])
    } else {
      this.spotifyService.solicitarAcesso();
    }

  }

  ngOnInit() {
  }

}
