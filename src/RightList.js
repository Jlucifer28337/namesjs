import React from 'react'
import { RightName } from './RightName'

export const RightList = ({ names, selectedNames, setSelectedNames }) => {

 return (
     <div> 
         {
             names.map(item => <RightName name={item} setSelectedNames={setSelectedNames} selectedNames={selectedNames}/>)
         }
     </div>
 )
}