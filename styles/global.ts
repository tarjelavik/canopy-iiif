import { globalCss } from "@stitches/react";

const defaults = {
  body: {
    margin: 0,
    padding: 0,
    fontWeight: "400",
    backgroundColor: "$slate1",
  },

  html: {
    fontFamily: "$sans",
    fontSize: "17.5px",
    fontSmooth: "always",
    webKitFontSmothing: "antialiased",
    mozOsxFontSmoth: "grayscale",
  },
};

const globalStyles = globalCss({
  ...defaults,
});

export default globalStyles;