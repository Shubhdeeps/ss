import '../../stylesheet/sectionThree.css'
import EmptySection from './EmptySection'
import Lottie from 'react-lottie'
import backend from '../../lottie/backend.json'
import develop from '../../lottie/develop.json'
import skills from '../../lottie/skills.json'
import student from '../../lottie/82662-student.json'


export default function SectionThree(){

    const defaultOptions = (animationData) =>
    { 
    return{
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      }
    }
    

    return(<>
    <section className='sec_3'>
        <div>
            <Lottie 
                options={defaultOptions(student)}
                height={400}
                width={400}
            />
            <p> I’m a <span>  Software Development and Entrepreneurship</span> student and an optimistic programmer. Currently, I'm pursuing my studies at EUAS, Tallinn. </p>
        </div>
    </section>
    <EmptySection />
    <section className='sec_3'>
        <div>
            <p> My <span> Skills </span> includes Javascript, Reactjs, Java, Css, HTML, nodejs, Figma, Adobe XD, Object oriented programming, functional programming and much more... </p>
            <Lottie 
                options={defaultOptions(skills)}
                height={400}
                width={400}
            />
        </div>
    </section>
    <EmptySection />
    <section className='sec_3'>
        <div>
             <Lottie 
                options={defaultOptions(develop)}
                height={400}
                width={400}
                />
            <p> I can develop<span> frontend </span> web applications based on html, css, javascript, react js and next js. Along with state management with redux/zustand and user interface/experience using material ui and framer motion, and much more... </p>
        </div>
    </section>
    <EmptySection />
    <section className='sec_3'>
        <div>
             <p> Furthermore, I can do<span> backend </span>  based on nodejs, express and http server. fetch and send data to database, and I can create restful API's using nodejs.</p>
            <Lottie 
            options={defaultOptions(backend)}
            height={400}
            width={400}
            />
        </div>
    </section>
    <EmptySection />

    </>)
}

