import css from './Button.module.css';

const Button = ({ text, onClick }) => {
  return (
    <>
      <div>
        <button className={css.button} onClick={onClick}>
          {text}
        </button>
      </div>
    </>
  );
};

export default Button;
