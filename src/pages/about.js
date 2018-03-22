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
  margin-right: 15%;
  border-radius: 20px;
`;

  const LinkReference = styled.a`
    margin-right: 5%;
    background-color:  #8BCBFF;
    color: #FAFAFA;
    padding: 5px;
    padding-left: 3em;
    padding-right: 3em;
    border-radius: 5px;
    text-decoration: none;
  `

  const Wrapper = styled.div`
    margin-top: 10%;
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
      <Wrapper>
        <Picture src={ProfilePic} alt="Profile Picture" />
        <H1>Hi! I'm Jyri,</H1>
        <Paragraph>
          a UX enhusiast with a passion for code. What I can't do I will learn. Let's build something amazing together.
        </Paragraph>
        <Paragraph>
          Hire me today!
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

      </Wrapper>
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
