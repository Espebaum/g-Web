import React from 'react'
import Link from "next/Link"
import HelloComponent from './data'

export default function Cart() { // 부모 컴포넌트
  let MyCart: string[] = ['Tomatoes', 'Pasta']
  return (
    <div>
      <h4 className="title">Cart</h4>
      <HelloComponent/>
      <CartItem item={MyCart[0]} />
      <CartItem item={MyCart[1]} />
      <CartItem />
      <Payment/>
      <Banner Card="롯데카드"/>
      <Button Color="blue"/>
    </div> 
  )
} 

function Button(props) {
  return <button style={{ 
      background : props.Color, 
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100px',
      height: '40px',
    }}>Push This</button>
}

function Banner(props) {
  return (<h5 className='title'> {props.Card} 결제 행사 중</h5>)
}

function CartItem(props) { // 자식 컴포넌트
  return (
    <div className="cart-item">
      <p>{props.item}</p>
      <p>$40</p>
      <p>1개</p>
    </div>
  )
}

function Payment() {
  return (
    <div className="payment">
      <p><Link href="/cart/payment">결제하기</Link></p>
    </div>
  )
}