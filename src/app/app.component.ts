import { Component, OnInit } from '@angular/core';
import { ContentfulService } from './common/contentful/contentful.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private contentfulService: ContentfulService) {}

  title = 'homeCusineApp';

  ngOnInit() {
    this.contentfulService.getPages('Home').then((products) => {
      console.log(products);
    });
  }
}
