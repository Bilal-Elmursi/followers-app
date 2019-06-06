import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-github-profile',
  templateUrl: './github-profile.component.html',
  styleUrls: ['./github-profile.component.css']
})
export class GithubProfileComponent implements OnInit {
  constructor(private route: ActivatedRoute , private router: Router) {
  }
  ngOnInit() {
    let x: any = this.route.queryParamMap
      .pipe(map(obj => obj))
      .subscribe(params => { params })
  }

  submit() {
    this.router.navigate(['/followers'], {
      queryParams: { id: 1, username: 'default' }
    });
  }
}
