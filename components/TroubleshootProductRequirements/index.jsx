import React from "react";
import "./TroubleshootProductRequirements.css";
import stockPhoto from '../../stockphoto.jpg'

function TroubleshootProductRequirements(props) {
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
    spanText12,
    line8,
    spanText13,
    spanText14,
    spanText15,
    spanText16,
    spanText17,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="troubleshoot-product-requirements screen">
        <div className="overlap-group1">
          <div className="overlap-group2">
            <div className="what-can-we-help-you-with valign-text-middle dmserifdisplay-normal-tuatara-18px">
              <span>
                <span className="dmserifdisplay-normal-tuatara-18px">{spanText1}</span>
              </span>
            </div>
            <div className="graph-tabs">
              <div className="product-requirements valign-text-middle droidsans-bold-cerulean-8px">
                <span>
                  <span className="droidsans-bold-cerulean-8px">{spanText2}</span>
                </span>
              </div>
              <div className="overlap-group droidsans-regular-normal-mountain-mist-8px">
                <div className="api-integration valign-text-middle">
                  <span>
                    <span className="droidsans-regular-normal-mountain-mist-8px">{spanText3}</span>
                  </span>
                </div>
                <div className="abr-edge-cases valign-text-middle">
                  <span>
                    <span className="droidsans-regular-normal-mountain-mist-8px">{spanText4}</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="understanding-compan valign-text-middle dmserifdisplay-normal-black-14px">
            <span>
              <span className="dmserifdisplay-normal-black-14px">{spanText5}</span>
            </span>
          </div>
          <p className="companys-automated valign-text-middle droidsans-regular-normal-gray-11px">
            <span>
              <span className="droidsans-regular-normal-gray-11px">{spanText6}</span>
            </span>
          </p>
          <p className="resolution-the-dent valign-text-middle dmsans-normal-chicago-9px">
            <span>
              <span className="dmsans-bold-black-9px">{spanText7}</span>
              <span className="dmsans-normal-chicago-9px">{spanText8}</span>
              <span className="dmsans-bold-black-9px">{spanText9}</span>
              <span className="dmsans-normal-chicago-9px">{spanText10}</span>
              <span className="dmsans-bold-black-9px">{spanText11}</span>
              <span className="dmsans-normal-chicago-9px">{spanText12}</span>
            </span>
          </p>
          <img className="line-8" src={line8} />
          <div className="example-cases valign-text-middle dmserifdisplay-normal-black-14px">
            <span>
              <span className="dmserifdisplay-normal-black-14px">{spanText13}</span>
            </span>
          </div>
          <div className="flex-row-1">
            <img src={stockPhoto} className="rectangle-4" />
            <p className="this-arch-is-a-good valign-text-middle dmsans-normal-chicago-9px">
              <span>
                <span className="dmsans-normal-chicago-9px">{spanText14}</span>
              </span>
            </p>
          </div>
          <div className="flex-row">
            <img src={stockPhoto} className="rectangle-4" />
            <p className="this-arch-is-also-an valign-text-middle dmsans-normal-chicago-9px">
              <span>
                <span className="dmsans-normal-chicago-9px">{spanText15}</span>
              </span>
            </p>
          </div>
          <div className="flex-row-2">
            <img src={stockPhoto} className="rectangle-4" />
            <p className="this-is-an-example-o valign-text-middle dmsans-normal-chicago-9px">
              <span>
                <span className="dmsans-normal-chicago-9px">{spanText16}</span>
              </span>
            </p>
          </div>
          <div className="flex-row">
            <img src={stockPhoto} className="rectangle-4" />
            <p className="since-this-has-a-hol valign-text-middle dmsans-normal-chicago-9px">
              <span>
                <span className="dmsans-normal-chicago-9px">{spanText17}</span>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TroubleshootProductRequirements;
