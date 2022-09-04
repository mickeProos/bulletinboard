import React from 'react'
import { useState } from 'react';
import ReactPost from './ReacPost';

let data = [
    {
      question: "Vad är tre fördelar med att använda React?",
      answer: "	React är det största och mest använda javascript ramverket, vilket gör att det finns mycket tillgänglig information och lösningar online.	React är komponentbaserat där varje komponent är isolerad, vilket gör att det är enklare för utvecklare att uppdatera sidan.	React har snabba rendringstider.",
      liked: false
    },
    {
      question: "Vad betyder Single Page Application och vad skiljer det från en “vanlig” webbplats?",
      answer: "I en Single Page Application (eller SPA) så får vi endast tillbaka en HTML-fil från servern. Det här innebär att en SPA hanterar hela sidan med javascript vilket i sin tur möjliggör att man inte behöver hämta information från servern igen och ladda om sidan som i en ”vanlig” hemsida. ",
      liked: false
    },
    {
      question: "Nämn tre skillnader mellan React och Angular.",
      answer: "React är enklare att lära sig än angular. React är mer SEO-vänligt än Angular. Angular använder sig av en vanlig DOM medan React använder sig av en virtuell DOM.",
      liked: false
    },
  ]


function BulletinBoard() {
    let [questions, setQuestions]= useState(data)
  
    let likePost = (index)=>{
      data[index].liked = true
      setQuestions([...data])
      
    }
  return (
    <div>
    {questions && questions.map((item, i)=><ReactPost likePost={likePost} id={i} data={item} />)}
    </div>
  )
}

export default BulletinBoard