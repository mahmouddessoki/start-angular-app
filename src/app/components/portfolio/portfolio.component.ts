import { Component } from '@angular/core';
interface img_info {
  img_url: string;
}
@Component({
  selector: 'app-portfolio',
  imports: [],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {

  port_imgs: img_info[] = [
    { img_url: '/imgs/poert1.png' },
    { img_url: '/imgs/port2.png' },
    { img_url: '/imgs/port3.png' },
    { img_url: '/imgs/poert1.png' },
    { img_url: '/imgs/port2.png' },
    { img_url: '/imgs/port3.png' },
  ]

  show_modal: boolean = false;
  modal_img?: string;
  openModal(index: number) {
    this.show_modal = true;

    this.modal_img = this.port_imgs[index].img_url;

  }
  closeModal(event: MouseEvent) {
    let t = event.target as HTMLElement;
    if (t.classList.contains("port-modal")) {
      this.show_modal = false;

    }

  }
}
