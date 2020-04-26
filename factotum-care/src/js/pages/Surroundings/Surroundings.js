import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import MainFeaturedPost from "./MainFeaturedPost";
import FeaturedPost from "./FeaturedPost";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
  mainPage: {
    margin: theme.spacing(5),
  },
}));

const mainFeaturedPost = {
  title: "Manage your surroundings",
  image: "./meditation.png",
  description: "Tips on maintaining physical and mental health",
};

const doSomeYoga = {
  title: "Do Some Yoga",
};

const featuredPosts = [
  {
    title: "Find the best spot",
    // url: 'https://www.webmd.com/balance/stress-management/stress-relief-breathing-techniques#1',
    description:
      "Find the best spot and stick with it. " +
      "It's important to have a constant work environment; " +
      "this eliminates the interruptions and helps our mind focus on the work." +
      "Ideally you will find a spot away from your bed and television, " +
      "and you'll be surrounded by plants.",
    image: "./physical_1.jpg",
    imageText: "Plants",
  },
  {
    title: "Kids and harmony",
    url: "https://scratch.mit.edu/",
    description:
      "You might be working in a house full of kids. " +
      "This can seem very challenging, but keep calm, we got your back! " +
      "You can make a schedule with your kids, with some tasks prepared for them " +
      "and often breaks together with you. Example of some tasks would be to use some" +
      "online educational platforms (like Scratch) to build a game. If you do small" +
      " breaks together it's more likely they will follow and you will all 'work' in harmony.",
    image: "./kids.png",
    imageText: "Kids",
  },
  {
    title: "(Work) Partners",
    // url: "https://scratch.mit.edu/",
    description:
      "Do you and your partner have to work both from home?" +
      "Here are some tips you could follow. Decide together what time " +
      "you will start and finish work, so that you can arrange your meetings easier" +
      "and have lunch breaks together, away from your laptop's screen.",
    image: "./couple.png",
    imageText: "Couple",
  },
];

export default function MentalHealth() {
  const classes = useStyles();

  return (
    <Fragment>
      <Navigation />
      <CssBaseline />
      <Container maxWidth="lg" className={classes.mainPage}>
        <main>
          <MainFeaturedPost post={mainFeaturedPost} />
          <Grid container justify={"space-evenly"} spacing={3}>
            {featuredPosts.map((post) => (
              <FeaturedPost key={post.title} post={post} />
            ))}
          </Grid>
        </main>
      </Container>
      <Footer />
    </Fragment>
  );
}
