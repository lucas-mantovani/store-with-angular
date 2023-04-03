import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent {

  constructor(
    private formBuilder: FormBuilder,
  ){}

  protected formContato = this.formBuilder.group({
    nome: ['', [
      Validators.required,
      Validators.minLength(4)
    ]],
    assunto: ["", [
      Validators.minLength(10),
      Validators.required
    ]],
    telefone: ["", [
      Validators.minLength(11),
      Validators.required
    ]],
    email: ["", [
      Validators.email,
      Validators.required
    ]],
    mensagem: ["", [
      Validators.minLength(20),
      Validators.required
    ]]
  })

  enviarFormulario(){
    if(this.formContato.valid){
      alert("Formulário enviado com sucesso!!!");
      this.formContato.reset();
    } else {
      alert("Preencha todos os dados do formulário!")
    }
  }

}
