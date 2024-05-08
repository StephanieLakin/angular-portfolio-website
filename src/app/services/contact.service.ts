import { Injectable } from '@angular/core';
import emailjs from 'emailjs-com';

// This function is designed to be called when a form is submitted.
//  It captures the form submission event,
//  prevents the page from reloading,
//  and then uses the EmailJS service to send the form data to the specified email template.
//  The .then() method handles the promise returned by sendForm,
//  allowing for a response to be logged in the console
//  whether the email is sent successfully or fails due to an error.

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  constructor() {
    emailjs.init("WASuMXVyI-15feXEc");
  }
    // The method sendEmail returns a Promise that resolves to void
    sendEmail(templateParams: { user_name: string; user_email: string; message: string }): Promise<void> {
      return emailjs.send('service_qqhth2j', 'template_1xv0y6n', templateParams)
        .then(response => {
          console.log('Email successfully sent!', response.text);
        })
        .catch(error => {
          console.error('Failed to send email.', error.text);
        });
    }
  





  // sendEmail(event: Event) {
  //   event.preventDefault();
  //   emailjs
  //     .sendForm(
  //       'service_qqhth2j',
  //       'template_1xv0y6n',
  //       event.target as HTMLFormElement
  //     )
  //     .then(
  //       (result) => {
  //         console.log('Email successfully sent!', result.text);
  //       },
  //       (error) => {
  //         console.log('Failed to send email.', error.text);
  //       }
  //     );
  // }
}
