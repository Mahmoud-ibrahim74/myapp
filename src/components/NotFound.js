import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import './NotFound.css';
import { alertMe } from '../App';
const NotFound = () => {
  const alertMessage = useContext(alertMe);
  return (

    <div id='oopss'>
       <div id='error-text'>
        <img src="https://cdn.rawgit.com/ahmedhosna95/upload/1731955f/sad404.svg" alt="404" />
        <span>{alertMessage}</span>
        <p class="p-a">
          . The page you were looking for could not be found</p>
        <p class="p-b">
          ... Back to previous page
        </p>
        <a href="/" class="back">... Back to previous page</a>
        <Link to="/"></Link>  {/* this component at the same <a> above*/}
      </div>
    </div>
  )
}

export default NotFound