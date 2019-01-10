
function updateInventory(inventory,update) {
  var temObj = {}
  inventory.forEach(element => {
    temObj[element[1]] = element[0]
  });
  
  update.forEach(element => {
    if (element[1] in temObj){
      temObj[element[1]]+=temObj[element[1]]  
    }else{
      temObj[element[1]] = element[0]
    }
  });
  
  var output = []
  
  for (let index = 0; index < Object.keys(temObj).length; index++) {
    const element = Object.keys(temObj)[index];
    output.push([temObj[element],element])
  }
  console.log(output)
  return output
}

export {
  updateInventory,
};
