import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./AssisrStarQuiz.scss";
import Menu from "./Components/Pages/Menu/Menu";
import Quiz from "./Components/Pages/Quiz/Quiz";
import { IQuizContext, quiz, QuizContext } from "./Contexts/QuizContext";

interface IAssisrStarQuizProps {
}

interface IAssisrStarQuizState {
    quizContext: IQuizContext;
}

export default class AssisrStarQuiz extends React.Component<IAssisrStarQuizProps, IAssisrStarQuizState> {
    constructor(props: IAssisrStarQuizProps) {
        super(props);
        this.state = {
            quizContext: quiz,
        };
    }

    public componentDidMount() {
        const audio = (document.getElementById("sound") as HTMLAudioElement);
        if (audio) {
            audio.volume = 0.07;
            audio.play();
        }
    }

    public render() {
        return (
            <div className={`root-star-quiz`}>
                <QuizContext.Provider value={this.state.quizContext}>
                    <BrowserRouter basename={process.env.PUBLIC_URL}>
                        <Route path="/" exact component={Menu} />
                        <Route path="/quiz/" component={Quiz} />
                    </BrowserRouter>
                </QuizContext.Provider>
                <audio autoPlay loop id="sound">
                    <source src="./static/sound/darth.mp3" type="audio/mpeg" />
                </audio>
            </div>
        );
    }
}
