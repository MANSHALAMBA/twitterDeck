const notInOp = (arrayOne, arrayTwo) => {
  let result = [];
  for (let index = 0; index < arrayOne.length; index++) {
    if (!arrayTwo.includes(arrayOne[index])) {
      result.push(arrayOne[index]);
    }
  }
  return result;
};

export default notInOp;
