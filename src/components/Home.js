
import { useNavigate } from "react-router-dom";
import data from "../DB/data";
import { useEffect, useState } from 'react';


function Home() {
  
  const [stateindex, setStateindex] = useState(null)
  const [disindex, setdisindex] = useState(null)
  const navigate = useNavigate()

  useEffect(()=>{
    if (localStorage.getItem('user')==null)
      navigate('/')
  },[])
  useEffect(() => {
    document.getElementById('selectst').selectedIndex = 0;
    setdisindex(null)
   
  }, [stateindex])

  function setDindex(value) {
    if (value == '')
      setdisindex(null)
    else
      setdisindex(value)
  }
  function setSindex(value) {
    if (value == '')
      setStateindex(null)
    else
      setStateindex(value)
    setDindex('')
  }

  function Districtsinfo({ index }) {
    // console.log('indec from dis',index)
    const keys = Object.keys(data[stateindex]['states'][index]['districts'])
    const obj = data[stateindex]['states'][index]['districts']

    function cardclick(ClickedElement)
    {
     
      navigate('/card',{state:[ClickedElement,obj[ClickedElement]]})

    }

    return (
      <>
        {keys.map(element => {
          return (
            <div className='card' onClick={()=>{cardclick(element)}}>
              <div className='heading'> <b>{element.toUpperCase()}</b></div>
              <div className='imgstyle'>
                <img src={obj[element]['img']} width='200px' ></img>
              </div>

              <div className='descriprion'> <p>{obj[element]['description']}</p></div>
            </div>
          )
        })}
      </>
    )
  }

  function AllDistrictsinfo() {
    const states = data[stateindex]['states']
    return (
      <>

        {
          states.map((item, index) => {
            return <Districtsinfo index={index} />
          })
        }
      </>
    )
  }

  return (

      
      <div >
        <div className='select'>
          <select  onChange={(event) => { setSindex(event.target.value) }}>
            <option value={''}>select Country</option>
            {data.map((element, index) => {
              return <option value={index}>{element.cname}</option>
            })}
          </select>

          <select id='selectst' onChange={(event) => { setDindex(event.target.value); }}>
            {stateindex != null && <option value={''} >select State</option>}

            {stateindex != null ? data[stateindex]['states'].map((element, index) => {
              return <option value={index}>{element.name}</option>
            }) : <option>select country</option>
            }
          </select>
        </div>


        <div >

          {disindex == null && stateindex == null ? <h1> select country</h1> : ''}
          {disindex != null && stateindex != null ? <div className='main'> <div><Districtsinfo index={disindex} />  </div> </div> :
            <div>
              {stateindex != null ? <div className='main'> <div><AllDistrictsinfo></AllDistrictsinfo></div> </div> : ''}
            </div>
          }

        </div>
      </div>
   
  );
}
export default Home
