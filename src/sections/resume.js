import React from 'react';
import Section from '../components/section';
import style from '../styles/modules/resume.module.scss';
import CvItem from '../components/cvItem';

const Resume = () => {
    return (
        <Section className={style.section}>
            <div className="container">
                <div className={style.cvSection}>
                <div className="section-heading">
                    <h4 className={style.sectionHeading}>experience</h4>
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
                    <div className="section-heading">
                        <h4 className={style.sectionHeading}>awards</h4>
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
                            date="july - aug 2019"
                        />
                    </div>
                </div>
            </div>
        </Section>
    );
};


export default Resume;