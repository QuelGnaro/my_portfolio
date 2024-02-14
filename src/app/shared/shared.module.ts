import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DialogService } from 'primeng/dynamicdialog';

const sharedModule = [CommonModule, FormsModule, ReactiveFormsModule, HttpClientModule];

@NgModule({
  declarations: [],
  imports: [...sharedModule],
  providers: [DialogService],
  exports: [...sharedModule]
})
export class SharedModule { }
