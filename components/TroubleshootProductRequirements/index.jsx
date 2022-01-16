import React from "react";
import { makeStyles } from "@mui/styles";
import classNames from "classnames";
// import "./TroubleshootProductRequirements.css";
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
      <div className={classNames(classes.troubleshoot-product-requirements, "screen")}>
        <div className={classes.overlap-group1}>
          <div className={classes.overlap-group2}>
            <div className={classNames(classes.what-can-we-help-youwith, "valign-text-middle dmserifdisplay-normal-tuatara-18px")}>
              <span>
                <span className="dmserifdisplay-normal-tuatara-18px">{spanText1}</span>
              </span>
            </div>
            <div className={classes.graph-tabs}>
              <div className={classNames(classes.product-requirements, "valign-text-middle droidsans-bold-cerulean-8px")}>
                <span>
                  <span className="droidsans-bold-cerulean-8px">{spanText2}</span>
                </span>
              </div>
              <div className={classNames(classes.overlap-group, "droidsans-regular-normal-mountain-mist-8px")}>
                <div className="api-integration valign-text-middle">
                  <span>
                    <span className="droidsans-regular-normal-mountain-mist-8px">{spanText3}</span>
                  </span>
                </div>
                <div className={classNames(classes.abr-edge-cases, "valign-text-middle")}>
                  <span>
                    <span className="droidsans-regular-normal-mountain-mist-8px">{spanText4}</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className={classNames(classes.understanding-compan, "valign-text-middle", "dmserifdisplay-normal-black-14px")}>
            <span>
              <span className="dmserifdisplay-normal-black-14px">{spanText5}</span>
            </span>
          </div>
          <p className={classNames(classes.companys-automated, "valign-text-middle", "droidsans-regular-normal-gray-11px")}>
            <span>
              <span className="droidsans-regular-normal-gray-11px">{spanText6}</span>
            </span>
          </p>
          <p className={classNames(classes.resolution-the-dent, "valign-text-middle", "dmsans-normal-chicago-9px")}>
            <span>
              <span className="dmsans-bold-black-9px">{spanText7}</span>
              <span className="dmsans-normal-chicago-9px">{spanText8}</span>
              <span className="dmsans-bold-black-9px">{spanText9}</span>
              <span className="dmsans-normal-chicago-9px">{spanText10}</span>
              <span className="dmsans-bold-black-9px">{spanText11}</span>
              <span className="dmsans-normal-chicago-9px">{spanText12}</span>
            </span>
          </p>
          <img className={classes.line-8} src={line8} />
          <div className="example-cases valign-text-middle dmserifdisplay-normal-black-14px">
            <span>
              <span className="dmserifdisplay-normal-black-14px">{spanText13}</span>
            </span>
          </div>
          <div className={classes.flex-row-1}>
            <img src={stockPhoto} className="rectangle-4" />
            <p className={classNames(classes.this-arch-is-a-good, "valign-text-middle", "dmsans-normal-chicago-9px")}>
              <span>
                <span className="dmsans-normal-chicago-9px">{spanText14}</span>
              </span>
            </p>
          </div>
          <div className={classes.flex-row}>
            <img src={stockPhoto} className="rectangle-4" />
            <p className={classNames(classes.this-arch-is-also-an, "valign-text-middle", "dmsans-normal-chicago-9px")}>
              <span>
                <span className="dmsans-normal-chicago-9px">{spanText15}</span>
              </span>
            </p>
          </div>
          <div className={classes.flex-row-2}>
            <img src={stockPhoto} className="rectangle-4" />
            <p className={classNames(classes.this-is-an-example-o, "valign-text-middle", "dmsans-normal-chicago-9px")}>
              <span>
                <span className="dmsans-normal-chicago-9px">{spanText16}</span>
              </span>
            </p>
          </div>
          <div className={classes.flex-row}>
            <img src={stockPhoto} className={classes.rectangle-4} />
            <p className={classNames(classes.since-this-has-a-hol, "valign-text-middle", "dmsans-normal-chicago-9px")}>
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

