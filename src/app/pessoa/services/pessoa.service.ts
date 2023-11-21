import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Pessoa } from '../../shared/models/pessoa.model'
import { Observable } from 'rxjs';

const LS_CHAVE: string = "pessoas";

@Injectable({
  providedIn: 'root'
})

export class PessoaService {

  private backendURL = "http://localhost:8081";

  constructor(
    private http: HttpClient
  ) { }

  listarTodos(): Observable<Pessoa []> {
    return this.http.get<Pessoa []>(`${this.backendURL}/clientes`);
  }

  inserir(pessoa: Pessoa): Observable<any>  {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(`${this.backendURL}/clientes`, JSON.stringify(pessoa), { headers });
  }

  buscarPorId(id: number): Observable<Pessoa> {
    return this.http.get<Pessoa>(`${this.backendURL}/clientes/${id}`);
  }

  atualizar(pessoa: Pessoa): Observable<any> {
    return this.http.put(`${this.backendURL}/clientes/${pessoa.id}`, pessoa);
  }

  remover(pessoa: Pessoa): Observable<any> {
    return this.http.delete(`${this.backendURL}/clientes/${pessoa.id}`);
  }
}
