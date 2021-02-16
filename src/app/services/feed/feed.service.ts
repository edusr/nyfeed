import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FeedService {

  constructor(private http: HttpClient) { }

    getArticles(category:string)  {
      const scienceUrl = `https://api.nytimes.com/svc/search/v2/articlesearch.json?fq=news_desk:("${category}")&api-key=rFLucAAGQnTIzYaTjAsvivOxxpBAG8EP`;
      return this.http.get(scienceUrl);
  }
}
