import { Component, OnInit } from '@angular/core';
import { resolve } from 'dns';
import { interval } from 'rxjs';
import { threadId } from 'worker_threads';


@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: [
  ]
})
export class PromesasComponent implements OnInit {

  constructor() {

    this.contar3().then(() => console.log('termino'))
      .catch(error => console.error('error e la promesa ', error)
      );


  }

  ngOnInit(): void {
  }

  contar3(): Promise<boolean> {
    return new Promise((res, rej) => {
      let contador = 0;
      let interaval = setInterval(() => {

        contador += 1;
        console.log(contador);

        if (contador === 3) {

          res();
          clearInterval(interaval);

        }

      }, 1000);


    });

  }

}
