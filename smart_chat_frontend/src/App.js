/** 
Front end chat UI code from https://getstream.io/chat/react-chat/tutorial/ 
**/

import React from 'react';
import { StreamChat } from 'stream-chat';
import { Chat, Channel, ChannelHeader, MessageInput, MessageList, Thread, Window } from 'stream-chat-react';

import 'stream-chat-react/dist/css/v2/index.css';
import './layout.css';
import { useClient } from './useClient';

const chatClient = new StreamChat('dz5f4d5kzrue');
const userToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoiZGFtcC1tdWQtMSIsImV4cCI6MTY4MTQyNzU4OH0.lOinRvJKZq4nPiNLKYI2NCQ4vQCN0DOt1QOH8Oht9SY';

chatClient.connectUser(
  {
    id: 'damp-mud-1',
    name: 'damp',
    image: 'https://getstream.io/random_png/?id=damp-mud-1&name=damp',
  },
  userToken,
);

const channel = chatClient.channel('messaging', 'custom_channel_id', {
  // add as many custom fields as you'd like
  image: 'https://www.drupal.org/files/project-images/react.png',
  name: 'Talk about React',
  members: ['damp-mud-1'],
});

const App = () => (
  <Chat client={chatClient} theme='str-chat__theme-dark'>
    <Channel channel={channel}>
      <Window>
        <ChannelHeader />
        <MessageList />
        <MessageInput />
      </Window>
      <Thread />
    </Channel>
  </Chat>
);

export default App;