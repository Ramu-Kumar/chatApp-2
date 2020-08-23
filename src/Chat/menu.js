import React from 'react';

const menu = [
    'https://cdn.fastly.picmonkey.com/content4/previews/social/social_59_550.png',
    'https://cdn.fastly.picmonkey.com/content4/previews/social/social_57_550.png',
    'https://facebookbrand.com/wp-content/uploads/2018/09/Header-e1538151782912.png?w=399&h=399',
]

const Menu = () => {
    return (

        <div className='media-menu'>
            <div>
                <span className="material-icons">
                    menu
              </span>
            </div>
            {
                menu.map((item, index) => (
                    <div key={index} className={index === 2 ? 'menu-active' : ''}><img src={item} alt={"img" + index} /></div>
                ))
            }
        </div>

    )
}

export default Menu






