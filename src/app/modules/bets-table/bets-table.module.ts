import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BetsTableComponent} from './bets-table.component';
import {KeyFilterModule} from 'primeng/keyfilter';
import {
  ButtonModule,
  CalendarModule, CodeHighlighterModule,
  ContextMenuModule,
  DataTableModule,
  DialogModule, DropdownModule, GrowlModule,
  InputTextModule, MultiSelectModule,
  PaginatorModule,
  SharedModule, SliderModule, TabViewModule
} from 'primeng/primeng';
import {FormsModule} from '@angular/forms';
import {TableModule} from 'primeng/table';
import {FilterNumbersComponent} from '../../components/filter-numbers/filter-numbers.component';
import {DragDropModule} from 'primeng/dragdrop';
import {DragDropComponent} from '../../components/drag-drop/drag-drop.component';
import {TableDataService} from '../../services/table-data.service';

@NgModule({
  declarations: [
    BetsTableComponent,
    FilterNumbersComponent,
    DragDropComponent
  ],
  imports: [
    KeyFilterModule,
    DragDropModule,
    TableModule,
    CommonModule,
    DialogModule,
    PaginatorModule,
    DataTableModule,
    FormsModule,
    SharedModule,
    CommonModule,
    FormsModule,
    DataTableModule,
    CalendarModule,
    ButtonModule,
    InputTextModule,
    ContextMenuModule,
    DropdownModule,
    DialogModule,
    MultiSelectModule,
    SliderModule,
    GrowlModule,
    TabViewModule,
    CodeHighlighterModule
  ]
})
export class BetsTableModule {
}
