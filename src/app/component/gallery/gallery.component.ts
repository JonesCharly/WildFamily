import { Component, OnInit } from '@angular/core';
import { galleryData } from '../../data'
/*import { MatDialog, MatDialogRef } from '@angular/material'; */

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  DialogModal

  constructor(/*private dialog: MatDialog*/) { }

  ngOnInit() {
  }

  /*openDialog() {
    this.DialogModal = this.dialog.open(this.DialogModal); 
  }*/

}

