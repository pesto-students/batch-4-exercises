const checkGithubLoggedIn = () => {
  const loggedInStatus = localStorage.getItem('logged-in');
  return loggedInStatus === 'true';
};

checkGithubLoggedIn();
