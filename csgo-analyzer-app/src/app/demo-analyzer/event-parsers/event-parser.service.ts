import {DemoData} from '../datastructures/demo-data';

export interface EventParser {
  parseEventIntoDemoData(demoData: DemoData, eventList: string[]);
}
