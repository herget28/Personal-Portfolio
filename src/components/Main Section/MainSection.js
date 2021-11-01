import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./MainSectionStyle";

const MainSection = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hi, I am Hermela.
        <br />
        <br />
        Welcome To <br />
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
        I am a Software Engineer | Open to New Opportunities!
      </SectionText>
      <Button
        onClick={() =>
          (window.location =
            "file:///C:/Users/lenovo/Downloads/Documents/Hermela%20CV.pdf")
        }
      >
        Download CV
      </Button>
    </LeftSection>
  </Section>
);

export default MainSection;
