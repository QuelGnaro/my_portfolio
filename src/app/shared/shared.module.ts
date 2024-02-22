import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DialogService } from 'primeng/dynamicdialog';
import { VgCoreModule } from '@videogular/ngx-videogular/core';
import { VgControlsModule } from '@videogular/ngx-videogular/controls';
import { VgOverlayPlayModule } from '@videogular/ngx-videogular/overlay-play';
import { VgBufferingModule } from '@videogular/ngx-videogular/buffering';


const sharedModule = [CommonModule, FormsModule, ReactiveFormsModule, HttpClientModule, VgCoreModule, VgControlsModule, VgOverlayPlayModule, VgBufferingModule, ReactiveFormsModule];

@NgModule({
  declarations: [],
  imports: [...sharedModule],
  providers: [DialogService],
  exports: [...sharedModule,]
})
export class SharedModule { }
