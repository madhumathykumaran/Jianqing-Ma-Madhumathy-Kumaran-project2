import React from 'react';
import { AiFillSetting } from "react-icons/ai";
import { BsFillQuestionCircleFill } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import 'react-toastify/dist/ReactToastify.css';
import * as myfn from '../Game/AppFunctions.js';
import "./Landingpage.module.css"
import { useNavigate } from 'react-router-dom';

function Landingpage() {

  let navigate = useNavigate();
  const handleClickHard = () => {
    let path = `/game/hard`; 
    navigate(path);
  };
  const handleClickNormal = () => {
    let path = `/game/normal`; 
    navigate(path);
  };
  return (
    
    <div className="App" tabIndex="0" >
      
      <div className="game-header">
        {/* <header> */}
          <nav className="navbar navbar-light fixed-top">
            <div className="container-fluid">
              <div id="navbar-brand-landing" >Wordle</div>
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
                <div className="offcanvas-footer">
                  <small className="copyright text-center">
                    Made with ❤️ | Website developed by S Subodh
                  </small><br></br>
                  <small>
                    This website is developed only for Educational/Learning purpose
                  </small>
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
              <div>
                <small>
                Made with ❤️ | Website developed by S Subodh
                </small>
              </div>
              

            </div>
            {/* <div className="modal-footer">
              <small className="copyright text-center">
                  Made with ❤️ | Website developed by S Subodh
              </small>
              <small>
                This website is developed only for Educational purpose
              </small>
            </div> */}
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
                
                <h5>Guess the Wordle in 6 tries.</h5>

                <div className="bullets">
                  <ul>
                    <li>Each guess must be a valid 5-letter word.</li>
                    <li>The color of the tiles will change to show how close your guess was to the word.</li>
                  </ul>
                </div>
                <div className="examples  mb-3">
                  <div>Examples</div>
                  <div className="how-row">
                    <div className="cube exm correct col-2">W</div>
                    <div className="cube exm col-2">E</div>
                    <div className="cube exm col-2">A</div>
                    <div className="cube exm col-2">R</div>
                    <div className="cube exm col-2">Y</div>
                  </div>
                  <div>W is in the word and in the correct spot.</div>
                </div>
                <div className="examples mb-3">
                  <div className="how-row">
                    <div className="cube exm col-2">P</div>
                    <div className="cube exm present col-2">I</div>
                    <div className="cube exm col-2">L</div>
                    <div className="cube exm col-2">L</div>
                    <div className="cube exm col-2">S</div>
                  </div>
                  <div>I is in the word but in the wrong spot.</div>
                </div>
                <div className="examples mb-3">
                  <div className="how-row">
                    <div className="cube exm col-2">V</div>
                    <div className="cube exm col-2">A</div>
                    <div className="cube exm col-2">G</div>
                    <div className="cube exm absent col-2">U</div>
                    <div className="cube exm col-2">E</div>
                  </div>
                  <div>U is not in the word in any spot.</div>
                </div>
              
              </div>

              <div>
                <div className="how-footer">
                  A new puzzle is released daily at midnight. If you haven’t already, you can <a href = "#">sign up</a> for our daily reminder email.
                </div>
                <div className="how-footer">
                  Have feedback? Email us at <a href = "#">xyz@xyz.com</a>.
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
      <div className="jumbotron">
        <h1 className="display-4">Hello, player!</h1>
        <p className="lead">Wordle is a daily word game(Opens in a new tab) created by Josh Wardle, 
        a Brooklyn-based software engineer who has developed something of a reputation as a crafter 
        of(Opens in a new tab) interesting social experiments(Opens in a new tab). Every day, the 
        people of the internet are greeted with a fresh word puzzle that can only be solved — or not! — using
         a series of process-of-elimination clues.</p>
        <hr class="my-4"></hr>
        <p>Please select difficulty level to start with.</p>
        <p className="lead">
          <div className="btn btn-primary btn-lg" href="#" role="button" onClick={handleClickNormal}>Medium</div>
          <div className="btn btn-primary btn-lg" href="#" role="button" onClick={handleClickHard}>Hard</div>
        </p>
      </div>
    </div>
  );
}

export default Landingpage;

