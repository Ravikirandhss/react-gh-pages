import React from 'react';
import icon from './data/icon.jpeg';
import data from './data.json';
import facebook from './data/facebook-icon.png';
import twitter from './data/twitter-icon.png';
import github from './data/github-icon.png';
import linkedin from './data/linkedin-icon.png';
import './Bootstrap/css/bootstrap.min.css';
import './App.css';
import {Route,Switch,Link, BrowserRouter} from 'react-router-dom';
import Profile from './Profile';
function App() {
  return (
    <BrowserRouter>
    <Switch>
    <Route  exact path='/' component={Main}></Route>
    <Route path='/profile' component={Profile}></Route>
    </Switch>
    </BrowserRouter>
  )
}
let Main=()=>
{
  let profiles=data.profile;
  const Linkstyle={
    padding: "1.5%",
    border: "1px solid darkblue",
    background: "beige",
    color:"#1191fc",
  fontSize: "98%",
  textDecoration:"None"
  }
  return(
    <div className="parent row justify-content-center bg-primary">
      {profiles.map((value,index)=>(
        
        <div className="child col-lg-4 col-md-4 col-sm-10 mt-1" key={index}>
          <div className="subchild card">
            <div className="content card-body text-center text-primary">
              <img src={icon} alt="" style={{width:"30%",height:"30%"}}/>
              <hr/>
              <h4>{value.name}</h4>
              <h5>{value.designation}</h5>
              <h6>{value.phone}</h6>
              <h6>{value.email}</h6>
              <hr/>
               <div className="row anchor justify-content-center">
                <a href={value.hyperlinks.facebook} target="_blank">
                  <img src={facebook} alt="" className="float-right" 
                  style={{width:"60%",
                  height:"95%",
                    borderRadius: "5%"
                  }}/>
                  </a>
                <a href={value.hyperlinks.twitter} target="_blank">
                  <img src={twitter} className="float-right" alt="" 
                  style={{ width: "60%", 
                  height: "95%",
                    borderRadius: "5%"
                  }}/>
                  </a>
                <a href={value.hyperlinks.github} target="_blank">
                  <img src={github} className="float-right" alt=""
                   style={{ width: "60%" ,
                    height: "95%", 
                    borderRadius:"5%"
                    }}/>
                    </a>
                <a href={value.hyperlinks.linkedin} target="_blank">
                  <img src={linkedin} className="float-right" alt="" 
                  style={{ width: "60%",
                   height: "95%",
                    borderRadius: "5%"
                   }}/>
                   </a>
              </div> 
              <div className='button'>
                <Link to={{pathname:'/profile',data:{id:index}}} style={Linkstyle}>View Profile</Link>
              </div>
              
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
export default App;

