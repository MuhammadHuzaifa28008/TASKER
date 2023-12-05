const primaryColor = "#1c1e27"; // (#1c1e27): This is a dark color, suitable for primary elements and backgrounds. It's not too harsh, and it can provide good contrast for text and other elements.
const secondaryColor = "#373a49"; //  (#373a49): Another dark color, likely used for secondary elements. It complements the primary color well and adds variation.
const textPrimaryColor = "#6c6e7f"; // (#6c6e7f): A mid-gray color for primary text. It should offer good readability, especially against the primary and secondary background colors.
const textSecondaryColor = "#a5a7b6"; // (#a5a7b6): A lighter gray color for secondary text. This is a common approach for subtle text that is less prominent than the primary text.
const backgroundColor = "#e1e3ea"; // (#e1e3ea): This is a light background color. It's not extremely sharp and is generally considered user-friendly. Light backgrounds often contribute to a clean and modern design.

const theme = {
  colors: {
    primary: primaryColor,
    secondary: secondaryColor,
    textPrimary: textPrimaryColor,
    textSecondary: textSecondaryColor,
    background: backgroundColor,
  },
  components: {
    appBar: {
      backgroundColor: secondaryColor,
      elevation: 10,
      color: textPrimaryColor,
      padding: 0,
      // shadowColor: secondaryColor,
      // borderRadius: 2,
      // shadowOffset: { width: 0, height: 3 },
      // shadowOpacity: 5,
      // shadowRadius: 2,
    },
    drawer: {
      backgroundColor: secondaryColor,
      color: textPrimaryColor,
      padding: 0,
    },
    card: {
      main: {
        backgroundColor: backgroundColor,
        borderRadius: 10,
        padding: 8,
        elevation: 1,
        shadowColor: secondaryColor,
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 3,
        shadowRadius: 2,
      },
      title: {
        fontWeight: "bold",
        fontSize: 24,
        color: textPrimaryColor,
        padding: 4,
      },
      content: {
        padding: 6,
        fontSize: 12,
        color: textSecondaryColor,
      },
      actions: {
        padding: 8,
      },
    },

    button: {
      main: {
        padding: 8,
        elevation: 5,
        height: 65,
        borderRadius: 10,
        fontWeight: "bold",
      },
      contained: {
        backgroundColor: primaryColor,
        color: backgroundColor,
        // borderWidth:3,
      },
      outlined: {
        borderColor: primaryColor,
        color: primaryColor,
        borderWidth: 3,
      },
    },
  },
  typography: {
    fontFamily: "sans-serif",
    // fontFamily: "cursive", have to load  from somewhere/ add it first
    h1: { fontSize: 48, fontWeight: "bold" },
    h2: { fontSize: 44, fontWeight: "bold" },
    h3: { fontSize: 40, fontWeight: "bold" },
    h4: { fontSize: 38, fontWeight: "bold" },
    h5: { fontSize: 36, fontWeight: "bold" },
    h6: { fontSize: 34, fontWeight: "bold" },
  },
};
export default theme;
