import React from 'react'
import './App.css';

function Header(props) {
  console.log("props",props)
  return(
    <div>
      <h1>{props.title}</h1>
    </div>
  )
}

function Nav(props) {
  const lis = []
  for(let i = 0; i < props.topices.length; i++) {
    let t = props.topices[i]
    lis.push(<li key={t.id}>
    <a id={t.id} href={'/read/'+t.id} onClick={(event)=> {
      event.preventDefault();
      props.onChange(event.target.id)
    }}>{t.title}</a>
    </li>)
  }
  return(
    <ol>
      {lis}
    </ol>
  )
}

function Bottom(props) {
  return(
    <div>
      <h2>{props.title}</h2>
      <p>{props.p}</p>
    </div>
  )
}

function Btn(props) {
  return(
    <div>
      <button onClick={(event) => {
        event.preventDefault();
        props.onChange()
      }}>{props.name}</button>
    </div>
  )
}

function App() {
  const topices = [
    {id: 1, title: 'one'},
    {id: 2, title: 'two'},
    {id: 3, title: 'three'}
  ]
  return(
    <div>
      <Header title="WEB"></Header>
      <Nav onChange={(id)=> {
        alert(id)
      }} topices={topices}></Nav>
      <Bottom title="bot" p="zzzzzzzzzz"></Bottom>
      <Btn onChange={() => {
        alert('wow')
      }} name="button"></Btn>
    </div>
  )
}


export default App;
