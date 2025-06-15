import React from "react";
import timeline from "../data/timeline";
import TimelineItem from "./Timelineitem.jsx";
import Title from "./title.jsx";

function Timeline() {
    return (
        <div
            id="exp"
            className="flex flex-col md:flex-row justify-center my-10 md:my-20 px-4 md:px-6 w-full"
        >




            <div className="text-lg md:text-2xl mb-4 font-medium">
                <h1 className="text-2xl md:text-4xl mb-6 font-extrabold">
                    Timeline
                </h1>

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
