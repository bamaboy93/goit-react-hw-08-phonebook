const getIsLoggedIn = state => state.auth.isLoggedIn;

const getUsername = state => state.auth.user.name;

const getIsRefreshCurrent = state => state.auth.isRefreshCurrentUser;

const authSelectors = {
  getIsLoggedIn,
  getUsername,
  getIsRefreshCurrent,
};
export default authSelectors;
