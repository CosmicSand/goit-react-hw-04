import { useId } from "react";
import css from "./SearchBar.module.css";

function SearchBar({ onSearch }) {
  const inpId = useId();

  function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const searchingText = form.elements.search.value.toLowerCase();
    if (searchingText.trim().length === 0) {
      return;
    }
    onSearch(searchingText);
    form.reset();
  }
  return (
    <header className={css.header}>
      <form className={css.form} onSubmit={handleSubmit}>
        <input
          className={css.input}
          type="text"
          name="search"
          id={inpId}
          autoComplete="off"
          autoFocus
          placeholder="Let's search and dive in joy!"
        />
        <button className={css.btn} type="submit">
          Go!
        </button>
      </form>
    </header>
  );
}

export default SearchBar;
