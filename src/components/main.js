import './main.css';
import react from "react";
import * as tf from '@tensorflow/tfjs';
//import { loadGraphModel } from '@tensorflow/tfjs-converter';
import { useState, useEffect, useCallback } from "react"
//import Predict from './Predict';
import { Bar, Line } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import Coder from './code';

function Main() {
    let boardArray = new Array(28).fill(0).map(r => new Array(28).fill(0));
    const [toggle, setToggle] = useState(false)
    const [board, setBoard] = useState(boardArray)
    const [, updateState] = useState()
    const forceUpdate = useCallback(() => updateState({}), [])
    const url = 'https://raw.githubusercontent.com/nishant-sg/digitRecognizerBackend/master/digit_recog_js/model.json';
    const [model, setModel] = useState();
    const [dataforgraph, setdataforgraph] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
    const state = {
        labels: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
        datasets: [
            {
                label: 'Prediction Percentage',
                backgroundColor: 'rgba(75,192,192,1)',
                borderColor: 'rgba(0,0,0,1)',
                borderWidth: 2,
                data: dataforgraph,
            }
        ]
    }

    const draw = (i, j) => {
        board[i][j] = 1;
        board[i - 1][j] = 1;
        board[i - 1][j - 1] = 1;
        board[i][j - 1] = 1;
        board[i + 1][j] = 1;
        board[i - 1][j + 1] = 1;
        board[i + 1][j + 1] = 1;
        board[i + 1][j - 1] = 1;
        board[i][j + 1] = 1;
        forceUpdate();
    }

    const resetBoard = () => {
        //console.log("resetBoard");
        for (let i = 0; i < board.length; i++) {
            for (let j = 0; j < board[i].length; j++) {
                board[i][j] = 0;
            }
        }

        setdataforgraph([0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
        forceUpdate();
    }

    document.addEventListener('mouseup', function () {
        setToggle(false);
    });

    document.addEventListener('mousedown', function () {
        setToggle(true);
    });

    async function loadModel(url) {
        try {
            const model1 = await tf.loadLayersModel(url);
            setModel(model1);
            console.log("Load model success");
            predictNumber();
        }
        catch (err) {
            console.log(err);
        }
    }

    const predictNumber = async () => {
        console.log("predicting");
        let tensor = tf.tensor(board).expandDims().toFloat();
        //let tensor = tf.fill([1,28,28],0);
        console.log(tensor.shape);
        let predictions = await model.predict(tensor).data();
        let results = Array.from(predictions);
        console.log(results);
        let min1 = Number.MAX_VALUE;
        let max1 = 0;
        for (let i = 0; i < results.length; i++) {
            max1 = max1 + results[i];
            if (results[i] < min1) {
                min1 = results[i];
            }
        }
        console.log(min1, max1);
        for (let i = 0; i < results.length; i++) {
            results[i] = convertRange(results[i], [min1, max1], [1, 100])
        }
        //console.log(convertRange( 328.17, [ min1, max1 ], [ 0, 100 ] ));
        console.log("results", results);
        setdataforgraph(results);
    }

    function convertRange(value, r1, r2) {
        return (value - r1[0]) * (r2[1] - r2[0]) / (r1[1] - r1[0]) + r2[0];
    }

    useEffect(() => {
        tf.ready().then(() => { loadModel(url) });
        //console.log(board)
    }, [])

    return (
        <div className="main">
            <div className="main-board">
                <div className="main-board-column">
                    {board.map((i, j) => {
                        return (
                            <div className="main-board-row" key={j}>
                                {board[j].map((l, k) => {
                                    if (l === 0) {
                                        return <div className="e-block" key={k} onClick={() => { draw(j, k) }} onMouseMove={() => { if (toggle) { draw(j, k) } }}> </div>;
                                    } else if (l === 1) {
                                        return <div className="s-block" key={k}> </div>;
                                    }
                                })}
                            </div>
                        );
                    })}
                </div></div><div>
                <div className="main-board-buttons">
                <button className="reset-board" onClick={() => { resetBoard() }}> Reset </button>
                <button className="predict-board" onClick={() => { predictNumber() }}>Predict</button>
            </div>
            </div>
            <div className="main-graph">
                <Bar data={state}
                    options={{
                        title: {
                            display: true,
                            text: 'Average Rainfall per month',
                            fontSize: 20
                        },
                        legend: {
                            display: true,
                            position: 'right'
                        }
                    }}
                />
            </div>
        </div>
    );
}

export default Main;
