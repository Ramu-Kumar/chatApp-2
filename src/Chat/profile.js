import React from 'react';
import details from './userData/profileDetail';

const Profile = () => {
    return (
        <div className='profile'>
            <div className='notification'>
                <span className="material-icons">
                    notifications
          </span>
                <p>Matt Thomson</p>
            </div>
            <div className='user-profile'>
                <img alt="No Internet" src='https://img.theweek.in/content/dam/week/news/entertainment/images/2019/4/26/thanos-avengers-infinity.jpg' />
                <h3>Kirsten Mckeller</h3>
                <p>Cape Town, RSA</p>
            </div>
            <div className='user-details'>
                {
                    details.map((item, i) => (
                        <div key={i} className='user-content'>
                            <p>{item.title}</p>
                            <p>{item.value}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Profile






