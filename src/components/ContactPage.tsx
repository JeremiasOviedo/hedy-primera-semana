import ContactForm from "./ContactForm";
import readingSvg from "../assets/Reading.svg"

const ContactPage = () =>{

    return(
        <div className= "flex flex-col h-full overflow-hidden justify-around lg:px-48 md:px-28 py-24 sm:px-8 px-4 items-center sm:flex-col 2xl:flex-row">
            <ContactForm/>
            <img src={readingSvg} className="h-[620px] w-[620px]"/>
        </div>
    )
}

export default ContactPage;