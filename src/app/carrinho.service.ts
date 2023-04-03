import { Injectable } from '@angular/core';
import { IProdutoCarrinho } from './produtos';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {
  itens: IProdutoCarrinho[] = [];
  
  constructor() { }

  obterCarrinho(){
    this.itens = JSON.parse(localStorage.getItem("carrinho") || "[]");
    return this.itens;
  } 

  adicionarAoCarrinho(produto: IProdutoCarrinho){
    
    let itemEncontrado = false;

    this.obterCarrinho();

    this.itens.forEach((item) =>{
      if(item.id == produto.id){
        item.quantidade = item.quantidade + produto.quantidade;
        itemEncontrado = true;
      }
    });
    
    if(!itemEncontrado){
      this.itens.push(produto);
    }

    localStorage.setItem("carrinho", JSON.stringify(this.itens));

  }

  limparCarrinho(){
    this.itens = [];
    localStorage.clear();
  }

  removerProdutoCarrinho(produtoId: number){
    this.itens = this.itens.filter(item => item.id !== produtoId)
    localStorage.setItem("carrinho", JSON.stringify(this.itens));
  }
}
