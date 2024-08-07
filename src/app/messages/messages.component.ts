import { Component, ChangeDetectionStrategy, ViewChild } from '@angular/core';
import { MessageService } from '../services/message.service';
import { NgFor, NgForOf } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import { AfterViewInit } from '@angular/core';
import { MatCard, MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-messages',
  standalone: true,
  imports: [NgFor, NgForOf, MatButtonModule, ScrollingModule, MatCardModule],
  templateUrl: './messages.component.html',
  styleUrl: './messages.component.css'
})
export class MessagesComponent implements AfterViewInit {
  @ViewChild(CdkVirtualScrollViewport)
  public virtualScrollViewport?: CdkVirtualScrollViewport;

  public messagesTest: string[] = [];
  constructor(public messageService: MessageService) {
    this.messagesTest = messageService.messages;
  };


  ngAfterViewInit() {

    if (typeof window !== "undefined") {
      window.setInterval(() => {
        this.virtualScrollViewport?.scrollToIndex(999999);
      });
    }

    //  setInterval(() => { 
    //    console.log("wtf");
    // //   //this.virtualScrollViewport?.scrollToIndex(999999);
    //   }, 20000);

  }
}
