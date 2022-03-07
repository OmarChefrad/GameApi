import React, { useState } from "react"
import styled from "styled-components"
import { motion } from "framer-motion"
import logo from "../img/logo.svg"
//Redux and Routes
import { fetchSearch } from "../actions/gamesAction"
import { useDispatch } from "react-redux"
import { fadeIn } from "../Animation"

const Nav = () => {
  const dispatch = useDispatch()
  const [textInput, setTextInput] = useState("")

  const inputHandler = (e) => {
    setTextInput(e.target.value)
  }
  const submitSearch = (e) => {
    e.preventDefault()
    dispatch(fetchSearch(textInput))
    setTextInput("")
  }
  const clearSearch = () => {
    dispatch({ type: "CLEAR_SEARCHED" })
  }
  return (
    <StyledNav
      variants={fadeIn}
      initial="hidden"
      animate="show">
      <Logo>
        <img onClick={clearSearch} src={logo} alt="logo" />
        <h1>GAME API</h1>
        <img src={logo} alt="logo" />
      </Logo>
      <form className="search">
        <input value={textInput} onChange={inputHandler} placeholder="Search" />
        <button onClick={submitSearch} type="submit">
          GO
        </button>
      </form>
    </StyledNav>
  )
}

const StyledNav = styled(motion.div)`
  padding: 3rem 5rem;
  padding-bottom:0rem ;
  text-align: center;
  input {
    width: 30%;
    font-size: 15px;
    padding: 0.5rem;
    border-radius: 10px 0px 0px 5px;
    box-shadow: 0px 0px 20px rgba(26, 26, 26, 0.25);
    outline: none;
    border: none;
    font-weight: bold;
    margin-top:2rem
  }
  button {
    font-size: 1.5 rem;
    border: none;
    padding: 0.5rem 2rem;
    cursor: pointer;
    background: #d8d8d8;
    color: #525252;
    border-radius: 0px 5px 10px 0px;
    box-shadow: 0px 0px 30px rgba(31, 30, 30, 0.19);
    outline: none;
    border: none;
    font-weight: bold;
  }
`
const Logo = styled(motion.div)`
  display: flex;
  justify-content: center;
  padding: 0rem 1rem 1rem 1rem;
  cursor: pointer;
  img {
    height: 2rem;
    width: 2rem;
    margin-left: 1rem;
    margin-right: 1rem;
  }
`
export default Nav
