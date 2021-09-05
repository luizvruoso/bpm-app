export async function telAuth() {
  return new Promise((resolve, reject) => {
    let aux = {
      name: 'Jorge Felicio',
      loginMethod: 'tel',
      userId: '#123',
      username: 'jorginhoDaMassa',
      isAuthenticated: true,
      expiresIn: 1632964699,
      error: false,
      loading: false,
      message: null,
      roles: 'all',
    };

    return setTimeout(() => {
      return resolve(aux);
    }, 500);
  });
}

export async function logoutFetch() {
  return new Promise((resolve, reject) => {
    let aux = {
      status: 200,
    };

    return setTimeout(() => {
      return resolve(aux);
    }, 500);
  });
}
