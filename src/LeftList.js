import React from 'react'
import { LeftName } from './LeftName'

export const LeftList = ({names, setSelectedNames, selectedNames}) => {
 return (
     <div> 
      {
        names.map(item => <LeftName name={item} setSelectedNames={setSelectedNames} selectedNames={selectedNames}/>)
      }
     </div>
 )
}