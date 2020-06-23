import React from 'react';
import icon from './data/icon.jpeg';
import data from './data.json';
import './Bootstrap/css/bootstrap.min.css';
import './App.css';
let Profile=(prop)=>
{
    let info=data.profile[prop.location.data.id];
    return (
        <div className='row justify-content-center'>
            <div className='col-lg-3'>
                <div className='main card shadow'>
                    <div className='left card-body p-2 text-center bg-primary'>
                        <img src={icon} style={{width:"40%",height:"40%"}}/>
                        <hr/>
                        <h1>{info.name}</h1>
                        <h3>{info.designation}</h3>
                        <hr/>
                        <h5>Contact</h5>
                        <br/>
                        <h6>{info.email}</h6>
                        <h6>{info.phone}</h6>
                        <hr/>
                        <h5>Address</h5>
                        <br/>
                        <p>{info.location["City"]}</p>
                        <p>{info.location["state"]}</p>
                        <p>{info.location["country"]}</p>
                        <p>{info.location["Pincode"]}</p>
                        
                    </div>
                </div>
            </div>
            <div className='col-lg-8' style={{fontSize:"75%"}}>
                <div className='main card shadow'>
                    <div className='right card-body p-2 text-primary'>
                        <h5>Objective</h5>
                        <p>{info.Objective}</p>
                        <h5>Education</h5>
                        <table class='table text-primary'>
                            <tr>
                                <th>Institution</th>
                                <th>Education</th>
                                <th>Year</th>
                                <th>Percentage/Grade</th>
                        </tr>
                        {info.education.map((value,key)=>(
                            <tr>
                            {
                                value.map((educationdetails,keyeducation)=>(
                                    <td>{educationdetails}</td>
                                ))
                            }
                            </tr>
                            )
                            )
                        } 
                        </table>
                        <h5>Skills</h5>
                        <ul class='list'>
                        {
                            info.skills.map((value,key)=>(
                            <li>{value}</li>
                            ))
                        }
                        </ul>
                        <h5>Languages</h5>
                        <ol class='list'>
                            {
                                info.language.map((languagevalue, languagekey) => (
                                    <li>{languagevalue}</li>
                                ))
                            }
                        </ol>
                        <h5>Certifications</h5>
                        <ul>
                            {
                                info.certifications.map((certificate,index)=>(
                                     <li>{certificate}</li>
                                ))

                            }
                        </ul>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Profile;