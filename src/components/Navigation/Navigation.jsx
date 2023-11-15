import style from './Navigation.module.scss';

import iconUppArrow from '../../../public/icons/move-to-the-next-page-symbol-svgrepo-com.svg';
import imgAvatar from '../../../public/img/image_2023-11-08_22-40-47.png';

import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <div className={style.containerNav}>
      <div className={style.containerArrowIcon}>
        <img src={iconUppArrow} alt="upp_arrow_icon" className={style.arrowIcon} />
      </div>
      <nav className={style.nav}>
        <Link className="Link" to={"https://github.com/VincentInt"}>
          <img className={style.imgAvatar} src={imgAvatar} alt="avatar_logo" />{' '}
          <h4>
            <ins>VincentInt</ins>
          </h4>
        </Link>
        <div className={style.containerBtn}>
          <Link className="Link" to="/winchesta_partfolio/aboutme">
            About me
          </Link>
          <Link className="Link" to="/winchesta_partfolio/projects">
            Projects
          </Link>
          {/* Добавить маршрут */}
          <Link className="Link">Contacts</Link>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
