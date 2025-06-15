import React from "react";

function TimelineItem({ year, title, company, date, details }) {
    return (
        <ol className="flex flex-col md:flex-row relative border-l border-stone-200 dark:border-stone-700">
            <li className="mb-10 ml-4">
                <div className="absolute w-3 h-3 bg-stone-900 dark:bg-white rounded-full mt-1.5 -left-1.5 border border-white dark:border-stone-900" />

                <div className="flex flex-wrap items-center gap-4 text-sm md:text-base">
                    <span className="inline-block px-3 py-2 text-sm md:text-base font-semibold text-white dark:text-stone-900 bg-stone-900 dark:bg-white rounded-md">
                        {year}
                    </span>
                    <h3 className="text-2xl md:text-3xl font-bold text-stone-900 dark:text-white">
                        {title}
                    </h3>
                    <span className="text-base font-medium text-[#242124] dark:text-stone-200">
                        {company}
                    </span>
                    <span className="text-sm md:text-base font-light text-[#242124] dark:text-stone-300 ml-auto">
                        {date}
                    </span>
                </div>

                <ul className="my-2 text-base md:text-lg leading-relaxed font-normal text-[#242124] dark:text-stone-400 list-disc pl-5 text-justify">
                    {details.map((detail, index) => (
                        <li key={index} className="text-base md:text-lg leading-relaxed">
                            {detail}
                        </li>
                    ))}
                </ul>
            </li>
        </ol>
    );
}

export default TimelineItem;
