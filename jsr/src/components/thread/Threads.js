import React,{useState} from 'react';

const Threads = (props) =>{
   const {example} = props
   const [a,seta] = useState(example)
   return (
      <h2>{a}</h2>
   )
};

export default connect(({ example }) => ({
   example,
 }))(Threads);