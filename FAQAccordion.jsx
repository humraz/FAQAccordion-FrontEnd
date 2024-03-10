import React, { useEffect, useState } from "react"
import "./FAQAccordion.css"
import plus from "../assets/icon-plus.svg"
import minus from "../assets/icon-minus.svg"
import titleicon from "../assets/icon-star.svg"

export default function FAQAccordion() {
    return (
        <div className="maincard">
            <div className="">
                <div className="title">
                    <img src={titleicon} ></img>
                    <h1 className="faqstitle">FAQs</h1>
                </div>
                <div className="gridrows">
                    <Questioncomponent title="Question 1" content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque consequatur voluptatibus nobis magni commodi recusandae rerum facere neque officia culpa" />
                    <Questioncomponent title="Question 2" content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque consequatur voluptatibus nobis magni commodi recusandae rerum facere neque officia culpa" />
                    <Questioncomponent title="Question 3" content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque consequatur voluptatibus nobis magni commodi recusandae rerum facere neque officia culpa" />
                    <Questioncomponent title="Question 4" content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque consequatur voluptatibus nobis magni commodi recusandae rerum facere neque officia culpa" />
                </div>
            </div>
        </div>
    );
}


function Questioncomponent(props) {
    const [btn, setbtn] = useState("");

    function handleclick(question) {

        if (btn === question)
            setbtn("");
        else
            setbtn(question)

        console.log(question + " " + btn)
    }

    useEffect(() => {

    }, [btn])

    return (
        <>
            <div className="questionsfull">
                <div className="questionsmain">
                    <p className="questionheading">{props.title}</p>
                    <button className="questionbutton" onClick={() => handleclick(props.title)}>{btn === props.title ? <img src={minus}></img> : <img src={plus}></img>}</button>

                </div>
                {
                    btn === props.title &&
                    (<div className="question-content">
                        <p>{props.content}</p>
                    </div>)
                }
            </div>
        </>
    );
}