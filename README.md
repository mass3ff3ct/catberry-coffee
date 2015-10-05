# Catberry CoffeeScript

[Coffeeify](https://github.com/jnordberg/coffeeify) [browserify](https://github.com/substack/node-browserify) ������������� ��� Catberry.

## ���������

```
$ npm install --save catberry-coffee
```
    
## �������������
��������������� ������ `catberry-coffee` � `build.js`:

build.js:
```javascript
var catberry = require('catberry');
var coffee = require('catberry-coffee');

var cat = catberry.create(config);

coffee.register(cat.locator);
cat.build();
```

## ��������� �� �������
 
server.js:
```javascript
require('coffee-script/register');

var catberry = require('catberry');
...
```

����� ������� <mass3ff3ct@mail.ru>
