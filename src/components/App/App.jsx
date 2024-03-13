import { useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
import Loader from "../Loader/Loader";
import ImageGallery from "../ImageGallery/ImageGallery";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import ImageModal from "../ImageModal/ImageModal";
import fetchImages from "../../gallery-api";
import "./App.css";

function App() {
  const appId = 577372;
  const accessKey = "MgGVu-2Aj7GbcWHyEAULVPxtWi0-9yK_brGw5GgXLKI";
  const securityKey = "0Bi-McYmSz35ROYe7Vcwkh3cNuZnzS2E91IQZu5IUms";

  const [gallery, setGallery] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [modalImage, setModalImage] = useState(null);

  function backDropSetting(modalImageObj) {
    setModalImage(modalImageObj);
  }

  async function handleSearch(searchingText) {
    try {
      setError(null);
      setLoading(true);
      const resp = await fetchImages(searchingText);
      if (resp.length === 0) {
        throw new Error("Nothing found!");
      }
      setGallery(resp);
      console.log(resp);
    } catch (error) {
      setError(error);
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <SearchBar onSearch={handleSearch} />
      {loading && <Loader />}
      {error ? (
        <ErrorMessage value={error} />
      ) : (
        <ImageGallery value={gallery} onView={backDropSetting} />
      )}
      {modalImage && (
        <ImageModal
          value={modalImage}
          isOpen={true}
          onBackDrop={backDropSetting}
        />
      )}
    </>
  );
}

export default App;
