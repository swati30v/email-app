import { Component, OnInit } from '@angular/core';
import { ImportantMailsService } from '../important-mails.service';

@Component({
  selector: 'app-important',
  templateUrl: './important.component.html',
  styleUrls: ['./important.component.css']
})
export class ImportantComponent implements OnInit {
  showTable:boolean = false;
  importantMails:any[] = []
  constructor(private importantMailsService:ImportantMailsService) { }

  ngOnInit(): void {
    this.importantMails = this.importantMailsService.importantMails;
    if(this.importantMails.length>0){
      this.showTable = true;
    }
  }

}
