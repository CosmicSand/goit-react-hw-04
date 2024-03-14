import ImageCard from "../ImageCard/ImageCard";
import { BiSolidChevronsUp } from "react-icons/bi";
import css from "./ImageGallery.module.css";

function ImageGallery({ value, isScroll, onView }) {
  function handleClick(e) {
    console.log(e);
    if (e.target.nodeName !== "IMG") return;
    const imageTargeted = e.target;
    const imageData = imageTargeted.dataset;
    const modalImage = {
      url: imageData.url,
      alt: imageTargeted.getAttribute("alt"),
      name: imageData.author,
      location: imageData.location,
      portfolio: imageData.portfolio,
    };
    onView(modalImage);
    console.log(e.target.nodeName);

    console.log(modalImage);
  }

  return (
    <>
      {" "}
      <ul className={css.list} onClick={handleClick} onKeyDown={handleClick}>
        {value.map((imgage) => (
          <li className={css.item} key={imgage.id} tabIndex={0}>
            <ImageCard value={imgage} />
          </li>
        ))}
      </ul>
      {isScroll && (
        <div className={css.top}>
          <a className={css.arrow} href="#top">
            <BiSolidChevronsUp className={css.icon} size="32" />
          </a>
        </div>
      )}
    </>
  );
}

export default ImageGallery;
