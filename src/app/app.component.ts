import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TestComponent } from './test/test.component'
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TestComponent,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
}) 
export class AppComponent {
  title = 'First Project';
  public message = ""; 
  public isDataPresent = false;

  msgReceive(event:any){
    this.message = event;

    if(event == ""){
      this.isDataPresent = false;
    }
    else{
      this.isDataPresent = true;
    }

  }


}
