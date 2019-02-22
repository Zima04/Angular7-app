import {Component, OnInit} from '@angular/core';
import {Statistic} from '../../interfaces/statistic';
import {Event} from '../../interfaces/event';
import {Bet} from '../../interfaces/bet';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'bets-table',
  templateUrl: './bets-table.component.html',
  animations: [
    trigger('rowExpansionTrigger', [
      state('void', style({
        transform: 'translateX(-10%)',
        opacity: 0
      })),
      state('active', style({
        transform: 'translateX(0)',
        opacity: 1
      })),
      transition('* <=> *', animate('400ms cubic-bezier(0.86, 0, 0.07, 1)'))
    ])
  ],
  styleUrls: ['./bets-table.component.scss'],
})
export class BetsTableComponent implements OnInit {

  colsStatistic: any[];
  colsEvents: any[];
  colsBets: any[];

  selectedColumnsStatistic: any = [];
  selectedColumnsEvents: any = [];
  selectedColumnsBets: any = [];
  selectedColumns: any = [];
  selectedByClick: any = [];

  resultData: any;
  filteredData: any;

  statisticTemp: Statistic [] = [
    {
    League: 'BY1',
    Host: 'Naftanasd',
    Guest: 'FuckTeam',
    Goals1: 1,
    Goals2: 3,
    Attacks1: 4,
    Attacks2: 2,
    DangerousAttacks1: 24,
    DangerousAttacks2: 25,
    DaRatio: 133,
    Posession1: 12,
    Posession2: 10,
    OnTarget1: 9,
    OnTarget2: 4,
    OffTarget1: 12,
    OffTarget2: 5,
    Corner1: 1,
    Corner2: 3,
    Time: '88',
    Criterion: 34,
    TargetType: 'type'
  }, {
    League: 'BY2',
    Host: 'Na',
    Guest: 'BA3',
    Goals1: 1,
    Goals2: 3,
    Attacks1: 12,
    Attacks2: 1,
    DangerousAttacks1: 24,
    DangerousAttacks2: 25,
    DaRatio: 133,
    Posession1: 12,
    Posession2: 10,
    OnTarget1: 9,
    OnTarget2: 4,
    OffTarget1: 12,
    OffTarget2: 5,
    Corner1: 1,
    Corner2: 3,
    Time: '88',
    Criterion: 34,
    TargetType: 'type'
  }, {
    League: 'BY3',
    Host: 'Fuck',
    Guest: 'Lol',
    Goals1: 1,
    Goals2: 3,
    Attacks1: 222,
    Attacks2: 6,
    DangerousAttacks1: 24,
    DangerousAttacks2: 25,
    DaRatio: 133,
    Posession1: 12,
    Posession2: 10,
    OnTarget1: 9,
    OnTarget2: 4,
    OffTarget1: 12,
    OffTarget2: 5,
    Corner1: 1,
    Corner2: 3,
    Time: '88',
    Criterion: 34,
    TargetType: 'type'
  }];
  eventsTemp: Event [] = [
    {
      Id: 11,
      EventId: '1',
      League2: 'ER',
      Host2: 'Arsenal',
      Guest2: 'Barselina',
    }, {
      Id: 11,
      EventId: '2',
      League2: 'ER',
      Host2: 'Arsenal',
      Guest2: 'Barselina',
    }, {
      Id: 11,
      EventId: '3',
      League2: 'ER',
      Host2: 'Arsenal',
      Guest2: 'Barselina',
    }];
  betsTemp: Bet[] = [
    {
      Id: 1,
      BetTime: '3232',
      Target: 'win',
      OddId: '1234',
      PivotBias: 'ssdfg324123',
      PivotValue: '234213',
      Hdp: '1234ds',
      Rate: 'high',
      BetStake: 'sfdg',
      BetStatus: 122,
      MinStake: '1000',
      MaxStake: '5000'
    },
    {
      Id: 1,
      BetTime: '22',
      Target: 'win',
      OddId: '1234',
      PivotBias: 'ssdfg324123',
      PivotValue: '234213',
      Hdp: '1234ds',
      Rate: 'high',
      BetStake: 'sfdg',
      BetStatus: 122,
      MinStake: '1000',
      MaxStake: '5000'
    }, {
      Id: 1,
      BetTime: '123',
      Target: 'win',
      OddId: '1234',
      PivotBias: 'ssdfg324123',
      PivotValue: '234213',
      Hdp: '1234ds',
      Rate: 'high',
      BetStake: 'sfdg',
      BetStatus: 122,
      MinStake: '1000',
      MaxStake: '5000'
    }
  ];

  expandedRows: {} = {};

