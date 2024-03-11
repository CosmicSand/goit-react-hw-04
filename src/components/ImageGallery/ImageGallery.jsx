import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

function ImageGallery({ value }) {
  return (
    <ul className={css.list}>
      {value.map((img) => (
        <li className={css.item} key={img.id}>
          <ImageCard value={img} />
        </li>
      ))}
    </ul>
  );
}

export default ImageGallery;
