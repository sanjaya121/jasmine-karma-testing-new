import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { DepartmentRoutingModule } from './department-routing.module';
import { ElectronicsComponent } from './electronics/electronics.component';
import { PhonesComponent } from './electronics/phones/phones.component';


@NgModule({
  declarations: [
    ElectronicsComponent,
    PhonesComponent
  ],
  imports: [
    CommonModule,
    DepartmentRoutingModule,
    FormsModule,
    ReactiveFormsModule

  ]
})
export class DepartmentModule { }
