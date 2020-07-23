import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DemoReaderService {

  constructor() { }

  readDemo(file: File): Promise<string> {
    return new Promise<string>((resolve, reject) => {
      if (!file) {
        resolve('');
      }

      const reader = new FileReader();

      reader.onload = (e) => {
        const text = reader.result.toString();
        resolve(text);
      };
      reader.readAsText(file);
    });
  }
}
