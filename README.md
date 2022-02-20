## Install

```bash
npm i sandar
```

import:
```js
//Common JS
const { toWord, ... } = require('sandar')

//ESM
import { toOrdinal, ... } from 'sandar'
```

## Usage
- Passing number as `string` is recommended.
### `toWord`
Returns the textual representation of a given number.
```js
toWord(123) //=> 'жүз жыйырма үч'

toWord(456, { lang: 'ky' }) //=> 'төрт жүз элүү алты'

toWord('789', 'kk-latin') //=> 'jetı jüz seksen toğyz'

toWord('123456789101112131415') //=> 'жүз жыйырма үч секстиллион төрт жүз элүү алты квадриллион жети жүз сексен тогуз триллион жүз бир миллиард жүз он эки миллион жүз отуз бир миң төрт жүз он беш'
```
### `toOrdinal`
Returns the textual ordinal representation of a given number.
```js
 toOrdinal(123) //=> 'жүз жыйырма үчүнчү'
 
 toOrdinal(456, { lang: 'kk' }) //=> 'төрт жүз елу алтыншы'
 
 toOrdinal('789', 'kk-latin') //=> 'jetı jüz seksen toğyzınşı'

 toOrdinal('123456789101112131415') //=> 'жүз жыйырма үч секстиллион төрт жүз элүү алты квадриллион жети жүз сексен тогуз триллион жүз бир миллиард жүз он эки миллион жүз отуз бир миң төрт жүз он бешинчи'
```

## Licence
[MIT](./LICENSE)