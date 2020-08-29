import React from 'react';
import './section.scss';
import FlatButton from '../Buttons/FlatButton';

const Section = () => {
  return (
    <div className="section">
          <h1 className="section__heading">Let's get acquainted</h1>
      <div className="sectionContainer">

          <div className="section__imgContainer" />
        <div className="section__contentContainer">
          <h4 className="section__contentTitle">
            I am cool frontend developer
          </h4>
          <p className="section__content1">
            We will evaluate how clean your approach to writing CSS and
            Javascript code is. You can use any CSS and Javascript 3rd party
            libraries without any restriction.
          </p>
          <p className="section__content2">
            If 3rd party css/javascript libraries are added to the project via
            bower/npm/yarn you will get bonus points. If you use any task runner
            (gulp/webpack) you will get bonus points as well. Slice service
            directory page P​SD mockup​ into HTML5/CSS3.
          </p>
        </div>
      </div>
      <div className="section__button--pos">
        <FlatButton text="Sing up now" />
      </div>
    </div>
  );
};

export default Section;
