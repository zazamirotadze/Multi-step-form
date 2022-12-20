import { useEffect, useState } from "react";
import InfoDiv from "./components/InfoDiv";
import SectionDiv from "./components/SectionDiv";

function App() {

  const [steps, setSteps] = useState(
    {
      step1:true,
      step2:false,
      step3:false,
      step4:false,
      step5:false
    }
  )
  // step 1 states
  const [step1inputs, setStep1inputs]=useState(
    {
      name:"",
      emailAddress:"",
      phoneNumber:""
    }
  )
  const [step1inputsErrors, setStep1inputsErrors]=useState(
    {
      nameError:false,
      emailAddressError:false,
      phoneNumberError:false
    }
  )
  const [step1inputsEmpty, setStep1inputsEmpty] = useState(
    {
      nameEmpty:false,
      emailAddressEmpty:false,
      phoneNumberEmpty:false
    }
  )
  //
  //step 2 states
  const [monthly, setMonthly] = useState(true)
  const [plan, setPlan] = useState(
    {
      arcade:true,
      advanced:false,
      pro:false
    }
  )
  //
  //step 3 states

  const [addOns, setAddOns] = useState({
    service: false, 
    largerStorage: false,
    profile: false
  })

  //step 4 states
    const [total, setTotal] = useState(9)
    const [values, setValues] = useState(
      {
        arcadeValue: 9,
        advancedValue: 0,
        proValue: 0,
        service: 0,
        largerStorage: 0,
        profile:0
      }
    )
  //
  
    
  // operations to get sums
  useEffect(()=>{
    if(plan.arcade===true){setValues((prevValue)=>{return {...prevValue, arcadeValue: 9, advancedValue: 0, proValue:0}})}
    if(plan.advanced===true){setValues((prevValue)=>{return {...prevValue,arcadeValue: 0, advancedValue:12, proValue:0}})}
    if(plan.pro===true){setValues((prevValue)=>{return {...prevValue,arcadeValue: 0, advancedValue:0, proValue:15}})}

    if(addOns.service===true){setValues((prevValue)=>{return{...prevValue, service:1}})}
    if(addOns.service===false){setValues((prevValue)=>{return{...prevValue, service:0}})}
    if(addOns.largerStorage===true){setValues((prevValue)=>{return{...prevValue, largerStorage:2}})}
    if(addOns.largerStorage===false){setValues((prevValue)=>{return{...prevValue, largerStorage:0}})}
    if(addOns.profile===true){setValues((prevValue)=>{return{...prevValue, profile:2}})}
    if(addOns.profile===false){setValues((prevValue)=>{return{...prevValue, profile:0}})}

  },[plan, addOns])

  useEffect(()=>{
    if( monthly === true){
      setTotal(values.arcadeValue + values.advancedValue + values.proValue + values.service + values.profile + values.largerStorage) 
    }else{
      setTotal((values.arcadeValue + values.advancedValue + values.proValue + values.service + values.profile + values.largerStorage)*10) 
    }
  }, [values, monthly])

    
  
  //
  // function to go to the next step
  function nextStep(){
    //  regular expressions for inputs
    let nameReg = /^[a-zA-Z_ ]+$/g  
    let nameRegNextPage = /^[a-zA-Z_ ]+$/g  
    let emailAddressReg = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g 
    let emailAddressRegNextPage = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g 
    let phoneReg = /^\+\d{1}\s\d{3}\s\d{3}\s\d{3}$/g 
    let phoneRegNexPage = /^\+\d{1}\s\d{3}\s\d{3}\s\d{3}$/g 
    //////////
    //name input checking
      if (nameReg.test(step1inputs.name)) {
          setStep1inputsErrors(prevData => {return {...prevData, nameError:false}})
          setStep1inputsEmpty(prevObject => { return  {...prevObject, nameEmpty:false}})
      }else{
        setStep1inputsErrors(prevData => {return {...prevData, nameError:true}})
        setStep1inputsEmpty(prevObject => { return  {...prevObject, nameEmpty:false}})
      }
      if(step1inputs.name===""){
        setStep1inputsEmpty(prevObject => { return  {...prevObject, nameEmpty:true}})
      }
    ///
    //email input checking
      if (emailAddressReg.test(step1inputs.emailAddress)) {
        setStep1inputsErrors(prevData => {return {...prevData, emailAddressError:false}})
        setStep1inputsEmpty(prevObject => { return  {...prevObject, emailAddressEmpty:false}})
      }else{
        setStep1inputsErrors(prevData => {return {...prevData, emailAddressError:true}})
        setStep1inputsEmpty(prevObject => { return  {...prevObject, emailAddressEmpty:false}})
      }
      if(step1inputs.emailAddress===""){
        setStep1inputsEmpty(prevObject => { return  {...prevObject, emailAddressEmpty:true}})
      }
    //////
    // phone input checking
    if (phoneReg.test(step1inputs.phoneNumber)) {
      setStep1inputsErrors(prevData => {return {...prevData, phoneNumberError:false}})
      setStep1inputsEmpty(prevObject => { return  {...prevObject, phoneNumberEmpty:false}})
    }else{
      setStep1inputsErrors(prevData => {return {...prevData, phoneNumberError:true}})
      setStep1inputsEmpty(prevObject => { return  {...prevObject, phoneNumberEmpty:false}})
    }
    if(step1inputs.phoneNumber===""){
      setStep1inputsEmpty(prevObject => { return  {...prevObject, phoneNumberEmpty:true}})
    }
    //

    // go to next section of the form step1
    setTimeout(() => {
      if (emailAddressRegNextPage.test(step1inputs.emailAddress) &  nameRegNextPage.test(step1inputs.name)
      & (phoneRegNexPage.test(step1inputs.phoneNumber))) {
      if(steps.step1===true){
          setSteps(prevObject => {return {...prevObject, step1:false, step2:true}})
        }
      }
    }, 100);

    ///////
    if(steps.step2===true){
      setSteps(prevObject => {return {...prevObject, step2:false, step3:true}})
    }
    if(steps.step3===true){
      setSteps(prevObject => {return {...prevObject, step3:false, step4:true}})
    }
    if(steps.step4===true){
      setSteps(prevObject => {return {...prevObject, step4:false, step5:true}})
      
      setTimeout(() => {
        window.location.reload(false);
      }, 1000);
    }
  }
  // function to go to the previous step
  function prevStep(){
    if(steps.step2===true){
      setSteps(prevObject => {return {...prevObject, step2:false, step1:true}})
    }
    if(steps.step3===true){
      setSteps(prevObject => {return {...prevObject, step3:false, step2:true}})
    }
    if(steps.step4===true){
      setSteps(prevObject => {return {...prevObject, step4:false, step3:true}})
    }
  }

 

  return (
    <>
    <div className="App">
        <SectionDiv
          steps={steps}
          
        />
        <InfoDiv 
          steps={steps} 
          nextStep={nextStep}
          prevStep={prevStep}
          setStep1inputs={setStep1inputs}
          step1inputsEmpty={step1inputsEmpty}
          step1inputsErrors={step1inputsErrors}
          monthly={monthly}
          setMonthly={setMonthly}
          plan={plan}
          setPlan={setPlan}
          addOns={addOns}
          setAddOns={setAddOns}
          total={total}
          values={values}
        />
    </div>
    <div className="attribution">
       Challenge by <a href="https://www.frontendmentor.io?ref=challenge" rel="noreferrer" target="_blank">Frontend Mentor</a>. 
       Coded by <a href="/">Zaza Mirotadze</a>.
    </div>
     </>
  );
}

export default App;
