import { Routes } from '@angular/router';
import { authGuard } from './core/auth/auth.guard';
//import { adminGuard } from './core/auth/admin.guard';

export const routes: Routes = [
  {
    path: 'login',
    loadComponent: () =>
      import('./features/auth/login/login.component').then((m) => m.LoginComponent),
  },
  {
    path: 'register',
    loadComponent: () =>
      import('./features/auth/register/register.component').then((m) => m.RegisterComponent),
  },
  {
    path: 'stories',
    canActivate: [authGuard],
    loadComponent: () =>
      import('./features/stories/story-search/story-search.component').then(
        (m) => m.StorySearchComponent,
      ),
  },
/*  {
    path: 'admin',
    canActivate: [adminGuard],
    loadComponent: () =>
      import('./features/admin/media-source-editor/media-source-editor.component').then(
        (m) => m.MediaSourceEditorComponent,
      ),
  },*/
  { path: '', redirectTo: '/stories', pathMatch: 'full' },
];
