import axios from 'axios';
const Client_ID = 'cf9bd67f097c412bb6ad6f9952583464';
const Client_Secret = '869dec31c4fc4f608f51e5a05055ea4c';

export const get_token = async () => {
  const result = await axios('https://accounts.spotify.com/api/token', {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: 'Basic ' + btoa(Client_ID + ':' + Client_Secret),
    },
    data: 'grant_type=client_credentials',
    method: 'POST',
  })
    .then((tokenResponse) => {
      return tokenResponse.data.access_token;
    })
    .catch((e) => {
      console.log(`There was a problem generating the token ${e}`);
    });
  return result;
};

export const getSearched = (query, type, token) => {
  console.log(query, type, token);
  const result = axios(
    `https://api.spotify.com/v1/search?q=${query}&type=${type}&limit=15`,
    {
      method: 'GET',

      headers: {
        Accept: 'application/json',
        'Content-type': 'application/json',
        Authorization: 'Bearer ' + token,
      },
    }
  )
    .then((res) => {
      return res;
    })
    .catch((e) => {
      console.log(`There was a problem fetching the data ${e}`);
    });

  return result;
};

export const getAlbumsTracks = (id, token) => {
  const result = axios(
    `https://api.spotify.com/v1/albums/${id}/tracks?offset=0&limit=15`,
    {
      method: 'GET',

      headers: {
        Accept: 'application/json',
        'Content-type': 'application/json',
        Authorization: 'Bearer ' + token,
      },
    }
  )
    .then((res) => {
      return res;
    })
    .catch((e) => {
      console.log(`There was a problem fetching the tracks ${e}`);
    });

  return result;
};
