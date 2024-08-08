import { RouterLinkActive, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { HeroImageComponent } from './hero-image/hero-image.component';
import { PostTitleComponent } from './post-title/post-title.component';
import { AppNavbar } from './navbar/navbar.component';
import { PipesComponent } from './pipes/pipes.component';
import { TemplateComponent } from './forms/template/template.component';
import { ReactiveComponent } from './forms/reactive/reactive.component';
import { FormsComponent } from './forms/forms.component';
import { GetapiComponent } from './shared/api/getapi/getapi.component';
import { PostapiComponent } from './shared/api/postapi/postapi.component';
import { ApiComponent } from './shared/api/api.component';
import { LifeCycleEventsComponent } from './life-cycle-events/life-cycle-events.component';
import { LoginComponent } from './login/login.component';
import { LayoutComponent } from './layout/layout.component';
import { SignupComponent } from './signup/signup.component';
import { loginCheckGuard } from './core/guards/login-check.guard';

export const routes: Routes = [
    {
      path: '',
      redirectTo: 'login',
      pathMatch: 'full'
    },
    {
      path: 'login',
      component: LoginComponent
    },
    {
      path: 'signup',
      component: SignupComponent
    },
    {
      path: 'layout',
      component: LayoutComponent,
      canActivate: [loginCheckGuard],
      children: [
        {
          path: 'add-header',
          component: HeaderComponent,
        },
        {
          path: 'add-hero',
          component: HeroImageComponent
        },
        {
          path: 'add-postTitle',
          component: PostTitleComponent
        },
        {
          path: 'add-navbar',
          component: AppNavbar
        },
        {
          path: 'add-pipes',
          component: PipesComponent
        },
        {
          path: 'add-form',
          component: FormsComponent
        },
        {
          path: 'add-template',
          component: TemplateComponent
        },
        {
          path: 'add-reactive',
          component: ReactiveComponent
        },
        {
          path: 'add-getapi',
          component: GetapiComponent
        },
        {
          path: 'add-postapi',
          component: PostapiComponent
        },
        {
          path: 'add-apicomp',
          component: ApiComponent
        },
        {
          path: 'add-app-life-cycle-events',
          component: LifeCycleEventsComponent
        }
      ]
    },
    {
      path: '**',
      redirectTo: 'login'
    }
  ];
  
