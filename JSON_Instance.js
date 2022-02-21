class JSON_Instance{
  // constructor(name, age){
  //   this.name = name;
  //   this.age = age;
  // }
  
  JSONobj = {
    innerArray:[]
  };
  
  this.JSONobj{innerArray} = [];
  
  insertJSON(str){
    this.JSONobj = str;
    console.log(this.JSONobj)
  }

  addToObj(passedArray){    
    try{
      var tmpObj = Object.fromEntries(passedArray);
      this.JSONobj.innerArray.push(tmpObj);

    }
    catch(error){
      console.error("Parameter must be a 2D Array")
    }
  }
  
  replaceByIndex(index, newData){
    try{
      var tmpObj = Object.fromEntries(newData);
      this.JSONobj.innerArray[index] = tmpObj;

    }
    catch(error){
      console.error("Parameter must be a 2D Array")
    }
  }
 
  deleteByIndex(index){
    this.JSONobj.innerArray.splice(index, 1);
    
  }
  
  
  addMoreToIndex(index, data){
//       if(this.JSONobj.innerArray[index]){
        if(Array.isArray(data)){
            console.log('it\'s just an Array');
            try{
                var tmpObj = Object.fromEntries(data);
                // this.JSONobj.innerArray.push(tmpObj);
                this.JSONobj.innerArray[index] = {...this.JSONobj.innerArray[index], ...tmpObj};
                console.log('Combined! ', this.JSONobj.innerArray[index] );
              }
              catch(error){
                console.error("Parameter must be a 2D Array");
              }
            // debugger;
            
        }else{
            if(typeof data === 'object') {
                console.log('it\'s an object' );
                this.JSONobj.innerArray[index];         

                this.JSONobj.innerArray[index] = {...this.JSONobj.innerArray[index], ...data};
                
                console.log('Combined! ', this.JSONobj.innerArray[index] );
            }
        }
//     }else{
//         console.log('no Object with specified Index was found', );
//     } 
  }
  
  removeByIndex(indexOfJSONString, objKey){
    if(this.JSONobj.innerArray[indexOfJSONString][objKey] == undefined){
      console.error('ObjKey may need to be a string!');
    }else{
      delete this.JSONobj.innerArray[indexOfJSONString][objKey];
    }
  }
  
  saveToLocalStorage(name){
    localStorage.setItem(name, this.stringMe());
  }
  
  pulled = "";
  getFromLocalStorage(name, insertToJSON){
    if(insertToJSON==true){
      this.pulled = localStorage.getItem(name);
      this.JSONobj = this.pulled;
      this.parseMe();
    }else{
      this.pulled = localStorage.getItem(name);  
    }
    
    return this.pulled;
  }
  
  print(){
    console.log(this.JSONobj);
    return this.JSONobj;

  }

  stringMe(){
    return JSON.stringify(this.JSONobj);
  }

  parseMe(){
    this.JSONobj = JSON.parse(this.JSONobj);
    console.log("Parsed!");
    console.log(this.JSONobj);
    return this.JSONobj;
  }

}

