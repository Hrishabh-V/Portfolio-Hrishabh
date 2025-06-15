import React from "react";
import Title from "./title.jsx";

function Contact() {
    return (
        <div id="contact" className="flex flex-col mb-10 mx-auto">
            <div className="flex justify-center items-center">
                <form action="https://getform.io/f/bmdpwqla"
                      method="POST"
                      className="flex flex-col w-full sm:w-9/12 md:w-8/12 lg:w-6/12 mx-auto p-4">
                    <Title>Contact</Title>
                    <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        className="px-4 py-2 bg-transparent border-2 rounded-md focus:outline-none text-sm md:text-base focus:ring-2 focus:ring-blue-400"
                    />
                    <input
                        type="text"
                        name="email"
                        placeholder="Email"
                        className="my-2 px-4 py-2 bg-transparent border-2 rounded-md focus:outline-none text-sm md:text-base focus:ring-2 focus:ring-blue-400"
                    />
                    <textarea
                        name="message"
                        placeholder="Message"
                        rows="10"
                        className="px-4 py-2 mb-4 bg-transparent border-2 rounded-md focus:outline-none text-sm md:text-base focus:ring-2 focus:ring-blue-400"
                    />
                    <button
                        type="submit"
                        className="w-full px-6 py-3 text-sm md:text-lg font-medium rounded-md text-white bg-gradient-to-r from-pink-500 to-blue-500 drop-shadow-md transform hover:scale-105 transition-transform duration-200">
                        Contact Me
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Contact;
