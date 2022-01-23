import React from "react";
import stockPhoto from '../../stockphoto.jpg'
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
  containerCenterHorizontal : {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    pointerEvents: "none",
    width: "100%",
  },
  troubleshootProductRequirements : {
    alignItems: "flex-start",
    backgroundColor: "var(--white)",
    display: "flex",
    justifyContent: "center",
    height: "1196px",
    minWidth: "600px",
  },
  overlapGroup1: {
    alignItems: "center",
    backgroundColor: "var(--pattens-blue)",
    display: "flex!important",
    flexDirection: "column",
    marginLeft: "162px",
    minHeight: "1196px",
    padding: "44px 20px",
    width: "438px!important",
  },
  overlapGroup2 : {
    height: "92px",
    marginRight: "32.0px",
    position: "relative",
    width: "366px",
  },
  dmserifdisplayNormalTuatara18px : {
    color: "var(--tuatara)",
    fontFamily: "var(--font-family-dm_serif_display)!important",
    fontSize: "var(--font-size-xxl)!important",
    fontStyle: "normal",
    fontWeight: "400!important",
  },
  droidsansBoldCerulean8px : {
    color: "var(--cerulean)",
    fontFamily: "var(--font-family-droid_sans-bold)c",
    fontSize: "var(--font-size-s)!important",
    fontStyle: "normal",
    fontWeight: "700!important",
  },
  Top: {
    color:" var(--chicago)",
    fontFamily:"var(--font-family-dm_sans)!important",
    fontSize: "var(--font-size-m)!important",
    fontStyle: "normal",
    fontWeight: 400,
    height: "102px",
    letterSpacing: "0!important",
    width: "173px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  marginTop : {
    marginTop: "10px!important",
  },
  exampleCases : {
    alignSelf: "flex-start",
    height: 19,
    letterSpacing: 0,
    marginLeft: 1,
    marginTop: 22,
    width: 366,
  },
  a : {
    color: "var(--tuatara)",
    fontFamily: "var(--font-family-dm_serif_display)",
    fontSize: "var(--font-size-xxl)!important",
    fontStyle: "normal",
    fontWeight: "400",
  },
  DroidsansRegularNormalMountainMist8px : {
    color: "var(--mountain-mist)",
    fontFamily: "var(--font-family-droid_sans-regular)!important",
    fontSize: "var(--font-size-s)!important",
    fontStyle: "normal",
    fontWeight: "400",
    height: "13px",
    marginLeft: "3px",
    position: "relative",
    width: '187px',
  },
  DroidsansRegularNormalMountainMist8pxText : {
    color: "var(--mountain-mist)",
    fontFamily: "var(--font-family-droid_sans-regular)!important",
    fontSize: "var(--font-size-s)!important",
    fontStyle: "normal",
    fontWeight: "400",
  },
  dmsansNormalChicago9pxTop : {
    color: "var(--chicago)",
    fontFamily: "var(--font-family-dm_sans)",
    fontSize: "var(--font-size-m)",
    fontStyle: "normal",
    fontWeight: "400!important",
    lineHeight: "normal"
  },
  dmsansBoldBlack9px : {
    color: "var(--black)",
    fontFamily: "var(--font-family-dm_sans)!important",
    fontSize: "var(--font-size-m)!important",
    fontStyle: "normal!important",
    fontWeight: "700!important"
  },
  dmserifdisplayNormalBlack14pxText : {
    color: "var(--black)",
    fontFamily: "var(--font-family-dm_serif_display)!important",
    fontSize: "var(--font-size-xl)",
    fontStyle: "normal",
    fontWeight: "400",
  },
  droidsansRegularNormalGray11px : {
    color: "var(--gray)",
    fontFamily: "var(--font-family-droid_sans-regular)!important",
    fontSize: "var(--font-size-l)!important",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "normal"
  },
  dmserifdisplayNormalBlack14px : {
    color: "var(--black)",
    fontFamily: "var(--font-family-dm_serif_display)!important",
    fontSize: "var(--font-size-xl)!important",
    fontStyle: "normal",
    fontWeight: "400",
    alignSelf: "flex-start",
    height: "19px",
    letterSpacing: 0,
    marginLeft: "1px",
    marginBottom: "15px!important",
    width: 366,
  },
  line8: {
    marginTop: 20,
    marginBottom: 30,
    width: 367,
  },
  exampleImage : {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  rectangle4 : {
    backgroundColor: "var(--mist-gray)",
    height: 102,
    width: 146,
  },
  horizontal : {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center"
  },
  graphTabs : {
    alignItems: "flex-start",
    display: "flex",
    height: 13,
    left: 0,
    minWidth: 299,
    position: "absolute",
    top: 79,
  },
  whatCanWeHelpYouWith : {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    height: 91,
    left: 0,
    letterSpacing: 0,
    position: "absolute",
    top: 0,
    width: 366,
    color: "var(--tuatara)",
    fontFamily: "var(--font-family-dm_serif_display)",
    fontSize: "var(--font-size-xxl)",
    fontStyle: "normal",
    fontWeight: "400",

  },
  productRequirements : {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    height: 13,
    letterSpacing: 0,
    width: 103,
    color: "var(--tuatara)",
    fontFamily: "var(--font-family-dm_serif_display)!important",
    fontSize: "var(--font-size-xxl)!important",
    fontStyle: "normal!important",
    fontWeight: "400!important",

  },
  apiIntegration : {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    height: 13,
    left: 78,
    letterSpacing: 0,
    position: "absolute",
    top: 0,
    width: 109,
  },
  abrEdgeCases : {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    height: 13,
    left: 0,
    letterSpacing: 0,
    position: "absolute",
    top: 0,
    width: 115,
  },
  understandingCompany : {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    height: 19,
    letterSpacing: 0,
    marginRight: 32.0,
    marginTop: 19,
    width: 366,
    color: "var(--black)",
    fontFamily: "var(--font-family-dm_serif_display)",
    fontSize: "var(--font-size-xl)",
    fontStyle: "normal",
    fontWeight: 400,
  },
  companysAutomated : {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    height: 24,
    letterSpacing: 0,
    marginRight: 32.0,
    marginTop: 12,
    width: 366,
    color: "var(--gray)",
    fontFamily: "var(--font-family-droid_sans-regular)",
    fontSize: "var(--font-size-l)",
    fontStyle: "normal",
    fontWeight: 400,
  },
  resolutionTheDent : {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    height: 182,
    letterSpacing: 0,
    marginRight: 32.0,
    marginTop: 20,
    width: 366,
    color: "var(--chicago)",
    fontFamily: "var(--font-family-dm_sans)",
    fontSize: "var(--font-size-m)",
    fontStyle: "normal",
    fontWeight: 400,
  }

}));


