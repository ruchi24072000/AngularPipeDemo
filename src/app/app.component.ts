import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TempratureConverterPipe } from './temprature-converter.pipe';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FormsModule,CommonModule,TempratureConverterPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'


})
export class AppComponent {
  
 
   toDate: Date = new Date(); 
   title: string = 'Angular pipes Example' ;
   msg: string= 'Welcome to Angular';

   num: number= 9542.14554;

   per:number=.466;

   cur: number= 175;

   Fahrenheit:number=100;
   celcius:number=98.4;
   
}
