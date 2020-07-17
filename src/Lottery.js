import React, { Component } from 'react';
import Ball from "./Ball"
import "./Lottery.css"
class Lottery extends Component {
    static defaultProps = {
        maxBalls: 6,
        title: "Lottery",
        maxNum: 40
    }
    constructor(props) {
        super(props)
        this.state = {
            num: Array.from({ length: this.props.maxBalls })
        }
    }
    generator = () => {

        //this way with callBack with setState
        // this.setState(curState => ({
        //     num: curState.num.map(n => (
        //         Math.floor(Math.random() * this.props.maxNum) + 1

        //     ))
        // })
        // )
        let rand =
            this.state.num.map(n => (n = Math.floor(Math.random() * this.props.maxNum) + 1))
        this.setState({
            ...this.state.num, num: rand
        })

    }
    clickHandler = () => {
        this.generator()
    }
    render() {
        return (
            <section className="Lottery">
                <h1>{this.props.title}</h1>
                <div>
                    {this.state.num.map(n => (
                        <Ball num={n} />

                    ))}


                </div>
                <button onClick={this.clickHandler}>Lottery</button>
            </section>
        )
    }

}
export default Lottery