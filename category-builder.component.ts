import { Component, OnInit } from '@angular/core';
import { CategoryBuilderService } from '../../services/category-builder.service';

@Component({
  selector: 'app-category-builder',
  templateUrl: './category-builder.component.html',
  styleUrls: ['./category-builder.component.css']
})
export class CategoryBuilderComponent implements OnInit {
  ageRangeName='';
  constructor(
    private categoryBuilderService: CategoryBuilderService
  ) { }

  ngOnInit(): void {
    this.ageRangeName = this.categoryBuilderService.ageRangeName;
  }

  cancel() {
    this.categoryBuilderService.change.next(true);
  }

}
