import React, { Component } from 'react';
import './Conversation.css';
import users from './userData/usersDetail';
import InboxTab from './inboxTab';
import Profile from './profile';
import FriendsList from './friendsList';
import ChatBox from './chatbox';
import Menu from './menu'

/*
  1) Material Icon
  2) Bootstrap Class
  
  pls make sure availability of this two links in index.html, while run the application
*/



class Conversation extends Component {
  state = {
    messageValue: '',
    selectedCount: 1,
    users,
    usersList: users,
    Profile: false
  }

  onListSearch = (event) => {
    let value = event.target.value;
    let list = [...this.state.users];
    const filteredList = list.filter((item) => {
      return item.name.toLowerCase().includes(value.toLowerCase());
    })
    this.setState({
      usersList: filteredList
    })
  }

  onMessageChange = (event) => {
    this.setState({
      messageValue: event.target.value
    })
  }

  onFormSubmit = (event) => {
    event.preventDefault()
    let users = this.state.users
    if (this.state.messageValue) {
      users[this.state.selectedCount].messages.push({
        value: this.state.messageValue,
        type: 'send'
      })
      users[this.state.selectedCount].messages.push({
        type: 'receive',
        value: 'I am fine , How are you!'
      })
      this.setState({ users, messageValue: '' })
    }
  }

  setActive = (count) => {
    this.setState({
      selectedCount: count
    })
  }

  checkActive = (count) => {
    return this.state.selectedCount === count ? 'active' : ''
  }

  componentDidMount = () => {
    let filtered = users.sort((a, b) => {
      if (a.name > b.name) return 1;
      if (b.name > a.name) return -1;
      return 0;
    })
    this.setState({ users: filtered })
  }

  showProfile = () => {
    this.setState({ Profile: !this.state.Profile })
  }

  render() {
    return (
      <div className="dashboard-container" >
        <div className={`${this.state.Profile?'chat-container':'chat-container_hide'}`}>
          <Menu />
          <InboxTab />
          <div className="border-right">
            <div className="search-box">
              <div className="input-wrapper">
                <i className="material-icons">search</i>
                <input onChange={this.onListSearch} placeholder="Search" type="text" />
              </div>
            </div>
            <FriendsList state={this.state} setActive={this.setActive} checkActive={this.checkActive} />
          </div>
          <div className="chat-message-container">
            <ChatHeader state={this.state} showProfile={this.showProfile} />
            <ChatBox state={this.state} />
            <form className="chat-box-tray" onSubmit={this.onFormSubmit}>
              <div>
                <i className="material-icons">sentiment_very_satisfied</i>
                <input value={this.state.messageValue} type="text" onChange={this.onMessageChange} placeholder="Type your message here..." />
              </div>
              <div>
                <i className="material-icons">mic</i>
                <i onClick={this.onFormSubmit} className="material-icons">send</i>
              </div>
            </form>
          </div>
          {this.state.Profile && < Profile />}
        </div>
      </div>
    );
  }
}


const ChatHeader = (props) => {
  const { state } = props

  return (
    <div className='chat-header'>
      <div className="friend-drawer chat-row">
        <img className="profile-image" src={state.users[state.selectedCount].userImg} alt="" />
        <div className="text">
          <h4 className="user-header">{state.users[state.selectedCount].name}</h4>
        </div>
      </div>

      <div style={{ display: "flex" }}>
        <div className="icon_title">
          <span className="material-icons">star</span>
        </div>
        <div className="icon_title">
          <span className="material-icons">call</span>
        </div>
        <div className="icon_title">
          <span className="material-icons">videocam</span>
        </div>
        <div className="icon_profile">
          <img className="profile_icon" alt="No Internet" src='https://img.theweek.in/content/dam/week/news/entertainment/images/2019/4/26/thanos-avengers-infinity.jpg' />
        </div>
        <div className="icon_title hide" style={{padding: "22px 15px 22px 10px"}}>
          <span onClick={()=>props.showProfile()} className="material-icons"> menu</span>
        </div>
      </div>
    </div>
  )
}

export default Conversation;