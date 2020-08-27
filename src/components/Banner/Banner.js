import React from 'react';
import './banner.scss';
import Button from '../Buttons/Button';

const Banner = () => {
  return (
    <div className="banner">
      <div className="banner__infoContainer">
        <div className="banner__title">
          <div>
            <span>Test assignment</span>
          </div>
          <div>
            <span>for Frontend</span>
          </div>
          <div>
            <span>Developer position</span>
          </div>
        </div>
        <div className="banner__contentMobile text-white d-sm-none">
          <div>
            <span>We kindly remind you that your test </span>
          </div>
          <div>
            <span> assignment should be submitted as a link to </span>
          </div>
          <div>
            <span>github/bitbucket repository.</span>
          </div>
        </div>
        <div className="bannerContent d-none d-sm-block text-white">
          We kindly remind you that your test assignment should be submitted as
          a link to github/bitbucket repository. Please be patient, we consider
          and respond to every application that meets minimum requirements. We
          look forward to your submission. Good luck! The photo has to scale in
          the banner area on the different screens
        </div>
        <Button text="Sign up now" />
      </div>
    </div>
  );
};

export default Banner;
