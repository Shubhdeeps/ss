import { useState } from "react"


export const useScrolling = () => {
    const [scrollPercentage, setScrollPercentage] = useState(0)

    window.addEventListener('scroll', () => {
         setScrollPercentage( Math.floor((document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight) * 100) )
    })

    return [scrollPercentage]
}