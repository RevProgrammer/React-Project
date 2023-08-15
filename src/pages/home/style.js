import { GradientBanner, MainBanner } from "../../assets";

const style = {
  mainBox: {
    justifyContent: { sm: "center" },
    alignItems: "center",
    backgroundImage: { sm: `url(${MainBanner})` },
    backgroundRepeat: { sm: "no-repeat" },
    backgroundSize: { sm: "cover" },
    backgroundPosition: "center",
    background: "black",
  },
  mainBoxChild: {
    width: { xl: "50%", lg: "80%", md: "70%", xs: "90%" },
    alignItems: "center",
    my: 5,
  },
  buttonBox: {
    py: 4,
    border: 2,
    borderColor: "secondary.light",
    justifyContent: "center",
    alignItems: "center",
    // px: { xl: 8, lg: 3, md: 4, xs: 3 },
    px:2,
    mt: 3,
  },
  bannerStyle: {
    justifyContent: "center",
    alignItems: "center",
    width: { xl: "75%", lg: "90%", sm: "95%", xs: "100%" },
    backgroundImage: `url(${GradientBanner})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
    objectFit: "cover",
    minHeight: { lg: "500px", xs: "300px" },
    mb: 3,
  },
  downloadCard: {
    border: 7,
    borderStyle: "double",
    borderColor: "secondary.light",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: { sm: "row", xs: "column" },
    boxShadow: "-1px 9px 63px -3px rgba(0,0,0,0.75)",
    width: { xl: "70%", lg: "80%", sm: "90%" },
    py: 3,
    px: 5,
    backgroundColor: "primary.main",
  },
};

export { style };
