import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'



const Navbar = () => {
  const Wrapper =styled.section`
  .nav-list {
    display:flex;
    gap:3rem;

    li{
      list-style:none;

      .nav-link{
        &:link,
        &:visited{
          text-decoration:none;
          color:${({theme}) =>theme.colors.black};
          text-transform:uppercase;
          font-size:1.8rem;
          transition:color 3s linear;
        }
        &:hover,
        &:active {
          color: #8490ff;
        }
      }
    }
  }
 
  `
  return (
    <Wrapper>
      <ul className='nav-list'>
      <li>
        <NavLink 
        className='nav-link'
        to="/">Home</NavLink>
      </li>
      <li>
        <NavLink 
        className='nav-link'
        to="/about">About</NavLink>
      </li>
      <li>
        <NavLink 
        className='nav-link'
        to="/service">Service</NavLink>
      </li>
      <li>
        <NavLink 
        className='nav-link'
        to="/contact">Contact</NavLink>
      </li>
      </ul>
    </Wrapper>
  )
}

export default Navbar
