import { useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
import Loader from "../Loader/Loader";
import ImageGallery from "../ImageGallery/ImageGallery";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import fetchImages from "../../gallery-api";
import "./App.css";

function App() {
  const appId = 577372;
  const accessKey = "MgGVu-2Aj7GbcWHyEAULVPxtWi0-9yK_brGw5GgXLKI";
  const securityKey = "0Bi-McYmSz35ROYe7Vcwkh3cNuZnzS2E91IQZu5IUms";

  const [searchingText, setSearchingText] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function handleSearch(searchingText) {
    try {
      setError(null);
      setLoading(true);
      const resp = await fetchImages(searchingText);
      if (resp.length === 0) {
        throw new Error("Nothing found!");
      }
      setSearchingText(resp);
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
        <ImageGallery value={searchingText} />
      )}
    </>
  );
}

export default App;
