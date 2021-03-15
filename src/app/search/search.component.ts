import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {DataService} from '../services/data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  searchResult = '';
  errorMessage = '';

  constructor(private router: Router,
              private dataService: DataService) {
  }

  ngOnInit(): void {
  }

  search(): any {
    if (this.searchResult !== '') {
      localStorage.setItem('searchResult', this.searchResult);
      this.dataService.subreddit = this.searchResult;
      this.router.navigateByUrl('/posts').catch(error => {
        console.log(error);
      });
    } else {
      this.errorMessage = 'The subreddit name is required!';
    }
  }
}
