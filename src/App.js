import React, { useState } from 'react'
import Player from './components/Player';
import Song from './components/Song';
import chillHop from './data';

import './styles/app.scss';

const App = () => {
	const [songs, setSongs] = useState(chillHop());
	const [currentSong, setCurrentSong] = useState(songs[0]);

	return (
		<div>
			<Song currentSong={currentSong} />
			<Player />
		</div>
	)
}

export default App;