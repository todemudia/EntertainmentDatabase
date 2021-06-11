import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import axios from '../../api';
import requests from '../../requests';
import { Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  banner: {
    color: '#fff',
    objectFit: 'contain',
    height: '448px',
  },
  bannerContents: {
    marginLeft: '30px',
    paddingTop: '140px',
    height: '190px',
  },
  bannerTitle: {
    fontSize: '3rem',
    fontWeight: '800',
    paddingBottom: '0.3rem',
    color: '#e6e6e6',
  },
  bannerDescription: {
    width: '45rem',
    lineHeight: '1.3',
    paddingTop: '1rem,',
    fontSize: '0.8rem',
    maxWidth: '360px',
    height: '80px',
  },
  bannerButton: {
    color: '#fff',
    fontWeight: '700',
    borderRadius: '0.3vw',
    padding: '0.5rem 2rem',
    marginRight: '1rem',
    marginBottom: '1rem',
    marginTop: '2rem',
    backgroundColor: 'rgba(51, 51, 51, 0.5)',
    '& :hover': {
      color: '#fff',
      backgroundColor: '"rgba(51, 51, 51, 0.5)"',
      transition: 'all 0.2s',
    },
  },
  bannerFadeBottom: {
    height: '7.4rem',
    backgroundImage:
      'linear-gradient(180deg, transparent, rgba(37, 37, 37, 0.61), #111)',
  },
}));

export default function Header(props) {
  const classes = useStyles();
  const [media, setMedia] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchTrending);
      setMedia(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }
    fetchData();
  }, []);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + '...' : str;
  }

  return (
    <header
      className={classes.banner}
      style={{
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${media?.backdrop_path}")`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
      <div className={classes.bannerContents}>
        <Link
          style={{ textDecoration: 'none' }}
          to={
            media?.media_type === 'movie' || 'tv'
              ? `/${media?.media_type}`
              : `/movie`
          }
        >
          <h1 className={classes.bannerTitle}>
            {media?.title || media?.name || media?.original_name}
          </h1>
        </Link>
        <Button className={classes.bannerButton}>Favorite</Button>
        <h1 className={classes.bannerDescription}>
          {truncate(media?.overview, 150)}
        </h1>
      </div>
      <div className={classes.bannerFadeBottom}></div>
    </header>
  );
}
