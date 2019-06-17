import Router from './lib/router';
import Index from './lambdas/index';
import Bar from './lambdas/bar';

async function handleRequest(request) {
  const r = new Router();

  r.get('/bar', () => Bar.response(request));
  r.get('/', () => Index.response(request));

  const resp = await r.route(request);
  return resp;
}

// eslint-disable-next-line no-restricted-globals
addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request));
});
