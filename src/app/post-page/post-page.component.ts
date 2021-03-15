import {Component, OnInit} from '@angular/core';
import {DataService} from '../services/data.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-post-page',
  templateUrl: './post-page.component.html',
  styleUrls: ['./post-page.component.scss']
})
export class PostPageComponent implements OnInit {
  private allPosts;
  public displayedPosts;
  public subreddit;
  public subredditError = '';

  constructor(private dataService: DataService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.subreddit = this.dataService.subreddit;
    this.dataService.getAllPosts().then(posts => {
      this.allPosts = posts;
      this.allPosts = this.allPosts.sort((one, two) => (one.data.ups > two.data.ups ? -1 : 1));
      this.displayedPosts = this.allPosts.slice(0, 10);
    }).catch(err => {
      this.subredditError = err;
    });
  }

  backToHome(): any {
    this.router.navigateByUrl('/search');
  }

  showDetails(post): any {
    this.router.navigate(['/posts', post.data.id], {state: post});
  }
}
