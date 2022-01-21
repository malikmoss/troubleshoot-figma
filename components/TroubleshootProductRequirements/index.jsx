import React from "react";
import "./TroubleshootProductRequirements.css";
import stockPhoto from '../../stockphoto.jpg'

function TroubleshootProductRequirements() {

  return (
    <div className="container-center-horizontal">
      <div className="troubleshoot-product-requirements screen">
        <div className="overlap-group1">
          <div className="overlap-group2">
            <div className="what-can-we-help-you-with valign-text-middle dmserifdisplay-normal-tuatara-18px">
              <span>
                <span className="dmserifdisplay-normal-tuatara-18px">
                What can we help you with?
                </span>
              </span>
            </div>
            <div className="graph-tabs">
              <div className="product-requirements valign-text-middle droidsans-bold-cerulean-8px">
                <span>
                  <span className="droidsans-bold-cerulean-8px">Product Requirements</span>
                </span>
              </div>
              <div className="overlap-group droidsans-regular-normal-mountain-mist-8px">
                <div className="api-integration valign-text-middle">
                  <span>
                    <span className="droidsans-regular-normal-mountain-mist-8px">API Integration</span>
                  </span>
                </div>
                <div className="abr-edge-cases valign-text-middle">
                  <span>
                    <span className="droidsans-regular-normal-mountain-mist-8px">ABR Edge Cases</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="understanding-compan valign-text-middle dmserifdisplay-normal-black-14px">
            <span>
              <span className="dmserifdisplay-normal-black-14px">Understanding Company product requirements</span>
            </span>
          </div>
          <p className="companys-automated valign-text-middle droidsans-regular-normal-gray-11px">
            <span>
              <span className="droidsans-regular-normal-gray-11px">
              Company’s automated product generates a list of xyz coordinates for trimming retainers and aligners.
              </span>
            </span>
          </p>
          <p className="resolution-the-dent valign-text-middle dmsans-normal-chicago-9px">
            <span>
              <span className="dmsans-bold-black-9px">Resolution: </span>
              <span className="dmsans-normal-chicago-9px">
                <>The dental arch should have at minimum 100k triangles or be around 5MB for an STL file. Meshes with less resolution will yield results that are not as smooth.<br /><br /></></span>
              <span className="dmsans-bold-black-9px">Orientation: </span>
              <span className="dmsans-normal-chicago-9px">
                <>The arch can be in any orientation. The output will be created in reference to the orientation of the input arch unless the user optionally selects to use Company’s automated trim &amp; base afterward which can align the base to z=0 for immediate 3D printing.<br /><br /></>
              </span>
              <span className="dmsans-bold-black-9px">Quality: </span>
              <span className="dmsans-normal-chicago-9px">The arch should not have excess or large artifacts and also should not contain significant occlusions (see below). Arches that have brackets with wires have unreliable performance, however arches brackets and no wires are acceptable input, and can optionally be removed using Company’s automated bracket removal product. Arches with small holes and normal artifacts will still yield a good quality trimline. Base: We are unable to process pre-based models.</span>
            </span>
          </p>
          <img className="line-8" src={`/img/line-8-2@2x.png`}/>
          <div className="example-cases valign-text-middle dmserifdisplay-normal-black-14px">
            <span>
              <span className="dmserifdisplay-normal-black-14px">Example cases</span>
            </span>
          </div>
          <div className="flex-row-1">
            <img src={stockPhoto} className="rectangle-4" />
            <p className="this-arch-is-a-good valign-text-middle dmsans-normal-chicago-9px">
              <span>
                <span className="dmsans-normal-chicago-9px">
                  This arch is a good input example. It has enough gum area to trim from, teeth are well defined, no excess artifacts.
                  </span>
              </span>
            </p>
          </div>
          <div className="flex-row">
            <img src={stockPhoto} className="rectangle-4" />
            <p className="this-arch-is-also-an valign-text-middle dmsans-normal-chicago-9px">
              <span>
                <span className="dmsans-normal-chicago-9px">
                  This arch is also an example that would work well for trim base.
                  </span>
              </span>
            </p>
          </div>
          <div className="flex-row-2">
            <img src={stockPhoto} className="rectangle-4" />
            <p className="this-is-an-example-o valign-text-middle dmsans-normal-chicago-9px">
              <span>
                <span className="dmsans-normal-chicago-9px">
                  This is an example of an arch with excess artifacts. Especially when the artifacts intersect the desired trimline, we cannot consistently create a valid output for these types of input.
                  </span>
              </span>
            </p>
          </div>
          <div className="flex-row">
            <img src={stockPhoto} className="rectangle-4" />
            <p className="since-this-has-a-hol valign-text-middle dmsans-normal-chicago-9px">
              <span>
                <span className="dmsans-normal-chicago-9px">
                  Since this has a hollow base, we currently cannot generate a trimline for these, but we’re working on adding support for this.
                  </span>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TroubleshootProductRequirements;
