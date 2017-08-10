import React from 'react';
import * as Cookies from 'js-cookie';
import './question-page.css';

export default class QuestionPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            questions: []
        };
    }

    componentDidMount() {
        const accessToken = Cookies.get('accessToken');
        fetch('/api/questions', {
                headers: {
                    'Authorization': `Bearer ${accessToken}`
                }
            }).then(res => {
            if (!res.ok) {
                throw new Error(res.statusText);
            }
            return res.json();
        }).then(questions =>
            this.setState({
                questions
            })
        );
    }

    render() {
        const questions = this.state.questions.map((question, index) =>
            <li key={index}>{question}</li>
        );

        return (
            // <ul className="question-list">
            //     {questions}
            // </ul>
            <div className='questions-page'>
                <form>
                    {questions}
                    <input type='text' placeholder='Type in the English translation'></input>
                    <button type='submit'>Submit</button>
                </form>
            </div>
        );
    }
}
