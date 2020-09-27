import { BlogService } from './../service/blog.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'blogform',
  templateUrl: './blogform.component.html',
  styleUrls: ['./blogform.component.css'],
})
export class BlogformComponent implements OnInit {
  categories = ['technical', 'personal', 'nature'];

  selected = 'Choose a category';

  constructor(private service: BlogService) {}

  ngOnInit(): void {}
  insert(blog) {
    console.log('inserting...');
    this.service.addBlog(blog);
    let title = document.querySelector('#title');
    title.value = '';
    let description = document.querySelector('#description');
    description.value = '';
    let category = document.querySelector('#category');
    category.value = '';
  }
}
