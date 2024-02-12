import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

const sharedModule = [CommonModule, FormsModule, ReactiveFormsModule, HttpClientModule];

@NgModule({
  declarations: [],
  imports: [...sharedModule],
  exports: [...sharedModule]
})
export class SharedModule { }
