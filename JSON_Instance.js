class JSON_Instance{
  // constructor(name, age){
  //   this.name = name;
  //   this.age = age;
  // }
  
  JSONobj = {
    innerArray:[]
  };
  
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
  
  addMoreToIndex(index, data){
      if(myJSON.JSONobj.innerArray[index]){
        if(Array.isArray(data)){
            console.log('it\'s just an Array');
            try{
                var tmpObj = Object.fromEntries(data);
                // this.JSONobj.innerArray.push(tmpObj);
                myJSON.JSONobj.innerArray[index] = {...myJSON.JSONobj.innerArray[index], ...tmpObj};
                console.log('Combined! ', myJSON.JSONobj.innerArray[index] );
              }
              catch(error){
                console.error("Parameter must be a 2D Array");
              }
            // debugger;
            
        }else{
            if(typeof data === 'object') {
                console.log('it\'s an object' );
                myJSON.JSONobj.innerArray[index];         

                myJSON.JSONobj.innerArray[index] = {...myJSON.JSONobj.innerArray[index], ...data};
                
                console.log('Combined! ', myJSON.JSONobj.innerArray[index] );
            }
        }
    }else{
        console.log('no Object with specified Index was found', );
    } 
  }
  
  removeByIndex(indexOfJSONString, objKey){
    delete this.JSONobj.innerArray.[indexOfJSONString][objKey]
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
  }

}

