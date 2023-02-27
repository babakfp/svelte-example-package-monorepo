# my-package-name

## Exports in `package.json`

```json
{
	"exports": "./index.js", // Example 1
	"exports": {
		"/*": "./src/*" // Example 2
	}
}
```

### Example 1

```js
import { MyComponent, MyOtherComponent } from "my-package-name"
```

### Example 2

```js
import MyComponent from "my-package-name/MyComponent.svelte"
import MyOtherComponent from "my-package-name/MyOtherComponent.svelte"
```
