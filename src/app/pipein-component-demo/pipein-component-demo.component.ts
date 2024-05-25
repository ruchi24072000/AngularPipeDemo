import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-pipein-component-demo',
  standalone: true,
  imports: [],
  templateUrl: './pipein-component-demo.component.html',
  styleUrls: ['./pipein-component-demo.component.css'], 
  providers: [DatePipe]
})

export class PipeinComponentDemoComponent implements OnInit {

  toDate: Date;

  constructor(private datePipe: DatePipe) {
    this.toDate = new Date();
  }

 
  
  ngOnInit() {
    const transformedDate = this.datePipe.transform(new Date('2024-11-31'), 'yyyy-MM-dd');
    if (transformedDate) {
      this.toDate = new Date(transformedDate);
    } else {
      // Handle the null case if necessary
      console.error('Date transformation failed');
    }
  }
}