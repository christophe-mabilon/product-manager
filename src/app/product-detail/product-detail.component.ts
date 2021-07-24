import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../model/Product';
import { ProductHttpService } from '../product-http.service';
import {DeleteModalComponent} from '../delete-modal/delete-modal.component';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  product!: Product;

  constructor(private route: ActivatedRoute,
              private pService: ProductHttpService,
              private router: Router,
              private modalService: NgbModal) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.pService.findOne(+id)
      .subscribe(v => this.product = v);
  }

  dispalayModal(): void {
    const modalRef = this.modalService.open(DeleteModalComponent);
    modalRef.componentInstance.product = this.product;
    this.pService.delete(this.product.id).subscribe(v => this.router.navigate(['/products']));
    }

}
