import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'drag-drop',
  templateUrl: './drag-drop.component.html',
  styleUrls: ['./drag-drop.component.scss']
})
export class DragDropComponent implements OnInit {
  @Input() columnsName;
  @Output() filterData = new EventEmitter<any>();

  draggedFilter: any;
  availableFilters: any[];
  selectedFilters: any[] = [];


  constructor() {
  }

  ngOnInit() {
    this.availableFilters = [...this.columnsName];
    this.availableFilters.sort((a, b) => {
      if (a.header < b.header)
        return -1;
    });
    console.log(this.availableFilters);
  }

  dragStart(event, column: any) {
    this.draggedFilter = column;
  }

  drop(event) {
    if (this.draggedFilter) {
      let draggedFilterIndex = this.findIndex(this.draggedFilter);
      this.selectedFilters = [...this.selectedFilters, this.draggedFilter];
      this.availableFilters = this.availableFilters.filter((val, i) => i !== draggedFilterIndex);
      this.draggedFilter = null;
    }
  }

  dragEnd(event) {
    this.draggedFilter = null;
  }

  findIndex(item: any) {
    let index = -1;
    for (let i = 0; i < this.availableFilters.length; i++) {
      if (item.header === this.availableFilters[i].header) {
        index = i;
        break;
      }
    }
    return index;
  }

  updateTableData(data) {
    this.filterData.emit(data);
  }

  deleteFilterItem(columnName: any, indexItem: number) {

    this.selectedFilters = this.selectedFilters.filter((item, index) => {
      console.log(item, index, indexItem);
      if (index == indexItem) {
        console.log(item);
        this.availableFilters.push(item);
        this.availableFilters.sort((a, b) => {
          if (a.header < b.header) return -1;
        });
        return false;
      } else {
        return true;
      }
    });

    console.log(this.availableFilters);

    this.filterData.emit({min: 0, max: 0, columnName});
    if (!this.selectedFilters.length) {
      this.filterData.emit(null);
    }
  }

}
