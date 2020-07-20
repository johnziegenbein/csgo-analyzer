import { Injectable } from '@angular/core';
import {EventAnalyzer} from './event-analyzer.service';
import {DemoData} from '../datastructures/demo-data';

@Injectable({
  providedIn: 'root'
})
export class MapEventAnalyzer implements EventAnalyzer {
  constructor() { }

  addEventAnalysis(demoData: DemoData, demoEvent: string) {
    demoData.matchData.map = demoEvent.split(',')[1];
  }
}
