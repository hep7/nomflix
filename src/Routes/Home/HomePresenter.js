import Loader from 'Components/Loader';
import Message from 'Components/Message';
import Poster from 'Components/Poster';
import Section from 'Components/Section';
import PropTypes from 'prop-types';
import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';

const Container = styled.div`
	padding: 20px;
`;

const HomePresenter = ({ nowPlaying, popular, upcoming, loading, error }) =>
    <>
      <Helmet>
        <title>Movies | Nomflix</title>
      </Helmet>
    {loading ? (
        <Loader />
      ) : (
        <Container>
        <Helmet>
          <title>Movies | Nomflix</title>
        </Helmet>
          {nowPlaying && nowPlaying.length > 0 && (
            <Section title='Now Playing'>
              {nowPlaying.map((movie) => (
                <Poster
                  key={movie.id}
                  id={movie.id}
                  imageUrl={movie.poster_path}
                  title={movie.original_title}
                  rating={movie.vote_average}
                  year={movie.release_date.substring(0, 4)}
                  isMovie={true}
                />
              ))}
            </Section>
          )}
          {upcoming && upcoming.length > 0 && (
            <Section title='Upcoming Movies'>
              {upcoming.map((movie) => (
                <Poster
                key={movie.id}
                id={movie.id}
                imageUrl={movie.poster_path}
                title={movie.original_title}
                rating={movie.vote_average}
                year={movie.release_date.substring(0, 4)}
                isMovie={true}
              />
              ))}
              ;
            </Section>
          )}
          {popular && popular.length > 0 && (
            <Section title='Popular Movies'>
              {popular.map((movie) => (
                <Poster
                key={movie.id}
                id={movie.id}
                imageUrl={movie.poster_path}
                title={movie.original_title}
                rating={movie.vote_average}
                year={movie.release_date.substring(0, 4)}
                isMovie={true}
              />
              ))}
              ;
            </Section>
          )}
          {error && <Message color='#e74c3c' text={error} />}
        </Container>
        )}
    </>

	

HomePresenter.propTypes = {
	nowPlaying: PropTypes.array,
	popular: PropTypes.array,
	upcomfing: PropTypes.array,
	loading: PropTypes.bool.isRequired,
	error: PropTypes.string,
};

export default HomePresenter;
