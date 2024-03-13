import Modal from "react-modal";
import css from "./ImageModal.module.css";

function ImageModal({ value: { url, alt, name, location, portfolio } }) {
  Modal.setAppElement("#root");
  return (
    <Modal
      isOpen={url && true}
      shouldCloseOnEsc={true}
      contentElement={() => (
        <div className={css.container}>
          <img src={url} alt={alt} />
        </div>
      )}
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
    >
      <p className="hhh">Cool</p>
    </Modal>
  );
}

export default ImageModal;
