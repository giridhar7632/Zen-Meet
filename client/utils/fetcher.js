export async function fetcher(endpoint, { body, token, ...customConfig } = {}) {
  const headers = { 'content-type': 'application/json' }
  if (token) {
    headers.Authorization = `Bearer ${token}`
  }
  const config = {
    method: body ? 'POST' : 'GET',
    credentials: 'include',
    mode: 'cors',
    ...customConfig,
    headers: {
      ...headers,
      ...customConfig.headers,
    },
  }
  if (body) {
    config.body = JSON.stringify(body)
  }

  return window.fetch(process.env.NEXT_PUBLIC_API_URL + endpoint, config).then(async (res) => {
    if (res.status === 401) {
      logout()
      window.location.assign(window.location)
      return
    }
    const data = await res.json()
    if (res.ok) {
      return data
    } else {
      const errorMessage = data.message
      return Promise.reject(new Error(errorMessage))
    }
  })
}

function logout() {
  window.localStorage.removeItem(localStorageKey)
}
