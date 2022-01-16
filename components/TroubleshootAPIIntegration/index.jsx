import React from "react";
import { makeStyles } from "@material-ui/core/styles"
import classNames from "classnames";
// import "./TroubleshootAPIIntegration.css";


function TroubleshootAPIIntegration(props) {
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
    line8,
    spanText10,
    spanText11,
    spanText12,
    spanText13,
    spanText14,
    spanText15,
    spanText16,
    spanText17,
    spanText18,
    spanText19,
    spanText20,
    spanText21,
    spanText22,
    spanText23,
    spanText24,
    spanText25,
    spanText26,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className={classNames(classes.troubleshoot-api-integratio, "screen")}>
        <div className={classes.overlap-group1-2}>
          <div className={classes.overlap-group5}>
            <div className={classNames(classes.what-can-we-help-you-with2, "valign-text-middle", "dmserifdisplay-normal-tuatara-18px")}>
              <span>
                <span className="dmserifdisplay-normal-tuatara-18px">{spanText1}</span>
              </span>
            </div>
            <div className={classes.graph-tabs-2}>
              <div className={classNames(classes.product-requirements-2, "valign-text-middle droidsans-regular-normal-mountain-mist-8px")}>
                <span>
                  <span className="droidsans-regular-normal-mountain-mist-8px">{spanText2}</span>
                </span>
              </div>
              <div className={classes.overlap-group-2}>
                <div className={classes.api-integration-2, "valign-text-middle droidsans-bold-cerulean-8px"}>
                  <span>
                    <span className="droidsans-bold-cerulean-8px">{spanText3}</span>
                  </span>
                </div>
                <div className={classNames(classes.abr-edge-cases-2, "valign-text-middle droidsans-regular-normal-mountain-mist-8px")}>
                  <span>
                    <span className="droidsans-regular-normal-mountain-mist-8p">{spanText4}</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className={classNames(classes.api-integration-intro, "valign-text-middle droidsans-regular-normal-mountain-mist-8px")}>
            <span>
              <span className="dmserifdisplay-normal-black-14px">{spanText5}</span>
            </span>
          </div>
          <p className={classNames(classes.what-is-an-api-appl, "valign-text-middle dmsans-normal-chicago-9px")}>
            <span>
              <span className="dmsans-bold-black-9px">{spanText6}</span>
              <span className="dmsans-normal-chicago-9px">{spanText7}</span>
            </span>
          </p>
          <p className={classNames(classes.how-does-companys-a, "valign-text-middle dmsans-normal-chicago-9px")}>
            <span>
              <span className="dmsans-bold-black-9px">{spanText8}</span>
              <span className="dmsans-normal-chicago-9px">{spanText9}</span>
            </span>
          </p>
          <img className={classes.line-8-1} src={line8} />
          <div className={classNames(classes.integration-scenarios, "valign-text-middle dmserifdisplay-normal-black-14px")}>
            <span>
              <span className="dmserifdisplay-normal-black-14px">{spanText10}</span>
            </span>
          </div>
          <p className={classNames(classes.possible-integration, "droidsans-regular-normal-gray-11px")}>
            <span className="droidsans-regular-normal-gray-11px">{spanText11}</span>
          </p>
          <div className={classes.overlap-group4}>
            <p className={classNames(classes.scenario, "droidsans-bold-cerulean-9px")}>
              <span className="droidsans-bold-cerulean-9px">{spanText12}</span>
              <span className="droidsans-regular-normal-cerulean-9px">{spanText13}</span>
            </p>
            <p className={classes.register-withthe-la, "dmsans-normal-chicago-9px"}>
              <span className="dmsans-normal-chicago-9px">{spanText14}</span>
            </p>
          </div>
          <div className={classes.overlap-group3}>
            <p className={classNames(classes.scenario, "droidsans-bold-cerulean-9px")}>
              <span className="droidsans-bold-cerulean-9px">{spanText15}</span>
              <span className="droidsans-bold-cerulean-9px">{spanText16}</span>
              <span className="droidsans-bold-cerulean-9px">{spanText17}</span>
              <span className="droidsans-regular-normal-cerulean-9px">{spanText18}</span>
            </p>
            <p className={classNames(classes.register-withLarge, "dmsans-normal-chicago-9px")}>
              <span className="dmsans-normal-chicago-9px">{spanText19}</span>
            </p>
          </div>
          <div className={classes.overlap-group2-2}>
            <p className={classNames(classes.scenario, "droidsans-bold-cerulean-9px")}>
              <span className="droidsans-bold-cerulean-9px">{spanText20}</span>
              <span className="droidsans-bold-cerulean-9px">{spanText21}</span>
              <span className="droidsans-bold-cerulean-9px">{spanText22}</span>
              <span className="droidsans-regular-normal-cerulean-9px">{spanText23}</span>
            </p>
            <p className={classNames(classes.set-up-an-appointmen, "dmsans-normal-chicago-9px")}>
              <span className="dmsans-normal-chicago-9px">{spanText24}</span>
              <span className={classes.span1}>{spanText25}</span>
              <span className="dmsans-normal-chicago-9px">{spanText26}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

const useStyles = makeStyles({
  
  'troubleshoot-api-integration': {
    alignItems: 'flex-start',
    backgroundColor: 'var(--white)',
    display: 'flex',
    height: '1196px',
    minWidth: '600px',
  },
  
  'overlap-group1-2': {
    alignItems: 'flex-start',
    backgroundColor: 'var(--pattens-blue)',
    display: 'flex',
    flexDirection: 'column',
    marginLeft: '162px',
    marginTop: '-27px',
    minHeight: '1223px',
    padding: '71px 20px',
    width: '438px',
  },
  
  'overlap-group5': {
    height: '92px',
    position: 'relative',
    width: '366px',
  },
  
  'what-can-we-help-you-with2': {
    height: '91px',
    left: 0,
    letterSpacing: 0,
    position: 'absolute',
    top: 0,
    width: '366px',
  },
  
  'graph-tabs-2': {
    alignItems: 'flex-start',
    display: 'flex',
    height: '13px',
    left: 0,
    minWidth: '299px',
    position: 'absolute',
    top: '79px',
  },
  
  'product-requirements-2': {
    height: '13px',
    letterSpacing: 0,
    width: '103px',
  },
  
  'overlap-group-2': {
    height: '13px',
    marginLeft: '3px',
    position: 'relative',
    width: '187px',
  },
  
  'api-integration-2': {
    height: '13px',
    left: '78px',
    letterSpacing: 0,
    position: 'absolute',
    top: 0,
    width: '109px',
  },
  
  'abr-edge-cases-2': {
    height: '13px',
    left: 0,
    letterSpacing: 0,
    position: 'absolute',
    top: 0,
    width: '115px',
  },
  
  'api-integration-intro': {
    height: '19px',
    letterSpacing: 0,
    marginTop: '19px',
    width: '366px',
  },
  
  'what-is-an-api-appl': {
    height: '121px',
    letterSpacing: 0,
    marginTop: '16px',
    width: '366px',
  },
  
  'how-does-companys-a': {
    height: '191px',
    letterSpacing: 0,
    marginTop: '5px',
    width: '366px',
  },
  
  'line-8-1': {
    height: '1px',
    marginLeft: '1px',
    marginTop: '19px',
    width: '368px',
  },
  
  'integration-scenarios': {
    height: '19px',
    letterSpacing: 0,
    marginTop: '20px',
    width: '366px',
  },
  
  'possible-integration': {
    letterSpacing: 0,
    marginTop: '12px',
    minHeight: '24px',
    width: '366px',
  },
  
  'overlap-group4': {
    height: '186px',
    marginLeft: '1px',
    marginTop: '8px',
    position: 'relative',
    width:'386px',
  },
  
  'scenario': {
    left: 0,
    letterSpacing: 0,
    position: 'absolute',
    top: 0,
    width: '366px',
  },
  
  'register-withthe-la': {
    left: '20px',
    letterSpacing: 0,
    position: 'absolute',
    top: '22px',
    width: '366px',
  },

  'register-withLarge': {
    left: '20px',
    letterSpacing: 0,
    position: 'absolute',
    top: '22px',
    width: '366px',
  },

  'set-up-an-appointmen': {
    left: '20px',
    letterSpacing: 0,
    position: 'absolute',
    top: '22px',
    width: '366px',
  },
  
  'overlap-group3': {
    height: '122px',
    marginLeft: '1px',
    marginTop: '19px',
    position: 'relative',
    width: '386px',
  },
  
  'overlap-group2-2': {
    height: '36px',
    marginLeft: '1px',
    marginTop: '26px',
    position: 'relative',
    width: '386px',
  },
  
  'span1': {
    color: 'var(--cerulean)',
    fontFamily: 'var(--font-family-dm_sans)',
    fontSize: 'var(--font-size-m)',
    fontWeight: 400,
  },
})

export default TroubleshootAPIIntegration;
