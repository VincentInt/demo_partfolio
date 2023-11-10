import style from './Gradient.module.scss';

const Gradient = () => {
  return (
    <>
      <div className={style.noises}></div>
      <div className={style.containerGradient}>
        <div className={style.centerGradient}>
          <div className={style.mainGradient}>
            <div className={style.gradient}></div>
            <div className={style.gradient}></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Gradient;
