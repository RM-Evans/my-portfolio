import React from 'react';

import kitchenBuddy from '../../../assets/projectSnaps/kitchen-buddySnap.PNG';
import virtmuseum from '../../../assets/projectSnaps/virtmuseum.png';
import weightliftplanner from '../../../assets/projectSnaps/weightliftingplannerTitle.PNG';
import justABlog from '../../../assets/projectSnaps/justABlogimg.PNG';
import webStore from '../../../assets/projectSnaps/simpleWebStoreimg.PNG';
import budgetTracker from '../../../assets/projectSnaps/budgetTrackerimg.PNG';
import photoPort from '../../../assets/projectSnaps/photoPortimg.PNG';

import Project from './Project';

const projects = [
  {
    url: 'https://rm-evans.github.io/Virtual-Museum/',
    img: virtmuseum,
    alt: 'Virtual Museum'
  },
  {
    url: 'https://weightlifting-tracker-group10.herokuapp.com/login',
    img: weightliftplanner,
    alt: 'weightlifting planner'
  },
  {
    url: 'https://kitchen-buddy.herokuapp.com/',
    img: kitchenBuddy,
    alt: 'kitchen buddy'
  },

  {
    url: 'https://guarded-thicket-28101.herokuapp.com',
    img: justABlog,
    alt: 'https://github.com/RM-Evans/Just-a-Blog'
  },

  {
    url: 'https://frozen-journey-37505.herokuapp.com',
    img: budgetTracker,
    alt: 'simple budget tracker'
  },

  {
    url: 'https://github.com/RM-Evans/photo-port',
    img: photoPort,
    alt: 'simple gallery portfolio'
  },

  {
    url: 'https://github.com/RM-Evans/shop-shop',
    img: webStore,
    alt: 'simple webstore'
  }

];

function Portfolio() {

  return (
    <div class="photoList-container">
      {projects.map(p => <Project project={p} />)}
    </div>
  );
}

export default Portfolio;
