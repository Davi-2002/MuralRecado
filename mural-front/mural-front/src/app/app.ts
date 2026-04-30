import { Component, signal } from '@angular/core';
import { Recado } from './recado';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('mural-front');
  constructor(private recadoService: Recado){}

  listaRecados = signal<any[]>([]);

  ngOnInit() {
    this.recadoService.listarRecados().subscribe(resposta => this.listaRecados.set(resposta as any[]));
  }

  salvarRecado(){
    this.recadoService.adicionarRecado({ titulo: "Novo post", conteudo: "Testando o Angular" }).subscribe(resposta => {
      this.listaRecados.update(lista => [...lista, resposta]);
    });
  }
}