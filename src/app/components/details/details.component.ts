import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Game } from 'src/app/models';
import { HttpService } from 'src/app/services/http.service';
import { LoadingService } from 'src/app/services/loading.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  gameInfo: Game = <Game>{};
  loading$ = this.loader.loading$;

  constructor(
    private http: HttpService,
    private activatedRoute: ActivatedRoute,
    private loader: LoadingService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((params) => {
      this.loader.startLoading();
      this.http.getGameInfo(params.id).subscribe((game: Game) => {
        this.gameInfo = game;
        console.log(game);
        this.loader.stopLoading();
      });
    });
  }
}
