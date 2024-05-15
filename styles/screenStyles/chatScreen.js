import theme from "../theme.js";
const colors = theme.colors;

const greetingCardCustomStyle = {
  backgroundColor: "transparent",
  height: "20%",
  justifyContent: "center",
};
const cardHeaderCustomStyle = {};
const greetingTextCustomStyle = {
  textAlign: "center",
  flex: 1,

  color: colors.textSecondary,
};

const chatAreaDrawerCustomStyle = {
  backgroundColor: colors.secondary,
  padding: 20,
  paddingTop: 0,
  width: "100%",
  // height: "50%",
  height: "auto", //this is working in hiding the chatarea when chat is not started
  //for InputArea
  paddingLeft: 0,
  paddingRight: 0,
};

// --------------
const chatScreenStyles = {
  colors,
  greetingCardCustomStyle,
  cardHeaderCustomStyle,
  greetingTextCustomStyle,
  chatAreaDrawerCustomStyle,
};

export default chatScreenStyles;
