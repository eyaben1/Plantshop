import { Component, Input, Output, EventEmitter } from '@angular/core';

interface IProduct {
  id: number;
  description: string;
  name: string;
  imageName: string;
  category: string;
  price: number;
  discount: number;
}

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {
  @Input() product!: IProduct;
  @Output() buy = new EventEmitter<IProduct>(); // Changez void en IProduct

  getImageUrl(product: IProduct): string {
    if (!product) return '';
    return '/assets/images/robot-parts/' + product.imageName;
  }

  buyButtonClicked(): void {
    this.buy.emit(this.product); // Émettez le produit au lieu de rien
  }
}

