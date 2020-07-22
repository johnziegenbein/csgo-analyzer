import {DemoData} from '../datastructures/demo-data';

export interface EventAnalyzer {
  addEventAnalysis(demoData: DemoData, eventList: string[]);
}
