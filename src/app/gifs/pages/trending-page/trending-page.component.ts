import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GiftListComponent } from "../../components/gift-list/gift-list.component";

@Component({
  selector: 'app-trending-page',
  imports: [RouterOutlet, GiftListComponent],
  templateUrl: './trending-page.component.html',
})
export default class TrendingPageComponent { }
