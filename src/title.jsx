import React from 'react';
const Title=({title})=>{
  console.log(title)
  return <>
 <p>This is title: {title}</p>
  </>
}
export default React.memo(Title);