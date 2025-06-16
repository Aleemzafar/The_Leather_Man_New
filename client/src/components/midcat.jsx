import React from 'react'
import {Link} from "react-router-dom";
export default function midcat() {
  return (
    <div className="midcat">
    <div className="leftboxcat" style={{backgroundImage: "url('../public/images/midcat1.png')"}}>
        <Link  to="/category1">Men Jacket's</Link>
    </div>
    <div className="rightboxcat" style={{backgroundImage: "url('../public/images/midcat2.png')"}}>
        <Link to="/category2">Men Coat's</Link>
    </div>
</div>
  )
}
