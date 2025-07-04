import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { ConversationService } from './conversation.service';
import { Conversation } from './conversation.entity';

@Controller('conversations')
export class ConversationController {
  constructor(private readonly conversationService: ConversationService) {}

  @Post()
  create(@Body() conversation: Partial<Conversation>) {
    return this.conversationService.create(conversation);
  }

  @Get()
  findAll() {
    return this.conversationService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.conversationService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() updateConversation: Partial<Conversation>) {
    return this.conversationService.update(id, updateConversation);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.conversationService.remove(id);
  }
}
