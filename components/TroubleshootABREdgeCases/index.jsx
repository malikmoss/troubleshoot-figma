import React from "react";
import "./TroubleshootABREdgeCases.css";
import stockPhoto from '../../stockphoto.jpg'

function TroubleshootABREdgeCases(props) {
  const {
    spanText1,
    spanText2,
    spanText3,
    spanText4,
    spanText5,
    spanText6,
    spanText7,
    spanText8,
    spanText9,
    spanText10,
    spanText11,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="troubleshoot-abr-edge-cases screen">
        <div className="overlap-group1-1">
          <div className="overlap-group2-1">
            <div className="what-can-we-help-you-with-1 valign-text-middle dmserifdisplay-normal-tuatara-18px">
              <span>
                <span className="dmserifdisplay-normal-tuatara-18px">{spanText1}</span>
              </span>
            </div>
            <div className="graph-tabs-1">
              <div className="product-requirements-1 valign-text-middle droidsans-regular-normal-mountain-mist-8px">
                <span>
                  <span className="droidsans-regular-normal-mountain-mist-8px">{spanText2}</span>
                </span>
              </div>
              <div className="overlap-group-1">
                <div className="api-integration-1 valign-text-middle droidsans-regular-normal-mountain-mist-8px">
                  <span>
                    <span className="droidsans-regular-normal-mountain-mist-8px">{spanText3}</span>
                  </span>
                </div>
                <div className="abr-edge-cases-1 valign-text-middle droidsans-bold-cerulean-8px">
                  <span>
                    <span className="droidsans-bold-cerulean-8px">{spanText4}</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <p className="auto-bracket-removal-edge-cases valign-text-middle dmserifdisplay-normal-black-14px">
            <span>
              <span className="dmserifdisplay-normal-black-14px">{spanText5}</span>
            </span>
          </p>
          <p className="abr-works-well-on-ar valign-text-middle dmsans-normal-chicago-9px">
            <span>
              <span className="dmsans-normal-chicago-9px">{spanText6}</span>
            </span>
          </p>
          <div className="flex-row-3">
            <img src={stockPhoto} className="rectangle" />
            <img src={stockPhoto}  className="rectangle-1" />
          </div>
          <p className="on-brackets-that-int valign-text-middle dmsans-normal-chicago-9px">
            <span>
              <span className="dmsans-normal-chicago-9px">{spanText7}</span>
            </span>
          </p>
          <div className="flex-row-4">
            <img src={stockPhoto}  className="rectangle" />
            <img src={stockPhoto}  className="rectangle-1" />
          </div>
          <p className="if-needed-for-your-d valign-text-middle dmsans-normal-chicago-9px">
            <span>
              <span className="dmsans-normal-chicago-9px">{spanText8}</span>
            </span>
          </p>
          <p className="scan-quality-also-af valign-text-middle dmsans-normal-chicago-9px">
            <span>
              <span className="dmsans-normal-chicago-9px">{spanText9}</span>
            </span>
          </p>
          <div className="flex-row-5">
            <img src={stockPhoto} className="rectangle" />
            <img src={stockPhoto} className="rectangle-1" />
          </div>
          <p className="excess-material-such valign-text-middle dmsans-normal-chicago-9px">
            <span>
              <span className="dmsans-normal-chicago-9px">{spanText10}</span>
            </span>
          </p>
          <div className="flex-row-3">
            <img src={stockPhoto}  className="rectangle" />
            <img src={stockPhoto}  className="rectangle-1" />
          </div>
          <p className="too-many-teeth-missi valign-text-middle dmsans-normal-chicago-9px">
            <span>
              <span className="dmsans-normal-chicago-9px">{spanText11}</span>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default TroubleshootABREdgeCases;
