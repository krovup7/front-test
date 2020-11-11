import styled from 'styled-components'

export const Content = styled.div`
  width: 100%;
  background-color: #f8f8fa;
  padding-top:${props=>(props.primary ? "0": "3rem !important" )} ;
  padding-bottom: 3rem !important;
  margin-bottom: 3rem !important;
`
export const Main = styled.div`
  width: 80%;
  margin: 0 auto;
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 8px 8px 8px 8px;
  padding: 1.5rem 3rem 4rem 4rem;
  height:${props=>(props.primary ? "700px": "" )}  ;
  input[type="file"] {
  display: none;
 }
 
`
export const Button = styled.button`
 margin-left: 40px;
 text-decoration: none;
 float: right;
 color: #fff;
 background-color:${props=>(props.primary ? "green": props.add ? "#ffb800": "red" )} ;
 border-color: ${props=>(props.primary ? "green": props.add ? "#ffb800": "red" )} ;
 padding: 0.28em 0.5em;
 line-height: 1.2857em;
 border-radius: 5px;
 box-sizing: border-box;
 border-width: 2px;
 border-style: solid;
 width: 145px;
 text-align: center;
 cursor: pointer;
`

export const Input = styled.input`
 background: #fff;
 border: 2px solid #dbdfe4;
 transition: all 0.2s linear;
 padding: 5px 9px;
 margin: 0;
 border-radius: 4px;
 font-size: 13px;
 height: 15px;
 width: 220px;
`
export const RequiredField = styled.span`
      color: red;
    `
export const Header=styled.div`
    width: 80%;
    margin-left: 7%;
    ul {
      padding: 0;
      margin: 0;
    }
    ul li {
      padding: 0;
      display: inline-block;
      margin: 0;
    }
    ul li a {
      text-decoration: none;
    }
  `
export const Table = styled.table`
    text-align: left;
    width: 100%;
    border-spacing: 0px 30px;
  `
export const TextStyle=styled.th`
    color: #9b9b9b;
    font-weight: normal;
  `

