class JSON_Instance{
  // constructor(name, age){
  //   this.name = name;
  //   this.age = age;
  // }
  
  JSONobj = {
    innerArray:[]
  };

  addToObj(passedArray){    
    try{
      var tmpObj = Object.fromEntries(passedArray);
      this.JSONobj.innerArray.push(tmpObj);

    }
    catch(error){
      console.error("Parameter must be a 2D Array")
    }
  }
  print(){
    console.log(this.JSONobj);
  }

  stringMe(){
    return JSON.stringify(this.JSONobj);
  }

  parseMe(){
    return JSON.parse(this.JSONobj);
  }

}
