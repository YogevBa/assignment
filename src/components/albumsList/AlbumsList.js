import React from 'react';
import { connect } from 'react-redux';
import InfoBox from '../infoBox/InfoBox';
import './albumsList.css';

const AlbumsList = (props) => {
  const renderItems =
    props.data &&
    props.data.data &&
    props.data.data.albums &&
    props.data.data.albums.items.map((itm) => (
      <InfoBox type={'album'} itmData={itm} key={itm.id} />
    ));

  return (
    <div
      className='listContainer'
      style={
        (props.data &&
          props.data.data &&
          props.data.data.albums.items.length <= 5) ||
        !props.data.data
          ? { height: '100vh' }
          : { height: '100%' }
      }
    >
      {props.data &&
        props.data.data &&
        props.data.data.albums.items.length > 0 &&
        renderItems}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    data: state.data,
  };
};

export default connect(mapStateToProps)(AlbumsList);
