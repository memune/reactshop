
import Card from './Card'
import axios from 'axios'
import { useState } from 'react'

const Main = ({shoes, setShoes})=>{

    let [buttonCount, setButtonCount] = useState(0)
    
    return (
        <div>
            <div className="main-bg"></div>
            <div className="container">
                <div className="row">
                { shoes.map((a, i)=>{
                return (
                <Card shoes={shoes[i]} i={i}/>
                )
                })
                }
                </div>
            </div>
            <button onClick={()=>{
                setButtonCount(buttonCount+1)
                console.log(buttonCount)
                
                buttonCount == 0 ? (
                    axios.get('https://codingapple1.github.io/shop/data2.json')
                    .then((result)=>{ 
                    let copy = [...shoes, ...result.data];
                    setShoes(copy);
                    })
                ) : (
                    axios.get('https://codingapple1.github.io/shop/data3.json')
                    .then((result)=>{ 
                    let copy = [...shoes, ...result.data];
                    setShoes(copy);
                    }))


            }}>버튼</button> 
        </div>

    )
    
}

export default Main

    