import { Component, ViewChild, ElementRef} from '@angular/core';
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
  leftcommentsArray:any[] = [];
  rightcommentsArray:any[]= [];
  payPosition = 'left';
  cloudPosition = 'right';
  leftTrue:boolean = true;
  @ViewChild('modal') modal: ElementRef;
  constructor(private service:CommentsService){
      
  }

  ngOnInit(){

  }

  setLeftBoolean(value:boolean){
   this.leftTrue= value;
  }

 

  childEvent(value){
    this.modal.nativeElement.click();
    if(this.leftTrue == true){
      this.leftcommentsArray.push(value)
    }else if(this.leftTrue == false){
      this.rightcommentsArray.push(value);
    }
  
    }
}
