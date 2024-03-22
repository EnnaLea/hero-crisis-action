import { Route, Routes,  } from "@angular/router";
import { HeroListComponent } from "./hero-list/hero-list.component";
import { HeroDetailComponent } from "./hero-detail/hero-detail.component";


export const heroRoutes: Routes = [
    {path: 'heroes', component: HeroListComponent, data: { animation: 'heroes' }},
    {path: 'hero/:id', component: HeroDetailComponent, data: { animation: 'heroes' }},
]
//forChild

export default heroRoutes;