import style from './CardProject.module.scss';
import iconGithub from '../../../assets/icons/github-142-svgrepo-com.svg';
import iconPage from '../../../assets/icons/url-1423-svgrepo-com.svg';

const CardProject = ({ img, description, links, tools }) => {
  console.log(img);
  const typeIcon = (type) => {
    switch (type) {
      case 'github':
        return iconGithub;
      case 'page':
        return iconPage;
      default:
        break;
    }
  };
  return (
    <div className={style.containerCard}>
      <div style={{ backgroundImage: `url(${img})` }} className={style.background}></div>
      <div className={style.description}>
        <div>
          <div className={style.github}>
            <p className={style.pText}>Link:</p>
            <div>
              {links.map((item, index) => {
                return (
                  <a key={index} href={item.link}>
                    <img className={style.iconLink} src={typeIcon(item.path)} alt="link_github" />
                  </a>
                );
              })}
            </div>
          </div>
          <div className={style.containerTools}>
              {tools.map((item, index)=>{
                return (
                  <h6 key={index} className={style.tools}>{item}</h6>
               )
              })}
          </div>
          <p className={style.pText}>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default CardProject;
