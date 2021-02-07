import React from 'react';
import styled from 'styled-components';

const PageFooter = styled.footer`
  box-sizing: border-box;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 16px;
  box-shadow: 0 0 5px 0 rgba(0,0,0,0.2);
  & a {
    font-size: 18px;
    text-decoration: none;
    color: blue;
    &:after {
      content: '';
      width: 0px;
      height: 1px;
      display: block;
      background: blue;
      transition: .3s;
    }
    &:hover:after {
      width: 100%;
    }
  }
`;

const Footer = () => {
  return (
    <PageFooter >
      <p>© 2021 test assignment by Viktor Pokhvalenyi</p>
      <a href="https://www.linkedin.com/in/viktor-pokhvaleny/" target="_blank" rel="noreferrer noopener">LinkedIn</a>
    </PageFooter>
  )
}

export default Footer
