import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent {
  name = 'Angular';
  notClick: number = null;
  newArr: any = [
    {str: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', id: 1},
    {str: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', id: 2},
    {str: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.', id: 3},
    {str: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', id: 4}
  ];
  sort(data) {
    var full = data;
    if(data.length>100) {
      return `${data.substring(0,100)}`;
    }
    else {
      return full;
    }
  }
  more(data) {
    this.notClick = data;
  }
}
