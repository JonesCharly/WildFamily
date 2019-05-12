import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';
import { RouterState } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  animations: [
    trigger ('openClose', [

      state('close', style({
        width: '16%',
      })),
      state('open', style({
        width: '7%',
      })),
      transition('open <=> close', [
        animate('0.3s')
      ])

    ]),

    trigger ( 'rotateText',[
      state( 'verti',style ([
        { transform: 'Rotate(-90deg)',
           }
      ])),
      state( 'hori',style ([
        { transform: 'Rotate(0deg)',
          flexDirection: 'column',
          top: '0%',
           }
      ])),
      transition('vert <=> hori',[
        animate('0.3s')
      ]),
    ]),

    trigger ( 'rotateBtn',[
      state( 'right',style ([
        { 
          marginLeft: '26%',
          marginTop: '50%',
           }
      ])),
      state( 'left',style ([
        { transform: 'Rotate(180deg)',
          marginLeft: '36%',
          marginTop: '40%',
           }
      ])),
      transition('right <=> left',[
        animate('0.2s')
      ]),


    ])



  ]
})
export class NavbarComponent implements OnInit {

  isOpen= true;

  toggle() {
    this.isOpen =!this.isOpen;  }

  constructor() { }

  ngOnInit() {
  }

}
