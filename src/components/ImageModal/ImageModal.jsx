import Modal from "react-modal";
import css from "./ImageModal.module.css";

function ImageModal({ value: { url, alt, name, location, portfolio } }) {
  Modal.setAppElement("#root");
  return (
    <Modal
      isOpen={url && true}
      shouldCloseOnEsc={true}
      style={{
        overlay: {
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          zIndex: "999999",
          backgroundColor: "rgba(45, 45, 45, 0.3)",
          backdropFilter: "blur(5px)",
        },
      }}
      contentElement={() => (
        <div className={css.container}>
          <img src={url} alt={alt} />
          <p className={css.text}>
            {name}
            {location && ` from ${location}`} --&gt; More cool photos
            <a href={portfolio} target="_blank" rel="noreferrer">
              &nbsp;here
            </a>
          </p>
        </div>
      )}
    >
      <p className="hhh">Cool</p>
    </Modal>
  );
}

export default ImageModal;
