import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-faq',
  imports: [FormsModule, NgFor],
  templateUrl: './faq.html',
  styleUrl: './faq.scss',
})
export class Faq {
constructor(private router: Router) {}
    goBack(){
    this.router.navigate(['/dashboard']);
  }
  activeIndex: number | null = null;

  faqs = [
    {
      question: 'What is HR Expert?',
      answer:
        'HR Expert is a modern HR management platform that helps businesses manage employees, attendance, salaries, and clients in one place.',
    },
    {
      question: 'Who can use HR Expert?',
      answer:
        'HR Expert is designed for small to medium-sized businesses, HR professionals, and organizations that want a simple yet powerful HR solution.',
    },
    {
      question: 'Is employee data secure?',
      answer:
        'Yes. We use secure authentication, encrypted connections, and role-based access to ensure your employee and client data is protected.',
    },
    {
      question: 'Can I manage multiple clients?',
      answer:
        'Absolutely. HR Expert supports multiple clients, each with their own employees, attendance records, and salary data.',
    },
    {
      question: 'How does attendance marking work?',
      answer:
        'You can select a client, view assigned employees, and mark attendance daily using a simple and intuitive interface.',
    },
    {
      question: 'Can I export reports?',
      answer:
        'Attendance and employee reports can be viewed inside the application, and export functionality can be added based on your requirements.',
    },
  ];

  toggle(index: number) {
    this.activeIndex = this.activeIndex === index ? null : index;
  }
}
