import { Component, OnInit } from '@angular/core';
import { DepartmentService } from '../departments.service';
import { Department } from '../department';

@Component({
  selector: 'app-departments-list',
  templateUrl: './departments-list.component.html',
  styles: [
    '.card { width: 70% }'
  ]
})
export class DepartmentsListComponent implements OnInit{
  
  deps:Department[]
  cols: any[];

  constructor(private depService:DepartmentService){}

 
  getDeps(){
    this.depService.getDeps().subscribe(deps=>this.deps=deps)
  }

  ngOnInit() {
    // this.productService.getProductsSmall().then(data => this.products = data);
    this.getDeps()
    this.cols = [
      { field: 'id', header: 'Id' },
      { field: 'name', header: 'Name' },
      { field: 'manager', header: 'Manager' },
      { field: 'emps_no', header: 'Employees No' },
      { field: 'actions', header: 'Actions' },
    ];
  }

  deleteDep(dep:Department){
    this.depService.deleteDep(dep).subscribe(res => this.getDeps())
  }
 
}
