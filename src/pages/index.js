import MyAccomplishments from "../components/My Accomplishments/MyAccomplishments";
import BgAnimation from "../components/BackgrooundAnimation/BackgroundAnimation";
import MainSection from "../components/Main Section/MainSection";
import Projects from "../components/Projects/Projects";
import Technologies from "../components/Technologies/Technologies";
import AboutMe from "../components/About Me/AboutMe";
import { Layout } from "../layout/Layout";
import { Section } from "../styles/GlobalComponents";

const Home = () => {
  return (
    <Layout>
      <Section grid>
        <MainSection />
        <BgAnimation />
      </Section>
      <Projects />
      <Technologies />
      <AboutMe />
      <MyAccomplishments />
    </Layout>
  );
};

export default Home;
