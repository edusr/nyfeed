import { Component, Inject, OnInit } from '@angular/core';
import Docs from 'src/app/models/docs';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-feed-dialog',
  templateUrl: './feed-dialog.component.html',
  styleUrls: ['./feed-dialog.component.css']
})
export class FeedDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<FeedDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Docs) {}

  ngOnInit(): void {
  }

}
