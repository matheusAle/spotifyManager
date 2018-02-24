import { Component, OnInit } from '@angular/core';
import {SpotifyService} from '../spotify.service';
import {environment} from "../../environments/environment";

@Component({
  selector: 'app-solicitar-acesso',
  templateUrl: './solicitar-acesso.component.html',
  styleUrls: ['./solicitar-acesso.component.scss']
})
export class SolicitarAcessoComponent implements OnInit {



  constructor(private spotifyService: SpotifyService){
    if (!environment.production)
      this.conectar()
  }

  conectar(): void {
    this.spotifyService.solicitarAcesso();
  }

  ngOnInit() {
  }

}
