addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

/**
 * Respond to the request
 * @param {Request} request
 */
async function handleRequest(request) {

  // Define allowed domain origins
  // TODO: Replace these with environment variables
  const allowed = [
    'https://newprojectstarterkit.com',
    'https://pshry.com'
  ]

  // Define HTTP headers
  const headers = new Headers({
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, HEAD, POST, OPTIONS',
    'Access-Control-Allow-Headers': '*'
  })

  // If domain is not allowed, return error code
  if (!allowed.includes(request.headers.get('origin'))) {
    return new Response('Not allowed', { status: 403, headers: headers });
  }

  // Define response
  const response = {
    greeting: 'hello world'
  }

  // Return response
  return new Response(JSON.stringify(response), { status: 200, headers: headers })
}