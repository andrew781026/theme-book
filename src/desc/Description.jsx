import React from "react";
import styled from "styled-components";
import ReactMarkdown from 'react-markdown';
import modeMD from './mode.md';
import varMD from './var.md';
import themeMD from './theme.md';
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import {prism} from 'react-syntax-highlighter/dist/esm/styles/prism'
import {withRouter} from "react-router";

const Info = styled.span`
  line-height: 40px;
  font-size: 32px;
  font-family: monospace;
  margin-left: -8px;
`

const RootDescription = styled.div`
  position: fixed;
  right: 0;
  bottom: 0;
  margin: 30px;
  padding: 0 20px;
  background-color: #fff;
  max-width: 80vw;
  width: ${props => props.show ? '500px' : '30px'};
  height: ${props => props.show ? '90vh' : '40px'};
  cursor: ${props => props.show ? 'default' : 'pointer'};
  overflow: ${props => props.show ? 'auto' : 'hidden'};
  border-radius: ${props => props.show ? '10px' : '50%'};
  box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.2);
  transition: all 0.3s;


  /* Scrollbar styles */

  &::-webkit-scrollbar {
    width: 16px;
    height: 16px;
  }

  &::-webkit-scrollbar-track {
    background: #f5f5f5;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
    border: 4px solid rgba(0, 0, 0, 0);
    border-radius: 10px;
    background: #ccc;
    background-clip: content-box;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #999;
  }
`

class Description extends React.PureComponent {
  state = {text: '', show: true}

  getRelatedMD = (pathname) => {
    if (/mode/i.test(pathname)) return modeMD;
    else if (/theme/i.test(pathname)) return themeMD;
    else if (/var/i.test(pathname)) return varMD;
    else return modeMD;
  }

  toggleShow = () => {
    this.setState(state => ({...state, show: !state.show}))
  }

  handleText = () => {
    const {location} = this.props;
    const markdown = this.getRelatedMD(location.pathname);
    fetch(markdown)
      .then((response) => response.text())
      .then((text) => this.setState({text}))
  }

  render() {
    this.handleText();
    return (
      <RootDescription
        show={this.state.show}
        title={this.state.show ? '' : '描述'}
        onClick={this.toggleShow}
      >
        {
          this.state.show ?
            (
              <ReactMarkdown
                children={this.state.text}
                components={{
                  code({node, inline, className, children, ...props}) {
                    const match = /language-(\w+)/.exec(className || '')
                    return !inline && match ? (
                      <SyntaxHighlighter
                        children={String(children).replace(/\n$/, '')}
                        style={prism}
                        language={match[1]}
                        PreTag="div"
                        {...props}
                      />
                    ) : (
                      <code className={className} {...props}>
                        {children}
                      </code>
                    )
                  }
                }}
              />
            ) : (
              <Info>i</Info>
            )
        }

      </RootDescription>
    )
  }
}

export default withRouter(Description);
