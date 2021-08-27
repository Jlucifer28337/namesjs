import React, {useEffect, useState} from "react";

export const RightName = ({name, setSelectedNames, selectedNames}) => {
     const [checked, setChecked] = useState(false);

     const changeChecked = ({ target: { checked } }) => {
        setChecked(checked)
     } 

    useEffect(() => {
        if (checked) {
            setSelectedNames([...selectedNames.filter(item => item !== name), name])
        }
        else {
            setSelectedNames(selectedNames.filter(item => item !== name))
        }
    }, [checked])

    return <div>
        <input type="checkbox" checked={checked} onChange={changeChecked}/>
        <span>{name}</span>
    </div>
}