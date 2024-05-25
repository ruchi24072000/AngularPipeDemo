import { Component ,OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-async-pipe-demo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './async-pipe-demo.component.html',
  styleUrl: './async-pipe-demo.component.css'
})
export class AsyncPipeDemoComponent {
  // obsValue = new Observable((observer) => {
  //   console.log("Observable starts")
  //   setTimeout(() => { observer.next("90000") }, 1000);
  // })
 
  obsValue = new Observable((observer) => {
    console.log("Observable starts")
    setTimeout(() => { 
      console.log("Returns value")
      observer.next("1000") 
    }, 5000);
  })/*.pipe(shareReplay())*/;
 


}
