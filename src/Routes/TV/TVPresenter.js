import Loader from 'Components/Loader';
import Message from 'Components/Message';
import Poster from 'Components/Poster';
import Section from 'Components/Section';
import PropTypes from 'prop-types';
import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';

const Container = styled.div`
	padding: 0px 10px;
`;

const TVPresenter = ({ topRated, popular, airingToday, loading, error }) =>
<>
  <Helmet>
      <title>TV Shows | Nomflix</title>
  </Helmet>
  {loading ? (
      <Loader />
    ) : (
		<Container>
			{topRated && topRated.length > 0 && (
				<Section title='Top Rated Shows'>
					{topRated.map((show) => (            
						<Poster
							key={show.id}
							id={show.id}
							imageUrl={show.poster_path}
							title={show.name}
							rating={show.vote_average}
							year={show.first_air_date.substring(0, 4)}
							isMovie={false}
						/>
					))}
				</Section>
			)}
			{popular && popular.length > 0 && (
				<Section title='Popular Shows'>
					{popular.map((show) => (
						<Poster
            key={show.id}
            id={show.id}
            imageUrl={show.poster_path}
            title={show.name}
            rating={show.vote_average}
            year={show.first_air_date.substring(0, 4)}
            isMovie={false}
          />
					))}
				</Section>
			)}
			{airingToday && airingToday.length > 0 && (
				<Section title='Airing Today'>
					{airingToday.map((show) => (
						<Poster
            key={show.id}
            id={show.id}
            imageUrl={show.poster_path}
            title={show.name}
            rating={show.vote_average}
            year={show.first_air_date.substring(0, 4)}
            isMovie={false}
          />
					))}
				</Section>
			)}
			{error && <Message color='#e74c3c' text={error} />}
		</Container>
)}    
</>


TVPresenter.propTypes = {
	topRated: PropTypes.array,
	popular: PropTypes.array,
	airingToday: PropTypes.array,
	loading: PropTypes.bool.isRequired,
	error: PropTypes.string,
};

export default TVPresenter;
