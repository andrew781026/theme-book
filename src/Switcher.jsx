import styled from "styled-components";

const Tab = styled.div`
  user-select: none;
  cursor: pointer;
  border-radius: 0 20px 20px 0;
  position: relative;
  left: -30px;
  transition: all .3s;
  box-shadow: 2px 0 5px 1px rgba(0, 0, 0, 0.2);
  height: 100px;
  width: 200px;
  background: ${({
                   start = '#fff',
                   end = '#fff'
                 }) => `linear-gradient(-60deg, ${start},${start} 49.9999%,${end} 50%, ${end})`};
  line-height: 100px;
  text-align: center;
  font-size: 32px;
  font-weight: 900;

  &:hover {
    left: 0;
  }
`

const RootSwitcher = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  display: flex;
  gap: 20px;
  flex-direction: column;
  justify-content: center;
`

export default function Switcher({setType}) {

  return (
    <RootSwitcher>
      <Tab onClick={() => setType('mode')}>Mode</Tab>
      <Tab onClick={() => setType('theme')}>Theme</Tab>
      <Tab onClick={() => setType('var')}>Var</Tab>
    </RootSwitcher>
  )
}
