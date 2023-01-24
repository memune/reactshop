import {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components'
import { Nav, TabContent } from 'react-bootstrap'

let Btn = styled.button`
    background: ${ props => props.bg };
    color: ${ props => props.bg == 'blue' ? 'white' : 'black' };
    padding: 10px;
`

let Box = styled.div`
    background: grey;
    padding: 20px;
`

let NewBtn = styled.button(Btn)

const Detail = (props) => {


    let [alert, setAlert] = useState(true)

    useEffect(()=>{    
        let ab = setTimeout(()=>{setAlert(false)}, 2000)
        
        console.log(2)
        return () => {
            clearTimeout(ab)
            console.log(1)
        }
    })

    let {id} = useParams();
    let 찾은상품 = props.shoes.find((x)=>{
        return x.id == id
    })

    let [탭, 탭변경] = useState(0)
   
    return (
        <div className="container">
            {alert ? (
            <div className="alert alert-warning">
                2초 이내 구매시 할인
            </div>) : null }

            <div className="row">
                <div className="col-md-6">
                <img src={ "https://codingapple1.github.io/shop/shoes"+(찾은상품.id+1)+".jpg" } width="100%" />
                </div>
                <div className="col-md-6 mt-4">
                    <h4 className="pt-5">{찾은상품.title}</h4>
                    <p>{찾은상품.content}</p>
                    <p>{찾은상품.price}원</p>
                    <button className="btn btn-danger">주문하기</button>
                </div>
            </div> 

            <Nav variant="tabs"  defaultActiveKey="link0">
                <Nav.Item>
                <Nav.Link onClick={()=>{ 탭변경(0)}} eventKey="link0">버튼0</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                <Nav.Link onClick={()=>{ 탭변경(1)}} eventKey="link1">버튼1</Nav.Link>
                </Nav.Item> 
                <Nav.Item>
                <Nav.Link onClick={()=>{ 탭변경(2)}}eventKey="link2">버튼2</Nav.Link>
                </Nav.Item>
            </Nav>

            <Tab 탭={탭}/>


        </div>
    )
}


function Tab(props) {
    if (props.탭 == 0) {
        return <div>내용0</div>
    } else if (props.탭 == 1) {
        return <div>내용1</div>
    } else if (props.탭 == 2) {
        return <div>내용2</div>
    }
}
        
export default Detail