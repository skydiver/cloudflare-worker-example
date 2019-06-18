const response = async request => {
  const init = {
    headers: { 'content-type': 'application/json' },
  };
  const body = JSON.stringify({ status: 'ok', date: new Date() });
  return new Response(body, init);
};

export default { response };
