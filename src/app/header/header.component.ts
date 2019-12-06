import { Component, OnInit } from '@angular/core';
import { RichComponent } from '../rich/rich.component';

interface Alert {
  type: string;
  message: string;
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private richComponent: RichComponent) { }

  mostrar = false;
  botao: Alert;

  ngOnInit() {
    if (localStorage.getItem('sgs') === 'case1') {
      this.construirBotao({ type: 'success', message: 'Case 1: Cliente declarou interesse em Abrir conta PJ, Máquinha, Emitir boleto e Vender mais.' });
    }
    if (localStorage.getItem('sgs') === 'case2') {
      this.construirBotao({ type: 'success', message: 'Case 2: Cliente declarou interesse em Aprendizado, Gestão DAS e Finanças' });
    }
    if (localStorage.getItem('sgs') === 'case3') {
      this.construirBotao({ type: 'success', message: 'Case 3: Página totalmente personalizada.' });
    }
    if (localStorage.getItem('sgs') === 'case4') {
      this.construirBotao({ type: 'success', message: 'Case 4: Cliente anônimo, página de conteúdo pré-determinado com variação de posição entre o modulo 1 e modulo 2.' });
    }
  }

  saveSgs(valor) {
    this.richComponent.loadSgs(valor);
  }

  construirBotao(alerta: Alert) {
    this.botao = alerta;
    this.mostrar = true;

  }

  close() {
    this.mostrar = false;
  }
}