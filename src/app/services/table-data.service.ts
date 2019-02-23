import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class TableDataService {

  dataURL = 'assets/stat.json';

  constructor(private httpClient: HttpClient) {
  }

  getTableData(): Observable<any> {
    return this.httpClient.get(this.dataURL);
  }
}

