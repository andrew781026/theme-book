# CSS VAR

- css var
- var(--cardBgc)

### In App.jsx
use `document.documentElement.style.setProperty` change css-var

```javascript
const spyTheme = {
  cardBgc: '#585858',
  ...
};
const doctorTheme = {
  cardBgc: '#fff',
  ...
};
```

```html
<App toggleMode={this.setVarProperty}/>
```

### In Card.jsx
use `var(--XXX)` set `background-color`

```javascript
const Card = styled.div`
  ...
  background-color: var(--cardBgc);
`;
```
