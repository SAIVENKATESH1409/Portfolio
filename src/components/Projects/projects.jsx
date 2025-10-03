import { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ProjectCard from './projectCard';
import projImg1 from "/public/Resources/Images/project1.png";
import projImg2 from "/public/Resources/Images/project2.png";
import projImg3 from "/public/Resources/Images/project3.png";
import './animate.css';
import 'react-tabs/style/react-tabs.css';

const ProjectComponent = () => {
    const projects = [
        {
            title: "Snowflake Integration with AWS S3 Storage, Snowflake",
            description: "Designed and deployed the integration of Snowflake with AWS S3 storage, enabling seamless data transfer and faster query performance. Developed automated data loading pipelines, optimized storage strategies, and enforced consistency to strengthen the analytics ecosystem. ",
            imgUrl: projImg1,
            url: "https://github.com/SAIVENKATESH1409/Snowflake-integration-with-AWS-S3"
        },
        {
            title: "Google Play Store Data Analysis Pipeline with PySpark",
            description: "Built and managed a data analysis pipeline using PySpark, processing a dataset of 10,842+ records for insights on app performance. Applied data preprocessing, transformation, and analysis techniques to generate actionable reports and visualizations, supporting data-driven decision-making. ",
            imgUrl: projImg2,
            url: "https://github.com/SAIVENKATESH1409/Google-Play-Store-Data-Analysis-Pipeline-with-PySpark"
        },
        {
            title: "Analysis of Real Estate Data",
            description: "Conducted Bay Area real estate data analysis, leveraging scatter plots, heatmaps, and trend visualizations to highlight key metrics. Delivered an interactive Tableau dashboard showing property values and square footage by region, uncovering the highest-value ZIP codes to guide investment strategies.",
            imgUrl: projImg3,
            url: "https://github.com/SAIVENKATESH1409/Real-Estate-Data-Analysis"
        },
        
    ];

    const [tabIndex, setTabIndex] = useState(0);

    return (
        <div className="container mx-auto px-4 py-10">
            <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabPanel>
                    <div className="flex flex-wrap -mx-2 justify-center">
                        {projects.map((project, index) => (
                            <ProjectCard key={index} {...project} />
                        ))}
                    </div>
                </TabPanel>
            </Tabs>
        </div>


    );
}

export default ProjectComponent;
