import React from 'react';

const Chat = (props) => {
  const { state } = props
  return (
    <div className="chat-panel">
      {
        state.users[state.selectedCount].messages.map((item, i) => {
          if (item.type === 'send')
            return <Send key={i} data={item} />
          else return <Receive key={i} data={item} state={state} />
        })
      }
    </div>
  )
}

const Send = props => {
  const { value } = props.data
  return (
    <div className="row left-msg">
      <div className="col-xs-6 d-flex">
        <img className="profile-image" src='https://img.theweek.in/content/dam/week/news/entertainment/images/2019/4/26/thanos-avengers-infinity.jpg' alt="" />
        <div className="chat-bubble chat-left">
          {value}
        </div>
      </div>
    </div>
  )
}


const Receive = (props) => {
  const { value, attachment } = props.data
  return (
    <div className="row right-msg">
      <div className="col-xs-6 d-flex right-column">
        <div className="chat-bubble chat-right">
          {value}
          {attachment && <div className="cards_msg">

            <img style={{ maxWidth: "100%", width: "100px", borderRadius: "5px", height: "100px", margin: "10px" }} src="https://d2d3qesrx8xj6s.cloudfront.net/img/screenshots/4c79e51f564ea8679637d465ed15bd4c4221dd5f.jpeg" alt="no network" />

            <div className="card_txt">

              <h4>Ready to Die</h4>
              <p>The Notemade B.I.G</p>
              <p>* * * *   </p>
              <button>$12.99 - BUY NOW</button>
            </div>
          </div>}
        </div>
        <img className="profile-image" src={props.state.users[props.state.selectedCount].userImg} alt="" />
      </div>
    </div>
  )
}

export default Chat






