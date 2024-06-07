import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'my-portfolio';
  collapse = true;

  ngOnInit(): void {
    this.scrollToTopOnRefresh();
  }

  scrollToTopOnRefresh() {
    window.addEventListener('beforeunload', () => {
      window.scrollTo(0, 0);
    });
  }

  toggleMenu(): void {
    const nav = document.querySelector('.nav-items');
    if (nav) {
        nav.classList.toggle('active');
    } else {
        console.error('Navigation element not found');
    }
  }

  viewResume() {
    const pdfUrl = 'assets/kiranmai_chigarakula.pdf';
    window.open(pdfUrl, '_blank');
  }

}
