import React from "react";
import "./TroubleshootABREdgeCases.css";
import stockPhoto from '../../stockphoto.jpg'
import Grid from '@material-ui/core/Grid'

function TroubleshootABREdgeCases() {

  return (
    <div className="container-center-horizontal">
      <div className="troubleshoot-abr-edge-cases screen">
        <div className="overlap-group1-1">
          <div className="overlap-group2-1">
            <div className="what-can-we-help-you-with-1 valign-text-middle dmserifdisplay-normal-tuatara-18px">
              <span>
                <span className="dmserifdisplay-normal-tuatara-18px">What can we help you with?</span>
              </span>
            </div>
            <div className="graph-tabs-1">
              <div className="product-requirements-1 valign-text-middle droidsans-regular-normal-mountain-mist-8px">
                <span>
                  <span className="droidsans-regular-normal-mountain-mist-8px">Product Requirements</span>
                </span>
              </div>
              <div className="overlap-group-1">
                <div className="api-integration-1 valign-text-middle droidsans-regular-normal-mountain-mist-8px">
                  <span>
                    <span className="droidsans-regular-normal-mountain-mist-8px">API Integration</span>
                  </span>
                </div>
                <div className="abr-edge-cases-1 valign-text-middle droidsans-bold-cerulean-8px">
                  <span>
                    <span className="droidsans-bold-cerulean-8px">ABR Edge Cases</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <p className="auto-bracket-removal-edge-cases valign-text-middle dmserifdisplay-normal-black-14px">
            <span>
              <span className="dmserifdisplay-normal-black-14px">Auto Bracket Removal Edge Cases</span>
            </span>
          </p>
          <p className="abr-works-well-on-ar valign-text-middle dmsans-normal-chicago-9px">
            <span>
              <span className="dmsans-normal-chicago-9px">
              ABR works well on arches with brackets only, with minimal artifacts, high triangle count, and healthy gums:
              </span>
            </span>
          </p>
          <div className="flex-row-3">
              <img src={stockPhoto} className="rectangle" />
              <img src={stockPhoto}  className="rectangle-1" />
          </div>
          <p className="on-brackets-that-int valign-text-middle dmsans-normal-chicago-9px">
            <span>
              <span className="dmsans-normal-chicago-9px">On brackets that intersect the gums, the margin will often be smoothed:</span>
            </span>
          </p>
          <div className="flex-row-4">
            <img src={stockPhoto}  className="rectangle" />
            <img src={stockPhoto}  className="rectangle-1" />
          </div>
          <p className="if-needed-for-your-d valign-text-middle dmsans-normal-chicago-9px">
            <span>
              <span className="dmsans-normal-chicago-9px">If needed for your dental appliance, the margin can be easily touched up in post processing with 3rd party tools such as MeshMixer.</span>
            </span>
          </p>
          <p className="scan-quality-also-af valign-text-middle dmsans-normal-chicago-9px">
            <span>
              <span className="dmsans-normal-chicago-9px">Scan quality also affects bracket removal. If there is a significant amount of occlusion, it is harder for ABR to generate smooth surfaces. In the following example, there are occlusions intersecting the gum line causing the output to have overly smoothed margins:</span>
            </span>
          </p>
          <div className="flex-row-5">
            <img src={stockPhoto} className="rectangle" />
            <img src={stockPhoto} className="rectangle-1" />
          </div>
          <p className="excess-material-such valign-text-middle dmsans-normal-chicago-9px">
            <span>
              <span className="dmsans-normal-chicago-9px">Excess material such as glue on the tooth that is not in the direct vicinity of the bracket will not be processed by ABR:</span>
            </span>
          </p>
          <div className="flex-row-3">
            <img src={stockPhoto}  className="rectangle" />
            <img src={stockPhoto}  className="rectangle-1" />
          </div>
          <p className="too-many-teeth-missi valign-text-middle dmsans-normal-chicago-9px">
            <span>
              <span className="dmsans-normal-chicago-9px">
              <>Too many teeth missing in a single arch can sometimes fail our initial quality check and return an error or can sometimes make it through processing with some minor touch-ups required. <br /><br /><br />We can remove large attachments, but smaller attachments are often not touched by our removal algorithm. These can be easily touched-up in our file editor.<br /><br /><br />DamonQ brackets or other large brackets can be difficult to remove since less of the original tooth is scanned. This can lead to excess material that needs to be touched up or overly smoothed gingival margins.<br /><br /><br />Files with pre-existing bases are usually very inconsistent, so we cannot guarantee the quality of a file with a pre-existing base. Especially if it leaves minimal space between the gingival margin and the beginning of the base, processed results from Company might end up visually unappealing.</>
              </span>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default TroubleshootABREdgeCases;
