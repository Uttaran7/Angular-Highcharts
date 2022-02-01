import { Component, OnInit, Input } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';


@Component({
  selector: 'app-widget-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.scss']
})
export class AreaComponent implements OnInit {

  chartOptions: {};
  @Input() data: any = [];

  Highcharts = Highcharts;

  constructor() { }

  ngOnInit() {
    this.chartOptions = {
      // chart: {
      //   type: 'spline',
        
      // },
      
      title: {
        text: 'Subscriptions'
      },
      subtitle: {
        text: 'Yearly Comparison'
      },
      tooltip: {
        split: false,
        
      },
      xAxis: {
        categories: ['Jan', 'Mar', 'May', 
            'Jul', 'Sep', 'Nov', 'Dec']
    },
  
      credits: {
        enabled: false
      },
      exporting: {
        enabled: false,
      },
      series: this.data
    };

    HC_exporting(Highcharts);

    setTimeout(() => {
      window.dispatchEvent(
        new Event('resize')
      );
    }, 300);
  }

}
