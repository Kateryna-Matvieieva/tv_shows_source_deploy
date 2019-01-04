import React from 'react';
import FilterByItemLink from '../containers/FilterByItemLink';
import PropTypes from 'prop-types';

const TVShows = ({item, img, genres, index}) => (
  <tr>
    <td>{index}</td>
    <td>{item.name}
      <img src={img.src || '../download.png'} alt="Poster" width="165" height="268"/>
    </td>
    <td>{Math.round(item.popularity)}</td>
    <td>{item.first_air_date}</td>
    <td>{item
        .genre_ids
        .map(item => genres[item])
        .filter(item => item !== undefined)
        .join(', ')}</td>
    <td
      onMouseEnter={(e) => e.currentTarget.innerText = item.overview}
      onMouseLeave={(e) => e.currentTarget.innerText = item.overview.slice(0, 250) + '.....'}>{item
        .overview
        .slice(0, 350) + '.....'}</td>
    <td>
      <FilterByItemLink showId={item.id} name={item.name}>Recommendations</FilterByItemLink>
      <FilterByItemLink showId={item.id} name={item.name}>Similar</FilterByItemLink>
    </td>
  </tr>
)

TVShows.propTypes = {
  item: PropTypes.object.isRequired,
  img: PropTypes.object.isRequired,
  genres: PropTypes.array.isRequired,
  index: PropTypes.number.isRequired
}

export default TVShows;