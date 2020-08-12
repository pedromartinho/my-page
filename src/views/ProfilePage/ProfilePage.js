import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// import Nomad from "assets/img/icons/nomad.svg";
import { ReactComponent as Nomad } from "assets/img/icons/nomad.svg";
import { ReactComponent as Tribrs } from "assets/img/icons/tribrs.svg";
import { ReactComponent as Muvsy } from "assets/img/icons/muvsy.svg";
import Camera from "@material-ui/icons/Camera";
import Palette from "@material-ui/icons/Palette";
import Favorite from "@material-ui/icons/Favorite";

import { SvgIcon } from "@material-ui/core";
// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import Button from "components/CustomButtons/Button.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import NavPills from "components/NavPills/NavPills.js";
import Parallax from "components/Parallax/Parallax.js";

import profile from "assets/img/me.jpg";

import nomad_mob1 from "assets/img/nomad/nomad_mobile1.jpeg";
import nomad_mob2 from "assets/img/nomad/nomad_mobile2.jpeg";
import nomad1 from "assets/img/nomad/nomad1.jpeg";
import nomad2 from "assets/img/nomad/nomad2.jpeg";
import nomad3 from "assets/img/nomad/nomad3.jpeg";
import nomad4 from "assets/img/nomad/nomad4.jpeg";

import tribrs_mob1 from "assets/img/tribrs/tribrs_mobile1.jpeg";
import tribrs_mob2 from "assets/img/tribrs/tribrs_mobile2.jpeg";
import tribrs1 from "assets/img/tribrs/tribrs1.jpeg";
import tribrs2 from "assets/img/tribrs/tribrs2.jpeg";
import tribrs3 from "assets/img/tribrs/tribrs3.jpeg";

import muvsy_mob1 from "assets/img/muvsy/muvsy_mobile1.jpeg";
import muvsy_mob2 from "assets/img/muvsy/muvsy_mobile2.jpeg";
import muvsy1 from "assets/img/muvsy/muvsy1.jpeg";
import muvsy2 from "assets/img/muvsy/muvsy2.jpeg";
import muvsy3 from "assets/img/muvsy/muvsy3.jpeg";

import studio1 from "assets/img/examples/studio-1.jpg";
import studio2 from "assets/img/examples/studio-2.jpg";
import studio3 from "assets/img/examples/studio-3.jpg";
import studio4 from "assets/img/examples/studio-4.jpg";
import studio5 from "assets/img/examples/studio-5.jpg";
import work1 from "assets/img/examples/olu-eletu.jpg";
import work2 from "assets/img/examples/clem-onojeghuo.jpg";
import work3 from "assets/img/examples/cynthia-del-rio.jpg";
import work4 from "assets/img/examples/mariya-georgieva.jpg";
import work5 from "assets/img/examples/clem-onojegaw.jpg";

import styles from "assets/jss/material-kit-react/views/profilePage.js";

const useStyles = makeStyles(styles);

export default function ProfilePage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  const navImageClasses = classNames(
    classes.imgRounded,
    classes.imgGallery,
    classes.imgRaised
  );

  const NomadIcon = () => (
    <SvgIcon>
      <Nomad />
    </SvgIcon>
  );

  const TribrsIcon = () => (
    <SvgIcon>
      <Tribrs />
    </SvgIcon>
  );

  const MuvsyIcon = () => (
    <SvgIcon>
      <Muvsy />
    </SvgIcon>
  );
  console.log(NomadIcon);
  return (
    <div>
      <Header
        color="transparent"
        brand="Let's Tech!"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 200,
          color: "white",
        }}
        {...rest}
      />
      <Parallax small filter image={require("assets/img/coffee-min.jpg")} />
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div>
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={6}>
                <div className={classes.profile}>
                  <div>
                    <img src={profile} alt="..." className={imageClasses} />
                  </div>
                  <div className={classes.name}>
                    <h3 className={classes.title}>Pedro Martinho</h3>
                    <h6>SOFTWARE ENGINEER</h6>
                    <Button justIcon link className={classes.margin5}>
                      <i className={"fab fa-github"} />
                    </Button>
                    <Button justIcon link className={classes.margin5}>
                      <i className={"fab fa-linkedin"} />
                    </Button>
                  </div>
                </div>
              </GridItem>
            </GridContainer>
            <div className={classes.description}>
              <p>
                <b>Learn and grow with the best!</b>
                <br />
                &nbsp;
                <br />
                The experience with Uniplaces, gave me the chance to meet young
                entrepreneurs and made me one of them. I like building new
                things and turn ideas into projects. That’s why I’ve always been
                connected to early stage projects.
                <br /> Nevertheless, I want to grow more and be part of a new
                team with people with great knowledge and experience to share,
                so I can learn and be better at what I do.{" "}
              </p>
            </div>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={8} className={classes.navWrapper}>
                <NavPills
                  alignCenter
                  color="grey"
                  tabs={[
                    {
                      tabButton: "Nomad",
                      tabIcon: NomadIcon,
                      tabContent: (
                        <GridContainer justify="center">
                          <GridItem xs={12} sm={12} md={4}>
                            <img
                              alt="..."
                              src={nomad1}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={nomad_mob1}
                              className={navImageClasses}
                            />
                          </GridItem>
                          <GridItem xs={12} sm={12} md={4}>
                            <img
                              alt="..."
                              src={nomad_mob2}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={nomad2}
                              className={navImageClasses}
                            />
                          </GridItem>
                          <GridItem xs={12} sm={12} md={4}>
                            <img
                              alt="..."
                              src={nomad3}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={nomad4}
                              className={navImageClasses}
                            />
                          </GridItem>
                        </GridContainer>
                      ),
                    },
                    {
                      tabButton: "Tribrs",
                      tabIcon: TribrsIcon,
                      tabContent: (
                        <GridContainer justify="center">
                          <GridItem xs={12} sm={12} md={4}>
                            <img
                              alt="..."
                              src={tribrs1}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={tribrs_mob1}
                              className={navImageClasses}
                            />
                          </GridItem>
                          <GridItem xs={12} sm={12} md={4}>
                            <img
                              alt="..."
                              src={tribrs_mob2}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={tribrs2}
                              className={navImageClasses}
                            />
                          </GridItem>
                          <GridItem xs={12} sm={12} md={4}>
                            <img
                              alt="..."
                              src={tribrs3}
                              className={navImageClasses}
                            />
                          </GridItem>
                        </GridContainer>
                      ),
                    },
                    {
                      tabButton: "Muvsy",
                      tabIcon: MuvsyIcon,
                      tabContent: (
                        <GridContainer justify="center">
                          <GridItem xs={12} sm={12} md={4}>
                            <img
                              alt="..."
                              src={muvsy1}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={muvsy_mob1}
                              className={navImageClasses}
                            />
                          </GridItem>
                          <GridItem xs={12} sm={12} md={4}>
                            <img
                              alt="..."
                              src={muvsy_mob2}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={muvsy2}
                              className={navImageClasses}
                            />
                          </GridItem>
                          <GridItem xs={12} sm={12} md={4}>
                            <img
                              alt="..."
                              src={muvsy3}
                              className={navImageClasses}
                            />
                          </GridItem>
                        </GridContainer>
                      ),
                    },
                  ]}
                />
              </GridItem>
            </GridContainer>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
