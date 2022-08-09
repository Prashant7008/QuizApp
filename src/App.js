
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Components/Headers/Header';
import Footer from './Components/Footer/Footer';
import Home from './Components/Pages/Home/Home';
import Quiz from './Components/Pages/Quiz/Quiz';
import Result from './Components/Pages/Result/Result';
import { useState } from 'react';
import axios from 'axios';

function App() {
  const [name, setName] = useState("");
  const [questions, setQuestions] = useState();
  const [score, setScore] = useState(0);
  const fetchQuestions = async (category = "", difficulty = "") => {
    const { data } = await axios.get(`https://opentdb.com/api.php?amount=10${category && `&category=${category}`
      }${difficulty && `&difficulty=${difficulty}`}&type=multiple`);

    setQuestions(data.results);

  }
  return (
    <BrowserRouter>
      <div className="app" style={{ backgroundImage: "url(./ques1.png)" }}>

        <Header />
        <Routes>
          <Route path="/" element={<Home name={name}
            setName={setName}
            fetchQuestions={fetchQuestions} />} />
          <Route path='/quiz' element={<Quiz name={name}
            questions={questions}
            setQuestions={setQuestions}
            score={score}
            setScore={setScore}
          />}
          />
          <Route path='/result' element={<Result
            name={name} score={score} />} />


        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
