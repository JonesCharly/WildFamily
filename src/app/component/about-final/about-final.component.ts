import { Component, OnInit } from '@angular/core';
import { NgxSmartModalService } from 'ngx-smart-modal';

@Component({
  selector: 'app-about-final',
  templateUrl: './about-final.component.html',
  styleUrls: ['./about-final.component.scss']
})
export class AboutFinalComponent implements OnInit {

  constructor(public ngxSmartModalService: NgxSmartModalService)
  { }

  ngOnInit() {
  }

}
