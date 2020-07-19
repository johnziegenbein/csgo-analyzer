import { Component, OnInit } from '@angular/core';
import {ParseDemoService} from './parse-demo.service';
import {DemoEventDelegator} from './demo-event-delegator.service';
import {DemoData} from './datastructures/demo-data';

@Component({
  selector: 'app-demo-analyzer',
  templateUrl: './demo-analyzer.component.html',
  styleUrls: ['./demo-analyzer.component.scss']
})
export class DemoAnalyzerComponent implements OnInit {

  demoFile: File;

  constructor(private parseDemoService: ParseDemoService,
              private demoEventDelegator: DemoEventDelegator) {
  }

  ngOnInit() {}

  async analyzeDemo(fileChangedEvent: Event) {
    // Saves the uploaded file in demoFile
    const target = fileChangedEvent.target as HTMLInputElement;
    this.demoFile = (target.files as FileList)[0];

    const parsedDemo = await this.parseDemoService.parseDemo(this.demoFile);

    const demoData: DemoData = this.demoEventDelegator.analyze(parsedDemo);

  }
}
