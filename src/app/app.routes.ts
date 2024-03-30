import { Routes } from '@angular/router';

import { CompOneComponent } from './comp-one/comp-one.component';
import { CompTwoComponent } from './comp-two/comp-two.component';

export const routes: Routes = [
  { path: 'first-component', component: CompOneComponent },
  { path: 'second-component', component: CompTwoComponent },
];
