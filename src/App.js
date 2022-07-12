import { useRef, useState } from 'react';
import './App.scss';
import PlayersCards from './components/PlayersCards/PlayersCards';

function App() {

    const inputRef = useRef()
    const [searchWord, setSearchWord] = useState('')

    const handleSubmit = e => {
        e.preventDefault()
        setSearchWord(inputRef.current.value)
    }

    const handleReset = () => {
        setSearchWord('')
    }

    return (
        <div className="container">
            <form className='home__form' onSubmit={handleSubmit}>
                <input ref={inputRef} type="text" placeholder='Rechercher un joueur' />
            </form>
            {searchWord !== '' && <div className='reset-players' onClick={handleReset}>Afficher tous les joueurs</div>}
            <PlayersCards searchWord={searchWord} />
        </div>
    );
}

export default App;
