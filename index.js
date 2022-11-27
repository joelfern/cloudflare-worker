addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request));
});

const redirectURL = 'https://1.1.1.1/';

async function handleRequest(request) {
  const clientIP = request.headers.get('CF-Connecting-IP');
  const clientCountry = request.cf.country;
  const clientAS = request.cf.asn;

if (clientCountry == "SG"){
  return new Response("This is your IP " + clientIP + " and you are accessing this site from " + clientCountry + " | " + clientAS);
}
  else {
    return Response.redirect(redirectURL);
}
}