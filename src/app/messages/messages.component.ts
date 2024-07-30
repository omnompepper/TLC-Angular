import { Component } from '@angular/core';
import { MessageService } from '../message.service';
import { NgFor, NgForOf } from '@angular/common';

@Component({
  selector: 'app-messages',
  standalone: true,
  imports: [NgFor, NgForOf],
  templateUrl: './messages.component.html',
  styleUrl: './messages.component.css'
})
export class MessagesComponent {

  constructor(public messageService: MessageService) {};
}
