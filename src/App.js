import './App.css';
import React, { useRef , useEffect } from 'react';
import { AiFillSetting } from "react-icons/ai";
import { BsBarChartLineFill } from "react-icons/bs";
import { BsFillQuestionCircleFill } from "react-icons/bs";
import { BsBackspace } from "react-icons/bs"
import { AiOutlineEnter } from "react-icons/ai";
 import { AiOutlineClose } from "react-icons/ai";
import { GiBee } from "react-icons/gi";
import { GiShare } from "react-icons/gi";
import { GoThreeBars } from "react-icons/go";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import * as myfn from './components/Game/AppFunctions.js';
import Game from './components/Game/Game';
import Landingpage from './components/Landingpage/Landingpage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GameHard from './components/GameHard/GameHard';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Landingpage/>} />
        <Route path="/game/normal" element={<Game/>} />
        <Route path="/game/hard" element={<GameHard/>} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
