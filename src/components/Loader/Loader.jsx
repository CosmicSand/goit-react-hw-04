import { Grid } from "react-loader-spinner";
import css from "./Loader.module.css";

function Loader() {
  return (
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
  );
}

export default Loader;
