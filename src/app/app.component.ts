import { Component, OnInit } from '@angular/core';

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
    this.setupLinkClickHandlers();
  }

  openGitHub() {
    window.open('https://github.com/KiranmaiReddy14', '_blank');
  }

  openLinkedIn() {
    window.open('https://www.linkedin.com/in/kiranmai-chigarakula-b0070618a/', '_blank');
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
    }
  }


  setupLinkClickHandlers(): void {
    const anchors = document.querySelectorAll('.nav-items a');
    anchors.forEach(anchor => {
      anchor.addEventListener('click', (e: Event) => {
        e.preventDefault();

        const targetId = (anchor.getAttribute('href') ?? '').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 70,
            behavior: 'smooth'
          });
        }

        const nav = document.querySelector('.nav-items');
        if (nav) {
          nav.classList.remove('active');
        }
      });
    });
  }

  viewResume() {
    const pdfUrl = 'assets/kiranmai_chigarakula.pdf';
    window.open(pdfUrl, '_blank');
  }

}
