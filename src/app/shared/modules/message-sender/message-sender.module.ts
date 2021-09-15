import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageSenderComponent } from './message-sender.component';
import { SharedMaterialModule } from '../../shared-material.module';
import { PostMessageComponent } from './post-message/post-message.component';

@NgModule({
  imports: [CommonModule, SharedMaterialModule],
  declarations: [MessageSenderComponent, PostMessageComponent],
  exports: [MessageSenderComponent, PostMessageComponent]
})
export class MessageSenderModule {}
