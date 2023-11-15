import style from './Project.module.scss';

import CardProject from '../../UI/CardProject/CardProject';
import CustomDropdown from '../../UI/CustomDropdown/CustomDropdown';

import { useEffect, useState } from 'react';
import { project } from '../../data/projectData.json';

import Aos from 'aos';
import 'aos/dist/aos.css';

const Project = () => {
  const options = ['Technologies', 'Standart'];
  const [typeSelect, setTypeSelect] = useState('Technologies');
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
          <title data-aos="fade-down" className={style.titleSelect}>Select:</title>
          <CustomDropdown setTypeSelect={setTypeSelect} options={options} />
        </div>
      </div>
      <div className={style.containerProjects}>
        {project.map((item) => {
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
