import React from 'react'

const FormsDiv = ({setStep1inputs, step1inputsErrors, step1inputsEmpty, 
  steps, monthly, setMonthly, plan, setPlan, addOns, setAddOns, total, values}) => {

  return (
    <form className="forms-div">
        <div className={steps.step1?'forms-div__setup1-inputs-div':"To-vanish-div"}><div>
            <h3>Name</h3>
            {step1inputsEmpty.nameEmpty?<div className='required-div'>This field is required</div>:""}
            <input type="text" placeholder='e.g. Stephen King' className={step1inputsErrors.nameError?'errored-input':""}
                onChange={(e)=>setStep1inputs( prevInput => {  return {...prevInput, name:e.target.value}  } 
                )} 
            ></input>
          </div>
          <div>
            <h3>Email Address</h3>
            {step1inputsEmpty.emailAddressEmpty?<div className='required-div'>This field is required</div>:""}
            <input type="email"  placeholder='e.g. stephenking@lorem.com' className={step1inputsErrors.emailAddressError?'errored-input':""}
                onChange={(e)=>setStep1inputs( prevInput => {  return {...prevInput, emailAddress:e.target.value}  } 
                )} 
            ></input>
          </div>
          <div>
            <h3 >Phone Number</h3>
            {step1inputsEmpty.phoneNumberEmpty?<div className='required-div'>This field is required</div>:""}
            <input type="tel" placeholder='e.g. +1 234 567 890' className={step1inputsErrors.phoneNumberError?'errored-input':""}
                onChange={(e)=>setStep1inputs( prevInput => {  return {...prevInput, phoneNumber:e.target.value}  } 
                )} 
            ></input>
          </div>
        </div> 
        <div className={steps.step2?'forms-div__setup2':"To-vanish-div"}>
          <div className='forms-div__setup2-icons-div'>
            <div className={plan.arcade?"planChosen":""} 
              onClick={()=>
                { setPlan(prevValue=>{ return {arcade:true, advanced:false, pro:false}})}
                }>
              <img src='./assets/images/icon-arcade.svg' alt='arcade icon'></img>
              <div className='forms-div__setup2-headings-div'>
              <h3>Arcade</h3>
              {monthly?<h4>$9/mo</h4>:<h4>$90/yr</h4>}
              {!monthly?<h5>2 months free</h5>:""}
              </div>
            </div>
            <div className={plan.advanced?"planChosen":""}
              onClick={()=>
                {setPlan(prevValue=>{ return { arcade:false, advanced:true, pro:false}})}
                }>
               <img src='./assets/images/icon-advanced.svg' alt='advanced icon'></img> 
               <div className='forms-div__setup2-headings-div'>
               <h3>Advanced</h3>
               {monthly?<h4>$12/mo</h4>:<h4>$120/yr</h4>}
              {!monthly?<h5>2 months free</h5>:""}
              </div>
            </div>
            <div className={plan.pro?"planChosen":""}
            onClick={()=>
                {setPlan(prevValue=>{ return {arcade:false, advanced:false, pro:true}})}
                }>
              <img src='./assets/images/icon-pro.svg' alt='pro icon'></img> 
              <div className='forms-div__setup2-headings-div'>
              <h3>Pro</h3>
              {monthly?<h4>$15/mo</h4>:<h4>$150/yr</h4>}
              {!monthly?<h5>2 months free</h5>:""}
              </div>
            </div>
          </div>
          <div className='forms-div__setup2-monthly-div'>
            <h4 className={monthly?'isActive':"isNotActive"}>Monthly</h4>
            <div className={monthly?'Monthly-Yearly-div-monthly':"Monthly-Yearly-div-yearly"}
            onClick = {()=>setMonthly(prevValue => !prevValue)}
            >
              <div className='Monthly-Yearly-div-circle'></div>
            </div>
            <h4 className={monthly?'isNotActive':"isActive"}>Yearly</h4>
          </div>
        </div>
        <div className={steps.step3?'forms-div__setup3':"To-vanish-div"} >
          <div onClick={()=>{setAddOns(prevObject=>{return {...prevObject, service:!prevObject.service}})}}
            className={addOns.service?'forms-div__setup3-checkmark-div-picked':'forms-div__setup3-checkmark-div'} >
            <div className={addOns.service?'forms-div__setup3-checkmark-div-img-div-picked':
              "forms-div__setup3-checkmark-div-img-div"}>
              <img src='assets/images/icon-checkmark.svg' alt='checkmark icon' />
            </div>
            <div className='forms-div__setup3-checkmark-div-headings-div' >
              <h4>Online service</h4>
              <h5>Access to multiplayer games</h5>
            </div>
            {monthly?<h4>+$1/mo</h4>:<h4>+$10/yr</h4>}
          </div>
          <div onClick={()=>{setAddOns(prevObject=>{return {...prevObject, largerStorage:!prevObject.largerStorage}})}} 
            className={addOns.largerStorage?'forms-div__setup3-checkmark-div-picked':'forms-div__setup3-checkmark-div'}>
            <div className={addOns.largerStorage?'forms-div__setup3-checkmark-div-img-div-picked':
              "forms-div__setup3-checkmark-div-img-div"} >
              <img src='assets/images/icon-checkmark.svg' alt='checkmark icon' />
            </div>
            <div className='forms-div__setup3-checkmark-div-headings-div'>
              <h4>Larger storage</h4>
              <h5>Extra 1TB of cloud save</h5>
            </div>
            {monthly?<h4>+$2/mo</h4>:<h4>+$20/yr</h4>}
          </div>
          <div  onClick={()=>{setAddOns(prevObject=>{return {...prevObject, profile:!prevObject.profile}})}} 
            className={addOns.profile?'forms-div__setup3-checkmark-div-picked':'forms-div__setup3-checkmark-div'} >
            <div className={addOns.profile?'forms-div__setup3-checkmark-div-img-div-picked':
              "forms-div__setup3-checkmark-div-img-div"}>
              <img src='assets/images/icon-checkmark.svg' alt='checkmark icon'/>
            </div>
            <div className='forms-div__setup3-checkmark-div-headings-div'>
              <h4>Customizable Profile</h4>
              <h5>Custom theme on your profile</h5>
            </div>
            {monthly?<h4>+$2/mo</h4>:<h4>+$20/yr</h4>}
          </div>
        </div>
        <div className={steps.step4?'forms-div__setup4':"To-vanish-div"} >
            <div className='forms-div__setup4-plan-div' >
              <div>
                <h4>{plan.arcade?"Arcade":plan.advanced?"Advanced": plan.pro?"Pro":""} {monthly?"(Monthly)": "(Yearly)"} </h4>
                <h5 onClick = {()=>setMonthly(prevValue => !prevValue)}>change</h5>
                <div className='forms-div__setup4-plan-div-bottom-border' ></div>
              </div>
              {
                monthly & values.advancedValue>0?<h4>${values.advancedValue}/mo</h4>:
                !monthly & values.advancedValue>0?<h4>{values.advancedValue*10}/yr</h4>:

                monthly & values.arcadeValue>0?<h4>${values.arcadeValue}/mo</h4>:
                !monthly & values.arcadeValue>0?<h4>{values.arcadeValue*10}/yr</h4>:

                monthly & values.proValue>0?<h4>${values.proValue}/mo</h4>:
                !monthly & values.proValue>0?<h4>{values.proValue*10}/yr</h4>:""
              }
            </div>
            <div className='forms-div__setup4-add-on-div-container' >

              {addOns.service?<div className='forms-div__setup4-add-on-div'
              >
                <h5>Online service</h5>
                {monthly?<h5>+$1/mo</h5>:<h5>+$10/yr</h5>}
              </div>: ""}

              {addOns.largerStorage?<div className='forms-div__setup4-add-on-div'>
                <h5>Larger storage</h5>
                {monthly?<h5>+$2/mo</h5>:<h5>+$20/yr</h5>}
              </div>:""}
              {addOns.profile?<div className='forms-div__setup4-add-on-div'>
                <h5>Customizable Profile</h5>
                {monthly?<h5>+$2/mo</h5>:<h5>+$20/yr</h5>}
              </div>:""}
            </div>

            <div className='forms-div__setup4-total-div'>
              <h5>Total (per month)</h5>
              <h3>+${total}{monthly?"/mo":"/yr"}</h3>
            </div>
        </div>
        <div className={steps.step5?'forms-div__setup5':"To-vanish-div"}>
              <img src='./assets/images/icon-thank-you.svg'/>
              <h1>Thank you!</h1>
               
              <div className='test-div'>
                <div className='test-div-small'></div>
                <div className='test-div-small'></div>
                <h4>
                  Thanks for confirming your subscription! We hope you have
                  fun 
                  using our platform. If you ever need support, please feel free 
                  to email us at support@loremgaming.com.
                </h4>
              </div>
        </div>
    </form>
  )
}

export default FormsDiv
