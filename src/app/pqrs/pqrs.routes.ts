import { Routes } from "@angular/router";
import { PqrsAdminComponent } from "./pages/pqrs-admin/pqrs-admin.component";
import { PqrsPublicComponent } from "./pages/pqrs-public/pqrs-public.component";

export const PQRS_ROUTES: Routes = [
    {
        path: 'public/pqrs',
        component: PqrsPublicComponent,
    },
    {
      path: 'admin/pqrs',
      component: PqrsAdminComponent,
    },
    {
      path: '**',
      redirectTo: 'public/pqrs',
    }
]
