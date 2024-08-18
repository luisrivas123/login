export const login = async ({ username, password }) => {
  const loginPost = await fetch('http://localhost:3000/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ username, password })
  })
  const jsonResponse = await loginPost.json()
  return jsonResponse
}
