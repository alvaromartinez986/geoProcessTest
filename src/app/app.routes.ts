import { RouterModule, Routes} from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LaboratoriesComponent } from './components/laboratories/laboratories.component';
import { LaboratoryComponent } from './components/laboratory/laboratory.component';





const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'laboratories', component: LaboratoriesComponent },
  { path: 'laboratory/:id', component: LaboratoryComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
