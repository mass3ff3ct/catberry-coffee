# Catberry CoffeeScript

[Coffeeify](https://github.com/jnordberg/coffeeify) [browserify](https://github.com/substack/node-browserify) трансформация для Catberry.

## Установка

```
$ npm install --save catberry-coffee
```
    
## Использование

Необходимо изменить паттерн поиска хранилищ в вашем конфигурационном файле:
```json
 "storesGlob": "**/*.coffee"
```

Подключаем `catberry-coffee` и `coffee-script/register` в `build.js`:
```javascript
require('coffee-script/register');
var catberry = require('catberry');
var coffee = require('catberry-coffee');
...
var cat = catberry.create(config);
...
coffee.register(cat.locator);
cat.build();
```

Подключаем `coffee-script/register` в `server.js`
```javascript
require('coffee-script/register');
var catberry = require('catberry');
...
```

В манифестах компонентов (`cat-component.json`) изменяем расширение исполняемого файла с `.js` на `.coffee`
```json
"logic": "./MyComponent.coffee"
```

Павел Соколов <mass3ff3ct@mail.ru>
