import React, { useEffect, useState } from 'react';
import './main.css';
import Search from '../../components/search/Search';
import AlbumsList from '../../components/albumsList/AlbumsList';
import { get_token } from '../../api';
import { getTokenReq, isEndOfPage } from '../../redux/actions';
import { connect } from 'react-redux';

const Main = (props) => {
  useEffect(() => {
    get_token().then((res) => props.getToken(res));
  }, []);

  const handleScroll = () => {
    const bottom =
      Math.ceil(window.innerHeight + window.scrollY) >=
      document.documentElement.scrollHeight;

    if (bottom) {
      props.isEndOfPage(true);
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='mainPageContainer'>
      <Search />
      <AlbumsList />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    token: state.token,
    endOfPage: state.endOfPage,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getToken: (res) => dispatch(getTokenReq(res)),
    isEndOfPage: (res) => dispatch(isEndOfPage(res)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
