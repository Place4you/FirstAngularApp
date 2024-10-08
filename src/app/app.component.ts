import { Component, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { AppNavbar } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { HeroImageComponent } from './hero-image/hero-image.component';
import { PostTitleComponent } from './post-title/post-title.component';
import { TemplateComponent } from './forms/template/template.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, TemplateComponent, AppNavbar,HeaderComponent, HeroImageComponent,PostTitleComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'FirstAngularApp';
  new = 'checking the variable';
  recevied:string = ""; 
// In your parent component TypeScript
parentData: string = 'Coming from parent Component';

fromChild($event:any):void {
  console.log($event);
  this.recevied = $event;

}


}
