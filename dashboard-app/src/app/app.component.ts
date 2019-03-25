import {Component} from '@angular/core';
import {timer} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Dashboard';

  todayTemp = new Date();
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

  dummies = [
    {
      title: 'MÄRKISCHES WINTERAUSTREIBEN',
      place: 'Museums Dorf Düppel',
      days: this.getDays(1553943600),
      dateFrom: this.getFormatedDated(1553943600)
    }, {
      title: 'Die Toten Hosen',
      place: 'Zoo Palast Kino 1',
      days: this.getDays(1554322500),
      dateFrom: this.getFormatedDated(1554322500)
    }, {
      title: 'Harz Urlaub 2019',
      place: '38871 Ilsenburg',
      days: this.getDays(1555146000),
      dateFrom: this.getFormatedDated(1555146000)
    }, {
      title: 'Winter is coming ... Finale',
      place: 'Sky',
      days: this.getDays(1555232400),
      dateFrom: this.getFormatedDated(1555232400)
    }, {
      title: 'Kite Kurs',
      place: 'Zingst, Campingplatz Prerow',
      days: this.getDays(1556643600),
      dateFrom: this.getFormatedDated(1556643600)
    }, {
      title: 'Ritterfest',
      place: 'Museums Dorf Düppel',
      subTitle: '18.05. und 19.05.2019 10 - 18 Uhr',
      days: this.getDays(1558180800),
      dateFrom: this.getFormatedDated(1558180800)
    }, {
      title: 'Pfingsten Ostsee Wochenende',
      place: 'Ostseecamp Seeblick',
      days: this.getDays(1559980800),
      dateFrom: this.getFormatedDated(1559980800)
    }, {
      title: 'Sommer Urlaub',
      place: 'Köln - Speyer - Plansee - Venedig',
      subTitle: '22.6. - 8.7. 2019',
      days: this.getDays(1561190400),
      dateFrom: this.getFormatedDated(1561190400)
    }, {
      title: 'Das Laternenfest',
      place: 'Halle - Ein Fest mit Tradition',
      subTitle: '23. - 25. August 2019',
      days: this.getDays(1566579600),
      dateFrom: this.getFormatedDated(1566579600)
    }
  ];


  today = setInterval(() => {
    this.todayTemp = new Date();
    this.time = this.todayTemp.toLocaleTimeString();
    this.date2 = this.map[this.todayTemp.getDay()].day + ' ' + this.todayTemp.toLocaleDateString();

  }, 1000);


  getDays(dateTimeStamp) {
    const startDate = this.todayTemp;
    console.log('startDate: ' + startDate);

    const endDate = this.convertTimeSTampToDate(dateTimeStamp);
    console.log('endDate: ' + endDate);

    const temp = endDate.valueOf() - startDate.valueOf();
    console.log('temp: ' + temp);

    const result = Math.round((temp) / (1000 * 60 * 60 * 24));
    console.log('result: ' + result);

    return result;
  }

  getFormatedDated(dateTimeStamp) {
    const date = this.convertTimeSTampToDate(dateTimeStamp);

    return this.map[date.getDay()].day + ' ' + date.toLocaleDateString();
  }

  convertTimeSTampToDate(timeStamp) {
    return new Date(timeStamp * 1000);
  }


}
