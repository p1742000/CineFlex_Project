import React, {useEffect, useState} from 'react';
import './contacts.css'

const delay = ms => new Promise(
    resolve => setTimeout(resolve, ms)

);

const Contacts = () => {

    const [inputs, setInputs] = useState({});



    useEffect(() =>{
        async function download(){
        await delay(10);
        window.scrollTo({top: 61, behavior: 'smooth'});
        console.log("jary")}
        download();
    },[]);

    const hangdleChange = (event) =>{
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(inputs)
        alert("Thank You! Your response is submitted ")
    }


    let htm = <div className="contacts-body">
        <div className="mani-container">
            <div className="contact-container">

                <h1 className="title">Get in Touch</h1>
                <div className="phone">Phone: <span>78******60</span></div>
                <div className="email">Email: <a href="mailto:trivediprashant2000@.com">trivedi************@gmail.com</a></div>
                <div className="address">Address: <span>C/39, Sanskriti Bldg, Tikujiniwadi Rd, Manpada,godehbunder Rd, Thane (west) - Mumbai</span>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="form-container">
                        <div className="form-left">
                            <div className="name">

                                <input type="text" id="name" value={inputs.name} name="name" onChange={hangdleChange} placeholder="Your Name"/>
                            </div>
                            <div className="ph">

                                <input type="text" id="ph" name="ph" value={inputs.phone} onChange={hangdleChange} placeholder="Your Phone no."/>
                            </div>
                            <div className="em">

                                <input type="text" id="em" name="em" value={inputs.email} onChange={hangdleChange} placeholder="Your Email"/>
                            </div>


                        </div>
                        <div className="from-right">
                            <div className="message">
                                <textarea type="text" id="ms" name="ms" value={inputs.message} onChange={hangdleChange} placeholder="Your Message"></textarea>
                            </div>
                        </div>
                    </div>
                    <input type="submit" value="Submit"/>
                </form>


            </div>
        </div>

        </div>


    return (
        <div>
            {htm}
        </div>
    );
};

export default Contacts;