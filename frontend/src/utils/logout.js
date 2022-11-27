const logout = () => {
  return fetch(
      '/api/logout',
      {
          method:'POST',
          headers: {
              'Content-Type': 'application/json',
          },
      }).then((resp)=>resp.json())
}

export default logout