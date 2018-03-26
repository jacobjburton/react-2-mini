import React from 'react';

export default function SizeChanger(props) 
{
  return (
    <select 
      className="dropDownContainer" 
      onChange={ (e) => props.update(parseInt(e.target.value, 10)) }
      disabled={ props.allowEdit === 'false' }>
      <option value="12"> 12 </option>
      <option value="13"> 13 </option>
      <option value="14"> 14 </option>
      <option value="15"> 15 </option>
      <option value="16"> 16 </option>
      <option value="17"> 17 </option>
      <option value="18"> 18 </option>
      <option value="19"> 19 </option>
      <option value="40"> 40 </option>
      <option value="100"> 100 </option>
    </select>
  )
}