import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {
  username = '';
  isUsernameEmpty = true;

  constructor() { }

  ngOnInit() {
  }

  onEnterUsername(event: Event) {
    (<HTMLInputElement>event.target).value !== '' ? this.isUsernameEmpty = false : this.isUsernameEmpty = true;
  }

  onResetUsername(): void {
    this.username = '';
    this.isUsernameEmpty = true;
  }

}
