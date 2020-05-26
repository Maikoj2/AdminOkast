import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscriber, Subscription } from 'rxjs';
import { retry, map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-rxsj',
  templateUrl: './rxsj.component.html',
  styles: [
  ]
})
export class RxsjComponent implements OnInit, OnDestroy {
  
  subcripcion:Subscription;
  constructor() {



    this.subcripcion=this.regresaobservable().subscribe(
      numero => { console.log('subs ', numero) },
      erro => console.log('erro', erro),
      () => console.log('termino')
    );

  }

  ngOnInit(): void {
  }
  ngOnDestroy(): void {
    // Called once, before the instance is destroyed.
    // Add 'implements OnDestroy' to the class.
    this.subcripcion.unsubscribe();

  }
  regresaobservable(): Observable<any> {


    return new Observable((observer: Subscriber<any>) => {
      let cont = 0;

      let interva = setInterval(() => {

        cont += 1;
        const salida = {
          valor: cont
        };
        observer.next(salida);


        // if (cont === 5) {
        //   clearInterval(interva);
        //   observer.complete();

        // }
        // if (cont === 3) {
        //   clearInterval(interva);
        //   observer.error('error');

        // }


      }, 1000);
    }).pipe(
      map(resp => resp.valor),
      filter((valor, index) => {
        if ((valor % 2) === 0) {
          //par
          return true;
        } else {

          return false;
        }
      })
    );



  }

}
