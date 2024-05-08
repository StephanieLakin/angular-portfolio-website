import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  formData!: FormGroup ;
  
  constructor(private titleService: Title, private formBuilder: FormBuilder, private contact: ContactService){
    this.titleService.setTitle('Stephanie Lakin - Contact')
  }

  ngOnInit(): void {
    this.formData = this.formBuilder.group({
      user_name: ['', Validators.required],
      user_email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }

  // This method is called when the form is submitted
  onFormSubmit(): void {
    if (this.formData.valid) {
      // Prepare the template parameters from the form's data
      const templateParams = {
        user_name: this.formData.value.user_name,
        user_email: this.formData.value.user_email,
        message: this.formData.value.message
      };

      // Call the sendEmail method with the template parameters
      this.contact.sendEmail(templateParams).then(() => {
        alert('Email sent successfully!');
        this.formData.reset();
      }).catch(error => {
        console.error('Email send error:', error);
        alert('Failed to send email. Please try again later.');
      });
    }
  }


//  onSubmit(): void {
//     if (this.formData && this.formData.valid) {
//       const templateParams = {
//         fullname: this.formData.value.fullname,
//         email: this.formData.value.email,
//         message: this.formData.value.message
//       };

//       this.contact.sendEmail(templateParams)
//         .then(() => {
//           alert('Email sent successfully!');
//           this.formData.reset();
//         })
//         .catch((error: any) => {
//           console.error('Email send error:', error);
//           alert('Failed to send email. Please try again later.');
//         });
//     }
//   }
}
