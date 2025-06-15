import React from "react";

function Intro() {
    return (
        <div
            id="intro"
            className="flex items-center justify-center flex-col text-center pt-20 pb-6 mx-auto px-4 md:px-8 lg:px-12 max-w-6xl"
        >
            {/* Adjusting header */}
            <h1 className="text-5xl md:text-8xl dark:text-white mt-4 mb-2 md:mb-4 font-bold">
                Hrishabh V
            </h1>

            {/* Subheading */}
            <p className="text-lg md:text-2xl mb-4 font-medium">
                ML Developer & Data Scientist
            </p>

            {/* Paragraph */}
            <p className="text-base md:text-lg max-w-5xl mb-8 font-bold text-justify">
                I am an indie ML Developer and Data Scientist with a strong foundation in Python, 
                machine learning, and data analysis. I specialize in developing intelligent solutions 
                and extracting insights from complex datasets using machine learning techniques and 
                data visualization tools.
                <br />
                <br />
                With a solid understanding of data science principles, I am passionate about leveraging 
                data to uncover trends and optimize processes. As an indie dev, I thrive at the intersection 
                of machine learning and data analysis, continually applying my skills to solve real-world 
                challenges.
                <br />
                <br />
                Here's
                my{' '}
                <a
                    href="https://www.linkedin.com/in/hrishabhv/"
                    target="blank"
                    className="text-cyan-600 hover:underline underline-offset-2 decoration-2 decoration-red-600 rel='noreferrer noopener'"
                >
                    LinkedIn
                </a>
                {' '}if you want to connect!
                <br />
                <br />
                Curious about my latest creations? Swing by my GitHub{' '}
                <a
                    href="https://github.com/Hrishabh-V"
                    target="blank"
                    className="text-cyan-600 hover:underline underline-offset-2 decoration-2 decoration-red-600 rel='noreferrer noopener'"
                >
                    Hrishabh-V
                </a>
                {' '}and see what I’ve been up to!
            </p>
        </div>
    );
}

export default Intro;
