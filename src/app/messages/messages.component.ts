import { Component, ViewChild } from '@angular/core';
import { MessageService } from '../services/message.service';
import { NgFor, NgForOf } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { CdkVirtualScrollViewport, ScrollingModule } from '@angular/cdk/scrolling';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-messages',
  standalone: true,
  imports: [
    NgFor,
    NgForOf,
    MatButtonModule,
    ScrollingModule,
    MatCardModule,
    CdkVirtualScrollViewport,
  ],
  templateUrl: './messages.component.html',
  styleUrl: './messages.component.css',
})
export class MessagesComponent {
  @ViewChild(CdkVirtualScrollViewport)
  public virtualScrollViewport?: CdkVirtualScrollViewport;

  constructor(public messageService: MessageService) { }
}
