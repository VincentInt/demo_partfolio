import style from './Aboutme.module.scss';
import htmlIcon from '../../assets/icons/html-124-svgrepo-com.svg';
import cssIcon from '../../assets/icons/css3-02-svgrepo-com.svg';
import scssIcon from '../../assets/icons/sass-svgrepo-com.svg';
import jsIcon from '../../assets/icons/javascript-fill-svgrepo-com.svg';
import viteIcon from '../../assets/icons/vite_svg_icon.svg';
import reactIcon from '../../assets/icons/react-svgrepo-com.svg';
import Btn from '../UI/Btn/Btn';
import moreIcon from '../../assets/icons/more-vertical-svgrepo-com.svg';
import CardProject from '../UI/CardProject/CardProject';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Aboutme = () => {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);
  return (
    <section data-aos="fade-down" className={style.container}>
      <div>
        <title data-aos="fade-down" className={style.title}>
          About myself:
        </title>
        <p className={style.pText}>
          Greetings! My name is <ins className={style.insText}>William Winchesta</ins>, I am a young
          developing Front-end developer from Russia. I spend a significant part of my time devoted
          to the world of web development,
          <ins className={style.insText}>improving knowledge</ins> and skills in the Front-end
          direction. Already{' '}
          <ins className={style.insText}> for almost a year I have been studying </ins> the latest
          technologies, improving my skills and expanding my horizons. My knowledge and experience
          are concentrated in the field of creating{' '}
          <ins className={style.insText}>React-based applications</ins>, where I was able to gain
          experience and <ins className={style.insText}>implement</ins> a number of exciting
          projects.
        </p>
      </div>
      <div className={style.containerListAndProject}>
        <div>
          <title data-aos="fade-down" className={style.title}>
            Skills
          </title>
          <ul className={style.list}>
            <li className={style.li}>
              <img className={style.imgList} src={htmlIcon} alt="html_icon" />
              <p className={style.pList}>HTML</p>
            </li>
            <li className={style.li}>
              <img className={style.imgList} src={cssIcon} alt="css_icon" />
              <p className={style.pList}> CSS</p>
            </li>
            <li className={style.li}>
              <img className={style.imgList} src={scssIcon} alt="scss_icon" />
              <p className={style.pList}>SCSS/SASS</p>
            </li>
            <li className={style.li}>
              <img className={style.imgList} src={jsIcon} alt="js_icon" />
              <p className={style.pList}> JavaScript</p>
            </li>
            <li className={style.li}>
              <img className={style.imgList} src={viteIcon} alt="vite_icon" />
              <p className={style.pList}>Vite</p>
            </li>
            <li className={style.li}>
              <img className={style.imgList} src={reactIcon} alt="react_icon" />
              <p className={style.pList}> React</p>
            </li>
          </ul>
          <title data-aos="fade-down" className={style.title}>
            Personality
          </title>
          <ul className={style.list}>
            <li className={style.li}>
              <p className={style.pList}> Responsible</p>
            </li>
            <li className={style.li}>
              <p className={style.pList}>Patient</p>
            </li>
            <li className={style.li}>
              <p className={style.pList}>Hardworking</p>
            </li>
          </ul>
        </div>
        <div>
          <title data-aos="fade-down" className={style.title}>
            Last Project:
          </title>
          <CardProject  description={"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem, iure."}/>
          <Btn>
            <img className={style.moreIcon} src={moreIcon} alt="icon_more" />
            <h4 className={style.h4Text}>More Project</h4>
          </Btn>
        </div>
      </div>
    </section>
  );
};

export default Aboutme;
