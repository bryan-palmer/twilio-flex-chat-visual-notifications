import { FlexPlugin } from 'flex-plugin';
import React from 'react';
import TaskListChatItemUnread from './TaskListChatItemUnread';

export default class ChatVisualNotificationsPlugin extends FlexPlugin {
  name = 'ChatVisualNotificationsPlugin';

  init(flex, manager) {
    flex.TaskListItem.Content.add(<TaskListChatItemUnread key="unread-chat-message" />, {
    	if: props => props.task.source.taskChannelUniqueName === "chat"
    });
  }
}
