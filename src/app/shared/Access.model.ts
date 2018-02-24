
/**
 * Classe modelo para as credenciais de acesso da api do spotify
 * */
export class Access {
  public access_token: string
  public token_type: string
  public expires_in: string

  constructor(args) {
    return Object.assign(this, args)
  }
}
