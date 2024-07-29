import { Component, OnInit } from '@angular/core';
import { UpperCasePipe } from '@angular/common';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import { Observable, of } from 'rxjs';

import { ProductDetailComponent } from '../product-detail/product-detail.component';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [UpperCasePipe, NgFor, NgIf, FormsModule, ProductDetailComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit{
  selectedProduct?: Product;
  products: Product[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(): void {
    this.productService.getProducts()
    .subscribe((products: any) => this.products = products);
  }

  onSelect(product: Product): void {
    this.selectedProduct = product;
  }
}
