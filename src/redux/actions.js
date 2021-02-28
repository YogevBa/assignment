export const getTokenReq = (res) => {
  return {
    type: 'token',
    fetchRes: res,
  };
};

export const getSearchedResults = (res) => {
  return {
    type: 'data',
    fetchRes: res,
  };
};

export const getAlbumTracks = (res) => {
  return {
    type: 'tracks',
    fetchRes: res,
  };
};

export const isEndOfPage = (res) => {
  return {
    type: 'endOfPage',
    fetchRes: res,
  };
};
