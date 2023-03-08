import React from 'react';
import Section from '../components/section';
import * as style from '../styles/modules/resume.module.scss';
import CvItem from '../components/cvItem';

function Resume() {
  return (
    <Section className={style.section}>
      <div className={`container ${style.container}`}>
        <div className={style.cvSection}>
          <div className={`section-heading ${style.sectionHeading}`}>
            <h4>experience</h4>
          </div>
          <div className="section-content">
            <CvItem
              style={style}
              title="Software Engineer · MongoDB Inc."
              description={`Copenhagen, Denmark

                        Part of the Realm JavaScript/TypeScript team, helping facilitate the rewrite into the new C++ binding generator powered SDK
                        
                        // TypeScript, React Native, C++`}
              date="aug 2022 - current"
            />
            <div className={`${style.seperator} seperator`} />
            <CvItem
              style={style}
              title="Software Engineering Intern · MongoDB Inc."
              description={`New York, NY, USA

                        Work on dependency resolution features of the Realm backend-as-a-service cloud platform.
                        
                        // Go Language, React, REST`}
              date="jun - aug 2021"
            />
            <div className={`${style.seperator} seperator`} />
            <CvItem
              style={style}
              title="Software Engineering Intern · NoTraffic"
              description={`Tel Aviv-Yafo, Israel
                        
                        Developed web tools and applications for troubleshooting and analysis for a smart traffic light management company based in Tel Aviv.
                        
                        // Python (Django), Angular, Redux
                        `}
              date="july - aug 2019"
            />
          </div>
        </div>
        <div className={style.cvSection}>
          <div className={`section-heading ${style.sectionHeading}`}>
            <h4>awards</h4>
          </div>
          <div className="section-content">
            <CvItem
              style={style}
              title="Outstanding Computer Science Independent Work Prize"
              description={'Awarded by the Computer Science department for my independent work project "Swipes to the masses: a swipe-based mobile application solution for receiving and distributing event information that expects binary feedback for physical communities".'}
              date="spring 2022"
            />
            <div className={`${style.seperator} seperator`} />
            <CvItem
              style={style}
              title="Princeton Computer Science Service Award"
              description="Awarded by the Computer Science department for creating applications to solve redundancies in campus technologies and for founding and leading the student organization working on these projects—the Hoagie Club."
              date="spring 2022"
            />
            <div className={`${style.seperator} seperator`} />
            <CvItem
              style={style}
              title="Martin A. Dale ‘53 Summer Award"
              description="The Dale Award enables a small number of Princeton University sophomores to
                                        pursue worthy projects that provide important opportunities for personal growth,
                                        foster independence, creativity, and leadership skills, and broaden or deepen some
                                        area of special interest."
              date="summer 2020"
            />
            <div className={`${style.seperator} seperator`} />
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
        <svg
          width="400"
          height="400"
          viewBox="0 0 400 400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="200"
            cy="200"
            r="195"
            stroke="#C03226"
            strokeWidth="10"
            strokeDasharray="50"
          />
        </svg>
      </div>
    </Section>
  );
}

export default Resume;
