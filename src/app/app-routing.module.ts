import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {BetsTableComponent} from './modules/bets-table/bets-table.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'bets-table',
    pathMatch: 'full'
  },
  // { path: 'bets-table', loadChildren: './modules/bets-table/bets-table.module#BetsTableModule', },
  {path: 'bets-table', component: BetsTableComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
