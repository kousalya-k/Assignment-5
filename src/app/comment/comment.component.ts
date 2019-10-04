import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Book } from '../book';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  
  

  constructor(public svc:DataService, private route: ActivatedRoute) { }

  bookId:number;
  book:Book;
  newComment:string;
  ngOnInit() {
    this.bookId=parseInt(this.route.snapshot.paramMap.get('id'));
    this.svc.books.forEach(element=>{
      if(element.id==this.bookId){
        this.book=element;
      }
    });
  }
  Comment(){
    console.log("hi");
    this.book.comments_string.push(this.newComment);
    console.log(this.book.comments_string);
    this.newComment="";
  }

}
