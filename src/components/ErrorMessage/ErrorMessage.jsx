import css from "./ErrorMessage.module.css";

function ErrorMessage({ errorObj }) {
  return <p className={css.text}>Ooops! {errorObj.message}!</p>;
}

export default ErrorMessage;
