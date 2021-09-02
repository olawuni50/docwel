import React from 'react'
import ExamInfo from '../components/Exam/ExamInfo'
import ExamList from '../components/Exam/ExamList'
import LoanForm from '../components/LoanForm'

const ExamPage = ({onAdd, exams}) => {
    return (
        <div>
            
         <ExamInfo/>
         <ExamList exams={exams}/>   
         <LoanForm onAdd={onAdd}/>
        </div>
    )
}

export default ExamPage
