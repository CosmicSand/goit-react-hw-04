import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

function ImageGallery({ value, onView }) {
  function handleClick(e) {
    if (e.target.nodeName !== "IMG") return;
    const image = e.target;
    const imageData = image.dataset;
    const modalImage = {
      url: imageData.url,
      alt: image.getAttribute("alt"),
      name: imageData.author,
      location: imageData.location,
      portfolio: imageData.portfolio,
    };
    onView(modalImage);
    console.log(e.target.nodeName);
    console.log(modalImage);
  }

  return (
    <ul className={css.list} onClick={handleClick}>
      {value.map((imgage) => (
        <li className={css.item} key={imgage.id} tabIndex={0}>
          <ImageCard value={imgage} />
        </li>
      ))}
    </ul>
  );
}

export default ImageGallery;
