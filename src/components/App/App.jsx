import { useState, useRef } from "react";
import toast, { Toaster } from "react-hot-toast";
import SearchBar from "../SearchBar/SearchBar";
import Loader from "../Loader/Loader";
import ImageGallery from "../ImageGallery/ImageGallery";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import ImageModal from "../ImageModal/ImageModal";
import fetchImages from "../../gallery-api";
import "./App.css";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";

function App() {
  const appId = 577372;
  const accessKey = "MgGVu-2Aj7GbcWHyEAULVPxtWi0-9yK_brGw5GgXLKI";
  const securityKey = "0Bi-McYmSz35ROYe7Vcwkh3cNuZnzS2E91IQZu5IUms";

  const [gallery, setGallery] = useState([]);
  const [isloading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [modalImage, setModalImage] = useState(null);
  const [isLoadMore, setIsLoadMore] = useState(false);

  // const totalPages = useRef(1);

  function backDropSetting(modalImageObj) {
    setModalImage(modalImageObj);
  }

  async function handleSearch(searchingText, page) {
    try {
      setError(null);
      setIsLoading(true);
      if (page === 1) {
        setGallery([]);
      }

      const resp = await fetchImages(searchingText, page);
      if (resp.results.length === 0) {
        throw new Error("Nothing found!");
      }
      setGallery(resp.results);
      if (resp.total > gallery.length) {
        setIsLoadMore(true);
      } else {
        setIsLoadMore(false);
      }
      console.log(resp);
    } catch (error) {
      setError(error);
      setIsLoadMore(false);
      console.log(error);
      toast.error(`Oooops! ${error.message}!`);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <>
      <SearchBar onSearch={handleSearch} />
      <Toaster
        position="top-right"
        toastOptions={{
          className: "",
          style: {
            border: "1px solid #713200",
            padding: "16px",
            color: "#fff",
            backgroundColor: "#454545",
          },
        }}
      />
      {error ? (
        <ErrorMessage value={error} />
      ) : (
        <ImageGallery value={gallery} onView={backDropSetting} />
      )}
      {modalImage && (
        <ImageModal
          value={modalImage}
          isOpen={modalImage && true}
          onBackDrop={backDropSetting}
        />
      )}
      {isloading && <Loader />}
      {isLoadMore && <LoadMoreBtn />}
    </>
  );
}

export default App;
