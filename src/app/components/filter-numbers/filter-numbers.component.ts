import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'filter-numbers',
  templateUrl: './filter-numbers.component.html',
  styleUrls: ['./filter-numbers.component.scss']
})
export class FilterNumbersComponent implements OnInit {

  @Input() columnName;
  @Output() sendFilterData = new EventEmitter<any>();
  @Output() deleteFilterEmit = new EventEmitter<any>();

  min: number;
  max: number;

  constructor() {
  }

  ngOnInit() {
  }

  sendData() {
    console.log(this.min, this.max);
    this.sendFilterData.emit({min: this.min, max: this.max, columnName: this.columnName});
  }

  deleteFilter() {
    this.deleteFilterEmit.emit(this.columnName);
  }

}
