import React from 'react'
import TeamMember from './TeamMember'


function Team() {
  const info=[
   
  {
    "id":"6",
    "name": "Walter White",
    "birthday": "09-07-1958",
    "occupation": [
        "High School Chemistry Teacher",
        "Meth King Pin"
    ],
    "img": "https://images.amcnetworks.com/amc.com/wp-content/uploads/2015/04/cast_bb_700x1000_walter-white-lg.jpg",
    "status": "Presumed dead",
    "nickname": "Heisenberg",
    "portrayed": "Bryan Cranston",
    "category": "Breaking Bad",
    "better_call_saul_appearance": []
     
},
{ "id":"1",
  "name": "Walter White Jr.",
  "birthday": "07-08-1993",
  "occupation": [
"Teenager"
],
  "img": "https://media1.popsugar-assets.com/files/thumbor/WeLUSvbAMS_GL4iELYAUzu7Bpv0/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2018/01/12/910/n/1922283/fb758e62b5daf3c9_TCDBRBA_EC011/i/RJ-Mitte-Walter-White-Jr.jpg",
  "status": "Alive",
  "nickname": "Flynn",
  "category": "Breaking Bad",

},
{ "id":"2",
  "name": "Marie Schrader",
  "birthday": "Unknown",
  "occupation": [
      "Housewife",
      "Clepto"
  ],
  "img": "https://vignette.wikia.nocookie.net/breakingbad/images/1/10/Season_2_-_Marie.jpg/revision/latest?cb=20120617211645",
  "status": "Alive",
  "nickname": "Marie",
  "category": "Breaking Bad",

},
{ "id":"3",
  "name": "Mike Ehrmantraut",
  "birthday": "Unknown",
  "occupation": [
      "Hitman",
      "Private Investigator",
      "Ex-Cop"
  ],
  "img": "https://images.amcnetworks.com/amc.com/wp-content/uploads/2015/04/cast_bb_700x1000_mike-ehrmantraut-lg.jpg",
  "status": "Deceased",
  "nickname": "Mike",
  "category": "Breaking Bad",

},
{  "id":"4",
  "name": "Saul Goodman",
  "birthday": "Unknown",
  "occupation": [
                  "Lawyer"
  ],
  "img": "https://vignette.wikia.nocookie.net/breakingbad/images/1/16/Saul_Goodman.jpg/revision/latest?cb=20120704065846",
  "status": "Alive",
  "nickname": "Jimmy McGill",
  "category": "Breaking Bad",

},
{  "id":"5",
  "name": "Gustavo Fring",
  "birthday": "Unknown",
  "occupation": [
"Los-Pollos co-Founder",
"Philanthropist",
"Cartel Leader"
],
"img": "https://vignette.wikia.nocookie.net/breakingbad/images/1/1f/BCS_S4_Gustavo_Fring.jpg/revision/latest?cb=20180824195925",
"status": "Deceased",
"nickname": "Gus",
"category": "Breaking Bad",

},
{  "id":"6",
  "name": "Hector Salamanca",
  "birthday": "Unknown",
  "occupation": [
      "Former Senior Cartel Leader"
  ],
  "img": "https://vignette.wikia.nocookie.net/breakingbad/images/b/b4/Hector_BCS.jpg/revision/latest?cb=20170810091606",
  "status": "Deceased",
  "nickname": "Don Hector",
  "category": "Breaking Bad",

},
{ 
  "id":"7",
  "name": "Domingo Molina",
"birthday": "Unknown",
"occupation": [
"Meth Distributor"
],
"img": "https://vignette.wikia.nocookie.net/breakingbad/images/e/e7/Krazy8.png/revision/latest?cb=20130208041554",
"status": "Deceased",
"nickname": "Krazy-8",
"appearance": [
1
],
"portrayed": "Maximino Arciniega",
"category": "Breaking Bad",

}

  ]
    const members = info.map(member =>
            <TeamMember
              key={member.id}
              img={member.img}
              name={member.name}
              nickname={member.nickname}
              birthday={member.birthday}
              status={member.status}
              occupation={member.occupation}
              category={member.category}
              />)
    
  return (
    <div className='row'>
        
        {members}
    </div>
  )
}

export default Team
