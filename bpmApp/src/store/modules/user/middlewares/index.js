
export async function telAuth() {
    return new Promise((resolve, reject) => {
      let aux = {
        name: "Jorge Felicio",
        loginMethod: "tel",
        userId: "#123",
        username: "jorginhoDaMassa",
        isAuthenticated: true,
        expiresIn: 1632964699,
        error: false,
        loading: false,
        message: null,
        roles: "all",
      };
      
  
      return setTimeout(() => {
        return resolve(aux);
      }, 500);
    });
  }
  