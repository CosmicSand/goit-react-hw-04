import css from "./ImageCard.module.css";

function ImageCard({
  value: {
    alt_description,
    likes,
    user,
    urls: { small, regular },
  },
}) {
  return (
    <div className={css.card}>
      <a href="#">
        <img
          className={css.img}
          src={small}
          alt={alt_description}
          data-url={regular}
          data-likes={likes}
          data-author={user.name}
          data-location={user.location}
          data-portfolio={user.links.html}
          width={300}
          height={200}
        />
      </a>
    </div>
  );
}

export default ImageCard;
