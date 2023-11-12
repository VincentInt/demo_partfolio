import style from './CardProject.module.scss';
import imgCard from '../../../assets/img/cardImg/Component.png';
import iconGitHub from '../../../assets/icons/github-142-svgrepo-com.svg';
const CardProject = ({ img, description, github }) => {
  return (
    <div className={style.containerCard}>
      <div style={{ backgroundImage: `url(${imgCard})` }} className={style.background}></div>
      <div className={style.description}>
        <div className={style.github}>
          <p className={style.pText}>Link:</p>{' '}
          <div>
            <img className={style.iconLink} src={iconGitHub} alt="link_github" />
          </div>
        </div>
        <p className={style.pText}>{description}</p>
      </div>
    </div>
  );
};

export default CardProject;
