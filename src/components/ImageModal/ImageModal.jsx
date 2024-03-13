import Modal from "react-modal";
import css from "./ImageModal.module.css";

function ImageModal({
  value: { url, alt, name, location, portfolio },
  onBackDrop,
  isOpen,
}) {
  //   function handleEvent(e) {
  //     console.log(e);
  //     if (e.target.code === "Escape")

  //     console.log(e.target.code);
  //     onBackDrop(null);
  //   }
  //   function handleKey(e) {
  //     console.log(e);

  //     console.log(e.target.code);
  //     onBackDrop(null);
  //   }

  Modal.setAppElement("#root");
  return (
    <Modal
      isOpen={isOpen}
      shouldCloseOnEsc={true}
      shouldCloseOnOverlayClick={true}
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
            {location ? ` from ${location}` : ` from lovely Earth planet`}{" "}
            --&gt; More cool photos
            <a
              className={css.link}
              href={portfolio}
              target="_blank"
              rel="noreferrer"
            >
              &nbsp;here
            </a>
          </p>
        </div>
      )}
    ></Modal>

    // =============== Альтернатива =================

    // <div
    //   id="modal"
    //   className={css.modal}
    //   onClick={handleEvent}
    //   onKeyUp={handleKey}
    //   tabIndex={1}
    // >
    //   <div className={css.container} onKeyUp={handleKey}>
    //     <img src={url} alt={alt} onKeyUp={handleKey} />
    //     <p className={css.text}>
    //       {name}
    //       {location ? ` from ${location}` : ` from lovely Earth planet`} --&gt;
    //       More cool photos
    //       <a
    //         className={css.link}
    //         href={portfolio}
    //         target="_blank"
    //         rel="noreferrer"
    //       >
    //         &nbsp;here
    //       </a>
    //     </p>
    //   </div>
    // </div>
  );
}

export default ImageModal;
