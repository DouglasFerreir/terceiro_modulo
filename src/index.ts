export class transaction {
private _idRemetente: string
private _IdDestinatario:string
private _Valor: number
private _dataDeCriacao: new Date()

constructor(
    idRemetente:string,
    IdDestinatario:string,
    Valor:number,

) {
this._idRemetente = idRemetente
this._IdDestinatario = IdDestinatario
this._Valor = 0
}
}