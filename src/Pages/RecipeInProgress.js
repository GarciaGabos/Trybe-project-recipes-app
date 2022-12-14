import PropTypes from 'prop-types';
import React from 'react';
import DrinkInProgress from '../Components/DrinkInProgress';
import FoodsInProgress from '../Components/FoodsInProgress';

function RecipeInProgress({ foodInProgress }) {
  return (
    <div>
      { foodInProgress ? (<FoodsInProgress />)
        : (<DrinkInProgress />) }
    </div>
  );
}

export default RecipeInProgress;

RecipeInProgress.propTypes = {
  foodInProgress: PropTypes.bool,
}.isRequired;
