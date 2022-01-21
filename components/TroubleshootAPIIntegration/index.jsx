import React from "react";
import "./TroubleshootAPIIntegration.css";

function TroubleshootAPIIntegration() {


  return (
    <div className="container-center-horizontal">
      <div className="troubleshoot-api-integration screen">
        <div className="overlap-group1-2">
          <div className="overlap-group5">
            <div className="what-can-we-help-you-with-2 valign-text-middle dmserifdisplay-normal-tuatara-18px">
              <span>
                <span className="dmserifdisplay-normal-tuatara-18px">What can we help you with?</span>
              </span>
            </div>
            <div className="graph-tabs-2">
              <div className="product-requirements-2 valign-text-middle droidsans-regular-normal-mountain-mist-8px">
                <span>
                  <span className="droidsans-regular-normal-mountain-mist-8px">Product Requirements</span>
                </span>
              </div>
              <div className="overlap-group-2">
                <div className="api-integration-2 valign-text-middle droidsans-bold-cerulean-8px">
                  <span>
                    <span className="droidsans-bold-cerulean-8px">API Integration</span>
                  </span>
                </div>
                <div className="abr-edge-cases-2 valign-text-middle droidsans-regular-normal-mountain-mist-8px">
                  <span>
                    <span className="droidsans-regular-normal-mountain-mist-8px">ABR Edge Cases</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="api-integration-intro valign-text-middle dmserifdisplay-normal-black-14px">
            <span>
              <span className="dmserifdisplay-normal-black-14px">API Integration: Intro</span>
            </span>
          </div>
          <p className="what-is-an-api-appl valign-text-middle dmsans-normal-chicago-9px">
            <span>
              <span className="dmsans-bold-black-9px">
                <>What is an API (Application Programming Interface)?<br /></>
                </span>
              <span className="dmsans-normal-chicago-9px">
              <><br />An API is a software intermediary that allows two applications to talk to each other.<br /><br />Company’s API has two primary points (endpoints) of communication: model upload and model download.<br /><br />Any other application can use these API endpoints to upload a model and received a processed model.</>
              </span>
            </span>
          </p>
          <p className="how-does-companys-a valign-text-middle dmsans-normal-chicago-9px">
            <span>
              <span className="dmsans-bold-black-9px">
                <>How does Company’s API fit into your workflow?<br />
                </></span>
              <span className="dmsans-normal-chicago-9px">
                <><br />You can send whichever scans you like to our API through the upload API endpoint. You can select which Company products you’d like applied to a specific scan (bracket removal, trimming, basing, etc). <br /><br />Company can also automatically detect if a scan has brackets or not. This way, you can submit all scans and we will only return scans with brackets. If you would like to have automatic bracket detection enabled on your account, contact a support agent to discuss pricing options.<br /><br />Include practice_id in prescription API call to receive analytics<br /><br />After about a minute, your processed scan will be ready and available for download from our download API endpoint.</>
                </span>
            </span>
          </p>
          <img className="line-8-1" src={`/img/line-8-2@2x.png`} />
          <div className="integration-scenarios valign-text-middle dmserifdisplay-normal-black-14px">
            <span>
              <span className="dmserifdisplay-normal-black-14px">Integration Scenarios</span>
            </span>
          </div>
          <p className="possible-integration droidsans-regular-normal-gray-11px">
            <span className="droidsans-regular-normal-gray-11px">Possible integration and testing solutions for Company API integration.</span>
          </p>
          <div className="overlap-group4">
            <p className="scenario droidsans-bold-cerulean-9px">
              <span className="droidsans-bold-cerulean-9px">Scenario 1: </span>
              <span className="droidsans-regular-normal-cerulean-9px">Split dev and production pipeline with local developers</span>
            </p>
            <p className="register-with-the-la dmsans-normal-chicago-9px">
              <span className="dmsans-normal-chicago-9px"><>Register with the large dental lab plan and obtain API keys<br /><br />Integrate to dev server with large dental lab plan using the 14-day free trial<br /><br />Integration usually consists of a checkbox for the user to select ABR or other products, if the scan is submitted with a checked box, then the file is sent through the Company API and received as an extra file in the prescription.<br /><br />Use Company code samples and API docs as guidelines for integration.<br /><br />Test with your own or provided sample scans through the API and/or the dashboard<br /><br />Push changes to production server</></span>
            </p>
          </div>
          <div className="overlap-group3">
            <p className="scenario droidsans-bold-cerulean-9px">
              <span className="droidsans-bold-cerulean-9px">Scenario </span>
              <span className="droidsans-bold-cerulean-9px">2</span>
              <span className="droidsans-bold-cerulean-9px">: </span>
              <span className="droidsans-regular-normal-cerulean-9px">Only production pipeline</span>
            </p>
            <p className="register-with-large dmsans-normal-chicago-9px">
              <span className="dmsans-normal-chicago-9px"><>Register with large dental lab plan and obtain API keys<br /><br />Test ABR and other products through the Company dashboard<br /><br />Test integration through Company code samples as standalone code in the language of production code<br /><br />Add integration code to use the standalone code directly to production pipeline</></span>
            </p>
          </div>
          <div className="overlap-group2-2">
            <p className="scenario droidsans-bold-cerulean-9px">
              <span className="droidsans-bold-cerulean-9px">Scenario </span>
              <span className="droidsans-bold-cerulean-9px">3</span>
              <span className="droidsans-bold-cerulean-9px">: </span>
              <span className="droidsans-regular-normal-cerulean-9px">Outsourced development & other custom options</span>
            </p>
            <p className="set-up-an-appointmen dmsans-normal-chicago-9px">
              <span className="dmsans-normal-chicago-9px">Set up an appointment with a Company developer </span>
              <span className="span1">here</span>
              <span className="dmsans-normal-chicago-9px">.</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TroubleshootAPIIntegration;
