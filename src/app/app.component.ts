import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'my-portfolio';
  collapse = true;

  contactForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) {
    this.contactForm = this.formBuilder.group({
      name: ['', Validators.required],
      mail: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.scrollToTopOnRefresh();
    this.setupLinkClickHandlers();
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
      contactForm.addEventListener('submit', (event: Event) => this.validateForm(event));
    }
  }

  validateForm(event: Event): void {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const nameInput = form.elements.namedItem('name') as HTMLInputElement;
    const mailInput = form.elements.namedItem('mail') as HTMLInputElement;
    const messageInput = form.elements.namedItem('message') as HTMLTextAreaElement;

    this.resetValidationMessages();

    const validationErrors: string[] = [];

    if (!nameInput.value.trim()) {
      validationErrors.push('Please enter your name.');
      this.showValidationMessage('name-error', 'Please enter your name.');
    }

    if (!mailInput.value.trim()) {
      validationErrors.push('Please enter your email.');
      this.showValidationMessage('mail-error', 'Please enter your email.');
    } else if (!this.isValidEmail(mailInput.value.trim())) {
      validationErrors.push('Please enter a valid email address.');
      this.showValidationMessage('mail-error', 'Please enter a valid email address.');
    }

    if (!messageInput.value.trim()) {
      validationErrors.push('Please enter your message.');
      this.showValidationMessage('message-error', 'Please enter your message.');
    }

    if (validationErrors.length > 0) {
      return;
    }

    form.submit();
  }

  resetValidationMessages(): void {
    const validationMessages = document.querySelectorAll('.validation-message');
    validationMessages.forEach(message => (message.textContent = ''));
  }

  showValidationMessage(fieldId: string, message: string): void {
    const errorElement = document.getElementById(fieldId);
    if (errorElement) {
      errorElement.textContent = message;
    }
  }

  isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
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
            top: targetElement.offsetTop - 50,
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
