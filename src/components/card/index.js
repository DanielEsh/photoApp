import React from 'react'
import heart from './heart.svg'

const Card = ({item}) => {

    const handleLike = (id) => {
        alert(id)
    }

    return (
        <div className="card" key={item.id}>
            <img src={item.urls.regular} className='card__img_mobil' alt=""/>

            <div className="card__content">
                <div className='card__header'>
                    <img src={item.user.profile_image.medium} className='avatar' alt=""/>
                    <p>{item.user.username}</p>
                </div>

                <img src={item.urls.regular}
                     className='card__img_desktop'
                     alt=""/>


                <div className="card__footer">
                    <div className="card__likes" onClick={handleLike.bind(this, item.id)}>
                        <img src={heart} width='30' height='20' alt=""/>
                        <span>
                                                {item.likes}
                                            </span>
                    </div>
                    <p>{item.alt_description}</p>
                </div>
            </div>

        </div>
    )
}

export default Card
