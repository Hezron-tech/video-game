import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingService } from 'src/app/services/loading.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent implements OnInit {
  query: string = '';

  constructor(private router: Router, private loader: LoadingService) {}

  ngOnInit(): void {}

  onSubmit() {
    this.loader.startLoading();
    this.router
      .navigate(['query', this.query])
      .then(() => this.loader.stopLoading());
  }
}
