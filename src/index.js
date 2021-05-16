import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Github } from 'react-bootstrap-icons';
import { Linkedin } from 'react-bootstrap-icons';
import { useMediaQuery } from 'react-responsive';

function App(){

    const matches = useMediaQuery({query: '(min-width:600px)'});

    return (
        <div className={"small"}>
            <div className={matches ? "center" : "centercell"}>
                <div>
                    <div className={matches ? "infotop head" : "infotopcell head"}>Hi, I'm Erick Diaz</div>
                    <div className={matches ? "infotop head" : "infotopcell head"}>a Fron-End Developer</div>
                </div>
                <div>
                    <div className={matches ? "infotop head" : "infotopcell head"}>
                        resume
                    </div>
                    <div className={matches ? "infotop head" : "infotopcell head"}>
                        <a href="https://github.com/tlaloc-debug"><Github className={"icon"}/></a>
                        <a href="https://www.linkedin.com/in/erick-oswaldo-de-la-cruz-diaz-9955a080/"><Linkedin className={"icon"}/></a>                
                    </div>
                </div>
                <div className={matches ? "infotop head" : "infotopcell head"}> 
                    <div>
                        <div className={"contact"}>pelondinho@hotmail.com</div>
                        <div className={"contact"}>514-717-6664</div>
                    </div>
                </div>
            </div>
        
            <div className={"head"} style={{width: "100%", textAlign: "center", fontSize: "1.2em", padding: "50px 0px", textDecoration: "underline"}}>My projects</div>
                
            <div className={matches ? "back" : "backcell"}>
                <div className={matches ? "box" : "boxcell"}>
                    <div className={matches ? "image imageproject1" : "imagecell imageproject1"}></div>
                    <div className={"footer"}>
                        <a href="https://choseyourpic.herokuapp.com/"><div className={matches ? "button head" : "buttoncell head"}>Visit</div></a>
                        <a href="https://github.com/tlaloc-debug/choseyourpic"><div className={matches ? "button head" : "buttoncell head"}>Code</div></a>
                    </div>
                    <div className={matches ? "text" : "textcell"}>
                        <div className={"title head"}>choseyourpic.com</div>
                        <div>A site where you can check the specifications of 158 chips, their components and buy them. The store is not real.</div>
                    </div>
                </div>
                <div className={matches ? "box" : "boxcell"}>
                    <div className={matches ? "image imageproject2" : "imagecell imageproject2cell"}></div>
                    <div className={"footer"}>
                        <a href="https://covidsystemproposal.herokuapp.com/"><div className={matches ? "button head" : "buttoncell head"}>Demo</div></a>
                        <a href="https://github.com/tlaloc-debug/covidsystem"><div className={matches ? "button head" : "buttoncell head"}>JS Code</div></a>
                        <a href="https://github.com/tlaloc-debug/covidpython"><div className={matches ? "button head" : "buttoncell head"}>Py Code</div></a>
                    </div>
                    <div className={matches ? "text" : "textcell"}>
                        <div className={"title head"}>CovidAlert</div>
                        <div>A software where employees can submit their covid symptoms, in case of any, to a database. </div>
                    </div>
                </div>
                
            </div>

            <div className={matches ? "back" : "backcell"}>
                <div className={matches ? "box" : "boxcell"}>
                    <div className={matches ? "image imageproject3" : "imagecell imageproject3"}></div>
                    <div className={"footer"}>
                        <a href="https://garagecopy.herokuapp.com/"><div className={matches ? "button head" : "buttoncell head"}>Visit</div></a>
                        <a href="https://github.com/tlaloc-debug/garagecopy"><div className={matches ? "button head" : "buttoncell head"}>Code</div></a>
                    </div>
                    <div className={matches ? "text" : "textcell"}>
                        <div className={"title head"}>Cesar Bodyshop</div>
                        <div>A site for a bodyshop garage based on fixauto.com. Still in progress.</div>
                    </div>
                </div>
                <div className={matches ? "box" : "boxcell"}>
                    <div className={matches ? "image imageproject4" : "imagecell imageproject4"}></div>
                    <div className={"footer"}>
                        <a href="https://animatedcv.herokuapp.com/"><div className={matches ? "button head" : "buttoncell head"}>Visit</div></a>
                        <a href="https://github.com/tlaloc-debug/animatedcv"><div className={matches ? "button head" : "buttoncell head"}>Code</div></a>
                    </div>
                    <div className={matches ? "text" : "textcell"}>
                        <div className={"title head"}>Animated CV</div>
                        <div>Learn more about me in a fun way.</div>
                    </div>
                </div>
            </div>

            <div className={matches ? "back" : "backcell"}> 
                <div className={matches ? "box" : "boxcell"}>
                    <div className={matches ? "image imageproject5" : "imagecell imageproject5"}></div>
                    <div className={"footer"}>
                        <a href="http://www.alineacionybalanceojulioregalado.com/"><div className={matches ? "button head" : "buttoncell head"}>Visit</div></a>
                        <a href="https://github.com/tlaloc-debug/julio"><div className={matches ? "button head" : "buttoncell head"}>Code</div></a>
                    </div>
                    <div className={matches ? "text" : "textcell"}>
                        <div className={"title head"}>Julio Regalado</div>
                        <div>A site for a mechanic garage.</div>
                    </div>
                </div>
            </div>
        </div>   
    )
}

ReactDOM.render(<App />, document.getElementById("root"));