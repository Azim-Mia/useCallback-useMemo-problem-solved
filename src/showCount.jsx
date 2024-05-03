import React from 'react';
const ShowCount=({title,count})=>{
  return ( <p>
 {title} is {count}
  </p>
  )
}
export default React.memo(ShowCount);
