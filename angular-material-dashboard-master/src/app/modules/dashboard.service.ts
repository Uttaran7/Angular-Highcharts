import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor() { }

  bigChart() {
    return [{
      type: 'line',
      name: '2021',
      data: [502, 635, 809, 947, 1402, 3634, 5268]
    }, {
      type: 'line',
      name: '2020',
      data: [106, 107, 111, 133, 221, 767, 1766]
    },
    {
      type: 'column',
      name: '2021',
      data: [502, 635, 809, 947, 1402, 3634, 5268]
    }, {
      type: 'column',
      name: '2020',
      data: [106, 107, 111, 133, 221, 767, 1766]
    }];
  }

  cards() {
    return [{
      type: 'column',
    name: 'Users',
     data:[ 71, 78, 39, 66]
    }
    ];
  }
  cards1() {
    return [{
      type: 'line',
    name: 'Users',
     data:[ 71, 78, 39, 66]
    }
    ];
  }
  cards2() {
    return [{
      type: 'spline',
    name: 'Users',
     data:[ 71, 78, 39, 66]
    }
    ];
  }
  cards3() {
    return [{
      type: 'bar',
    name: 'Users',
     data:[ 71, 78, 39, 66]
    }
    ];
  }

  pieChart() {
    return [{
      name: 'Chrome',
      y: 61.41,
      sliced: true,
      selected: true
    }, {
      name: 'Internet Explorer',
      y: 11.84
    }, {
      name: 'Firefox',
      y: 10.85
    }, {
      name: 'Edge',
      y: 4.67
    }, {
      name: 'Safari',
      y: 4.18
    }, {
      name: 'Sogou Explorer',
      y: 1.64
    }, {
      name: 'Opera',
      y: 1.6
    }, {
      name: 'QQ',
      y: 1.2
    }, {
      name: 'Other',
      y: 2.61
    }];
  }
}
