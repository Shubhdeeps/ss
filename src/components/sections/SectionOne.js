import '../../stylesheet/sectionOne.css'
import Home from '../Home'
import { useScrollSwitch } from '../../utils/scrollingSwitch'
import { useScrolling } from '../../utils/scrolling'


export default function SectionOne(){
    const [scroll] = useScrolling()
    const [scrollSwitch] = useScrollSwitch(scroll, 8)


    return <section className='sec_1'> 
    {!scrollSwitch && <Home /> }
    <svg id='svg_four' viewBox={`0 0 1100 300`} fill="none" preserveAspectRatio='none'>
    <path id='path_1' d="M326 197.49C129 197.49 0 0 0 0V335H1825V43.6957C1825 43.6957 1784 -8.40734 1479.5 104.366C1175 217.139 1115.5 14.8745 855 35.6106C594.5 56.3466 523 197.49 326 197.49Z"/>
    <path id='path_2' d="M388.007 48.1958C186.205 35.5692 0 113.133 0 113.133V335H1825V142.595C1825 142.595 1605.57 41.5744 1439.92 24.7464C1180.94 -1.56327 1061.22 170.272 800.387 152.215C627.481 140.245 589.81 60.8224 388.007 48.1958Z"/>
    <g filter="url(#filter0_b_80_2)">
    <path id='path_3' d="M373.103 205.988C223.718 204.124 0 179.188 0 179.188V292H1825V168.88C1825 168.88 1678.42 191.083 1577.21 196.859C1339.56 210.419 1214.78 153.307 973.271 155.039C730.464 156.779 615.779 209.017 373.103 205.988Z" fill="#858FB3"/>
    </g>
    <path id='path_4' d="M388.007 219.545C186.205 214.462 0 245.686 0 245.686V335H1825V257.546C1825 257.546 1605.57 216.88 1439.92 210.106C1180.94 199.514 1061.22 268.688 800.387 261.419C627.481 256.6 589.81 224.628 388.007 219.545Z" fill="#00071F"/>
    <defs>
    <filter id="filter0_b_80_2" x="-10" y="145" width="1845" height="157" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
    <feFlood floodOpacity="0" result="BackgroundImageFix"/>
    <feGaussianBlur in="BackgroundImage" stdDeviation="5"/>
    <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_80_2"/>
    <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_80_2" result="shape"/>
    </filter>
    </defs>
    </svg>
  </section>
}