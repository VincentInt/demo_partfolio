import style from './Btn.module.scss';

const Btn = ({ children}) => {
  return <button className={style.btn}>{children}</button>;
};

export default Btn;
