import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Dashboard';

us  todayTemp = new Date();
  time = '';
  date2 = '';

  map = [
    {
      key: 0,
      day: 'Sonntag'
    }, {
      key: 1,
      day: 'Montag'
    }, {
      key: 2,
      day: 'Dienstag'
    }, {
      key: 3,
      day: 'Mittwoch'
    }, {
      key: 4,
      day: 'Donnerstag'
    }, {
      key: 5,
      day: 'Freitag'
    }, {
      key: 6,
      day: 'Samstag'
    },
  ];


  today = setInterval(() => {
    this.todayTemp = new Date();
    this.time = this.todayTemp.toLocaleTimeString();
    this.date2 = this.map[this.todayTemp.getDay()].day + ' ' + this.todayTemp.toLocaleDateString();

  }, 1000);


}
