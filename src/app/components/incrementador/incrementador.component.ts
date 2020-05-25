import { Component, OnInit, Input, Output, EventEmitter , ViewChild, ElementRef } from '@angular/core';


@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: [
  ]
})
export class IncrementadorComponent implements OnInit {

  @ViewChild('txtprogress') txtprogress: ElementRef;
  @Input() procentaje: number = 50;
  @Input() leyenda: string = 'leyenda';
  @Output() cambiovalor: EventEmitter<number>  = new EventEmitter();

  constructor() {
  
    
   }

  ngOnInit(): void {
    
  }
  onchage(newvalue){

    // let elemhtml: any = document.getElementsByName('progreso')[0] ;

    

    if ( newvalue >= 100) {
      this.procentaje = 100;
    } else if ( newvalue <= 0){
      this.procentaje = 0;
    }else{
    this.procentaje = newvalue;
  }
    // elemhtml.value =this.procentaje;
    this.txtprogress.nativeElement.value = this.procentaje;
    this.cambiovalor.emit(this.procentaje);

    

  }
  
  cambiar(valor : number){
  
    if (this.procentaje >= 100 && valor > 0) {

      this.procentaje = 100;
      console.log(this.procentaje);
      return ;
      
    } 
    if (this.procentaje <= 0 && valor<0) {
      this.procentaje = 0;
      console.log(this.procentaje);
      return ;
      
    } 
    this.procentaje += valor;
    this.txtprogress.nativeElement.focus();
      
}

}
