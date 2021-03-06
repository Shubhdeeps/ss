import '../../stylesheet/sectionFive.css'
import fb from '../../assets/fb.png'
import github from '../../assets/github.png'
import linked from '../../assets/linkedIn.png'

const contacts = [{
    name: 'Facebook',
    image: fb,
    link: 'https://www.facebook.com/shubhdeeps/'
},
{
    name: 'Github',
    image: github,
    link: 'https://github.com/Shubhdeeps/'
},
{
    name: 'LinkedIn',
    image: linked,
    link: 'https://www.linkedin.com/in/shubhdeep-singh'
}
]
const SectionFive = () => {

    return<section className="sec_5">
        <div>
            <div className='sec5_container'>
                <p> To know more about me, contact me on..</p>
                <div className='sec5_contact'>
                   {contacts.map(contact => {
                       return(<Contact key={contact.name} contact={contact} />)
                   })}
                </div>
            </div>
        </div>
        <p id='logo_sec5'>Created by Shubhdeep Singh</p>
    </section>
}

export default SectionFive;

const Contact = ({ contact }) => {
    return <div onClick={() => window.open(contact.link)} >
    <img src={contact.image} alt='social' />
    <p> {contact.name} </p>
    </div>
}