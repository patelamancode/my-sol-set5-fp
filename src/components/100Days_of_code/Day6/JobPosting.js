import React, {useState, useEffect} from 'react'


const jobs = [
    {company:'google', title:'developer1', location:'Noida', salary: 80000, jobtype:'full-time'},
    {company:'amazon', title:'developer2', location:'Kolkata', salary: 70000, jobtype:'part-time'},
    {company:'tcs', title:'developer3', location:'Pune', salary: 60000, jobtype:'full-time'},
    {company:'facebook', title:'developer4', location:'Noida', salary: 50000, jobtype:'contract'}
]

// jobData.filter(({jobtype})=> jobtype === userCheckedValue.filter(item=>) )

const DisplayJobs = ({jobData, userChecked, userCheckedValue}) =>{
    const [returnedData, setReturnedData] = useState([...jobData]);
   
        useEffect(()=> {
            if(userCheckedValue.length > 0){
                const filtered = jobData.filter((obj) => userCheckedValue.includes(obj.jobtype))
                setReturnedData([...filtered])
            } else setReturnedData([...jobData])

        },[userCheckedValue])
  
        
        console.log(returnedData)   

    return(
        <div>
            {returnedData.map(({company,title,location,salary}) =>
            <div key={company} 
             style={{
              border:'solid 2px black',
              display:'inline-block',
              margin:'5px',
              padding:'10px',
              }}>
                <p>{company}</p>
                <p>{title}</p>
                <p>{location}</p>
                <p>Rs.{salary}/month</p>
            </div>)}
        </div>
    )
}


const JobPosting = () => {
    const [checkedBoxValue, setCheckedBoxValue] = useState([]);
    const [isChecked, setIsChecked] = useState(false)

    const checkboxHandler = (e) =>{
        if(e.target.checked){
            setIsChecked(true)
            setCheckedBoxValue([...checkedBoxValue,e.target.value])
        }else {
            if(!e.target.checked){
                console.log('unchecked');
                const updatedValue = [...checkedBoxValue]
                setCheckedBoxValue(updatedValue.filter(item => (item !== e.target.value)))
            }
        }
        // setCheckedBoxValue([...checkedBoxValue,e.target.value])
    }
    // console.log(checkedBox);

  return (
    <div>
      <h2>Job Posting App</h2>
      <div>
        <input type='checkbox' value='part-time' onChange={checkboxHandler}/>
        <label htmlFor='part-time'>Part time</label>
      </div>
      <div>
        <input type='checkbox' value='full-time' onChange={checkboxHandler}/>
        <label htmlFor='full-time'>Full time</label>
      </div>
      <div>
        <input type='checkbox' value='contract' onChange={checkboxHandler}/>
        <label htmlFor='contract'>Contract</label>
      </div>
      <DisplayJobs jobData={jobs} userChecked={isChecked} userCheckedValue={checkedBoxValue}/>
    </div>
  )
}

export default JobPosting
