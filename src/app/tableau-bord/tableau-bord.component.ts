import { Component , OnInit, ViewChild, inject} from '@angular/core';
import { SuiviSanteServiceService } from '../suivi-sante-service.service';
import {
  ApexAxisChartSeries ,
  ApexNonAxisChartSeries,
  ApexChart,
  ChartComponent,
  ApexDataLabels,
  ApexPlotOptions,
  ApexYAxis,
  ApexLegend,
  ApexStroke,
  ApexXAxis,
  ApexFill,
  ApexResponsive,
  ApexTooltip
} from "ng-apexcharts";
import { Mesure } from '../mesure';

// const historique = [
//   {date : 'Jan 2023', pressionArterielle: 120, poids: 75, pouls:70},
//   {date: 'Feb 2023', pressionArterielle: 125, poids: 74, pouls: 72 },
//   {date: 'Feb 2023', pressionArterielle: 195, poids: 74, pouls: 72 },
//   {date: 'Feb 2023', pressionArterielle: 125, poids: 74, pouls: 72 },
// ];

export type ChartOptions = {
  series: ApexAxisChartSeries | ApexNonAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  yaxis: ApexYAxis;
  xaxis: ApexXAxis;
  fill: ApexFill;
  tooltip: ApexTooltip;
  stroke: ApexStroke;
  legend: ApexLegend;
  colors:string[];
  responsive: ApexResponsive[];
};
@Component({
  selector: 'app-tableau-bord',
  templateUrl: './tableau-bord.component.html',
  styleUrls: ['./tableau-bord.component.css']
})
export class TableauBordComponent implements OnInit{
 // public mesureList:Mesure[] = [];
  historique:Mesure[] = [];
  @ViewChild("chart") chart: ChartComponent | undefined;
  public chartOptions!: Partial<ChartOptions>;

  mesureServices: SuiviSanteServiceService = inject(SuiviSanteServiceService);
  constructor() {
    this.historique = this.mesureServices.getMesureList();
  }

  ngOnInit(): void {
    const pressionArterielleData: number[] = [];
    const poidsData: number[] = [];
    const poulsData: number[] = [];
    const categories: string[] = [];

    this.historique.forEach(mesure =>{
      pressionArterielleData.push(mesure.pressionArterielle);
      poidsData.push(mesure.poids);
      poulsData.push(mesure.pouls);
      categories.push(mesure.date);
    });

    this.chartOptions = {
      colors: ['#008000', '#C62C2C', '#73DAC7'],
      series: [
        { name: "Pression Arterielle",  data: pressionArterielleData },
        { name: "Poids", data: poidsData },
        { name: "Pouls", data: poulsData }
      ],
      chart: {
        type: "bar",
        height: 350
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "55%"
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        show: true,
        width: 2,
        colors: ["transparent"]
      },
      xaxis: {
        categories
      },
      yaxis: {
        title: {
          text: "valeurs"
        }
      },
      fill: {
        opacity: 1,
        colors: ['#008000', '#C62C2C', '#73DAC7']
      },
      tooltip: {
          y:[ {
            formatter: function(val) {
              return  + val + " mmHg";
            }
          }, {
            formatter: function(val) {
              return  + val + " kg";
            }
          }, {
            formatter: function(val) {
              return  + val + " bmp";
            }
          }]
        
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              height: 320
            },
            legend: {
              position: "bottom"
            }
          }
        }
      ]
    };
  }
}

/*  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

constructor() {}*/



