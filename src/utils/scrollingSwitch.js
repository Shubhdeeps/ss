import { useState, useEffect } from "react"

export const useScrollSwitch = (scroll, value) => {

    const [sectionOneSwitch, setSectionOneSwitch] = useState(false)

    useEffect(() => {
      if(scroll > value){
        setSectionOneSwitch(true)
      }else{
        setSectionOneSwitch(false)
      }
    }, [scroll])
    return[sectionOneSwitch]
}