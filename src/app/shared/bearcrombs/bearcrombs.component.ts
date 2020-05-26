import { Component, OnInit } from '@angular/core';
import { Router, ActivationEnd } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { Title, Meta, MetaDefinition } from '@angular/platform-browser';
import { Content } from '@angular/compiler/src/render3/r3_ast';

@Component({
  selector: 'app-bearcrombs',
  templateUrl:'./bearcrombs.component.html', 
  styles: [
  ]
})
export class BearcrombsComponent implements OnInit {
  titulo:string;

  constructor(private router : Router,
              private title: Title,
              private meta: Meta) { 

     
    this.getdata().subscribe(data => {
      this.titulo =data.titulos;
      console.log(this.titulo);
      this.title.setTitle(this.titulo);


      const metatag: MetaDefinition = {
    
          name:"description",
          Content:this.titulo
      }
      this.meta.updateTag(metatag);
      
    });
    
  }

  ngOnInit(): void {

  }
  getdata(){

     return this.router.events.pipe(
      filter(event => event instanceof ActivationEnd),
      filter((even: ActivationEnd) => even.snapshot.firstChild === null),
      map((even: ActivationEnd) => even.snapshot.data)
    )

  }

}
