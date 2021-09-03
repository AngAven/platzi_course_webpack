const path = require('path')
const nodeExternals = require('webpack-node-externals')

const MODE_ENV = process.env.MODE_ENV
const PORT = process.env.PORT

module.exports = {
  name: 'express-server',
  entry: './src/index.ts',
  target: 'node',
  mode: MODE_ENV,
  externals: [nodeExternals()],
  output: {
    path: path.resolve(__dirname, 'dist'), // Crea la carpeta dist donde estará todo el código
    filename: 'index.js'
  },
  resolve: {
    extensions: ['.js', '.ts'] //Puede leer las extensiones de Javascript y de Typescript
  },
  module: {
    rules: [
      {
        test: /\.(js)$/, // Para las extensiones de js utilizar este loader
        exclude: /node_modules/, // Excluir la carpeta
        use: {
          loader: 'babel-loader', // configuración que me permite trabajar con este proyecto
        }
      },
      {
        test: /\.(ts)$/,
        use: {
          loader: 'ts-loader',
        }
      }
    ]
  }
}
