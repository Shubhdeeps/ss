import '../../stylesheet/sectionFour.css'

import astro from '../../assets/astro.svg'
import candy from '../../assets/candy.svg'
import enum1 from '../../assets/enum1.svg'
import enum2 from '../../assets/enum2.svg'
import enumApi from '../../assets/enumApi.svg'
import resume from '../../assets/resume.svg'
import weather from '../../assets/weather.svg'
import todo from '../../assets/todo.png'


const projects = [{
    name: 'Resume Builder',
    base: 'A nextjs based web application, where a user can make awesome looking resumes. Currently, it only has 2 templates, and only support Desktop version',
    image: resume,
    link: 'https://resume-lilac-sigma.vercel.app/'
},
{
    name: 'E-Numbers',
    base: 'A Reactjs based web application, where a user can check the composition of the hidden ingredients in packaged food',
    image: enum2,
    link: 'https://shubhdeeps.github.io/enum/'
},
{
    name: 'Candy Crush Game clone',
    base: 'A Reactjs based candy crush game clone for desktop',
    image: candy,
    link: 'https://shubhdeeps.github.io/candy/'

},
{
    name: 'Astrology',
    base: 'A Reactjs based astrology application, which make use of Restfull astrology api to fetch data',
    image: astro,
    link: 'https://shubhdeeps.github.io/Astrology/'

},
{
    name: 'Todo App',
    base: 'A Javascript based todo application',
    image: todo,
    link: 'https://shubhdeeps.github.io/todo/todo/'
},
{
    name: 'E-Number Rest Api',
    base: 'A Nodejs based rest Api, hosted at heroku',
    image: enumApi,
    link: '#'
},
{
    name: 'E-Number 2',
    base: 'A Reactjs based web application, where a user can check the composition of the hidden ingredients in packaged food',
    image: enum1,
    link: 'https://shubhdeeps.github.io/e-numbers/'
},
{
    name: 'Weather app',
    base: 'A Reactjs based weather application',
    image: weather,
    link: 'https://shubhdeeps.github.io/weather/'
}
]

export default function SectionFour(){



    return<>
    <section className='sec_4'> 
         <div>
             <p> Below are few of my own developed <span> Web application. </span>   These are based on Reactjs, Nextjs, and Javascript.</p>
        </div>
    </section>
    {projects.map(project => {
        return(<Projects key={project.name} projects={project} />)
    })}
    </>
}




const Projects = ({ projects }) => {
    return(<>
        <section className='project_container'> 
        <div className='projects'>
             <h1> {projects.name} </h1>
             <p> {projects.base}</p>
             <a href={projects.link}>Visit</a>
        </div>
        <img src={projects.image } alt='projects' />
    </section>
    <section className='space'></section>
    </>)
}
