import React from 'react'

const Modal = ({ modal, modalClose }) => {
    
    const { id, picture, firstname, lastname, country, data } = modal

    const getYear = () => {
        const year = new Date().getFullYear()
        return year 
    }
    
    return (
        <div className='modal__overlay'>
            <div className="modal__container">
                <div className="btn-close" onClick={modalClose}></div>
                <div className="modal__modal">
                    <div className="modal__left">
                        <div className="img-wrapper">
                            <img src={picture} alt={firstname + ' ' + lastname} />
                        </div>
                    </div>
                    <div className='modal__right'>
                        <div className="modal__row-top row">
                            <div className='modal__name'>
                                <div className="modal__firstname">
                                    {firstname}
                                </div>
                                <div className="modal__lastname">
                                    {lastname}
                                </div>
                            </div>
                            <div className="row modal__country">
                                <div className="modal__flag">
                                    <div className="img-wrapper">
                                        <img src={country.picture} alt={country.code} />
                                    </div>
                                </div>
                                <div className="modal__tag">
                                    {country.code}
                                </div>
                            </div>
                        </div>
                        <div className="row modal__row-bottom">
                            <div className="modal__stats-left">
                                <div className="row">
                                    <div className="modal__stats modal__left-col">
                                        <h4>RANK</h4>
                                        <div className="modal__stat stat">
                                            {data.rank}
                                        </div>
                                    </div>
                                    <div className="modal__stats modal__left-col">
                                        <h4>POINTS</h4>
                                        <div className="modal__stat stat">
                                            {data.points}
                                        </div>
                                    </div>
                                    <div className="modal__stats modal__left-col">
                                        <h4>COUNTRY</h4>
                                        <div className="modal__stat stat">
                                            {country.code}
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="modal__stats modal__left-col">
                                        <h4>BIRTHDAY</h4>
                                        <div className="modal__stat stat">
                                            {`XX/XX/${getYear() - data.age}`}
                                        </div>
                                    </div>
                                    <div className="modal__stats modal__left-col">
                                        <h4>AGE</h4>
                                        <div className="modal__stat stat">
                                            {data.age}
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="modal__stats modal__left-col">
                                        <h4>WEIGHT</h4>
                                        <div className="modal__stat stat">
                                            {`${data.weight / 1000} kg`}
                                        </div>
                                    </div>
                                    <div className="modal__stats modal__left-col">
                                        <h4>HEIGHT</h4>
                                        <div className="modal__stat stat">
                                            {`${data.height} cm`}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="modal__stats-right">
                                <h4>CAREER TITLE</h4>
                                {data.last.map((item, index) => (
                                    <div className="career__container" key={`career-${index}`}>
                                        <div className="career__date">
                                            <span className='career__date-year'>{getYear() - index}</span>
                                            <span className='career__date-last'>{` - ${item}`}</span>
                                        </div>
                                        <div className="text career__desc">
                                            Hero can be anyone. Even a man knowing something as simple and reassuring as putting a coat around a young boy shoulders to let him know the world hadn't ended.

                                            I can't do that as Bruce Wayne... as a man. I'm flesh and blood. I can be ignored, destroyed. But as a symbol, I can be incorruptible, I can be everlasting.
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div> 
                    </div>
                    <div className="modal__content-mask"></div>
                </div>
            </div>
        </div>
    )
}

export default Modal