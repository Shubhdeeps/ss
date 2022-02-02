import '../../stylesheet/sectionOne.css'
import Home from '../Home'
import wave from '../../assets/wave1.png'
import wave2 from '../../assets/wave2.png'
import wave3 from '../../assets/wave3.png'
import wave4 from '../../assets/wave4.png'
import { useScrollSwitch } from '../../utils/scrollingSwitch'
import { useScrolling } from '../../utils/scrolling'


export default function (){
    const [scroll] = useScrolling()
    const [scrollSwitch] = useScrollSwitch(scroll, 8)

    return <section className='sec_1'> 
    {!scrollSwitch && <Home /> }
    <img id='image_one' src={wave} alt='img' />
    <img id='image_two' src={wave2} alt='img' />
    <img id='image_three' src={wave3} alt='img' />
    <img id='image_four' src={wave4} alt='img' />
  </section>
}