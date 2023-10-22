export default function List() { 
  let 상품 = ['Tomatoes', 'Pasta', 'Coconut']

  return (
      <div>
        <h1 className="title"> 상품 목록 </h1>
        {
          상품.map((a, i)=>{
            return (
              <div className="food" key={i}>
                <img src={ `food${i}.png` } className="food-img"/>
                <h4> { a } $40 </h4>
              </div>
            )
          })
        }  
      </div>
    )
  }
  