    const express = require('express');
    const { createProxyMiddleware } = require('http-proxy-middleware');

    const app = express();

    app.use('/', createProxyMiddleware({
      target: 'https://api.binance.com',
      changeOrigin: true
    }));

    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => console.log(`Proxy activo en puerto ${PORT}`));