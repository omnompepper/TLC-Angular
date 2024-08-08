import { Component, Input } from '@angular/core';
import { NgIf, UpperCasePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductData } from '../models/productdata';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [FormsModule, NgIf, UpperCasePipe, MatCardModule],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})

export class ProductDetailComponent {
  @Input() productData?: ProductData;
}