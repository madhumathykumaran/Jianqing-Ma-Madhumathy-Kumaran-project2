import '../../App.css';
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
import * as myfn from './AppFunctions.js';
import { useNavigate } from 'react-router-dom';
import Confetti from 'react-confetti'

function GameHard() {
  const dataFetchedRef = useRef(false);
  let navigate = useNavigate();
  const onRestart = () => {
    myfn.onWordChange();
    let path = `/`; 
    navigate(path);
  };
  
  useEffect(() => {
    if (dataFetchedRef.current) return;
    dataFetchedRef.current = true;
    myfn.initialFunction(); 
    console.log("here");

    
  }, []);

    //var statistics=JSON.parse(localStorage.getItem("statistics"));
    var statistics={"TotalPlayed":5,"Win":3,"Loss":2,"Streak":1,"MaxStreak":1,"Guess":[0,2,0,1,0,0]};
    //var statistics=localStorage.getItem("statistics");
    //console.log("statistics:"+statistics);

  return (
    
    <div className="App" tabIndex="0" onKeyDown={(e: KeyboardEvent<HTMLDivElement>) => myfn.handleKeyDown(e.key)}>
      
      <div className="game-header">
        {/* <header> */}
          <nav className="navbar navbar-light fixed-top">
            <div className="container-fluid">
              
              <a id="navbar-brand-landing" >Wordle</a>
              <div className="side-buttons">
                <button className="side-buttons-icons" type="button" data-bs-toggle="modal" data-bs-target="#how-modal">
                  <BsFillQuestionCircleFill size={30}/>
                </button>
                <button className="side-buttons-icons" type="button" data-bs-toggle="modal" data-bs-target="#settings-modal">
                  <AiFillSetting size={30}/>
                </button>
              </div>
              <div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
                <div className="offcanvas-header">
                  <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">Games</h5>
                  <button type="button" className="dismiss-button" data-bs-dismiss="offcanvas" aria-label="Close">
                    <AiOutlineClose/>
                  </button>
                </div>
                <div className="offcanvas-body">
                  <ul className="navbar-nav justify-content-start flex-grow-1 pe-3">
                    <li className="nav-item">
                      <a className="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">Archive</a>
                    </li>
                  
                  </ul>
                  
                </div>
                
              </div>
            </div>
          </nav> 

      </div>

      {/* Settings Modal */}
      <div className="modal" id="settings-modal" tabIndex="-2" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <div className="flex-div"></div>
              <h5 className="modal-title" id="exampleModalLabel">SETTINGS</h5>
              <div className="flex-div"></div>
              <button type="button" className="dismiss-button" data-bs-dismiss="modal" aria-label="Close"><AiOutlineClose/></button>
              {/* <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close">
                <AiOutlineClose/>
              </button> */}
            </div>
            <div className="modal-body">
              <div className="settings-options">
                <div className="settings-options-texts">
                  <div>
                    Dark Theme
                  </div>
                  <div>
                   
                  </div>
                </div>
                <div className="form-check form-switch">
                  <input className="form-check-input" type="checkbox" onClick={myfn.themeButton} id="darkThemeSwitch"/>
                </div>
              </div>

              <div className="settings-options">
                <div className="settings-options-texts">
                  <div>
                    High Contrast Mode
                  </div>
                  <div>
                    <small>
                      For improved color vision
                    </small>
                  </div>
                </div>
                <div className="form-check form-switch">
                  <input className="form-check-input" type="checkbox" onClick={myfn.colorBlindButton} id="highContrastMode"/>
                </div>
              </div>

              <div className="settings-options">
                <div className="settings-options-texts">
                  <div>
                    Feedback
                  </div>
                </div>
                <div className="settings-options-side">
                    Email
                </div>
              </div>

              <div className="settings-options">
                <div className="settings-options-texts">
                  <div>
                    Community

                  </div>
                </div>
                <div className="settings-options-side">
                    Twitter
                </div>
              </div>

              <div className="settings-options">
                <div className="settings-options-texts">
                  <div>
                    Questions?
                  </div>
                </div>
                <div className="settings-options-side">
                    FAQ
                </div>
              </div>
              
              

            </div>
            
          </div>
        </div>
      </div>

      {/* How to play Modal */}
      <div className="modal" id="how-modal" tabIndex="-3" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header pb-0">
              <div className="flex-div"></div>
              <button type="button" className="dismiss-button" data-bs-dismiss="modal" aria-label="Close">
                <AiOutlineClose/>
              </button>
            </div>
            <div className="modal-body">
              <div className="how-options">
                <h3>How To Play</h3>
                
                <h5>Guess the Wordle in 5 tries.</h5>

                <div className="bullets">
                  <ul>
                    <li>Each guess must be a valid 7-letter word.</li>
                    <li>The color of the tiles will change to show how close your guess was to the word.</li>
                  </ul>
                </div>
                <div className="examples  mb-3">
                  <div>Examples</div>
                  <div className="how-row">
                    <div className="cube exm correct col-2">L</div>
                    <div className="cube exm col-2">U</div>
                    <div className="cube exm col-2">C</div>
                    <div className="cube exm col-2">I</div>
                    <div className="cube exm col-2">D</div>
                    <div className="cube exm col-2">L</div>
                    <div className="cube exm col-2">Y</div>
                  </div>
                  <div>L is in the word and in the correct spot.</div>
                </div>
                <div className="examples mb-3">
                  <div className="how-row">
                    <div className="cube exm col-2">L</div>
                    <div className="cube exm col-2">O</div>
                    <div className="cube exm col-2">F</div>
                    <div className="cube exm col-2">T</div>
                    <div className="cube exm present col-2">E</div>
                    <div className="cube exm col-2">R</div>
                    <div className="cube exm col-2">S</div>
                  </div>
                  <div>E is in the word but in the wrong spot.</div>
                </div>
                <div className="examples mb-3">
                  <div className="how-row">
                    <div className="cube exm col-2">L</div>
                    <div className="cube exm absent col-2">U</div>
                    <div className="cube exm col-2">V</div>
                    <div className="cube exm col-2">A</div>
                    <div className="cube exm col-2">G</div>
                    <div className="cube exm col-2">E</div>
                    <div className="cube exm col-2">S</div>
                  </div>
                  <div>U is not in the word in any spot.</div>
                </div>
              
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* Statistics Modal */}
      <div className="modal" id="statistics-modal" tabIndex="-2" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header pb-0">
              <div className="flex-div"></div>
              
              <button type="button" className="dismiss-button" data-bs-dismiss="modal" aria-label="Close"><AiOutlineClose/></button>
            </div>
            <div className="modal-body pt-0">
              <div className="statistics-options">

                <div>
                  <h5 className="modal-title" id="exampleModalLabel">Congratulations</h5>
                </div>
              </div>
              <ToastContainer/>
              <div className="mt-1">
                NEXT WORDLE IN <span id='nextGameTimer'></span>
              </div>
              <div className="mt-1 stats-footer">
                  <Confetti className="congrat"/>
                  <button className="button spellingBeeYellow" data-bs-dismiss="modal" type="button" onClick={onRestart}>Start Over <GiBee/></button>
              </div>
              

            </div>
          </div>
        </div>
      </div>
      
      <div className="game-body">
        
          <div className="Board-module">
            <div className="Board-module-board-hard">
              <div className="board-row-hard">
                <div className="cube line1 col-2"></div>
                <div className="cube line1 col-2"></div>
                <div className="cube line1 col-2"></div>
                <div className="cube line1 col-2"></div>
                <div className="cube line1 col-2"></div>
                <div className="cube line1 col-2"></div>
                <div className="cube line1 col-2"></div>
              </div>
              <div className="board-row-hard">
                <div className="cube line2 col-2"></div>
                <div className="cube line2 col-2"></div>
                <div className="cube line2 col-2"></div>
                <div className="cube line2 col-2"></div>
                <div className="cube line2 col-2"></div>
                <div className="cube line2 col-2"></div>
                <div className="cube line2 col-2"></div>
              </div>
              <div className="board-row-hard">
                <div className="cube line3 col-2"></div>
                <div className="cube line3 col-2"></div>
                <div className="cube line3 col-2"></div>
                <div className="cube line3 col-2"></div>
                <div className="cube line3 col-2"></div>
                <div className="cube line3 col-2"></div>
                <div className="cube line3 col-2"></div>
              </div>
              <div className="board-row-hard">
                <div className="cube line4 col-2"></div>
                <div className="cube line4 col-2"></div>
                <div className="cube line4 col-2"></div>
                <div className="cube line4 col-2"></div>
                <div className="cube line4 col-2"></div>
                <div className="cube line4 col-2"></div>
                <div className="cube line4 col-2"></div>
              </div>
              <div className="board-row-hard">
                <div className="cube  line5 col-2"></div>
                <div className="cube  line5 col-2"></div>
                <div className="cube  line5 col-2"></div>
                <div className="cube  line5 col-2"></div>
                <div className="cube  line5 col-2"></div>
                <div className="cube  line5 col-2"></div>
                <div className="cube  line5 col-2"></div>
              </div>
            </div>
            
          </div>
          <div className="Keyboard-module">
            <div id="keyboard-cont">
                <div className="first-row">
                    <button className="keyboard-button" value="Q" id="Q"  onClick={myfn.buttonclicked}>q</button>
                    <button className="keyboard-button" value="W" id="W"  onClick={myfn.buttonclicked}>w</button>
                    <button className="keyboard-button" value="E" id="E"  onClick={myfn.buttonclicked}>e</button>
                    <button className="keyboard-button" value="R" id="R"  onClick={myfn.buttonclicked}>r</button>
                    <button className="keyboard-button" value="T" id="T"  onClick={myfn.buttonclicked}>t</button>
                    <button className="keyboard-button" value="Y" id="Y"  onClick={myfn.buttonclicked}>y</button>
                    <button className="keyboard-button" value="U" id="U"  onClick={myfn.buttonclicked}>u</button>
                    <button className="keyboard-button" value="I" id="I"  onClick={myfn.buttonclicked}>i</button>
                    <button className="keyboard-button" value="O" id="O"  onClick={myfn.buttonclicked}>o</button>
                    <button className="keyboard-button" value="P" id="P"  onClick={myfn.buttonclicked}>p</button>
                  </div>
                <div className="second-row">
                  <div className="flex-div"></div>
                  <button className="keyboard-button" value="A" id="A" onClick={myfn.buttonclicked}>a</button>
                  <button className="keyboard-button" value="S" id="S" onClick={myfn.buttonclicked}>s</button>
                  <button className="keyboard-button" value="D" id="D" onClick={myfn.buttonclicked}>d</button>
                  <button className="keyboard-button" value="F" id="F" onClick={myfn.buttonclicked}>f</button>
                  <button className="keyboard-button" value="G" id="G" onClick={myfn.buttonclicked}>g</button>
                  <button className="keyboard-button" value="H" id="H" onClick={myfn.buttonclicked}>h</button>
                  <button className="keyboard-button" value="J" id="J" onClick={myfn.buttonclicked}>j</button>
                  <button className="keyboard-button" value="K" id="K" onClick={myfn.buttonclicked}>k</button>
                  <button className="keyboard-button" value="L" id="L" onClick={myfn.buttonclicked}>l</button>
                  <div className="flex-div"></div>
                </div>
              <div className="third-row">
                  <button className="keyboard-button" value="Enter" onClick={myfn.submitclicked}><AiOutlineEnter/></button>
                  <button className="keyboard-button" value="Z" id="Z" onClick={myfn.buttonclicked}>z</button>
                  <button className="keyboard-button" value="X" id="X" onClick={myfn.buttonclicked}>x</button>
                  <button className="keyboard-button" value="C" id="C" onClick={myfn.buttonclicked}>c</button>
                  <button className="keyboard-button" value="V" id="V" onClick={myfn.buttonclicked}>v</button>
                  <button className="keyboard-button" value="B" id="B" onClick={myfn.buttonclicked}>b</button>
                  <button className="keyboard-button" value="N" id="N" onClick={myfn.buttonclicked}>n</button>
                  <button className="keyboard-button" value="M" id="M" onClick={myfn.buttonclicked}>m</button>
                  <button className="keyboard-button" value="Del" onClick={myfn.delclicked}><BsBackspace/></button>
              </div>
            </div>
          </div>
          <div className="btn btn-primary btn-lg" href="#" role="button" onClick={myfn.onWordChange}>Change Word</div>
          
          {/* <ToastContainer/> */}

          

       
      </div>
     



    </div>
  );
}

export default GameHard;
