import NewYorkTimesResponse  from 'src/app/models/newyorktimes-response';
import { FeedService } from './feed.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { TestBed } from '@angular/core/testing';
import { HttpClient, HttpErrorResponse, HttpEvent, HttpEventType } from '@angular/common/http';


describe('FeedService', () => {

  let service: FeedService;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  

  beforeEach(() => {
  
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ]
    });
    
    service = TestBed.inject(FeedService);
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it(
    'should get aticles',
   () => {
        const dummyResponse : NewYorkTimesResponse = {
          "status": "OK",
          "response": {
            "docs": [{
              "abstract": "Music from the large conch probably hadn’t been heard by human ears for 17,000 years.",
              "web_url": "https://www.nytimes.com/2021/02/10/science/conch-shell-horn.html",
              "lead_paragraph": "In 1931, researchers working in southern France unearthed a large seashell at the entrance to a cave. Unremarkable at first glance, it languished for decades in the collections of a nearby natural history museum.",
              "multimedia": [{
                "url": "images/2021/02/10/science/10TB-SHELLHORN1/merlin_183463404_d2153e3c-b970-4b2e-a5f4-a2498c25ebb6-articleLarge.jpg"
        
              }],
              "headline": {
                "main": "Hear the Sound of a Seashell Horn Found in an Ancient French Cave",
                }
            }]
          }
        };

        service.getArticles('Science').subscribe((event: any) => {
          switch (event.type) {
            case HttpEventType.Response:
              expect(event.body).toEqual(dummyResponse);
          }
        });

    const mockReq = httpTestingController.expectOne('https://api.nytimes.com/svc/search/v2/articlesearch.json?fq=news_desk:("Science")&api-key=rFLucAAGQnTIzYaTjAsvivOxxpBAG8EP' );

    expect(mockReq.cancelled).toBeFalsy();
    expect(mockReq.request.responseType).toEqual('json');
    mockReq.flush(dummyResponse);

    httpTestingController.verify();
  }
);
});
