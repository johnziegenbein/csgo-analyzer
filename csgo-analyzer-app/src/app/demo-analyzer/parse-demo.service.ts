
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ParseDemoService {

  constructor() { }

  parseDemo(file: File): File {
    console.log(file);
    const fileReader = new FileReader();
    fileReader.onload = (e) => {
      console.log(fileReader.result);
    };

    /*
    let fileReader = new FileReader();
        fileReader.onloadend = (e) => {
           //console.log(myReader.result);
           // Entire file
           console.log(myReader.result);

           // By lines
           var lines = myReader.result.split('\n');
           for(var line = 0; line < lines.length; line++){
               console.log(lines[line]);
           }

           this.fileString = myReader.result;
        };
     */

    fileReader.readAsText(file);


    return file;
  }
}
