import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Recado {
  private apiUrl = 'https://localhost:7295/api/recados';
  constructor(private http: HttpClient){}

  public listarRecados()
  {
    return this.http.get(this.apiUrl);
  }

  public adicionarRecado(novoRecado: any)
  {  
    return this.http.post(this.apiUrl, novoRecado);
  }
}
