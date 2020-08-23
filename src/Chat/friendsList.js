import React, { Fragment } from 'react';


const FriendsList = (props) => {
    const { usersList } = props.state
    return (
        <Fragment>
            {
                usersList.map((item, index) => {
                    let length = item.messages.length - 1;
                    return (
                        <div key={index} onClick={() => props.setActive(index)} className={`friend-drawer relative friend-drawer-list ${() => props.checkActive(index)}`}>
                            {item.active && <div className="active_user"></div>}
                            <img className="profile-image" src={item.userImg} alt="" />
                            <div className="text">
                                <h5>{item.name}</h5>
                                <p className="text-muted">{item.messages[length].value}</p>
                            </div>
                            <span className="time text-muted small">{item.time}</span>
                        </div>
                    )
                })
            }
        </Fragment>
    )
}

export default FriendsList






