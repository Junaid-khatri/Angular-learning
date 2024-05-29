import { Component,EventEmitter,Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './test.component.html',
  styleUrl: './test.component.css'
})
export class TestComponent {

  @Input('parentData') public title : any;
  @Output() customEvent = new EventEmitter();

  public name = "test";
  public data = "";
  public condition = false;
  public info:any ;
  public color = "";
  public pmsg = "";

  
  onClick(){
    if(this.data == ""){
      this.data = "false";
    }
    else{
      this.data = "true";
    }
    console.log(this.data);
  }

  send(){
    this.customEvent.emit(this.pmsg);
  }
}
