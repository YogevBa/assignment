import React, { useEffect, useState } from 'react';
import { getSearched } from '../../api';
import axios from 'axios';

const useSearch = (
  query,
  token,
  type,
  searchedResults,
  endOfPage,
  isEndOfPage,
  data
) => {
  const [error, setError] = useState(false);
  const [hasMore, setHasMore] = useState(false);
  const [offset, setOffSet] = useState(0);
  const [results, setResults] = useState([]);

  useEffect(() => {
    searchedResults([]);
  }, [query]);

  useEffect(() => {
    setError(false);
    let cancel = () => {
      return;
    };
    if (endOfPage || query) {
      axios({
        method: 'GET',
        url: `https://api.spotify.com/v1/search?q=${query}&type=${type}&limit=15&offset=${offset}`,
        params: { q: query },
        headers: {
          Accept: 'application/json',
          'Content-type': 'application/json',
          Authorization: 'Bearer ' + token,
        },
        // this is responsible to cancel an unnecessary calls to the api after every change
        cancelToken: new axios.CancelToken((c) => (cancel = c)),
      })
        .then((res) => {
          let oldData =
            data && data.data && data.data.albums ? data.data.albums.items : [];
          let newData =
            res.data && res.data.albums ? res.data.albums.items : [];
          let updatedData = setResults([...oldData, newData]);

          setHasMore(res.data.albums.total > 0);

          if (data.length > 0) {
            searchedResults(results);
          } else {
            searchedResults(res);
          }
          if (endOfPage && hasMore) {
            setOffSet(offset + 15);
          }

          isEndOfPage('');
        })

        .catch((e) => {
          if (axios.isCancel(e)) return;
          else {
            console.log(e);
          }
        });
    }

    return () => cancel();
  }, [query, endOfPage]);
  return { error, hasMore };
};

export default useSearch;
