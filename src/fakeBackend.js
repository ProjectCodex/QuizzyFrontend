const fakeToken = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9kZXYuc2NvdXRwcm9hcHAuY29tXC9hcGlcL2F1dGhcL2xvZ2luIiwiaWF0IjoxNTU3NDExMTc0LCJuYmYiOjE1NTc0MTExNzQsImp0aSI6IkF2V1FSQkdHVUJNemNYZkgiLCJzdWIiOjMsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.J301S9R_Sceph_RhuEYAMUctit9JLh-XscsoKjfL7lo"


export const login = (username, password) => {

  return new Promise((resolve, reject) => {
    if (username.length <= 0 && password.length <= 0) {
      reject();
    }

    setTimeout(
      () =>
        resolve({
          data: {
            token: fakeToken
          }
        }),
      200
    );
  });
};


export const logout = () => {
  return new Promise((resolve, reject) => {
    setTimeout(
      () =>
        resolve(null),
      200
    );
  });
};
