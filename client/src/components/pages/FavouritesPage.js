import React, { Component, useEffect } from "react";
import Banner from "../common/Banner";
import { connect } from 'react-redux';
import { getFavourites } from '../../redux/actions/favouriteActions';
import PropTypes from 'prop-types';

class FavouritesPage extends Component {

  componentDidMount() {
    this.props.getFavourites();
  }

  render() {
    const { favourites } = this.props.favourite; 
    return (
      <>
        <Banner />
        <h1>{favourites}</h1>
      </>
    );
 }
};

FavouritesPage.propTypes = {
  getFavourites: PropTypes.func.isRequired,
  favourite: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  favourite: state.favourite
});

export default connect(mapStateToProps, { getFavourites })(FavouritesPage);
