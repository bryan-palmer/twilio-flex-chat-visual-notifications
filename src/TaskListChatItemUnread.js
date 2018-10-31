import React from 'react';

const TaskListChatItemUnread = (item) => {
  // covering case when a chatChannel is not established or has been torn down
  if( item.chatChannel === undefined ) return false;

  // compare indices of messages to determine if unread message exists
  let lastConsumedIndex = item.chatChannel.source.state.lastConsumedMessageIndex;
  let lastReceivedIndex = item.chatChannel.source.state.lastMessage.index;

  // if last message is sent from worker, prevent intermittent display of unread
  let lastMessageIsFromMe = (item.chatChannel.messages.length) ? item.chatChannel.messages[item.chatChannel.messages.length-1].isFromMe : false;

  var divStyle = {
    'background-color': 'red',
    'height': '5px'
  };

  if( lastConsumedIndex === lastReceivedIndex  || lastMessageIsFromMe ) {
    return false;
  } else {
    return <div key={item.sid} style={divStyle} />
  }
}

export default TaskListChatItemUnread;