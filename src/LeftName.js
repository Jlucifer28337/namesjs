import React, {useEffect, useState} from "react";

export const LeftName = ({name, setSelectedNames, selectedNames}) => {
    const [checked, setChecked] = useState(false);

    useEffect(() => {
        if (checked) {
            setSelectedNames([...selectedNames.filter(item => item !== name), name])
        }
        else {
            setSelectedNames(selectedNames.filter(item => item !== name))
        }
    }, [checked])

    return <div>
        <input type="checkbox" checked={checked} onChange={() => {setChecked(prev => !prev)}}/>
        <span>{name}</span>
    </div>
}