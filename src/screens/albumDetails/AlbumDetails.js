import React, { useEffect } from 'react';
import { getAlbumsTracks } from '../../api';
import { connect } from 'react-redux';
import { getAlbumTracks } from '../../redux/actions';
import './albumDetails.css';
import InfoBox from '../../components/infoBox/InfoBox';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';

const AlbumDetails = (props) => {
  const albumID =
    props.location.state && props.location.state.id && props.location.state.id;

  const renderTracks =
    props.tracks &&
    props.tracks.data &&
    props.tracks.data.items.map((itm) => (
      <InfoBox key={itm.id} itmData={itm} />
    ));

  useEffect(() => {
    getAlbumsTracks(albumID, props.token).then((res) =>
      props.getAlbumTracks(res)
    );
  }, []);
  const { location } = props;
  return (
    <div className='albumDetailsWrapper'>
      <img
        className='albumThumbnail'
        src={
          location.state &&
          location.state.images[1] &&
          location.state.images[1].url
        }
      />
      <div className='infoTextWrapper'>
        <p className='infoText'>
          {location &&
            location.state &&
            location.state.artists[0] &&
            location.state.artists[0].name}
        </p>
        <p className='infoText'>
          {location && location.state && location.state.name}
        </p>
      </div>
      <Link to='/'>
        <Button
          style={{
            height: '50px',
            width: '70px',
            backgroundColor: 'black',
            color: `rgb(190, 190, 190)`,
          }}
          color='secondary'
        >
          Back
        </Button>
      </Link>
      <div className='tracksContainer'>{renderTracks}</div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    token: state.token,
    tracks: state.tracks,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getAlbumTracks: (res) => dispatch(getAlbumTracks(res)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AlbumDetails);
