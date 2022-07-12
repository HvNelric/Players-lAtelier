import React, { useEffect, useState } from 'react'
import { fetchPlayers } from '../FetchPlayers/FetchPlayers'
import Modal from '../Modal/Modal'

const PlayersCards = ({searchWord}) => {

    const [players, setPlayers] = useState([])
    const [modalData, setModalData] = useState({})
    const [modalOpen, setModalOpen] = useState(false)
    const [searchResult, setSearchResult] = useState([])

    const handleClick = (id, picture, firstname, lastname, country, data) => {
        setModalData({
            ...modalData,
            id,
            picture,
            firstname,
            lastname,
            country,
            data
        })
        setModalOpen(true)
        document.body.style.overflow = 'hidden'
    }

    const modalClose = () => {
        setModalOpen(false)
        document.body.style.overflow = 'unset'
    }

    useEffect(() => {

        fetchPlayers('https://data.latelier.co/training/tennis_stats/headtohead.json', setPlayers)

        const searchQuery = () => {

            if (searchWord !== '') {
                let resultsArray = []
                let result = false
                for (let item of players) {
                    if (item.lastname.toLowerCase().indexOf(searchWord) > -1 || item.firstname.toLowerCase().indexOf(searchWord) > -1) {
                        console.log('includes YES')
                        resultsArray.push({
                            id : item.id,
                            picture: item.picture,
                            firstname: item.firstname,
                            lastname: item.lastname,
                            country: item.country,
                            data: item.data
                        })

                        setSearchResult(resultsArray)
                        result = true
                    }
                }
                if (!result) {
                    setSearchResult([])
                }
            }    
        }
        searchQuery()

    }, [searchWord])

console.log('search word', searchWord, searchResult)
    return (
        <>
            <div className='cards__container'>
                {
                    searchWord !== '' ?
                        
                        searchResult.length === 0 ?
                            <div className="no-result">Il n'y a aucun joueur</div>
                        :    
                        searchResult.map(({ id, firstname, lastname, picture, country, data }) => (
                            <div className="cards__player" key={id} onClick={() => handleClick(id, picture, firstname, lastname, country, data)}>
                                <div className="cards__player-left">
                                    <div className="img-wrapper">
                                        <img src={picture} alt={firstname + lastname} />
                                    </div>
                                </div>
                                <div className="cards__player-right">
                                    <div className='cards__name-wrapper'>
                                        <div className="cards__name">
                                            <h3>{firstname + ' ' + lastname}</h3>
                                        </div>
                                        <div className="cards__stats-wrapper">
                                            <div className="cards__stats-rank stats">
                                                <h4>RANK</h4>
                                                <div className="cards__stat stat">
                                                    {'#' + data.rank}
                                                </div>
                                            </div>
                                            <div className="cards__stats-points stats">
                                                <h4>POINTS</h4>
                                                <div className="cards__points stat">
                                                    {data.points}
                                                </div>
                                            </div>
                                            <div className="cards__stats-points stats">
                                                <h4>COUNTRY</h4>
                                                <div className="cards__points stat">
                                                    {country.code}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    :
                        players.map(({ id, firstname, lastname, picture, country, data }) => (
                            <div className="cards__player" key={id} onClick={() => handleClick(id, picture, firstname, lastname, country, data)}>
                                <div className="cards__player-left">
                                    <div className="img-wrapper">
                                        <img src={picture} alt={firstname + lastname} />
                                    </div>
                                </div>
                                <div className="cards__player-right">
                                    <div className='cards__name-wrapper'>
                                        <div className="cards__name">
                                            <h3>{firstname + ' ' + lastname}</h3>
                                        </div>
                                        <div className="cards__stats-wrapper">
                                            <div className="cards__stats-rank stats">
                                                <h4>RANK</h4>
                                                <div className="cards__stat stat">
                                                    {'#' + data.rank}
                                                </div>
                                            </div>
                                            <div className="cards__stats-points stats">
                                                <h4>POINTS</h4>
                                                <div className="cards__points stat">
                                                    {data.points}
                                                </div>
                                            </div>
                                            <div className="cards__stats-points stats">
                                                <h4>COUNTRY</h4>
                                                <div className="cards__points stat">
                                                    {country.code}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                }
            </div>
            {modalOpen && <Modal modal={modalData} modalClose={modalClose} />}
        </>
    )
}

export default PlayersCards