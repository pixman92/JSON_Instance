# JSON_Instance

A Javascript Class file, for making new and separate JSON objects.

Declaring instance
```
var myJSON = new JSON_Instance()
```

Inserting OLD JSON into this instance
```
myJSON.insertJSON(str)
```

Adding 2d Array to the JSON
```
myJSON.addToObj(<2dArray>)
//eg [['name', 'sam'], ['age', '22'], ['job', 'student']]
```

Remove an Item in innerArray by index
```
myJSON.removeByIndex(indexToRemember)
```

Saving to LocalStorage
```
myJSON.saveToLocalStorage(name)
```

Get the LocalStorage, persistant data
```
myJSON.getFromLocalStorage(name, insertToJSON) //name - of the string to save, & boolean if function should add 
```



To print to console
```
myJSON.print()
```

Returns a JSON string
```
myJSON.stringMe()
```

Parses the JSON string
```
myJSON.parseMe()
```



The CDN script src
https://cdn.jsdelivr.net/gh/pixman92/JSON_Instance@0.0.3/JSON_Instance.js
