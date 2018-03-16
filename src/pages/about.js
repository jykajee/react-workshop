import React from "react";
import autoBind from "react-autobind";
import Link from "gatsby-link";
import styled from "styled-components";
import Popup from "../components/Popup";
import Button from "../components/Button";
import H1 from "../components/H1";
import ProfilePic from "../assets/profile_pic.jpg";

const Paragraph = styled.p`
  margin-bottom: 1rem;
  line-height: 150%;
  font-size: 18px;
`;

const Picture = styled.img`
  width: 200px;
  float: right;
  margin-right: 20%;
  border-radius: 20px;
`;

  const LinkReference = styled.a`
    margin-right: 5%;
    background-color: #FF8A65;
    padding: 5px;
    border-radius: 5px;
    text-decoration: none;
  `

export default class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isPopupOpen: false
    };
    autoBind(this);
  }

  onTogglePopup() {
    this.setState(oldState => {
      return {
        isPopupOpen: !oldState.isPopupOpen
      };
    });
  }



  render() {
    return (
      <div>
        <Picture src={ProfilePic} alt="Profile Picture" />
        <H1>Hi! I'm Jyri</H1>
        <Paragraph>
          I'm UX specialist with a passion for code. What I can't do I will learn. Hire me today.
        </Paragraph>
        <Paragraph>
          jyri247@gmail.com
        </Paragraph>
        <LinkReference href="https://www.linkedin.com/in/jyri-makinen/" target="_blank">
          LinkedIn
        </LinkReference>
        <LinkReference href="https://github.com/jykajee" target="_blank">
          Github
        </LinkReference>

      </div>
    );
  }
}
/* Example popup implementation
        <Button onClick={this.onTogglePopup}>Open popup</Button>

        {this.state.isPopupOpen && <Popup onClose={this.onTogglePopup} />}
*/

export const query = graphql`
  query AboutQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
