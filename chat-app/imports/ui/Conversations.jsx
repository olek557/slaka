import React, { Component } from 'react';
import Moment from 'moment';
import { _ } from 'underscore';
import Chat from './Chat.jsx';

export default class Chats extends Component {
  constructor(props) {
    super(props);

    this.state = {
      chats: [
        {
          _id: 0,
          name: 'Ethan Gonzalez',
          picture: 'https://randomuser.me/api/portraits/thumb/men/1.jpg',
          lastMessage: {
            text: 'You on your way?',
            timestamp: Moment().subtract(1, 'hours').toDate()
          }
        },
        {
          _id: 1,
          name: 'Bryan Wallace',
          picture: 'https://randomuser.me/api/portraits/thumb/lego/1.jpg',
          lastMessage: {
            text: 'Hey, it\'s me',
            timestamp: Moment().subtract(2, 'hours').toDate()
          }
        },
        {
          _id: 2,
          name: 'Avery Stewart',
          picture: 'https://randomuser.me/api/portraits/thumb/women/1.jpg',
          lastMessage: {
            text: 'I should buy a boat',
            timestamp: Moment().subtract(1, 'days').toDate()
          }
        },
        {
          _id: 3,
          name: 'Katie Peterson',
          picture: 'https://randomuser.me/api/portraits/thumb/women/2.jpg',
          lastMessage: {
            text: 'Look at my mukluks!',
            timestamp: Moment().subtract(4, 'days').toDate()
          }
        },
        {
          _id: 4,
          name: 'Ray Edwards',
          picture: 'https://randomuser.me/api/portraits/thumb/men/2.jpg',
          lastMessage: {
            text: 'This is wicked good ice cream.',
            timestamp: Moment().subtract(2, 'weeks').toDate()
          }
        }
      ]
    }
  }

  renderChats() {
    return this.state.chats.map((chat) => (
      <Chat
        key={chat._id}
        chat={chat}
        deleteChat={this.deleteChat.bind(this)}/>
    ));
  }

  deleteChat(chat) {
    const chats = this.state.chats;
    chats.splice(chats.indexOf(chat), 1);
    this.setState({ chats });
  }

  render() {
    return (
      <div className="container">
        {this.renderChats()}
      </div>
    );
  }
}