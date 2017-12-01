module.exports = {
  plugins: [
    require('@babel/plugin-transform-react-constant-elements'),
    require('@babel/plugin-transform-react-inline-elements'),
    require('transform-react-remove-prop-types')['default'],
    require('transform-react-pure-class-to-function')
  ]
};
