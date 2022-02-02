const { useState, useEffect } = require("react")

export const useScrollSwitch = (scroll, value, value2 = undefined) => {

    const [sectionOneSwitch, setSectionOneSwitch] = useState(false)

    useEffect(() => {
      if(scroll > value){
        setSectionOneSwitch(true)
      }else{
        setSectionOneSwitch(false)
      }

      if(value2 !== undefined){
        if(scroll > value && scroll < value2){
          setSectionOneSwitch(true)
        }else{
          setSectionOneSwitch(false)
        }
      }
    }, [scroll])
  



    return[sectionOneSwitch]
}