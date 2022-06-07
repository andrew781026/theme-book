# Theme

- styled-component
- theme object

### In App.jsx
Use ThemeProvider with theme object

```javascript
const roseTheme = {
  cardBgc: '#f87de7',
  ...
};
const knifeTheme = {
  cardBgc: '#ff5a5a',
  ...
};
```

```html
 <ThemeProvider theme={(this.state.mode === 'knife') ? knifeTheme : roseTheme}>
    <App toggleMode={this.toggleMode}/>
  </ThemeProvider>
```

### In Card.jsx
use `props.theme.cardBgc` to set `background-color`

```javascript
const Card = styled.div`
  ...
  background-color: ${(props) => props.theme.cardBgc};
`;
```
