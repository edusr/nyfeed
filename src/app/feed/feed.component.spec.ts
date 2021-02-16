import { FeedService } from './../services/feed/feed.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogModule } from '@angular/material/dialog';
import { RouterTestingModule } from '@angular/router/testing';

import { FeedComponent } from './feed.component';

describe('FeedComponent', () => {
  let component: FeedComponent;
  let fixture: ComponentFixture<FeedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule,RouterTestingModule,MatDialogModule],
      declarations: [ FeedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should use Docs list', () => {
    component.articles = [{
      "abstract": "Music from the large conch probably hadn’t been heard by human ears for 17,000 years.",
      "web_url": "https://www.nytimes.com/2021/02/10/science/conch-shell-horn.html",
      "lead_paragraph": "In 1931, researchers working in southern France unearthed a large seashell at the entrance to a cave. Unremarkable at first glance, it languished for decades in the collections of a nearby natural history museum.",
      "multimedia": [{
        "url": "images/2021/02/10/science/10TB-SHELLHORN1/merlin_183463404_d2153e3c-b970-4b2e-a5f4-a2498c25ebb6-articleLarge.jpg"

      }],
      "headline": {
        "main": "Hear the Sound of a Seashell Horn Found in an Ancient French Cave",
        }
    }];
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.innerHTML).toContain("Hear the Sound of a Seashell Horn Found in an Ancient French Cave");

  });


});
