import { Component } from '@angular/core';
import { PessoaService } from '../services/pessoa.service';
import { Pessoa } from 'src/app/shared/models/pessoa.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-listar-pessoa',
  templateUrl: './listar-pessoa.component.html',
  styleUrls: ['./listar-pessoa.component.css']
})
export class ListarPessoaComponent {

  pessoas: Pessoa[] = [];

  constructor(private pessoaService: PessoaService) {}

  ngOnInit(): void {
    this.listarTodos().subscribe(
      pessoas => {
        this.pessoas = pessoas;
      }
    );
  }

  listarTodos(): Observable<Pessoa[]> {
    return this.pessoaService.listarTodos();
  }

  remover(event: any, pessoa: Pessoa): void {
    event.preventDefault();
    if(window.confirm(`Remover a pessoa ${pessoa.nome}?`)){
      this.pessoaService.remover(pessoa).subscribe(() => {
        this.listarTodos().subscribe(
          pessoas => { this.pessoas = pessoas }
        )
      })
    }
  }

}
