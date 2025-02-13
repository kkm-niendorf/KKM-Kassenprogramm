import { Routes } from '@angular/router';
import { LandingpageComponent } from './pages/landingpage/landingpage.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { SellerlistComponent } from './pages/sellerlist/sellerlist.component';
import { VerkaufsprogrammComponent } from './pages/verkaufsprogramm/verkaufsprogramm.component';
import { BuchfuehrungComponent } from './pages/buchfuehrung/buchfuehrung.component';
import { AddsellerComponent } from './pages/addseller/addseller.component';

export const routes: Routes = [
    {
        path: '', component: LandingpageComponent 
    },
    {
        path: 'home', component: HomepageComponent
    },
    {
        path: 'seller', component: SellerlistComponent
    },
    {
        path: 'sale', component: VerkaufsprogrammComponent
    },
    {
        path: 'accounting', component: BuchfuehrungComponent
    },
    {
        path: 'addseller', component: AddsellerComponent
    },
];
