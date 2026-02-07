import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DataService {

  constructor(
    private http: HttpClient
  ) { }

  getData(url: string): Promise<any> {
    return this.http.get(this.config.getAPI() + url)
    .toPromise();
  }

  getDatasets(): Promise<any> {
    return this.getData('/datasets');
  }

}
