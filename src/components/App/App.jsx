import { useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
import ImageGallery from "../ImageGallery/ImageGallery";
import fetchImages from "../../gallery-api";
import css from "./App.module.css";

function App() {
  const appId = 577372;
  const accessKey = "MgGVu-2Aj7GbcWHyEAULVPxtWi0-9yK_brGw5GgXLKI";
  const securityKey = "0Bi-McYmSz35ROYe7Vcwkh3cNuZnzS2E91IQZu5IUms";

  const [searchingText, setSearchingText] = useState([]);
  console.log(searchingText);

  async function handleSearch(searchingText) {
    try {
      const resp = fetchImages(searchingText);
      resp.then((respond) => {
        setSearchingText(respond);
      });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <SearchBar onSearch={handleSearch} />
      <ImageGallery value={searchingText} />
    </>
  );
}

export default App;
