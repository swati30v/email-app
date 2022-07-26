import { Component, OnInit } from '@angular/core';
import { ImportantMailsService } from '../important-mails.service';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.css']
})
export class InboxComponent implements OnInit {
  showTable:boolean = false;
  projectTeam:boolean = false;
  hrTeam:boolean = false;
  financeTeam:boolean = false;
  selectedMails:any[] = [];
  markedMails:any[] = [];
  emailsMarked:boolean = false;
  inboxMails:any = [
    {
      "team": 'Finance',
      "from": 'inboxFinance1',
      "subjectName": 'subject1',
      "receivedDate": '26-06-2022',
      "markedAsImportant": false
    },
    {
      "team": 'HR',
      "from": 'inboxHr1',
      "subjectName": 'subject2',
      "receivedDate": '27-06-2022',
      "markedAsImportant": false
    },
    {
      "team": 'Project',
      "from": 'inboxProject1',
      "subjectName": 'subject3',
      "receivedDate": '28-06-2022',
      "markedAsImportant": false
    },
    {
      "team": 'Finance',
      "from": 'inboxFinance2',
      "subjectName": 'subject4',
      "receivedDate": '29-06-2022',
      "markedAsImportant": false
    },
    {
      "team": 'HR',
      "from": 'inboxHr2',
      "subjectName": 'subject5',
      "receivedDate": '30-06-2022',
      "markedAsImportant": false
    },
    {
      "team": 'Project',
      "from": 'inboxProject2',
      "subjectName": 'subject6',
      "receivedDate": '01-07-2022',
      "markedAsImportant": false
    },
    {
      "team": 'Finance',
      "from": 'inboxFinance3',
      "subjectName": 'subject7',
      "receivedDate": '02-07-2022',
      "markedAsImportant": false
    },
    {
      "team": 'HR',
      "from": 'inboxHr3',
      "subjectName": 'subject8',
      "receivedDate": '03-07-2022',
      "markedAsImportant": false
    },
    {
      "team": 'Project',
      "from": 'inboxProject3',
      "subjectName": 'subject9',
      "receivedDate": '04-07-2022',
      "markedAsImportant": false
    }
  ];
  generalMails:any[] = [];
  constructor(private importantMailsService:ImportantMailsService) { }

  ngOnInit(): void {
  }

  showGeneralMails(){
    this.generalMails = this.selectedMails.filter((mail:any)=>{
      return mail.markedAsImportant === false;
    })
  }

  showProjectTeam(){
    this.projectTeam = true;
    this.hrTeam = false;
    this.financeTeam = false;
    this.selectProjectMails();
    this.showTable = true;
  }
  showHrTeam(){
    this.projectTeam = false;
    this.hrTeam = true;
    this.financeTeam = false;
    this.selectHrMails();
    this.showTable = true;
  }
  showFinanceTeam(){
    this.projectTeam = false;
    this.hrTeam = false;
    this.financeTeam = true;
    this.selectFinanceMails();
    this.showTable = true;
  }

  selectProjectMails(){
    this.selectedMails = this.inboxMails.filter((mail:any)=>{
      return mail.team === 'Project';
    })
    this.showGeneralMails();
  }
  selectHrMails(){
    this.selectedMails = this.inboxMails.filter((mail:any)=>{
      return mail.team === 'HR';
    })
    this.showGeneralMails();
  }
  selectFinanceMails(){
    this.selectedMails = this.inboxMails.filter((mail:any)=>{
      return mail.team === 'Finance';
    })
    this.showGeneralMails();
  }

  onChecked(index:number){
    this.selectedMails[index].markedAsImportant = !this.selectedMails[index].markedAsImportant;
    this.markedMails = this.selectedMails.filter((mail:any)=>{
      return mail.markedAsImportant === true;
    });
    if(this.markedMails.length>0){
      this.emailsMarked = true;
    }
    else{
      this.emailsMarked = false;
    }
  }

  markAsImportant(){    
    this.importantMailsService.importantMails = this.markedMails;
    this.showGeneralMails();
  }

}
