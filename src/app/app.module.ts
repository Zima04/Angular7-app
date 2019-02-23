import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import {BetsTableModule} from './modules/bets-table/bets-table.module';
import {DataTableModule} from 'primeng/primeng';
import { FilterNumbersComponent } from './components/filter-numbers/filter-numbers.component';
import { DragDropComponent } from './components/drag-drop/drag-drop.component';
import {TableDataService} from './services/table-data.service';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    BetsTableModule,
  ],
  providers: [TableDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
