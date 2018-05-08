function findAndDelete(arr,key){
  let index = arr.indexOf(key);
  if(index == -1){
    return false;
  }
  arr.splice(index,1);
  return true;
}

module.exports = {
  findAndDelete 
}