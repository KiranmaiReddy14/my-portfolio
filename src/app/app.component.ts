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
  }

  scrollToTopOnRefresh() {
    window.addEventListener('beforeunload', () => {
      window.scrollTo(0, 0);
    });
  }

  toggleCollapse(): void {
    this.collapse=!this.collapse;
  }

  viewResume() {
    const pdfUrl = 'assets/kiranmai_chigarakula.pdf';
    window.open(pdfUrl, '_blank');
  }
}
