# Unit Global

Es una clase que nos permite convertir valores entre tipos de unidades según [el sistema de unidades](https://en.wikipedia.org/wiki/International_System_of_Units)

## Instalación

```
npm i unit-global
```

## Uso

```
const UnitGlobal = require('unit-global')
const unitMass = new UnitGlobal('mass', 1, 'kg')

console.log('1kg a g:', unitMass.convert('g').toString())
console.log('1kg a lb:', unitMass.convert('lb').toString())
```

## Créditos
- [Pedro Caicedo](http://pcaicedo.com)

## Licencia

[MIT](https://opensource.org/licenses/MIT)