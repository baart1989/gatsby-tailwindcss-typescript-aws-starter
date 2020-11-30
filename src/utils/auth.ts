import Auth from '@aws-amplify/auth';

const isBrowser = typeof window !== `undefined`;

type CognitoUser = {
  sub: string;
  email: string;
  username: string;
};

export const setUser = user => {
  if (!user) {
    window.localStorage.gatsbyUser = JSON.stringify({});
    return;
  }
  const cognitoUser: string = user.username;
  const username = cognitoUser.substring(0, cognitoUser.lastIndexOf('@'));
  const userInfo = {
    ...user.attributes,
    username,
  };
  window.localStorage.gatsbyUser = JSON.stringify(userInfo);
};

const getUser = () => {
  if (window.localStorage.gatsbyUser) {
    const user = JSON.parse(window.localStorage.gatsbyUser);
    return user ? user : {};
  }
  return {};
};

export const isLoggedIn = () => {
  if (!isBrowser) return false;

  const user = getUser();
  if (user) return !!user.username;
};

export const getCurrentUser = (): CognitoUser => isBrowser && getUser();

export const logout = (callback?: Function) => {
  if (!isBrowser) return;
  localStorage.clear();
  setUser(null);
  callback ? callback() : undefined;
};

export const signIn = async ({ username, password }) => {
  try {
    const user = await Auth.signIn(username, password);
    setUser(user);
    return [true, null];
  } catch (err) {
    return [false, err];
  }
};
