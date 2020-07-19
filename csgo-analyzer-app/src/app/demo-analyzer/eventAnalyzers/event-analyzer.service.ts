import {DemoData} from '../datastructures/demo-data';

export interface EventAnalyzer {
  addEventAnalysis(demoData: DemoData, demoEvent: string);
}
