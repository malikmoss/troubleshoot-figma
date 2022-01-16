import React from "react";
import { makeStyles } from "@material-ui/core/styles"
import classNames from "classnames";
// import "./TroubleshootABREdgeCases.css"
import stockPhoto from '../../stockphoto.jpg'


function TroubleshootABREdgeCases(props) {
  const classes = useStyles()
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
        <div className={classes.overlapGroup11}>
          <div className={classes.overlapGroup21}>
            <div className={classes.mainHeader, "valign-text-middle", "dmserifdisplay-normal-tuatara-18px"}>
              <span>
                <span className="dmserifdisplay-normal-tuatara-18px">{spanText1}</span>
              </span>
            </div>
            <div className={classes.graphTabs1}>
              <div className={classNames(classes.productRequirements1,"valign-text-middle", "dmserifdisplay-normal-tuatara-18px")}>
                <span>
                  <span className="droidsans-regular-normal-mountain-mist-8px">{spanText2}</span>
                </span>
              </div>
              <div className={classes.overlapGroup1}>
                <div className={classNames(classes.apiIntegraton1, "valign-text-middle,","droidsans-regular-normal-mountain-mist-8px")}>
                  <span>
                    <span className="droidsans-regular-normal-mountain-mist-8px">{spanText3}</span>
                  </span>
                </div>
                <div className={classNames(classes.abrEdgeCases1, "valign-text-middle", "droidsans-bold-cerulean-8px")}>
                  <span>
                    <span className="droidsans-bold-cerulean-8px">{spanText4}</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <p className={classNames(classes.autoBracketRemovalEdgeCases, "valign-text-middle", "dmserifdisplay-normal-black-14px")}>
            <span>
              <span className="dmserifdisplay-normal-black-14px">{spanText5}</span>
            </span>
          </p>
          <p className={classNames(classes.abrWorksWellOnR, "valign-text-middle", "dmsans-normal-chicago-9px")}>
            <span>
              <span className="dmsans-normal-chicago-9px">{spanText6}</span>
            </span>
          </p>
          <div className={classes.flexRow3}>
            <img src={stockPhoto} className={classes.rectangle} />
            <img src={stockPhoto}  className={classes.rectangle1} />
          </div>
          <p className={classNames(classes.onBracketsThatInt, "valign-text-middle", "dmsans-normal-chicago-9px")}>
            <span>
              <span className="dmsans-normal-chicago-9px">{spanText7}</span>
            </span>
          </p>
          <div className={classes.flexRow4}>
            <img src={stockPhoto}  className={classes.rectangle} />
            <img src={stockPhoto}  className={classes.rectangle1}/>
          </div>
          <p className={classNames(classes.ifNeeded, "valign-text-middle","dmsans-normal-chicago-9px")}>
            <span>
              <span className="dmsans-normal-chicago-9px">{spanText8}</span>
            </span>
          </p>
          <p className={classNames(classes.scanQuality,"valign-text-middle","dmsans-normal-chicago-9px")}>
            <span>
              <span className="dmsans-normal-chicago-9px">{spanText9}</span>
            </span>
          </p>
          <div className={classes.flexRow5}>
            <img src={stockPhoto} className={classes.rectangle} />
            <img src={stockPhoto} className={classes.rectangle1} />
          </div>
          <p className={classNames(classes.excessMaterials, "valign-text-middle","dmsans-normal-chicago-9px")}>
            <span>
              <span className="dmsans-normal-chicago-9px">{spanText10}</span>
            </span>
          </p>
          <div className={classes.flexRow3}>
            <img src={stockPhoto}  className={classes.rectangle} />
            <img src={stockPhoto}  className={classes.rectangle} />
          </div>
          <p className={classNames(classes.tooManyMissing, "valign-text-middle","dmsans-normal-chicago-9px")}>
            <span>
              <span className="dmsans-normal-chicago-9px">{spanText11}</span>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

const useStyles = makeStyles({
  edgeCaseContainer: {
    alignItems: 'flex-start',
    backgroundColor: 'var(--white)',
    display: 'flex',
    height: '1196px',
    minWidth: '600px',
  },
  overlapGroup11: {
    alignItems: 'flex-start',
    backgroundColor: 'var(--pattens-blue)',
    display: 'flex',
    flexDirection: 'column',
    marginLeft: '162px',
    minHeight: '1196px',
    padding: '44px 20px',
    width: '438px',
  },
  overlapGroup21: {
    height: '92px',
    position: 'relative',
    width: '366px',
  },
  mainHeader: {
    height: '91px',
    left: 0,
    letterSpacing: 0,
    position: 'absolute',
    top: 0,
    width: '366px',
  },
  graphTabs1: {
    alignItems: 'flex-start',
    display: 'flex',
    height: '13px',
    left: 0,
    minWidth: '299px',
    position: 'absolute',
    top: '79px',
  },
  productRequirements1: {
    height: '13px',
    letterSpacing: 0,
    width: '103px',
  },
  overlapGroup1: {
    height: '13px',
    marginLeft: '3px',
    position: 'relative',
    width: '187px',
  },
  apiIntegraton1: {
    height: '13px',
    left: '78px',
    letterSpacing: 0,
    position: 'absolute',
    top: '0',
    width: '109px',
  },
  abrEdgeCases1: {
    height: '13px',
    left: 0,
    letterSpacing: 0,
    position: 'absolute',
    top: 0,
    width: '115px',
  },
  autoBracketRemovalEdgeCases: {
    height: '19px',
    letterSpacing: 0,
    marginTop: '19px',
    width: '366px',
  },
  abrWorksWellOnR: {
    height: '30px',
    letterSpacing: 0,
    marginTop: '16px',
    width: '355px',
  },
  flexRow3: {
    alignItems: 'flex-start',
    display: 'flex',
    marginTop: '6px',
    minWidth: '366px',
  },
  rectangle: {
    backgroundColor: 'var(--mist-gray)',
    height: '94px',
    width: '177px',
  },
  rectangle1: {
    backgroundColor: 'var(--mist-gray)',
    height: '94px',
    marginLeft: '12px',
    width: '177px',
  },
  onBracketsThatInt: {
    height: '30px',
    letterSpacing: 0,
    marginTop: '20px',
    width: '355px',
  },
  flexRow4: {
    alignItems: 'flex-start',
    display: 'flex',
    minWidth: '366px',
  },
  onBracketsThatInt: {
    height: '30px',
    letterSpacing: 0,
    marginTop: '20px',
    width: '355px',
  },
  flexRow4: {
    alignItems: 'flex-start',
    display: 'flex',
    minWidth: '366px',
  },
  ifNeeded: {
    height: '30px',
    letterSpacing: 0,
    marginTop: '6px',
    width: '355px',
  },
  
  scanQuality: {
    height: '46px',
    letterSpacing: 0,
    marginTop: '24px',
    width: '381px',
  },
  
  flexRow5: {
    alignItems: 'flex-start',
    display: 'flex',
    marginTop: '5px',
    minWidth: '366px',
  },
  
  excessMaterials: {
    height: '30px',
    letterSpacing: 0,
    marginTop: '30px',
    width: '355px',
  },
  
  tooManyMissing: {
    height: '232px',
    letterSpacing: 0,
    marginTop: '30px',
    width: '355px',
  },


});
export default TroubleshootABREdgeCases;
