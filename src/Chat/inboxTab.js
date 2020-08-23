import React, { Fragment } from 'react';
import inboxData from './userData/inboxData';


const InboxTab = () => {
    return (
        <Fragment>
            <div className='inbox'>
                <div className='inbox-header'>
                    <h4>Inbox</h4>
                    <span className="material-icons">
                        person_add
              </span>
                </div>
                {
                    inboxData.map((item, i) => (
                        <div key={i} className='inbox-list'>
                            {
                                item.map((element, i) => (
                                    <div key={i} className={`inbox-content ${element.text === 'All Messages' ? 'menu-active' : ''}`}>
                                        <p>{element.text}</p>
                                        <p>{element.count}</p>
                                    </div>
                                ))
                            }
                        </div>
                    ))
                }
            </div>

        </Fragment>
    )
}

export default InboxTab


