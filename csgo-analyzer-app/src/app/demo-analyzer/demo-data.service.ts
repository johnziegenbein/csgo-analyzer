import { Injectable } from '@angular/core';
import {DemoData} from "./datastructures/demo-data";

@Injectable({
  providedIn: 'root'
})



export class DemoDataService {

  demoData: DemoData = new DemoData();

  constructor() { }

}
