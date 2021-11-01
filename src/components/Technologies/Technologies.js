import React from "react";
import { DiAndroid, DiPython, DiReact } from "react-icons/di";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./TechnologiesStyles";

const Technologies = () => (
  <Section id="tech">
    <SectionDivider />
    <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I have worked on Android/ios development, Web development, and Machine
      learning areas.
    </SectionText>
    <List>
      <ListItem>
        <DiAndroid size="3rem" />
        <ListContainer>
          <ListTitle>Android</ListTitle>
          <ListParagraph>
            Experience With <br />
            java and react-native framework
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiReact size="3rem" />
        <ListContainer>
          <ListTitle>Web</ListTitle>
          <ListParagraph>
            Experience With javascript and <br />
            react.js framework
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiPython size="3rem" />
        <ListContainer>
          <ListTitle>Machine learning in Python</ListTitle>
          <ListParagraph>Experience With Tensor Flow</ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
