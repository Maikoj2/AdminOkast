import { Component } from '@angular/core';
import { SettingsService } from './servise/setting/settings.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'clitest';
  constructor(public _ajustes: SettingsService ){

    
  }
}
