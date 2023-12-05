import { StyleSheet } from "react-native";
import theme from "./theme.js";

const colors = theme.colors;
const headings = theme.typography;

const mainStyles = StyleSheet.create({
  statusbarBgColor: theme.components.appBar.backgroundColor,
  buttonOverlayColor: theme.colors.secondary,
  carrotColor: theme.colors.secondary,
  inputText: theme.colors.textSecondary,

  // view: {
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    alignItems: "center",
    justifyContent: "center",
    padding: 0,
  },
  chatContainer: {
    flex: 1,
    backgroundColor: theme.colors.secondary,
    alignItems: "center",
    justifyContent: "space-between",
    // maxHeight: "100%",
  },
  appBar: theme.components.appBar,
  drawer: theme.components.drawer,
  card: theme.components.card.main,
  cardHeader: theme.components.card.title,
  cardContent: theme.components.card.content,
  cardActions: theme.components.card.actions,
  button: theme.components.button.main,
  buttonContained: theme.components.button.contained,
  buttonOutlined: theme.components.button.outlined,
  // },
  // text: {
  appBarText: { color: theme.components.appBar.color },
  drawerText: { color: theme.components.drawer.color },
  cardTitleText: theme.components.card.title,
  cardContentText: theme.components.card.content,
  buttonContainedText: { color: theme.components.button.contained.color },
  buttonOutlinedText: { color: theme.components.button.outlined.color },

  inputArea: {
    backgroundColor: theme.colors.primary,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    // height: 80,
    height: "auto",
    borderRadius: 10,
    paddingBottom: 0,
    paddingTop: 0,
    // borderWidth: 3,
    // borderColor: theme.colors.background,
    elevation: 5,
    shadowColor: colors.background,
    // shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 10,
    shadowRadius: 5,
    // overflow: "hidden",
    // maxHeight: "70%",
  },
  // },
});

export default mainStyles;
