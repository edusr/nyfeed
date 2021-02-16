import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import Docs from 'src/app/models/docs';
import { FeedDialogComponent } from '../feed-dialog/feed-dialog.component';

@Component({
  selector: 'app-feed-card',
  templateUrl: './feed-card.component.html',
  styleUrls: ['./feed-card.component.css']
})
export class FeedCardComponent implements OnInit {

  @Input() item :Docs =  {   abstract: "",
  web_url: "",
  lead_paragraph: "",
  headline: {main:""},
  multimedia: []
  };


  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  
  openDialog(doc: Docs): void {
    const dialogRef = this.dialog.open(FeedDialogComponent, {
      width: '500px',
      data: doc
    }
    );
  }

}
