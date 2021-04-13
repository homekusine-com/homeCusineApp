import { Component, OnInit } from '@angular/core';
import { ContentfulService } from './common/services/contentful.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private contentfulService: ContentfulService) { }

  title = 'homeCusineApp';

  ngOnInit() {
    this.contentfulService.getPages().then(products => {
      console.log(products);
      debugger;
    });
  }
}
