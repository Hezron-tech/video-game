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
    let stringArray: string[] = [];
    this.platforms.forEach((platform) =>
      stringArray.push(platform.platform.name)
    );
    this.oneStringPlatforms = stringArray.join(', ');
  }
}
