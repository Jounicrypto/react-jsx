import React from 'react'

function TeamMember(props) {
  return (
    <div className='col-md-4 col-sm-6 border'>
        <div className='card'>
            <div className='card-header'>
            <img style={{maxWidth : "100%"}} src={props.img} alt=''/>
            </div>
            <div className='card-body' 
                  style={{backgroundColor:props.occupation ? "white" : "black"}}>
            <h2>{props.name}</h2>
            <h5>Birthday: {props.birthday}</h5>
            <h5>Profession: {props.occupation}</h5>
            <h5>{props.status}</h5>
            <h5>Nickname: {props.nickname}</h5>
            <h5>{props.portrayed}</h5>
            <h5>Category: {props.category}</h5>
            </div>
        </div>
    </div>
  )
}

export default TeamMember
