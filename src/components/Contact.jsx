import React from 'react';
import { FaEnvelopeOpenText, FaGlobe, FaMapMarkedAlt, FaWhatsapp } from 'react-icons/fa';

const Contact = () => {
    return (
        <div id='contact' className='container flex flex-col justify-center items-center max-w-[1000px] md:w-[96%] mx-auto px-5 lg:h-[calc(100vh-84px)] py-[80px] lg:py-[0]'>
            <div className="content w-full md:text-left text-center">
                <h3 className='text-blue-500 text-xl font-bold mb-3'>CONTACT ME</h3>
                <h2 className='text-2xl font-bold mb-5'>Don't be shy! Hit me up! 👇</h2>
                <div className="grid md:gap-y-[50px] gap-y-[35px] md:grid-cols-2 grid-cols-1 mt-10">
                    <ContactIcon
                        icon={FaMapMarkedAlt}
                        title="Address"
                        href="https://goo.gl/maps/mjcaP2Eg8ZwU2qk58"
                        text="Barishal, Bangladesh"
                    />
                    <ContactIcon
                        icon={FaEnvelopeOpenText}
                        title="Mail"
                        href="mailto:contact2ahsanhabib@gmail.com"
                        text="contact2ahsanhabib@gmail.com"
                    />
                    <ContactIcon
                        icon={FaWhatsapp}
                        title="Whatsapp"
                        href="https://wa.me/qr/DG7FJZS6RIXLA1"
                        text="+880 1704-428814"
                    />
                    <ContactIcon
                        icon={FaGlobe}
                        title="My Old Website"
                        href="https://alt.armanahsanhabib.com/"
                        text="alt.armanahsanhabib.com"
                    />
                </div>
            </div>
        </div>
    );
};

const ContactIcon = (props) => {
    return (
        <div className="flex md:flex-row flex-col md:text-left text-center items-center">
            <div
                className="icon md:h-[60px] h-[50px] md:w-[60px] w-[50px] md:mr-5 mr-0 md:mb-0 mb-3 flex items-center justify-center rounded-full bg-gray-50"
                style={{
                    boxShadow: "0px 0px 8px #d3d3d3",
                }}
            >
                {<props.icon className='text-blue-500 md:text-3xl text-2xl' />}
            </div>
            <div className="text">
                <h3 className='font-semibold text-lg'>{props.title}</h3>
                <p className='text-gray-500'><a href={props.href} target='blank' className='hover:font-semibold hover:text-blue-500'>{props.text}</a></p>
            </div>
        </div>
    );
};

export default Contact;