import { Component,Output,EventEmitter } from '@angular/core';
import {CommentsService} from './comments.service';

@Component({
    selector: 'child-app',
    templateUrl: './child-app.component.html'
   
  })
  export class AppchildComponent 
  
  { 
  
    @Output() emitData:EventEmitter <any> = new EventEmitter();
    
    comment;
    courses:any=[];
  constructor(private service:CommentsService){
  
  }
  
  ngOnInit(){
   
  
  }
  
  onSubmit(value){

    this.service.createComment(value).subscribe(res=>this.emitData.emit(res));

    

  
  }
  
  
  
  }
 