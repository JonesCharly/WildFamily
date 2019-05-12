import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-in-progress',
  templateUrl: './in-progress.component.html',
  styleUrls: ['./in-progress.component.scss']
})
export class InProgressComponent implements OnInit {
  modalBox= true;

  constructor() { }

  ngOnInit() {
  }

  showModal(){
    this.modalBox = !this.modalBox;
  }
}
