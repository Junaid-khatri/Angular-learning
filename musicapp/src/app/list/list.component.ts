import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  public url:string ="";
  public list:any;

  constructor(private router:Router){}

  ngOnInit(): void {
      this.url = this.router.url;
      if(this.url.includes('artist')){
        if(this.url.includes('arjit')){
          console.log('arjit');
        }
        else if(this.url.includes('atif-aslam')){
          console.log('atif-aslam');
        }
        else{
          console.log('all');
        }
      }
      else if(this.url.includes('mood')){
          if(this.url.includes('happy')){
            console.log('happy');

          }
          else if(this.url.includes('sad')){
            console.log('sad');
          }
          else{
            console.log('all');
          }

      }
      else{

      }
  }

}
