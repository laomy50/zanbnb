import { Component , inject, TemplateRef } from '@angular/core';
import { ModalDismissReasons, NgbDatepickerModule, NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {

  ngAfterViewInit() {
    const body = document.querySelector("body") as HTMLElement;
    const nav = document.querySelector("nav") as HTMLElement;
    const modeToggle = document.querySelector(".dark-light") as HTMLElement;
    const searchToggle = document.querySelector(".searchToggle") as HTMLElement;
    const sidebarOpen = document.querySelector(".sidebarOpen") as HTMLElement;
    const sidebarClose = document.querySelector(".sidebarClose") as HTMLElement;

    let getMode = localStorage.getItem("mode");

    if (getMode && getMode === "dark-mode") {
      body.classList.add("dark");
    }

    // TypeScript code to toggle dark and light mode
    modeToggle.addEventListener("click", () => {
      modeToggle.classList.toggle("active");
      body.classList.toggle("dark");

      // TypeScript code to keep user-selected mode even after page refresh or file reopen
      if (!body.classList.contains("dark")) {
        localStorage.setItem("mode", "light-mode");
      } else {
        localStorage.setItem("mode", "dark-mode");
      }
    });

    // TypeScript code to toggle search box
    searchToggle.addEventListener("click", () => {
      searchToggle.classList.toggle("active");
    });

    // TypeScript code to toggle sidebar
    sidebarOpen.addEventListener("click", () => {
      nav.classList.add("active");
    });

    body.addEventListener("click", (e) => {
      let clickedElm = e.target as HTMLElement;

      if (
        !clickedElm.classList.contains("sidebarOpen") &&
        !clickedElm.classList.contains("menu")
      ) {
        nav.classList.remove("active");
      }
    });
  }
  // ......modal template.....
  private modalService = inject(NgbModal);
	closeResult = '';

	open(content: TemplateRef<any>) {
		this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(
			(result) => {
				this.closeResult = `Closed with: ${result}`;
			},
			(reason) => {
				this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
			},
		);
	}

  opens(content1: TemplateRef<any>) {
		this.modalService.open(content1, { ariaLabelledBy: 'modal-basic-title' }).result.then(
			(result) => {
				this.closeResult = `Closed with: ${result}`;
			},
			(reason) => {
				this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
			},
		);
	}

	private getDismissReason(reason: any): string {
		switch (reason) {
			case ModalDismissReasons.ESC:
				return 'by pressing ESC';
			case ModalDismissReasons.BACKDROP_CLICK:
				return 'by clicking on a backdrop';
			default:
				return `with: ${reason}`;
		}
	}
  // 
}
