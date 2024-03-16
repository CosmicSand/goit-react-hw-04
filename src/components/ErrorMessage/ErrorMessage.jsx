import css from "./ErrorMessage.module.css";

function ErrorMessage({ errorObj }) {
  return (
    <p className={css.text}>
      Ooops! {errorObj.message}! Just refresh the page.
    </p>
  );
}

export default ErrorMessage;
