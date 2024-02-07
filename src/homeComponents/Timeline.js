import React from 'react'
import '../css/Timeline.css'
import { Link } from 'react-scroll'
const Timeline = () => {
  return (
    <div>
        <div className="main-timeline">
        <div class="history-tl-container">
  <ul class="tl">
   <li class="tl-item" ng-repeat="item in retailer_history">
    
    </li>
    
    
    <Link to='connect' spy={true} smooth={true} offset={50} duration={1000}>  <li class="tl-item" ng-repeat="item in retailer_history"></li> </Link>
    
    <li class="tl-item" ng-repeat="item in retailer_history">
     
      
    </li>

  </ul>

</div>
    
</div>
    </div>
  )
}

export default Timeline