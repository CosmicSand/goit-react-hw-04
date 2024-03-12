import { useState } from "react";
import { Grid } from "react-loader-spinner";
import SearchBar from "../SearchBar/SearchBar";
import ImageGallery from "../ImageGallery/ImageGallery";
import fetchImages from "../../gallery-api";
import css from "./App.module.css";

function App() {
  const appId = 577372;
  const accessKey = "MgGVu-2Aj7GbcWHyEAULVPxtWi0-9yK_brGw5GgXLKI";
  const securityKey = "0Bi-McYmSz35ROYe7Vcwkh3cNuZnzS2E91IQZu5IUms";

  const [searchingText, setSearchingText] = useState([]);
  const [loading, setLoading] = useState(false);

  async function handleSearch(searchingText) {
    try {
      setLoading(true);
      const resp = await fetchImages(searchingText);
      setSearchingText(resp);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <SearchBar onSearch={handleSearch} />
      <ImageGallery value={searchingText} />
      {loading && (
        <Grid
          visible={true}
          height="80"
          width="80"
          color="#fff"
          ariaLabel="grid-loading"
          radius="12.5"
          wrapperStyle={{
            display: "block",
            marginLeft: "auto",
            marginRight: "auto",
            textAlign: "center",
          }}
        />
      )}
    </>
  );
}

export default App;
