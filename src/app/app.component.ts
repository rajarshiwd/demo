import { Component } from '@angular/core';
import {CommentsService} from './comments.service';

export class Comments  
  {
    id:number;
    comment:string
  }


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  commentsArray;
  constructor(private service:CommentsService){
      
  }

  ngOnInit(){
   this.getComments();
  }

  getComments(){
    console.log('hey called')
    this.service.getFoods().subscribe(data=> this.commentsArray = data);
    
  }

  childEvent(value){
   this.commentsArray.push(value)
    }
}
