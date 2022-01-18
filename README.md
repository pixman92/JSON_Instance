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
To add new data to an existing JSON_Instance
```
addMoreToIndex(index, data){    //be careful - this will overwrite values found at Index
```


Remove an Item in innerArray by index
```
myJSON.removeByIndex(indexOfJSONString, objKey){
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

=================Some use cases=================

- Pulling JSON string and save it to JSON_Instance variable:
```
myJSON.insertJSON(<insert JSON string>);
//example
myJSON.insertJSON(myJSON.getFromLocalStorage('myJSON'));

//then straighten out the JSON string back to obj(s)
mJSON.parseMe();
```

- Saving Data => to reference using Array Indexes
```
myJSON.replaceByIndex(<insert index>, <insert X>)
X = [[0, [data]]];

refernce?? = myJSON.JSONobj.innerArray[<index used above>][0][0]  = the <index of JSON obj> and [0][0] is the first Part
myJSON.JSONobj.innerArray[<index used above>][0][1] = the second part
```

Saving Data to a 0th index: Saving data as array, instead of called by object names
```
myJSON.addToObj([[[0], [['data1', data1], ['data2', data2]]...]])
```


The CDN script src
https://cdn.jsdelivr.net/gh/pixman92/JSON_Instance@0.1.0/JSON_Instance.js



