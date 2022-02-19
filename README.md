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
### `toWord`
```js
toWord(123) //=> 'жүз жыйырма үч'

toWord(456, { lang: 'ky' }) //=> 'төрт жүз элүү алты'

toWord('789', 'kk-latin') //=> 'jetı jüz seksen toğyz'
```
### `toOrdinal`
```js
 toOrdinal(123) //=> 'жүз жыйырма үчүнчү'
 
 toOrdinal(456, { lang: 'kk' }) //=> 'төрт жүз елу алтыншы'
 
 toOrdinal('789', 'kk-latin') //=> 'jetı jüz seksen toğyzınşı'
 */
```

