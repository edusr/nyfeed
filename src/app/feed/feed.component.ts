import { getTestBed } from '@angular/core/testing';
import { FeedService } from './../services/feed/feed.service';
import { Component, OnInit } from '@angular/core';
import Docs from '../models/docs';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { FeedDialogComponent } from '../components/feed-dialog/feed-dialog.component';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  articles: Docs[] = [];
  
  constructor(private feedService: FeedService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getFeeds();
  }

  getFeeds() {
    this.feedService.getArticles(this.route.snapshot.data['category']).subscribe((data: any) => {
      this.articles = data.response.docs;
    });
  }

}
