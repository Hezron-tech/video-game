import { Component, Input, OnInit } from '@angular/core';
import { ParentPlatform } from '../../models';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() name: string = '';
  @Input() platforms: ParentPlatform[] = [];
  @Input() image: string = '';
  oneStringPlatforms: string = '';

  constructor() {}

  ngOnInit(): void {
    this.platforms.forEach((platform) => {
      this.oneStringPlatforms += platform.platform.name + ', ';
    });
    this.oneStringPlatforms = this.oneStringPlatforms.slice(
      0,
      this.oneStringPlatforms.length - 2
    );
  }
}
