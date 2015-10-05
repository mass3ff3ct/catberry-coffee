# Catberry CoffeeScript

[Coffeeify](https://github.com/jnordberg/coffeeify) [browserify](https://github.com/substack/node-browserify) трансформация для Catberry.

## Установка

```
$ npm install --save catberry-coffee
```
    
## Использование
Зарегистрируйте плагин `catberry-coffee` в `build.js`:

build.js:
```javascript
var catberry = require('catberry');
var coffee = require('catberry-coffee');

var cat = catberry.create(config);

coffee.register(cat.locator);
cat.build();
```

## Поддержка на сервере
 
server.js:
```javascript
require('coffee-script/register');

var catberry = require('catberry');
...
```

Павел Соколов <mass3ff3ct@mail.ru>
