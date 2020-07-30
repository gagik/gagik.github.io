import React from 'react';
import Section from '../components/section';
import style from '../styles/modules/resume.module.scss';
import CvItem from '../components/cvItem';

const Resume = () => {
    return (
        <Section className={style.section}>
            <div className={"container " + style.container}>
                <div className={style.cvSection}>
                <div className={"section-heading " + style.sectionHeading}>
                    <h4>experience</h4>
                </div>
                    <div className="section-content">
                    <CvItem 
                        style={style} 
                        title="User Interface Design Intern · PeerPilot"
                        description="Copenhagen, Denmark"
                        date="feb - may 2020"
                    />
                    <div className={style.seperator + " seperator"}></div>
                    <CvItem 
                        style={style} 
                        title="Full Stack Development Intern · NoTraffic"
                        description="Tel Aviv-Yafo, Israel"
                        date="july - aug 2019"
                    />
                </div>
                </div>
                <div className={style.cvSection}>
                    <div className={"section-heading " + style.sectionHeading}>
                        <h4>awards</h4>
                    </div>
                    <div className="section-content">
                        <CvItem 
                            style={style} 
                            title="Martin A. Dale ‘53 Summer Award"
                            description="Prestigious grant awarded to Princeton University
                                         sophomores to engage in a project of strong personal value and merit."
                            date="may 2020"
                        />
                        <div className={style.seperator + " seperator"}></div>
                        <CvItem 
                            style={style} 
                            title="Educational Award of the President of the Republic of Armenia in the IT Sphere"
                            description="The Presidential awards for IT are given to the top students 
                                         showing excellent achievements in their studies and research work."
                            date="summer 2016"
                        />
                    </div>
                </div>
            </div>
            <div className={style.shapes}>
                <svg width="400" height="400" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="200" cy="200" r="195" stroke="#C03226" strokeWidth="10" strokeDasharray="50"/>
                </svg>
            </div>
        </Section>
    );
};


export default Resume;