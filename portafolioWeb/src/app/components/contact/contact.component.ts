import { Component } from '@angular/core';

@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  emailLink = 'mailto:sdavidleonardo01@gmail.com';
  phoneNumberLink = 'https://wa.me/573223126566';
  githubLink = 'https://github.com/DavidSepulvedaCh';
  linkedinLink = 'https://www.linkedin.com/in/david-leonardo-sep%C3%BAlveda-21303a255/';
}
