import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-panel',
  templateUrl: './side-panel.component.html',
  styleUrls: ['./side-panel.component.css']
})
export class SidePanelComponent implements OnInit {
  isInboxActive:boolean = false;
  isSentActive:boolean = false;
  isImportantActive:boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  goToInbox(){
    this.isInboxActive = true;
    this.isSentActive = false;
    this.isImportantActive = false;

  }

  goToSent(){
    this.isInboxActive = false;
    this.isSentActive = true;
    this.isImportantActive = false;
  }

  goToImportant(){
    this.isInboxActive = false;
    this.isSentActive = false;
    this.isImportantActive = true;
  }

}
