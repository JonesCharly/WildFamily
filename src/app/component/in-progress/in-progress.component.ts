import { Component, OnInit } from '@angular/core';
import { NgxSmartModalService } from 'ngx-smart-modal';

@Component({
  selector: 'app-in-progress',
  templateUrl: './in-progress.component.html',
  styleUrls: ['./in-progress.component.scss']
})
export class InProgressComponent implements OnInit {
  /*modalBox= true;*/

  constructor(public ngxSmartModalService: NgxSmartModalService) { }

  ngOnInit() {
  }

 /* showModal(){
    this.modalBox = !this.modalBox;
  }*/
}
