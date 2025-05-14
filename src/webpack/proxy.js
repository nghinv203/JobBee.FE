function setupProxy() {
  const tls = process.env.TLS;
  return [
    {
      context: [],
      target: `http${tls ? 's' : ''}://localhost:8080`,
      secure: false,
      changeOrigin: tls,
    },
  ];
}

module.exports = setupProxy();
