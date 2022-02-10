import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {
  isDetailsVisible = false;
  clicks = [];
  clicksCount = 0;

  constructor() { }

  ngOnInit() {
  }

  onDisplayDetails(): void {
    this.isDetailsVisible = !this.isDetailsVisible;
    this.clicks.push(this.clicksCount+=1);
  }

}
