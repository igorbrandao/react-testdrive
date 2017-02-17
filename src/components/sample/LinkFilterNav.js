import React from 'react'
import {Link} from '../router'

export const LinkFilterNav = () => (

    <div className="link-filter-nav">
        <Link to="/"> All </Link>
        <Link to="/active"> Active </Link>
        <Link to="/complete"> Complete </Link>
    </div>

);