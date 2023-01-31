import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Department } from '../department';
import { DepartmentService } from '../departments.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-department',
  templateUrl: './add-department.component.html',
  styleUrls: ['./add-department.component.css']
})
export class AddDepartmentComponent implements OnInit {
  registrationForm: FormGroup;
  urlId: string
  editedDep?: Department

  constructor(private fb: FormBuilder, private depService: DepartmentService, private router: Router, private route: ActivatedRoute,) { }

  ngOnInit(): void {
    this.registrationForm = this.fb.group({

      id: [''],
      name: ['', [Validators.required, Validators.minLength(1)]],
      manager: ['', [Validators.required, Validators.minLength(3)]],
     
      emps_no: [, [Validators.required]],
  
    });

    const urlId = this.route.snapshot.paramMap.get('id');
    //edit emp
    if (urlId) {
      this.urlId = (urlId)
      this.depService.getDeps()
        .subscribe({
          next: deps => {

            const editedDep = deps.find(e => Number(e.id) === Number(urlId))
           
            this.registrationForm.patchValue(editedDep ? editedDep : {});
          },
          error: error => {
            error.message
            console.error(error);

          }
        })
    }
    

  }

  get name() {
    return this.registrationForm.get('name');
  }

  get manager() {
    return this.registrationForm.get('manager');
  }

  get emps_no() {
    return this.registrationForm.get('emps_no');
  }

  onSubmit() {
    // edit emp
    if (this.urlId) {
      // this.editEmp(this.registrationForm.value)
      console.log('edit');
      this.depService.updateDep(this.registrationForm.value).subscribe(res => console.log(res))

    } else {
      //  add emp
      // this.addEmp(this.registrationForm.value)
      console.log('add ');
      const newDep = {...this.registrationForm.value,
        id: Math.floor(Math.random() * 100) + 3
    }
      this.depService.addDep(newDep).subscribe(res=>console.log(res))
    }
  }

 
}
