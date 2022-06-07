import React from "react";
import styled from "styled-components";
import ReactMarkdown from 'react-markdown';
import modeMD from './mode.md';
import varMD from './var.md';
import themeMD from './theme.md';
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import {prism} from 'react-syntax-highlighter/dist/esm/styles/prism'
import {withRouter} from "react-router";

const RootDescription = styled.div`
  position: fixed;
  right: 0;
  top: 0;
  bottom: 0;
  margin: 30px;
  padding: 0 20px;
  background-color: #fff;
  border-radius: 10px;
  width: 300px;
  box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.2);
`

class Description extends React.PureComponent {
  state = {text: ''}

  getRelatedMD = (pathname) => {
    if (/mode/i.test(pathname)) return modeMD;
    else if (/theme/i.test(pathname)) return themeMD;
    else if (/var/i.test(pathname)) return varMD;
    else return modeMD;
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
      <RootDescription>
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
      </RootDescription>
    )
  }
}

export default withRouter(Description);
