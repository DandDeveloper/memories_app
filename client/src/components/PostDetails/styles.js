import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  media: {
    borderRadius: "20px",
    objectFit: "cover",
    maxHeight: "600px",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      objectFit: "contain",
    },
  },
  card: {
    display: "flex",
    width: "100%",
    [theme.breakpoints.down("md")]: {
      flexWrap: "wrap",
      flexDirection: "column",
      // textAlign: "center",
    },
  },
  section: {
    borderRadius: "20px",
    margin: "50px",
    flex: 1,
    // [theme.breakpoints.down("sm")]: {
    //   textAlign: "center",
    // },
  },
  imageSection: {
    marginLeft: "20px",
    [theme.breakpoints.down("sm")]: {
      marginLeft: 0,
    },
  },
  recommendedPosts: {
    display: "flex",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      // textAlign: "center",
    },
  },
  loadingPaper: {
    display: "flex",
    justifyContent: "center", // L-R
    alignItems: "center", // Up - Down
    padding: "20px",
    borderRadius: "15px",
    height: "39vh",
  },
}));
