import React from "react";

function Intro() {
    return (
        <div id="intro" className="flex items-center justify-center flex-col text-center pt-20 pb-6">
            <h1 className="text-4xl md:text-7xl dark:text-white mb-1 md:mb-3 font-bold">Hrishabh V</h1>
            <p className="text-base md:text-xl mb-3 font-medium">ML Developer & Data Scientist</p>

            <p className="text-sm max-w-xl mb-6 font-bold text-justify">
            I am an indie ML Developer and Data Scientist with a strong foundation in Python, machine learning, and data analysis. I specialize in developing intelligent solutions and extracting insights from complex datasets using machine learning techniques and data visualization tools. 
            <br/>

            With a solid understanding of data science principles, I am passionate about leveraging data to uncover trends and optimize processes. As an indie dev, I thrive at the intersection of machine learning and data analysis, continually applying my skills to solve real-world challenges.
            <br/>
            <br/>
            Here's 
            my {' '} 
            <a href="https://www.linkedin.com/in/hrishabhv/"
            target='blank'
            className="text-cyan-600 hover:underline
            underline-offset-2 decoration-2 decoration-red-600
            rel='noreferrer noopener'"
            >LinkedIn</a>
            {' '}
            if you want to connect!
            <br/>
            <br/>
            Curious about my latest creations? Swing by my GitHub{' '} 
            <a href="https://github.com/Hrishabh-V"
            target='blank'
            className="text-cyan-600 hover:underline
            underline-offset-2 decoration-2 decoration-red-600
            rel='noreferrer noopener'"
            >Hrishabh-V</a>
            {' '}and see what I’ve been up to! 
            </p>
        </div>
    );
}

export default Intro;
