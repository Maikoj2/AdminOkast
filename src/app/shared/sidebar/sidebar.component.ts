import { Component, OnInit } from '@angular/core';
import { SidebarService } from '../../servise/servise.index';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [
  ]
})
export class SidebarComponent implements OnInit {

  constructor(public _sidebar: SidebarService) { }

  ngOnInit(): void {
  }

}
