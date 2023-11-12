import style from './Project.module.scss';
import imgCard from '../../assets/img/cardImg/Component.png';
import CardProject from '../UI/CardProject/CardProject';
import CustomDropdown from '../UI/CustomDropdown/CustomDropdown';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from 'react';

const Project = () => {
  const options = ['Technologies', 'Standart'];
  const [typeSelect, setTypeSelect] = useState('Technologies');
  const projects = [
    {
      id: 1,
      type: 'Technologies',
      img: imgCard,
      tools: ['REACT', 'SCSS', 'AOS'],
      description: '        Lorem ipsum dolor, sit amet consectetur adipisi',
      links: [
        { path: 'github', link: '#' },
        { path: 'page', link: '#' },
      ],
    },
    {
      id: 2,
      type: 'Standart',
      img: imgCard,
      tools: ['REACT', 'SCSS'],
      description: 'sdagpsdjgiodfhgipodpg;j',
      links: [
        { path: 'github', link: '#' },
        { path: 'page', link: '#' },
      ],
    },
    {
      id: 3,
      type: 'Technologies',
      img: imgCard,
      tools: ['REACT', 'SCSS'],
      description: 'sdagpsdjgiodfhgipodpg;j',
      links: [
        { path: 'github', link: '#' },
        { path: 'page', link: '#' },
      ],
    },
  ];
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);
  return (
    <section data-aos="fade-down" className={style.contrainerProject}>
      <div className={style.titleCotnainer}>
        <title data-aos="fade-down" className={style.title}>
          Project:
        </title>

        <div className={style.selectContainer}>
          <h2 className={style.h2Text}>Select:</h2>
          <CustomDropdown setTypeSelect={setTypeSelect} options={options} />
        </div>
      </div>
      <div className={style.containerProjects}>
        {projects.map((item) => {
          if (item.type === typeSelect) {
            return (
              <CardProject
                key={item.id}
                tools={item.tools}
                img={item.img}
                description={item.description}
                links={item.links}
              />
            );
          }
        })}
      </div>
    </section>
  );
};

export default Project;
