import React from 'react';

import { Icon, InlineIcon } from '@iconify/react';
import githubAlt from '@iconify-icons/fa-brands/github-alt';

import virtmuseum from '../../../assets/projectSnaps/virtmuseum.png';
import weightliftplanner from '../../../assets/projectSnaps/weightliftingplannerTitle.PNG';
import justABlog from '../../../assets/projectSnaps/justABlogimg.PNG';
import webStore from '../../../assets/projectSnaps/simpleWebStoreimg.PNG';
import budgetTracker from '../../../assets/projectSnaps/budgetTrackerimg.PNG';
import photoPort from '../../../assets/projectSnaps/photoPortimg.PNG';


function Portfolio() {
  return (
    <div class="photoList-container">


      <div class="project-container">

        {/* virt museum image */}
        <div class="single-img-container">
          <a
            href="https://rm-evans.github.io/Virtual-Museum/"
            target="_blank"
          >
            <img class="project-img" src={virtmuseum} height="300px" width="300px" alt="virtual museum" />
          </a>
        </div>

        <a
          href="https://github.com/RM-Evans/Virtual-Museum"
          target="_blank"
          class="github-project-button"
        >
          {<Icon icon={githubAlt} width="44" height="44" />}
        </a>

      </div>



      {/* weightliftplan image */}

      <div class="project-container">


        <div class="single-img-container">
          <a
            href="https://weightlifting-tracker-group10.herokuapp.com/login"
            target="_blank"
          >
            <img class="project-img" src={weightliftplanner} height="300px" width="300px" alt="weightlifting planner" />
          </a>
        </div>

        <a
          href="https://github.com/jfraught/weightlifting-tracker"
          target="_blank"
          class="github-project-button"
        >
          {<Icon icon={githubAlt} width="44" height="44" />}
        </a>

      </div>




      {/* just a blog */}

      <div class="project-container">


        <div class="single-img-container">
          <a
            href="https://guarded-thicket-28101.herokuapp.com/"
            target="_blank"
          >
            <img class="project-img" src={justABlog} height="300px" width="300px" alt="just a blog application" />
          </a>
        </div>

        <a
          href="https://github.com/RM-Evans/Just-a-Blog"
          target="_blank"
          class="github-project-button"
        >
          {<Icon icon={githubAlt} width="44" height="44" />}
        </a>

      </div>


      {/* webstore */}

      <div class="project-container">

        <div class="single-img-container">
          <a
            href="https://frozen-journey-37505.herokuapp.com/"
            target="_blank"
          >
            <img class="project-img" src={budgetTracker} height="300px" width="300px" alt="simple budget tracker" />
          </a>
        </div>

        <a
          href="https://github.com/RM-Evans/budget-tracker"
          target="_blank"
          class="github-project-button"
        >
          {<Icon icon={githubAlt} width="44" height="44" />}
        </a>

      </div>



      <div class="project-container">

        <div class="single-img-container">
          <a
            href="https://github.com/RM-Evans/photo-port"
            target="_blank"
          >
            <img class="project-img" src={photoPort} height="300px" width="300px" alt="simple gallery portfolio" />
          </a>
        </div>

        <a
          href="https://github.com/RM-Evans/photo-port"
          target="_blank"
          class="github-project-button"
        >
          {<Icon icon={githubAlt} width="44" height="44" />}
        </a>

      </div>


      <div class="project-container">

<div class="single-img-container">
  <a
    href="https://github.com/RM-Evans/shop-shop"
    target="_blank"
  >
    <img class="project-img" src={webStore} height="300px" width="300px" alt="simple webstore" />
  </a>
</div>

<a
  href="https://github.com/RM-Evans/shop-shop"
  target="_blank"
  class="github-project-button"
>
  {<Icon icon={githubAlt} width="44" height="44" />}
</a>

</div>


    </div>



  );
}

export default Portfolio;
