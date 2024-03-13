import css from "./LoadMoreBtn.module.css";

function LoadMoreBtn() {
  function handleClick() {}

  return (
    <button className={css.btn} type="button" onClick={handleClick}>
      Load More
    </button>
  );
}

export default LoadMoreBtn;
