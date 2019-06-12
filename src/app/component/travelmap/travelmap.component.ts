import { Component, OnInit } from '@angular/core';
import { NgxSmartModalService } from 'ngx-smart-modal';

@Component({
  selector: 'app-travelmap',
  templateUrl: './travelmap.component.html',
  styleUrls: ['./travelmap.component.scss']
})
export class TravelmapComponent implements OnInit {

  constructor(public ngxSmartModalService: NgxSmartModalService) { }

  ngOnInit() {
  }

}