  ngOnInit() {

    this.colsStatistic = [
      {field: 'League', header: 'League'},
      {field: 'Host', header: 'Host'},
      {field: 'Guest', header: 'Guest'},
      {field: 'Goals1', header: 'Goals1'},
      {field: 'Goals2', header: 'Goals2'},
      {field: 'Attacks1', header: 'Attacks1'},
      {field: 'Attacks2', header: 'Attacks2'},
      {field: 'DangerousAttacks1', header: 'DangerousAttacks1'},
      {field: 'DangerousAttacks2', header: 'DangerousAttacks2'},
      {field: 'Posession1', header: 'Posession1'},
      {field: 'Posession2', header: 'Posession2'},
      {field: 'OnTarget1', header: 'OnTarget1'},
      {field: 'OnTarget2', header: 'OnTarget2'},
      {field: 'OffTarget1', header: 'OffTarget1'},
      {field: 'OffTarget2', header: 'OffTarget2'},
      {field: 'Corner1', header: 'Corner1'},
      {field: 'Corner2', header: 'Corner2'},
      {field: 'Time', header: 'Time'},
      {field: 'Criterion', header: 'Criterion'},
      {field: 'TargetType', header: 'Target'},
    ];

    this.colsEvents = [
      {field: 'EventId', header: 'EventId'},
      {field: 'League2', header: 'League2'},
      {field: 'Host2', header: 'Host2'},
      {field: 'Guest2', header: 'Guest2'},
    ];

    this.colsBets = [
      {field: 'BetTime', header: 'BetTime'},
      {field: 'Target', header: 'Target'},
      {field: 'OddId', header: 'OddId'},
      {field: 'PivotBias', header: 'PivotBias'},
      {field: 'PivotValue', header: 'PivotValue'},
      {field: 'Hdp', header: 'Hdp'},
      {field: 'Rate', header: 'Rate'},
      {field: 'BetStake', header: 'BetStake'},
      {field: 'BetStatus', header: 'BetStatus'},
      {field: 'MinStake', header: 'MinStake'},
      {field: 'MaxStake', header: 'MaxStake'},
      {field: 'EventId', header: 'EventId'},
    ];

    this.selectedColumnsStatistic = this.colsStatistic;
    this.selectedColumnsEvents = this.colsEvents;
    this.selectedColumnsBets = this.colsBets;

    this.selectedColumns = [
      ...this.selectedColumnsStatistic,
      ...this.selectedColumnsEvents,
      ...this.selectedColumnsBets
    ];

    this.filteredData = this.resultData = this.makeResultData();
    console.log(this.resultData);

  }

  makeResultData() {
    let result = [];

    for (let i = 0; i < this.statisticTemp.length; i++) {
      console.log(Object.assign(this.statisticTemp[i], this.eventsTemp[i], this.betsTemp[i]));
      result.push(Object.assign(this.statisticTemp[i], this.eventsTemp[i], this.betsTemp[i]));
    }

    return result;
  }

  changeColumns() {
    this.selectedColumns = [
      ...this.selectedColumnsStatistic,
      ...this.selectedColumnsEvents,
      ...this.selectedColumnsBets];
  }

  // filterData(filterParams: any) {
  //   if (filterParams) {
  //     if (!filterParams.min && !filterParams.max) {
  //       console.log('del');
  //       this.filteredData = this.filteredData.filter(item => {
  //         return item[filterParams.columnName] >= 0 && item[filterParams.columnName] <= 99999999;
  //       });
  //     }
  //     if (!filterParams.min) {
  //       filterParams.min = 0;
  //     }
  //     if (!filterParams.max) {
  //       filterParams.max = 99999999;
  //     }
  //     this.filteredData = this.filteredData.filter(item => {
  //       return item[filterParams.columnName] >= filterParams.min && item[filterParams.columnName] <= filterParams.max;
  //     });
  //   } else {
  //     this.filteredData = this.resultData;
  //   }


  arrayOfFilters: any = [];

  filterData(filterParams: FilterParams) {
    if (filterParams) {
      console.log(this.arrayOfFilters);
      if (!filterParams.min && !filterParams.max) {

        this.arrayOfFilters = this.arrayOfFilters.filter((item: FilterParams) => {
          return item.columnName != filterParams.columnName;
        });
        console.log(this.arrayOfFilters);
      } else {
        this.arrayOfFilters.push(filterParams);
      }
      if (!filterParams.min) {
        filterParams.min = 0;
      }
      if (!filterParams.max) {
        filterParams.max = 99999999;
      }
      let currentData = this.resultData;
      this.arrayOfFilters.forEach((itemFilterParams: FilterParams) => {
        this.filteredData = currentData.filter(item => {
          return item[itemFilterParams.columnName] >= itemFilterParams.min && item[itemFilterParams.columnName] <= itemFilterParams.max;
        });
        currentData = this.filteredData;
        console.log(this.filteredData);
      });

    } else {
      this.filteredData = this.resultData;
      this.arrayOfFilters = [];
    }
  }

}


interface FilterParams {
  max: number;
  min: number;
  columnName: string;
}
