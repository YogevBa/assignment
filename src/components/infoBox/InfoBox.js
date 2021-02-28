import React from 'react';
import './infoBox.css';
import { Link } from 'react-router-dom';

const AlbumView = (props) => {
  const millisToMinutesAndSeconds = (millis) => {
    let minutes = Math.floor(millis / 60000);
    let seconds = ((millis % 60000) / 1000).toFixed(0);

    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  return (
    <>
      {props.type === 'album' ? (
        <div className='boxWrapper'>
          <Link
            className='infoBoxStyle'
            to={{ pathname: '/albumDetails', state: props.itmData }}
          >
            <img
              className='thumbnail'
              src={
                props.itmData &&
                props.itmData.images[1] &&
                props.itmData.images[1].url
              }
              alt='album image'
            />
          </Link>
          <div className='albumInfoWrapper'>
            <p className='details'>
              {props.itmData &&
                props.itmData.artists[0] &&
                props.itmData.artists[0].name}
            </p>
            <p className='details'>{props.itmData && props.itmData.name}</p>
          </div>
        </div>
      ) : (
        <div className='trackBoxStyle'>
          <p className='details'>
            {props.itmData && props.itmData.track_number}
          </p>
          <p className='details'>{props.itmData && props.itmData.name}</p>
          <p className='details'>
            Length:{' '}
            {millisToMinutesAndSeconds(
              props.itmData && props.itmData.duration_ms
            )}
          </p>
        </div>
      )}
    </>
  );
};

export default AlbumView;
