import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sent',
  templateUrl: './sent.component.html',
  styleUrls: ['./sent.component.css']
})
export class SentComponent implements OnInit {
  mails:any = [
    {
      "from": 'sentFinance1',
      "subjectName": 'subject1',
      "receivedDate": '26-06-2022'
    },
    {
      "from": 'sentHr1',
      "subjectName": 'subject2',
      "receivedDate": '27-06-2022'
    },
    {
      "from": 'sentProject1',
      "subjectName": 'subject3',
      "receivedDate": '28-06-2022'
    },
    {
      "from": 'sentFinance2',
      "subjectName": 'subject4',
      "receivedDate": '26-06-2022'
    },
  
  ]
  constructor() { }

  ngOnInit(): void {
  }
  
}
