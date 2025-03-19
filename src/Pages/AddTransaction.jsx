import AnimatedAvatar from '@/Components/comman/AnimateAvtar'
import React, { useState } from 'react'
import IncomeForm from '@/Components/layout/IncomeForm'
import Switch from '@/Components/UIverse/Toggle'
import SplitText from "../Components/Reactbits/SplitText"
import Toggle from '@/Components/UIverse/Toggle'
import ExpenseForm from '@/Components/layout/ExpenseForm'

const AddTransaction = () => {
  const [isIncome, setIsIncome] = useState(true);
  return (
    <div className='p-5 ' >
      <div  className='flex justify-between mx-24'>
<SplitText
  text="Add Transactions"
  className="text-2xl font-semibold  text-teal-500"
  delay={150}
  animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
  animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
  easing="easeOutCubic"
  threshold={0.2}
  rootMargin="-50px"
/>
<Toggle isIncome={isIncome} setIsIncome={setIsIncome} />
  </div>
{isIncome ? <IncomeForm /> : <ExpenseForm /> }
       </div>
  )
}

export default AddTransaction
