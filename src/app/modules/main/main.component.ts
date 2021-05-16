import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  drawerNav = true;
  menus = [
    {name: 'Dashboard', route: './dashboard'}
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
