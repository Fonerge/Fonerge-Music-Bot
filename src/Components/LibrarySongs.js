import React from "react";

const LibrarySongs = ({song, currentSong, setCurrentSong}) => {
    const handleSelectSong = () => {
        setCurrentSong(song);
    };

    return(
        <div
            className={`library-song ${song.id === currentSong.id ? 'active' : ''}`}
            onClick={handleSelectSong}
        >
            <img src={song.cover} alt={song.name}/>
            <div className="song-description">
                <h3>{song.name}</h3>
                <h4>{song.artist}</h4>
            </div>
        </div>
    );
};

export default LibrarySongs;