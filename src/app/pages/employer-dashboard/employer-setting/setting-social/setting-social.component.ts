import { Component } from '@angular/core';
import {FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {NgForOf} from '@angular/common';
import {TranslatePipe} from '@ngx-translate/core';

@Component({
  selector: 'app-setting-social',
  imports: [
    ReactiveFormsModule,
    NgForOf,
    TranslatePipe
  ],
  templateUrl: './setting-social.component.html',
  standalone: true,
  styleUrl: './setting-social.component.scss'
})
export class SettingSocialComponent {
  socialLinksForm: FormGroup;

  platforms = [
    { value: 'facebook', label: 'Facebook', icon: '' },
    { value: 'twitter', label: 'Twitter', icon: '' },
    { value: 'instagram', label: 'Instagram', icon: '' },
    { value: 'youtube', label: 'YouTube', icon: '' },
    { value: 'linkedin', label: 'LinkedIn', icon: '' },
    { value: 'tiktok', label: 'TikTok', icon: '' },
    { value: 'snapchat', label: 'Snapchat', icon: '' },
    { value: 'pinterest', label: 'Pinterest', icon: '' }
  ];

  constructor(private fb: FormBuilder) {
    this.socialLinksForm = this.fb.group({
      socialLinks: this.fb.array([])
    });

    // Initialize with 1 item
    this.addNewSocialLink();
  }

  get socialLinks() {
    return this.socialLinksForm.get('socialLinks') as FormArray;
  }

  addNewSocialLink() {
    const socialLink = this.fb.group({
      platform: ['facebook', Validators.required],
      url: ['', [Validators.required, Validators.pattern('https?://.+')]]
    });
    this.socialLinks.push(socialLink);
  }

  removeSocialLink(index: number) {
    this.socialLinks.removeAt(index);
  }

  onSubmit() {
    console.log(this.socialLinksForm.value);
  }
}
