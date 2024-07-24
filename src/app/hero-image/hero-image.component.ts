import { NgClass, NgStyle, NgSwitch } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-hero-image',
  standalone: true,
  imports: [NgStyle, NgClass],
  templateUrl: './hero-image.component.html',
  styleUrl: './hero-image.component.css'
})
export class HeroImageComponent {

  person: string = 'member';
  test: boolean= false;
  testr: boolean= true;
}
