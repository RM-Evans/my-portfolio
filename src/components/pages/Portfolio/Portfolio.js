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
    alt: 'Virtual Museum',
    desc: 'A front-end search engine that uses the wikipedia and smithsonian API.'
  },
  {
    url: 'https://kitchen-buddy.herokuapp.com/',
    img: kitchenBuddy,
    alt: 'kitchen buddy',
    desc: 'An app that gives you a range of tools for kitchen use.'
  },
  // {
  //   url: 'https://weightlifting-tracker-group10.herokuapp.com/login',
  //   img: weightliftplanner,
  //   alt: 'weightlifting planner',
  //   desc: 'Plan out and track your lifting habits'
  // },
  {
    url: 'https://guarded-thicket-28101.herokuapp.com',
    img: justABlog,
    alt: 'https://github.com/RM-Evans/Just-a-Blog',
    desc: 'A simple blog.'
  },

  {
    url: 'https://frozen-journey-37505.herokuapp.com',
    img: budgetTracker,
    alt: 'simple budget tracker',
    desc: 'A Progressive web app (PWA) in the form of a budget tracker.'
  },

  // {
  //   url: 'https://github.com/RM-Evans/photo-port',
  //   img: photoPort,
  //   alt: 'simple gallery portfolio'
  // },

  // {
  //   url: 'https://github.com/RM-Evans/shop-shop',
  //   img: webStore,
  //   alt: 'simple webstore'
  // }

];

function Portfolio() {

  return (
    <div class="photoList-container">
      {projects.map(p => <Project project={p} />)}
    </div>
  );
}

export default Portfolio;
