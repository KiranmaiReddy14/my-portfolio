import { Component } from '@angular/core';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent {
  experiences = [
    {
      company: 'Magellan Health',
      role: 'Full Stack Java Developer',
      duration: 'Aug 2024 – Present',
      responsibilities: [
        'Architected and deployed scalable microservices and RESTful APIs.',
        'Integrated React with the backend, reducing response times by 30%.',
        'Implemented event-driven architecture with Apache Kafka for real-time streaming.',
        'Developed robust JUnit and Mockito test suites to ensure high-quality code.'
      ]
    },
    {
      company: 'Texas A&M University, Kingsville',
      role: 'Graduate Research Assistant',
      duration: 'May 2023 – Jul 2023',
      responsibilities: [
        'Improved malware detection efficiency by 30% through static and dynamic analysis.',
        'Conducted root cause analysis and implemented robust security measures.',
        'Strengthened system security by identifying vulnerabilities and mitigating threats.'
      ]
    },
    {
      company: 'Cognizant Technology Solutions',
      role: 'Jr Software Engineer',
      duration: 'Dec 2020 – Dec 2022',
      responsibilities: [
        'Designed containerized microservices using Docker and Kubernetes.',
        'Resolved 600+ code smells and 200+ bugs using SonarQube.',
        'Optimized database queries, improving system performance by 60%.',
        'Implemented JUnit and Mockito testing, boosting testing efficiency by 30%.'
      ]
    },
    {
      company: 'Shiash Technology',
      role: 'Java Developer',
      duration: 'Dec 2019 – Mar 2020',
      responsibilities: [
        'Developed healthcare web applications for improved user experience.',
        'Assisted in debugging, resolving 50% of identified issues.',
        'Improved system performance by 10% through optimized queries and debugging.'
      ]
    }
  ];

  selectedExperience: any = null;

  openPopup(experience: any) {
    this.selectedExperience = experience;
  }

  closePopup() {
    this.selectedExperience = null;
  }
}
