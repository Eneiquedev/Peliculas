const API = "https://api.themoviedb.org";
export function get(path) {
  return fetch(API + path, {
    headers: {
      // La clave correcta es 'Authorization' no 'Autorizacion'
      Authorization:
        "Bearer eyJhbGciOiJIUZI1NiJ9.eyJhdWQiOiI1NzUzN2ZmMT1mMzgxZGQ3YjY3ZWV1MWVhOGI4MTY0YSIS InN1YiI6IjV1M2ExNmU1MGMyNzEwMDAxODc1NTI4MCIsInNjb3Blcy16WyJhcG1fcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nOpZ_nBtA93tbzr6-rxD0760tssAAaSppyjRv9anArs",
      // El tipo de contenido debe ser 'application/json' no 'aplication/json'
      "Content-Type": "application/json;charset=utf-8",
    },
  }).then((result) => result.json());
};