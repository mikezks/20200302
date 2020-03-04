import { Routes } from '@angular/router';
import { HomeComponent } from './core/container/home/home.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'flight-booking',
        loadChildren: () => import('./flight-booking/flight-booking.module')
            .then(m => m.FlightBookingModule)
    },
    {
        path: '**',
        redirectTo: 'home'
    }
];
