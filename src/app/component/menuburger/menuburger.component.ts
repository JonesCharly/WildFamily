import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menuburger',
  templateUrl: './menuburger.component.html',
  styleUrls: ['./menuburger.component.scss']
})
export class MenuburgerComponent implements OnInit {

  showMenuPage: boolean;

  constructor() { }

  ngOnInit() {
  }

  openMenu() {
    this.showMenuPage = !this.showMenuPage;
  }

  closeMenu() {
    this.showMenuPage = false;
  }
}
