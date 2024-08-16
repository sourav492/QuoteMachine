import React,{Component, useEffect, useState} from 'react';
import './style.css'
import { FaQuoteLeft } from "react-icons/fa";

//
const data = [
    {
    "text": "Genius is one percent inspiration and ninety-nine percent perspiration.",
    "author": "Thomas Edison"
    },
    {
    "text": "You can observe a lot just by watching.",
    "author": "Yogi Berra"
    },
    {
    "text": "A house divided against itself cannot stand.",
    "author": "Abraham Lincoln"
    },
    {
    "text": "Difficulties increase the nearer we get to the goal.",
    "author": "Johann Wolfgang von Goethe"
    },
    {
    "text": "Fate is in your hands and no one elses",
    "author": "Byron Pulsifer"
    },
    {
    "text": "Be the chief but never the lord.",
    "author": "Lao Tzu"
    },
    {
    "text": "Nothing happens unless first we dream.",
    "author": "Carl Sandburg"
    },
    {
    "text": "Well begun is half done.",
    "author": "Aristotle"
    },
    {
    "text": "Life is a learning experience, only if you learn.",
    "author": "Yogi Berra"
    },
    {
    "text": "Self-complacency is fatal to progress.",
    "author": "Margaret Sangster"
    },
    {
    "text": "Peace comes from within. Do not seek it without.",
    "author": "Buddha"
    },
    {
    "text": "What you give is what you get.",
    "author": "Byron Pulsifer"
    },
    {
    "text": "We can only learn to love by loving.",
    "author": "Iris Murdoch"
    },
    {
    "text": "Life is change. Growth is optional. Choose wisely.",
    "author": "Karen Clark"
    },
    {
    "text": "You'll see it when you believe it.",
    "author": "Wayne Dyer"
    },
    {
    "text": "Today is the tomorrow we worried about yesterday.",
    "author": "type.fit"
    }
]


// Random function for bg
function getRandomColor(){
    const r = Math.floor(Math.random()*255)
    const g = Math.floor(Math.random()*255)
    const b = Math.floor(Math.random()*255)
    const a = Math.floor(Math.random()*0.8)+0.6
    return `rgb(${r},${g},${b},${a})`
}

class App extends Component{
    constructor(props){
        super(props)
        const color = getRandomColor()
        const index = Math.floor(Math.random()*data.length) 
        this.state = {
            text: data[index].text,
            author: data[index].author,
            bgcolor: color
        }
        this.handleClick  = this.handleClick.bind(this);
    }
    
    handleClick(){
        const color = getRandomColor()
        const index = Math.floor(Math.random()*16) 
        this.setState({
            text: data[index].text,
            author: data[index].author,
            bgcolor: color
        })

    }

    
    render(){
        // change backgroud color
        const main_div=(color)=>({
            backgroundColor:  color,
            width: `100vw`,
            height: `100vh`,
        });
        const text_style = (color)=>({
            color: color,
            fontSize: `25px`
        })
        const author_style = (color)=>({
            color: color,
        })
        const bgColor = (color)=>({
            backgroundColor: color,
            borderRadius: `2px`,
            textAlign: `center`,
        })
        
        return (
            <div style={main_div(this.state.bgcolor)} id='wrapper'>
                <div id='quote-box'>
                    <div id='row1'>
                        <div id='text'>
                            <FaQuoteLeft color={this.state.bgcolor} size={`2vw`}/>
                            <span style={text_style(this.state.bgcolor)}>  {this.state.text}
                            </span>
                        </div>
                    </div>
                    <div id='row2'>
                        <p id='author'>
                        <span style={author_style(this.state.bgcolor)}>-{this.state.author}</span>
                        </p>
                    </div>
                    <div id='footer'>
                        <div id='footer-row1'>
                            <div>
                                <button style={bgColor(this.state.bgcolor)}>
                                        <a id='tweet-quote' href='https://twitter.com/intent/tweet' target="_top"><span>X</span></a>
                                </button>
                            </div>
                            <div>
                                <button id='threads' style={bgColor(this.state.bgcolor)}>
                                        <a href='https://threads.net' target="_blank"><span>threads</span></a>
                                </button>
                            </div>
                        </div>
                        <div id='footer-row2'>
                            <button id='new-quote' style={bgColor(this.state.bgcolor)} onClick={this.handleClick}>
                                    New Quote
                            </button>
                        </div>
                    </div>
                    
                </div>
            </div>
        )
    }
}

export default App