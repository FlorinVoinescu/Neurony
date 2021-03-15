import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public posts;
  public subreddit;
  public subredditError = '';

  constructor(private http: HttpClient) {
    this.subreddit = localStorage.getItem('searchResult');
  }

  getAllPosts(): any {
    return new Promise((resolve, reject) => {
      this.http.get('https://www.reddit.com/r/' + this.subreddit + '.json').subscribe(
        (response: any) => {
          this.posts = response.data.children;
          resolve(response.data.children);
        },
        (error) => {
          reject('Your search did not match any subreddits. Please try');
        });
    });
  }
}
