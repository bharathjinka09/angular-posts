import { BlogService } from './../service/blog.service';
import { Component, OnInit } from '@angular/core';
import { blogs } from './../model/bloglist';
import { Blog } from '../model/bloghub';

@Component({
  selector: 'app-bloglist',
  templateUrl: './bloglist.component.html',
  styleUrls: ['./bloglist.component.css'],
})
export class BloglistComponent implements OnInit {
  blogs: Blog[];

  constructor(private service: BlogService) {}

  ngOnInit(): void {
    this.blogs = this.service.getBlogs();
  }
}
