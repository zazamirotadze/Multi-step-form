import React from 'react'

const SectionDiv = ({steps}) => {
  return (
    <div className="App__section-div">
        <div className='steps'>
            <div className='steps__step1'>
                <div className={ steps.step1?"colorful-circle":'circle'}><h2>1</h2></div>
                <div>
                    <h3>Step 1</h3>
                    <h2>Your info</h2>
                </div>
            </div>
            <div className='steps__step2'>
                <div className={ steps.step2?"colorful-circle":'circle'}><h2>2</h2></div>
                <div>
                    <h3>Step 2</h3>
                    <h2>Select plan</h2>
                </div>

            </div>
            <div className='steps__step3'>
                <div className={ steps.step3?"colorful-circle":'circle'}><h2>3</h2></div>
                <div>
                    <h3>Step 3</h3>
                    <h2>Add-ons</h2>
                </div>  
            </div>
            <div className='steps__step4'>
                <div className={ steps.step4 || steps.step5 ?"colorful-circle":'circle'}><h2>4</h2></div>
                <div>
                    <h3>Step 4</h3>
                    <h2>Summary</h2>   
                </div>
            </div>
        </div>
    </div>
    
  )
}

export default SectionDiv
