import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BetsTableComponent } from './bets-table.component';
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

@NgModule({
  declarations: [BetsTableComponent],
  imports: [
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
export class BetsTableModule { }
