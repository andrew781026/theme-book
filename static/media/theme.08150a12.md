# Theme

### Use ThemeProvider with state mode

```html
 <ThemeProvider theme={{mode: this.state.mode}}>
    <RootStyle>
      <ModeCard toggleMode={this.toggleMode}/>
    </RootStyle>
  </ThemeProvider>
```

### At each component , we set relate style with `props.theme.mode`

```javascript
const CardWrap = styled.div`
  ...
  background-color: ${(props) => props.theme.mode === "dark" ? "#f7fb8d" : "#f7c81c"};
`;
```
