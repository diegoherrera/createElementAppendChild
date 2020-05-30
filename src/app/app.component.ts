import { Component, ViewChild
  , ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'render2';
  @ViewChild('contenedor')
  private contenedorPadre: ElementRef;  
  constructor(private rendered: Renderer2) { }

  onClickEvent() {
    //primero vamos a crear un element li
    let li = this.rendered.createElement('li');
    //creo un element texto
    let texto = this.rendered.createText("Mensaje dentro del li");
    //vinculo el texto con el li 
    this.rendered.appendChild(li, texto);
    //vinculo el nuevo elmento creado con el contenedor 
    this.rendered.appendChild(this.contenedorPadre.nativeElement, li);

  }
}
