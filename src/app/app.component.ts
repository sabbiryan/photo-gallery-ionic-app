import { Component, EnvironmentInjector, OnInit, inject } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule],
})
export class AppComponent implements OnInit {
  public environmentInjector = inject(EnvironmentInjector);

  public selectedIndex = 0;
  public appPages = [
    {
      title: 'Home',
      url: '/tabs',
      icon: 'home'
    },
    {
      title: 'Inbox',
      url: '/inbox',
      icon: 'mail'
    }
  ];

  constructor() {
    //SplashScreen.hide();
  }

  ngOnInit() {
    const path = window.location.pathname.split('/')[1];
    console.log(path)
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
  }
}
