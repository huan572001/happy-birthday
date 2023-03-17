const path = require('path');

module.exports = function override(config, env) {
  // Thêm rule để xử lý các file .less
  const lessRule = {
    test: /\.less$/,
    use: [
      'style-loader',
      { loader: 'css-loader', options: { importLoaders: 1 } },
      'less-loader',
    ],
    include: path.resolve(__dirname, 'src'),
  };

  // Thêm rule vào trong config.module.rules
  config.module.rules.push(lessRule);

  return config;
};
