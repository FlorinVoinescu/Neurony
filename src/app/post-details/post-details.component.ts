import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {DataService} from '../services/data.service';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss']
})
export class PostDetailsComponent implements OnInit {
  private allPosts;
  selectedPostId;
  selectedPost;
  subreddit;
  isLoading = true;

  constructor(private route: ActivatedRoute,
              private dataService: DataService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.subreddit = this.dataService.subreddit;
    this.selectedPostId = this.route.snapshot.paramMap.get('id');
    this.dataService.getAllPosts().then(posts => {
      this.allPosts = posts;
      this.selectedPost = this.dataService.posts.filter(post => post.data.id === this.selectedPostId);
      this.isLoading = false;
    });
  }

  backToHome(): any {
    this.router.navigateByUrl('/search');
  }

}
