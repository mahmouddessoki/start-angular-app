import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements AfterViewInit {

  @ViewChild("navbar") navbar!: ElementRef;


  OnScroll(): void {
    document.addEventListener('scroll', (e) => {
      const scrollPosition = window.scrollY;
      if (scrollPosition >= 55) {
        this.navbar.nativeElement.classList.remove('p-3')
      } else {
        this.navbar.nativeElement.classList.add('p-3')
      }
    })
  }
  ngAfterViewInit(): void {
    this.OnScroll()

  }
  ngAfterViewChecked(): void {
    this.OnScroll()
  }

}
