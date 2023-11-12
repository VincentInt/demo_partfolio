import style from './CardProject.module.scss'

const CardProject = ({img, description, github}) => {
  return (
    <div style={{backgroundImage: `${img}`}} className={style.containerCard}>

    </div>
  );
};

export default CardProject;