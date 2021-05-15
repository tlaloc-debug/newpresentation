import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Github } from 'react-bootstrap-icons';
import { Linkedin } from 'react-bootstrap-icons';

function App(){
    return (
        <div className={"small"}>
            <div className={"center"}>
                <div>
                    <div className={"infotop head"}>Hi, I'm Erick Diaz</div>
                    <div className={"infotop head"}>a Fron-End Developer</div>
                </div>
                <div>
                    <div className={"infotop head"}>
                        resume
                    </div>
                    <div className={"infotop head"}>
                        <a href="https://github.com/tlaloc-debug"><Github className={"icon"}/></a>
                        <a href="https://www.linkedin.com/in/erick-oswaldo-de-la-cruz-diaz-9955a080/"><Linkedin className={"icon"}/></a>                
                    </div>
                </div>
                <div className={"infotop head"}> 
                    <div>
                        <div className={"contact"}>pelondinho@hotmail.com</div>
                        <div className={"contact"}>514-717-6664</div>
                    </div>
                </div>
            </div>
        
            <div className={"head"} style={{width: "100%", textAlign: "center", fontSize: "1.2em", padding: "50px 0px", textDecoration: "underline"}}>My projects</div>
                
            <div className={"back"}>
                <div className={"box"}>
                    <div className={"image imageproject1"}></div>
                    <div className={"footer"}>
                        <a href="https://choseyourpic.herokuapp.com/"><div className={"button head"}>Visit</div></a>
                        <a href="https://github.com/tlaloc-debug/choseyourpic"><div className={"button head"}>Code</div></a>
                    </div>
                    <div className={"text"}>
                        <div className={"title head"}>choseyourpic.com</div>
                        <div>A site where you can check the specifications of 158 chips, their components and buy them. The store is not real.</div>
                    </div>
                </div>
                <div className={"box"}>
                    <div className={"image imageproject2"}></div>
                    <div className={"footer"}>
                        <a href="https://covidsystemproposal.herokuapp.com/"><div className={"button head"}>Demo</div></a>
                        <a href="https://github.com/tlaloc-debug/covidsystem"><div className={"button head"}>JS Code</div></a>
                        <a href="https://github.com/tlaloc-debug/covidpython"><div className={"button head"}>Py Code</div></a>
                    </div>
                    <div className={"text"}>
                        <div className={"title head"}>CovidAlert</div>
                        <div>A software where employees can submit their covid symptoms, in case of any, to a database. </div>
                    </div>
                </div>
                
            </div>

            <div className={"back"}>
                <div className={"box"}>
                    <div className={"image imageproject3"}></div>
                    <div className={"footer"}>
                        <a href="https://garagecopy.herokuapp.com/"><div className={"button head"}>Visit</div></a>
                        <a href="https://github.com/tlaloc-debug/garagecopy"><div className={"button head"}>Code</div></a>
                    </div>
                    <div className={"text"}>
                        <div className={"title head"}>Cesar Bodyshop</div>
                        <div>A site for a bodyshop garage based on fixauto.com. Still in progress.</div>
                    </div>
                </div>
                <div className={"box"}>
                    <div className={"image imageproject4"}></div>
                    <div className={"footer"}>
                        <a href="https://animatedcv.herokuapp.com/"><div className={"button head"}>Visit</div></a>
                        <a href="https://github.com/tlaloc-debug/animatedcv"><div className={"button head"}>Code</div></a>
                    </div>
                    <div className={"text"}>
                        <div className={"title head"}>Animated CV</div>
                        <div>Learn more about me in a fun way.</div>
                    </div>
                </div>
            </div>

            <div className={"back"}> 
                <div className={"box"}>
                    <div className={"image imageproject5"}></div>
                    <div className={"footer"}>
                        <a href="http://www.alineacionybalanceojulioregalado.com/"><div className={"button head"}>Visit</div></a>
                        <a href="https://github.com/tlaloc-debug/julio"><div className={"button head"}>Code</div></a>
                    </div>
                    <div className={"text"}>
                        <div className={"title head"}>Julio Regalado</div>
                        <div>A site for a mechanic garage.</div>
                    </div>
                </div>
            </div>
        </div>   
    )
}

ReactDOM.render(<App />, document.getElementById("root"));