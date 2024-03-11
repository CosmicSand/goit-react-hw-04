import css from "./ImageCard.module.css";

function ImageCard({
  value: {
    alt_description,
    urls: { small, regular },
  },
}) {
  return (
    <div className={css.card}>
      <img
        className={css.img}
        src={small}
        alt={alt_description}
        width={300}
        // height={200}
      />
    </div>
  );
}

export default ImageCard;
