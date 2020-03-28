import { Component, OnInit } from '@angular/core';
import {ParseDemoService} from './parse-demo.service';

@Component({
  selector: 'app-demo-analyzer',
  templateUrl: './demo-analyzer.component.html',
  styleUrls: ['./demo-analyzer.component.scss']
})
export class DemoAnalyzerComponent implements OnInit {

  demoFile: File;

  constructor(private parseDemoService: ParseDemoService) { }

  ngOnInit() {}

  analyzeDemo(event: Event) {
    // Saves the uploaded file in demoFile
    const target = event.target as HTMLInputElement;
    this.demoFile = (target.files as FileList)[0];

    this.parseDemoService.parseDemo(this.demoFile);

  }
}
