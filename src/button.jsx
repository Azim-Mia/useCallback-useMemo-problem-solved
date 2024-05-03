import React from 'react';
const Button=({handleClick,children})=>{
  return (
    <p>
    <button type="button" onClick={handleClick}>{children}</button>
    </p>
    )
}
export default React.memo(Button);