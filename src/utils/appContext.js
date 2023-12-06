import { createContext } from "react";

/* NOTE
 * React context is like a use state for whole application
 * we can use react context to store variable that can be
 * used throughout the application
 */
const appContext = createContext({
  user: {
    name: "kishan",
    email: "acb@gmail.com,",
  },
  playdateTab: {
    currentTab: 2,
  },
  homePageTab: {
    currentTab: 1,
  },
  chatPageTab: {
    currentTab: 1,
  },
  notificationCount: 3,
  notifyFilterLimit: false,
});

// NOTE: this will make sure that react developer tool shows proper name for the context
appContext.displayName = "appContext";

export default appContext;
