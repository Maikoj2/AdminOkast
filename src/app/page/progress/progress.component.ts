import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl:  './progress.component.html',
  styles: [
  ]
})
export class ProgressComponent implements OnInit {

  procentaje: number  = 50;
  procentaje2: number  = 20;

  constructor() { }

  ngOnInit(): void {
  }




}
