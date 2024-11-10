import React from "react";
import timeline from "../data/timeline";
import TimelineItem from "./Timelineitem.jsx";
import Title from "./Title";

function Timeline() {
    return (
        <div id="exp" className="flex flex-col md:flex-row justify-center my-20 w-full">
            <div className="w-full md:w-10/12 lg:w-8/12">
                <Title>Timeline</Title>
                {timeline.map((item, index) => (
                    <TimelineItem
                        key={index}
                        year={item.year}
                        title={item.title}
                        company={item.company}
                        date={item.date}
                        details={item.details}
                    />
                ))}
            </div>
        </div>
    );
}

export default Timeline;
