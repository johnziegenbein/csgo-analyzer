import { Component, OnInit } from '@angular/core';
import {DemoReaderService} from './demo-reader.service';
import {DemoParserDelegator} from './demo-event-delegator.service';
import {DemoData} from './datastructures/demo-data';
import {Router} from '@angular/router';

@Component({
  selector: 'app-demo-analyzer',
  templateUrl: './demo-analyzer.component.html',
  styleUrls: ['./demo-analyzer.component.scss']
})
export class DemoAnalyzerComponent implements OnInit {

  demoFile: File;

  constructor(private demoReader: DemoReaderService,
              private demoParserDelegator: DemoParserDelegator,
              private router: Router) {
  }

  ngOnInit() {}

  async analyzeDemo(fileChangedEvent: Event) {
    // Saves the uploaded file in demoFile
    const target = fileChangedEvent.target as HTMLInputElement;
    this.demoFile = (target.files as FileList)[0];

    const demo = await this.demoReader.readDemo(this.demoFile);
    const demoData: DemoData = await this.demoParserDelegator.parseDemoFromCsv(demo);

    this.router.navigate(['demo/result']);
  }
}
