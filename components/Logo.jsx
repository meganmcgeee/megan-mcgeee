import React from 'react';

const Logo = React.createClass({
  render() {
    return (
      <div className="container" style={{marginLeft: "2%"}}>
        <div className="row" style={{margin: "2%"}}>
         <div className="one-half column">
           <div className="one-third column .u-pull-left" style={{marginTop: "15%"}}>
               <img id="logo" src="img/meganpants.png" />
           </div>
         </div>
       </div>
     </div>
    );
 },
});

export default Logo;
