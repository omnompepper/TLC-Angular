import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { NgIf } from '@angular/common';

import { ProductDetailComponent } from '../product-detail/product-detail.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { ProductData } from '../models/productdata';
import { ProductService } from '../services/product.service';
import { MessageService } from '../services/message.service';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    NgFor,
    NgIf,
    ProductDetailComponent,
    MatCardModule,
    MatGridListModule,
  ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent implements OnInit {
  selectedProduct?: ProductData;
  public productData: ProductData[] = [];
  public displayedColumns: string[] = ['ticker'];

  constructor(
    private productService: ProductService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(): void {
    this.productService.getProducts().subscribe((productData: any) => {
      this.productData = productData;
    });
  }

  onSelect(productData: ProductData): void {
    this.selectedProduct = productData;
    this.messageService.add(`Selected product id=${productData.TICKER}`);
  }
}
