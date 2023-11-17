import React from 'react'

const DataTypes = () => {
  let age = 18;
  let name = "kiran";
  let setStatus = false;
  let userDefault = undefined;
  let responseValue = null;
  console.log(age);
  console.log(name);
  console.log(setStatus);
  console.log(userDefault);
  console.log(responseValue);
  let oldAge = age;
  age = 25;
  let status = setStatus;
  setStatus = true;
  console.log(oldAge);
  console.log(status);
  alert("Check the console Output!");
}

export {DataTypes}