function TroubleshootProductRequirements(props) {
  const classes = useStyles();

  return (
    <Container>
      <Grid container spacing={2}>
        <Grid className={classes.containerCenterHorizontal} container rowSpacing={2}>
          <Grid className={classes.troubleshootProductRequirements} container rowSpacing={2}>
            <Grid className={classes.overlapGroup1} container rowSpacing={2}>
              <div className={classes.overlapGroup2}>
                <div className={classes.whatCanWeHelpYouWith}>
                    <Typography className={classes.dmserifdisplayNormalTuatara18px}>What can we help you with?</Typography>
                </div>
                <div className={classes.graphTabs}>
                  <div className={classes.productRequirements}>
                      <Typography className={classes.droidsansBoldCerulean8px}>Product Requirements</Typography>
                  </div>
                  <div className={classes.DroidsansRegularNormalMountainMist8px}>
                    <div className={classes.apiIntegration}>
                        <Typography className={classes.DroidsansRegularNormalMountainMist8pxText}>API Integration</Typography>
                    </div>
                    <div className={classes.abrEdgeCases}>
                      <Typography className={classes.DroidsansRegularNormalMountainMist8pxText}>ABR Edge Cases</Typography>
                    </div>
                  </div>
                </div>
              </div>
              <div className={classes.understandingCompany}>
                  <Typography className={classes.dmserifdisplayNormalBlack14pxText}>Understanding Company product requirements</Typography>
              </div>
              <p className={classes.companysAutomated}>
                  <Typography className={classes.droidsansRegularNormalGray11px}>Company’s automated product generates a list of xyz coordinates for trimming retainers and aligners.</Typography>
              </p>
              <p className={classes.resolutionTheDent}>
                <span>
                  <span className={classes.dmsansBoldBlack9px}>Resolution: </span>
                  <span className={classes.dmsansNormalChicago9pxTop}><>The dental arch should have at minimum 100k triangles or be around 5MB for an STL file. Meshes with less resolution will yield results that are not as smooth.<br /><br /></></span>
                  <span className={classes.dmsansBoldBlack9px}>Orientation: </span>
                  <span className={classes.dmsansNormalChicago9pxTop}><>The arch can be in any orientation. The output will be created in reference to the orientation of the input arch unless the user optionally selects to use Company’s automated trim &amp; base afterward which can align the base to z=0 for immediate 3D printing.<br /><br /></></span>
                  <span className={classes.dmsansBoldBlack9px}>Quality: </span>
                  <span className={classes.dmsansNormalChicago9pxTop}>The arch should not have excess or large artifacts and also should not contain significant occlusions (see below). Arches that have brackets with wires have unreliable performance, however arches brackets and no wires are acceptable input, and can optionally be removed using Company’s automated bracket removal product. Arches with small holes and normal artifacts will still yield a good quality trimline. Base: We are unable to process pre-based models.</span>
                </span>
              </p>
              <Grid container rowSpacing={2}>
                <img className={classes.line8} src="/img/line-8-2@2x.png" />
              </Grid>
              <Grid container rowSpacing={1}>
                <Typography align="left" className={classes.dmserifdisplayNormalBlack14px}>Example cases</Typography>
              </Grid>
              <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid className={classes.exampleImage} item xs={6}>
                  <img src={stockPhoto} className={classes.rectangle4} />
                </Grid>
                <Grid style={{padding: 0}} item xs={6}>
                    <Typography className={classes.Top}>This arch is a good input example. It has enough gum area to trim from, teeth are well defined, no excess artifacts.</Typography>
                </Grid>
              </Grid>
              <Grid className={classes.marginTop} container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid className={classes.exampleImage} item xs={6}>
                  <img src={stockPhoto} className={classes.rectangle4} />
                </Grid>
                <Grid style={{padding: 0}} item xs={6}>
                <Grid style={{padding: 0}} item xs={6}></Grid>
                    <Typography className={classes.Top}>This arch is also an example that would work well for trim base.</Typography>
                </Grid>
              </Grid>
              <Grid className={classes.marginTop} container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid className={classes.exampleImage} item xs={6}>
                  <img src={stockPhoto} className={classes.rectangle4} />
                </Grid>
                <Grid style={{padding: 0}} item xs={6}>
                <Grid style={{padding: 0}} item xs={6}></Grid>
                    <Typography className={classes.Top}>This is an example of an arch with excess artifacts. Especially when the artifacts intersect the desired trimline, we cannot consistently create a valid output for these types of input.</Typography>
                </Grid>
              </Grid>
              <Grid className={classes.marginTop} container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid className={classes.exampleImage} item xs={6}>
                  <img src={stockPhoto} className={classes.rectangle4} />
                </Grid>
                <Grid style={{padding: 0}} item xs={6}>
                <Grid style={{padding: 0}} item xs={6}></Grid>
                  <Typography className={classes.Top}>Since this has a hollow base, we currently cannot generate a trimline for these, but we’re working on adding support for this.</Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

export default TroubleshootProductRequirements;