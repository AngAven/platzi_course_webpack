const path = require('path')

module.exports = {
  name: 'express-server',
  entry: './src/index.js',
  target: 'node',
  output: {
    path: path.resolve(__dirname, 'dist'), // Crea la carpeta dist donde estará todo el código
    filename: 'index.js'
  },
  resolve: {
    extensions: ['.js']
  },
  module: {
    rules: [
      {
        test: /\.(js)$/, // para las extensiones de js utilizar este loader
        exclude: /node_modules/, // Excluir la carpeta
        use: {
          loader: 'babel-loader', // configuración que me permite trabajar con este proyecto
        }

      }
    ]
  }
}
