import { Routes } from '@angular/router';

import { IndexComponent } from './index/index.component';
import { ProjetosComponent } from './projetos/projetos.component';

export const ROUTES: Routes = [
  { path: '', component: IndexComponent },
  { path: 'projetos', component: ProjetosComponent },
]