export class Usuarios {
  constructor(

    public id: number,
    public nombres: string,
    public apellidos: string,
    public documentos: number,

    public rol: string,
    public correo: string,
    public image?: string,
    public contrasena?: string,



  ) {


  }


}