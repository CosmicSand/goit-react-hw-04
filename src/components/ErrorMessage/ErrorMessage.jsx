import css from "./ErrorMessage.module.css";

function ErrorMessage({ value }) {
  return <p className={css.text}>Ooops! {value.message}!</p>;
}

export default ErrorMessage;
