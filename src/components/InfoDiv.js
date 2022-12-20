import React from 'react'
import FormsDiv from './FormsDiv'

const InfoDiv = ({steps, nextStep, prevStep, setStep1inputs, step1inputsErrors,
     step1inputsEmpty, monthly, setMonthly, plan, setPlan, addOns, setAddOns, total, values}) => {
  return (
    <div className="App__action-div" >
        <div className="info-div">
            <div></div>
            <div className="info-div__heading-div">
            <h1>
                {steps.step1? "Personal info":
                steps.step2? "Select your plan":
                steps.step3? "Pick add-ons":
                steps.step4? "Finishing up":
                ""
                }
            </h1>
            <h3>
                {steps.step1? "Please provide your name, email address, and phone number.":
                steps.step2? "You have the option of monthly or yearly billing.":
                steps.step3? "Add-ons help enhance your gaming experience.":
                steps.step4? "Double-check everything looks OK before confirming.":
                ""
                }
            </h3>
            </div>
            <FormsDiv
                setStep1inputs={setStep1inputs}
                step1inputsErrors={step1inputsErrors}
                step1inputsEmpty={step1inputsEmpty}
                steps={steps}
                monthly={monthly}
                setMonthly={setMonthly}
                plan={plan}
                setPlan={setPlan}
                addOns={addOns}
                setAddOns={setAddOns}
                total={total}
                values={values}
            />
            <div className="info-div__buttons-div">
                {steps.step1 || steps.step5? "":
                    <button className="info-div__buttons-div-go-back-btn"
                    onClick={()=>prevStep()}
                    >Go Back</button>
                }
                {steps.step4 || steps.step5? "":
                <button className="info-div__buttons-div-next-step-btn"
                    onClick={()=>nextStep()}
                >Next Step</button> 
                }
                {steps.step4 & !steps.step5?  
                <button className="info-div__buttons-div-confirm-btn"
                    onClick={()=>nextStep()}
                >Confirm</button>:""
                }
            </div>
        </div>
    </div>
  )
}

export default InfoDiv
