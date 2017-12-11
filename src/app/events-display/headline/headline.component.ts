import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-headline',
  templateUrl: './headline.component.html',
  styleUrls: ['./headline.component.css']
})
export class HeadlineComponent implements OnInit {

  constructor( private route: ActivatedRoute ) { }

  ngOnInit() {
  }

  // return the 'keyword' parameter associated with the route
  getKeyword() {
    return this.route.snapshot.queryParams.keyword;
  }

}
