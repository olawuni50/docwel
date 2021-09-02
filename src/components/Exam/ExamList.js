import React from 'react'
import ExamCard from './ExamCard'

const ExamList = ({exams}) => {
    const renderExam = exams.map((exam) =>{
        return(
            <ExamCard exam={exam} key={exam.id}/>
        )
    })
    return (
        <div>
            {renderExam}
            
        </div>
    )
}

export default ExamList
