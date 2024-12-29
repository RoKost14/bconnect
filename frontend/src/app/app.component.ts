import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './services/api.service';

import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ReactiveFormsModule, HttpClientModule, MatInputModule, MatFormFieldModule, MatSelectModule, MatButtonModule],
  providers: [HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'frontend';
  form: FormGroup;

  employeeRanges = [
    '1-10', '11-20', '21-50', '51-300', '300+'
  ]

  constructor(private fb: FormBuilder, private apiService: ApiService) {

    this.form = this.fb.group({
      companyName: ['Roman Kost', Validators.required],
      telephone: ['064066963', Validators.required],
      employees: ['', Validators.required],
      coc: ['00001111', [Validators.required, Validators.minLength(8), Validators.maxLength(8)]],
      vat: ['NL00001111', [Validators.required, Validators.pattern(/^[A-Z]{2}\d{8,12}$/)]],
      iban: ['NL46ABNA0421813253', [Validators.required, Validators.pattern(/^NL\d{2}[A-Z]{4}\d{10}$/)]],
      budget: ['2323'],
      description: ['Hallo ik ben roman', [Validators.required, Validators.maxLength(1000)]]
    });
    }
  onSubmit() {
    if(this.form.valid){
      const formData = this.form.value;
      const jsonData = JSON.stringify(formData, null, 2);
      console.log(jsonData);

      this.apiService.postData(jsonData).subscribe((response: any) =>{
        console.log('Verzonden', response)
      })

    }else{
      console.log("not valid")
    }
  }

}

