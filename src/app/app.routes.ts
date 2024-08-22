import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { HistoryComponent } from './pages/history/history.component';
import { LiveComponent } from './pages/live/live.component';
import { PointTableComponent } from './pages/point-table/point-table.component';
import { ContactComponent } from './pages/contact/contact.component';

export const routes: Routes = [
    {
        path:"home",
        component:HomeComponent,
        title:"Home | KNC"
    },
    {
        path:"history",
        component:HistoryComponent,
        title:" Match History | KNC"
    },
    {
        path:"live",
        component:LiveComponent,
        title:"Live Matches | KNC"
    },
    {
        path:"point-table",
        component:PointTableComponent,
        title:"Point Table | KNC"
    },
    {
        path:"contact",
        component:ContactComponent,
        title:"Contact | KNC"
    }

];