const useStyles = makeStyles({
  'troubleshoot-product-requirements': {
    alignItems: 'flex-start',
    backgroundColor: 'var(--white)',
    display: 'flex',
    height: '1196px',
    minWidth: '600px',
  },
  
  'overlap-group1': {
    alignItems: 'center',
    backgroundColor: 'var(--pattens-blue)',
    display: 'flex',
    flexDirection: 'column',
    marginLeft: '162px',
    minHeight: '1196px',
    padding: '44px 20px',
    width: '438px',
  },
  
  'overlap-group2': {
    height: '92px',
    marginRight: '32.0px',
    position: 'relative',
    width: '366px',
  },
  
  'what-can-we-help-youwith': {
    height: '91px',
    left: 0,
    letterSpacing: 0,
    position: 'absolute',
    top: 0,
    width: '366px',
  },
  
  'graph-tabs': {
    alignItems: 'flex-start',
    display: 'flex',
    height: '13px',
    left: 0,
    minWidth: '299px',
    position: 'absolute',
    top: '79px',
  },
  
  'product-requirements': {
    height: '13px',
    letterSpacing: 0,
    width: '103px',
  },
  
  'overlap-group': {
    height: '13px',
    marginLeft: '3px',
    position: 'relative',
    width: '187px',
  },
  
  'api-integration': {
    height: '13px',
    left: '78px',
    letterSpacing: 0,
    position: 'absolute',
    top: 0,
    width: '109px',
  },
  
  'abr-edge-cases': {
    height: '13px',
    left: 0,
    letterSpacing: 0,
    position: 'absolute',
    top: 0,
    width: '115px',
  },
  
  'understanding-compan': {
    height: '19px',
    letterSpacing: 0,
    marginRight: '32.0px',
    marginTop: '19px',
    width: '366px',
  },
  
  'companys-automated': {
    height: '24px',
    letterSpacing: 0,
    marginRight: '32.0px',
    marginTop: '12px',
    width: '366px',
  },
  
  'resolution-the-dent': {
    height: '182px',
    letterSpacing: 0,
    marginRight: '32.0px',
    marginTop: '20px',
    width: '366px',
  },
  
  'line-8': {
    alignSelf: 'flex-start',
    height: '1px',
    marginLeft: '1px',
    marginTop: '20px',
    width: '368px',
  },
  
  'example-cases': {
    alignSelf: 'flex-start',
    height: '19px',
    letterSpacing: 0,
    marginLeft: '1px',
    marginTop: '22px',
    width: '366px',
  },
  
  'flex-row-1': {
    alignItems: 'flex-start',
    display: 'flex',
    marginRight: '29.0px',
    marginTop: '23px',
    minWidth: '339px',
  },
  
  'rectangle-4': {
    backgroundColor: 'var(--mist-gray)',
    height: '102px',
    width: '146px',
  },
  
  'this-arch-is-a-good': {
    height: '102px',
    letterSpacing: 0,
    marginLeft: '20px',
    width: '173px',
  },
  'this-arch-is-also-an': {
    height: '102px',
    letterSpacing: 0,
    marginLeft: '20px',
    width: '173px',
  },
  'this-is-an-example-o': {
    height: '102px',
    letterSpacing: 0,
    marginLeft: '20px',
    width: '173px',
  },
  'since-this-has-a-hol': {
    height: '102px',
    letterSpacing: 0,
    marginLeft: '20px',
    width: '173px',
  },
  
  'flex-row': {
    alignItems: 'flex-start',
    display: 'flex',
    marginRight: '29.0px',
    marginTop: '14px',
    minWidth: '339px',
  },
  
  'flex-row-2': {
    alignItems: 'flex-start',
    display: 'flex',
    marginRight: '29.0px',
    marginTop: '13px',
    minWidth: '339px',
  },
})

export default TroubleshootProductRequirements;
