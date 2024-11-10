import React from "react";
import portfolio from "../data/portfolio";
import PortfolioItem from "./portfolioitem.jsx";

function Portfolio() {
    return (
        <div className="flex flex-col items-center justify-center">
            <div id="projects" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
                {
                    portfolio.map((project, index) => (
                        <PortfolioItem
                            key={index} // Always add a key when mapping over lists
                            imgUrl={project.imgUrl}
                            title={project.title}
                            stack={project.stack}
                            link={project.link}
                            liveLink={project.liveLink} // Pass the liveLink prop
                        />
                    ))
                }
            </div>
        </div>
    );
}

export default Portfolio;
