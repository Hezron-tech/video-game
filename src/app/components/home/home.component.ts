import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { APIResponse, Game } from 'src/app/models';
import { HttpService } from 'src/app/services/http.service';
import { LoadingService } from 'src/app/services/loading.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  public games: Game[] = [];
  private gameSub: Subscription = new Subscription();
  private routeSub: Subscription = new Subscription();
  loading$ = this.loader.loading$;

  constructor(
    private httpService: HttpService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private loader: LoadingService,
  ) {}

  ngOnInit(): void {
    this.routeSub = this.activatedRoute.params.subscribe((params: Params) => {
      if (params['query']) {
        this.searchGames(params['query']);
      } else {
        this.searchGames();
      }
    });
  }

  ngOnDestroy(): void {
    if (this.gameSub) this.gameSub.unsubscribe();
    if (this.routeSub) this.routeSub.unsubscribe();
  }

  searchGames(query?: string): void {
    this.loader.startLoading();
    this.gameSub = this.httpService
      .getGames(query)
      .subscribe((gameList: APIResponse<Game>) => {
        this.games = gameList.results;
        this.loader.stopLoading();
      });
  }

  goToDetails(id: number) {
    this.router.navigate(['details', id]);
  }
}
