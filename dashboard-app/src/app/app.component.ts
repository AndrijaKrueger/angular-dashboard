import {Component} from '@angular/core';
import {timer} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Dashboard';
  temp = 0;

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
      title: 'Harz Urlaub 2019',
      place: '38871 Ilsenburg',
      subTitle: '18.05. und 19.05.2019 10 - 18 Uhr',
      dater: new Date('2019-04-13T08:00:00z'),
      days: 0,
      formatedDate: ''
    }, {
      title: 'Winter is coming ... Finale',
      place: 'Sky',
      subTitle: '',
      dater: new Date('2019-04-14T09:00:00z'),
      days: 0,
      formatedDate: ''
    }, {
      title: 'Double Feature Avengers',
      place: 'Zoopalast 20:45 -> 03:00',
      subTitle: '',
      dater: new Date('2019-04-23T20:30:00Z'),
      days: 0,
      formatedDate: ''
    }, {
      title: 'Avengers Endgame',
      place: 'Zoopalast 20:15',
      subTitle: '',
      dater: new Date('2019-04-26T20:15:00Z'),
      days: 0,
      formatedDate: ''
    }, {
      title: 'Kite Kurs',
      place: 'Zingst, Campingplatz Prerow',
      subTitle: '',
      dater: new Date('2019-04-30T17:00:00Z'),
      days: 0,
      formatedDate: ''
    }, {
      title: 'Ritterfest',
      place: 'Museums Dorf Düppel',
      subTitle: '18.05. und 19.05.2019 10 - 18 Uhr',
      dater: new Date('2019-05-18T12:00:00Z'),
      days: 0,
      formatedDate: ''
    }, {
      title: 'Fahrrad Sternfahrt 2019',
      place: 'Berlin',
      subTitle: '',
      dater: new Date('2019-06-02T09:00:00Z'),
      days: 0,
      formatedDate: ''
    }, {
      title: 'Pfingsten Ostsee Wochenende',
      place: 'Ostseecamp Seeblick',
      subTitle: 'Samstag 08.06. - Montag 10.06.',
      dater: new Date('2019-06-08T08:00:00Z'),
      days: 0,
      formatedDate: ''
    }, {
      title: 'Tag der Bundeswehr',
      place: 'Fliegerhorst, 29328 Faßberg',
      subTitle: '15.06. 9:00 - 17:00 Uhr',
      dater: new Date('2019-06-15T08:00:00Z'),
      days: 0,
      formatedDate: ''
    }, {
      title: 'Sommer Urlaub',
      place: 'Köln - Speyer - Plansee - Venedig',
      subTitle: '22.6. - 8.7. 2019',
      dater: new Date('2019-06-22T08:00:00Z'),
      days: 0,
      formatedDate: ''
    }, {
      title: 'OTTO-LILIENTHAL-FEST 2019',
      place: 'Stölln 12:00 - 18:00',
      subTitle: '',
      dater: new Date('2019-08-10T10:00:00Z'),
      days: 0,
      formatedDate: ''
    }, {
      title: 'Das Laternenfest',
      place: 'Halle - Ein Fest mit Tradition',
      subTitle: '23. - 25. August 2019',
      dater: new Date('2019-08-23T08:00:00Z'),
      days: 0,
      formatedDate: ''
    }
  ];


  today = setInterval(() => {
    this.todayTemp = new Date();
    this.time = this.todayTemp.toLocaleTimeString();
    this.date2 = this.map[this.todayTemp.getDay()].day + ' ' + this.todayTemp.toLocaleDateString();
    this.updateDates();
  }, 1000);


  temperature = setInterval(() => {
    window.location.reload();
    }, 60000 * 5);

  updateDates() {

    this.dummies.forEach((item, index) => {
      // console.log('item: ' + item.dater);
      item.days = this.getDays(item.dater.getTime() / 1000);
      item.formatedDate = this.getFormatedDated(item.dater.getTime() / 1000);
    });
  }

  getDays(dateTimeStamp) {
    const startDate = this.todayTemp;
    // console.log('startDate: ' + startDate);

    const endDate = this.convertTimeSTampToDate(dateTimeStamp);
    // console.log('endDate: ' + endDate);

    const temp = endDate.valueOf() - startDate.valueOf();
    // console.log('temp: ' + temp);

    const result = Math.round((temp) / (1000 * 60 * 60 * 24));
    // console.log('result: ' + result);

    return result;
  }

  getFormatedDatedFromDate(dater, title) {
    const date = this.convertTimeSTampToDate(dater.getTime() / 1000);
    // console.log('getFormatedDatedFromDate: ' + dater);
    // console.log('title: ' + title);
    return this.map[date.getDay()].day + ' ' + date.toLocaleDateString();
  }

  getFormatedDated(dateTimeStamp) {
    const date = this.convertTimeSTampToDate(dateTimeStamp);

    return this.map[date.getDay()].day + ' ' + date.toLocaleDateString();
  }

  convertTimeSTampToDate(timeStamp) {
    return new Date(timeStamp * 1000);
  }

  getTestData(data) {
    return data;
  }


}
