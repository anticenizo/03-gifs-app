import { Component } from "@angular/core";
import { RouterLink, RouterLinkActive } from "@angular/router";

interface MenuOption{
  icon: string;
  label: string;
  route: string;
  subLabel: string;
}

@Component({
  selector: 'gifs-side-menu-options',
  templateUrl: './side-menu-options.html',
  imports: [RouterLink, RouterLinkActive],
})
export class SideMenuOptions {

  menuOptions: MenuOption[] = [
    {
      icon: 'fa-solid fa-chart-line',
      label: "Trending",
      subLabel: "Gifs populares",
      route: '/dashboard/trending'

    },
    {
      icon: 'fa-solid fa-magnifying-glass',
      label: "Buscador",
      subLabel: "Buscar gifs",
      route: '/dashboard/search'

    }
  ]
}
