import { Component } from '@angular/core';
import { MessageService } from '../services/message.service';
import { NgFor, NgForOf } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-messages',
  standalone: true,
  imports: [NgFor, NgForOf, MatButtonModule],
  templateUrl: './messages.component.html',
  styleUrl: './messages.component.css'
})
export class MessagesComponent {

  constructor(public messageService: MessageService) {};
}
