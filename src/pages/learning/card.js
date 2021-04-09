import random from "../../hooks/random";
import { useEffect, useRef, useState } from 'react';
import { putColl } from "../../dataBaseOperations/business"

export default function Card(props) {
   const polishWord = useRef();
   const englishWord = useRef();
   const span = useRef();
   const button1 = useRef();
   const button2 = useRef();
   const button3 = useRef();
   const [licznik, setLicznik] = useState(0)
   const [id, setId] = useState(0)
   const [key, setKey] = useState(props.pojemnik[0].key)
   const memoryDefault = JSON.parse(window.localStorage.getItem('memoryDefault'));
   const [memory, setMemory] = useState({ ...props.memory })
   const [tab, setTab] = useState({
      id: null,
      key: null
   })
   const [whichWas, setWhichWas] = useState({
      randomNumber: null,
      whichBox: ""
   })

   const odkryjKarte = () => {
      englishWord.current.style.opacity = '1';
      span.current.style.display = 'none';
      button1.current.style.display = 'inline-block';
      button2.current.style.display = 'inline-block';
      button3.current.style.display = 'inline-block';
   }

   function write(id, key, randomNumber, whichBox) {
      setTab({ id, key })
      setWhichWas({ randomNumber, whichBox })
   }

   function helpFunction(tabb, name) {
      const randomNumber = random(1, tabb.length)
      let newId = null;
      const newKey = tabb[randomNumber]
      if (tab.key !== newKey) {
         props.pojemnik.map((el, index) => {
            if (el.key === newKey) {
               newId = index
            }
         })
         setKey(newKey)
         setId(newId)
         write(newId, newKey, randomNumber, name)
         return true
      }
      else return false
   }

   function sth() {
      let wylosowane = false;
      while (wylosowane !== true) {
         const randomN = Math.random();
         console.log(randomN)
         if (randomN < 0.2 && memory.umiem.length > 1) {
            if (helpFunction(memory.umiem, "umiem"))
               wylosowane = true
         }
         else if (randomN < 0.5 && memory.prawieUmiem.length > 1) {
            if (helpFunction(memory.prawieUmiem, "prawieUmiem"))
               wylosowane = true
         }
         else if (randomN <= 1 && memory.nieUmiem.length > 1) {
            if (helpFunction(memory.nieUmiem, "nieUmiem"))
               wylosowane = true
         }
      }
   }

   function next() {
      setLicznik(licznik + 1)
      if (licznik < props.pojemnik.length * 2)
         sth()
      englishWord.current.style.opacity = '0';
      span.current.style.display = 'flex';
      button1.current.style.display = 'none';
      button2.current.style.display = 'none';
      button3.current.style.display = 'none';
   }

   function splicee() {
      if (whichWas.whichBox === "umiem") {
         memory.umiem.splice(whichWas.randomNumber, 1)
      }
      else if (whichWas.whichBox === "prawieUmiem") {
         memory.prawieUmiem.splice(whichWas.randomNumber, 1)
      }
      else if (whichWas.whichBox === "nieUmiem") {
         memory.nieUmiem.splice(whichWas.randomNumber, 1)
      }
   }

   const learnChendler = (tab) => {
      splicee();
      tab.push(key);
      putColl({ id: `${props.adres}/memory`, form: memory })
      props.setscore(memory.umiem.length - 1 ? Math.floor(((memory.umiem.length - 1) / props.pojemnik.length) * 100) : 0)
      next();
   }

   useEffect(() => {
      sth()
   }, [])
   return (
      <>
         {licznik <= props.pojemnik.length * 2 ? <div id="collection-words" className="flex flex-ai-c flex-jc-c">
            <div id="collection-words-wordLeft" className="word flex flex-ai-c flex-jc-c">
               <div ref={polishWord} className="flex flex-jc-c flex-ai-c letters">{props.pojemnik[id].polish}</div>
               <span className="flex flex-ai-c flex-jc-c">Pokaż</span>
            </div>
            <div id="collection-words-wordRight" className="word flex flex-ai-c flex-jc-c">
               <div ref={englishWord} className="flex flex-jc-c flex-ai-c letters">{props.pojemnik[id].english}</div>
               <span ref={span} onClick={odkryjKarte} className="flex flex-ai-c flex-jc-c">Pokaż</span>
            </div></div>
            : <button className="button oneMoreTime" onClick={() => props.oneMoreTime()}>Jeszcze raz?</button>}

         <div id="collection-buttons" className="flex flex-ai-c">
            <button id="show" className="button">Pokaż</button>
            <button ref={button1} id="know" className="button" onClick={() => learnChendler(memory.nieUmiem)}>Nie umiem</button>
            <button ref={button2} id="half" className="button" onClick={() => learnChendler(memory.prawieUmiem)}>Prawie umime</button>
            <button ref={button3} id="notKnow" className="button" onClick={() => learnChendler(memory.umiem)}>Umiem</button>
         </div>
      </>
   );
}