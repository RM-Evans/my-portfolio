import githubAlt from '@iconify-icons/fa-brands/github-alt';
import { Icon } from '@iconify/react';

export default function Project(props) {
  const { project } = props;
  return (
    <div class="project-container">

      <div class="single-img-container">
        <a href={project.url}
          target="_blank"
          rel="noreferrer"
          class="github-project-button">



          {/* {<Icon class="project-icon" icon={githubAlt} width="44" height="44" src={project.alt} />} */}
          <img class="project-img" src={project.img} height="300px" width="300px" alt={project.alt} />

        </a>

      </div>
      <div class="project-desc" >{project.desc}</div>
    </div>
  );
};