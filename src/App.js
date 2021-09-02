import React, {useState} from 'react'
import "./App.css"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './components/Home'
// import LoanForm from './components/LoanForm'
import SecondHome from './components/SecondHome'
// import LoanList from './components/LoanList'
import MyRegular from './pages/MyRegular'
import EmergencyPage from './pages/EmergencyPage'
import ProjectPage from './pages/ProjectPage'
import CommodityPage from './pages/CommodityPage'
import BusinessPage from './pages/BusinessPage'
import ExamPage from './pages/ExamPage'
import Footer from './pages/Footer'
import Footer2 from './components/Footer2'
// import Sidebar from './components/SideBar/Sidebar'
// import NavBar from './components/NavBar/NavBar'


const App = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [loans, setLoans] = useState([]);
    const [emergencies, setEmergency] = useState([])
    const [projects, setProject] = useState([])
    const [commodities, setCommodity] = useState([])
    const [businesses, setBusiness] = useState([])
    const [exams, setExam] = useState([])


const toggle =()=>{
    setIsOpen(!isOpen)
}

// Add Regular Loan
const addLoan = (loan) =>{
    const id = Math.floor(Math.random() * 1000) + 1
    setLoans([...loans, {id:id, ...loan}])
}

// Add Emergency
const addEmergency = (emergency) =>{
    const id = Math.floor(Math.random() * 1000) + 1
    setEmergency([...emergencies, {id:id, ...emergency} ])
} 

// Add Project Loan
const addProject = (project)=>{
    const id = Math.floor(Math.random() * 1000) + 1
    setProject([...projects, {id:id, ...project}])
}
// Add commodity loan
const addCommodity = (comm) =>{
    const id = Math.floor(Math.random() * 1000) + 1
    setCommodity([...commodities, {id: id, ...comm}])
}

// Add Business Loan
const addBusiness = (business) =>{
    const id = Math.floor(Math.random() * 1000) + 1
    setBusiness([...businesses, {id:id, ...business}])
}

// Add Exam Loan
const addExam = (exam) =>{
    const id = Math.floor(Math.random() * 1000) + 1
    setExam([...exams, {id:id, ...exam}])
}
           
    return (
           <div className="container">
               <Router>
                {/* <Sidebar isOpen={isOpen} toggle={toggle}/>
              <NavBar toggle={toggle} /> */}
                   <Switch>

              <Route exact path="/" component={Home}/>
              
              <SecondHome exact path="/select"/>
              <MyRegular onAdd={addLoan} loans={loans} path="/regular-loan"/>
              <EmergencyPage onAdd={addEmergency} emergencies={emergencies} path="/emergency-loan" />
              <ProjectPage onAdd={addProject} projects={projects} path="/project-loan"/>
              <CommodityPage  onAdd ={addCommodity} commodities ={commodities} path="/commodity-loan"/>
              <BusinessPage onAdd ={addBusiness} businesses = {businesses} path="/business-loan"/>
              <ExamPage onAdd={addExam} exams={exams} path="/exam-loan"/>
              </Switch>
              <Footer/>
              <Footer2/>
              </Router>
               
        </div>
       
        
    )
}

export default App
