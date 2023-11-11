import Btn from '../UI/Btn/Btn';
import style from './Navigation.module.scss';
import iconUppArrow from '../../assets/icons/move-to-the-next-page-symbol-svgrepo-com.svg';
import imgAvatar from '../../assets/img/image_2023-11-08_22-40-47.png';

const Navigation = () => {
  return (
    <div className={style.containerNav}>
      <div className={style.containerArrowIcon}>
        <img src={iconUppArrow} alt="upp_arrow_icon" className={style.arrowIcon} />
      </div>
      <nav className={style.nav}>
        <Btn>
          <img className={style.imgAvatar} src={imgAvatar} alt="avatar_logo" />{' '}
          <h4>
            <ins>VincentInt</ins>
          </h4>
        </Btn>
        <div className={style.containerBtn}>
          <Btn>About me</Btn>
          <Btn>Projects</Btn>
          <Btn>Contacts</Btn>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
