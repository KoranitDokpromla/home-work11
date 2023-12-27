const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App/>)

// function Counter(props) {
// const {item : {id, number}, hdlUpdate} = props
function Counter({item : {id, number}, hdlUpdate} ) {

return (
<div className='counter'>
<button onClick = {()=>hdlUpdate(id,1)}> + </button>
<h3>{number}</h3>
<button onClick = {()=>hdlUpdate(id,-1)}> - </button>
<button onClick = {()=>hdlUpdate(id,-number)}> C </button>
<button> X </button>
</div>
// <div className='counter'>
// <button onClick = {()=>props.hdlUpdate(props.item.id,-1)}> - </button>
// <h3>{props.item.number}</h3>
// <button onClick = {()=>props.hdlUpdate(props.item.id,1)}> + </button>
// <button onClick = {()=>props.hdlUpdate(props.item.id,-props.item.number)}> C </button>
// </div>
)
}

function SumInfo(props) {
const stTitle = {
color : props.color,
fontSize : props.size==='big' ? '50px' : '40px'
}
return (
<div className='suminfo'>
{/* {/ <h1 style={stTitle}>Sum = 0</h1> /} */}
<h1 style={ { color: props.color, fontSize: '50px' } }>Sum = 0</h1>
</div>
)
}

function App() {

const [counters, setCounters] = React.useState([ {id: 1, number: 0} ])
// let allCounter = Array(counters).fill(<Counter />)

const hdlUpdate = (id, num) => {
const cloneCounters = [...counters]
let idx = cloneCounters.findIndex( el => el.id === id)
if( cloneCounters[idx].number + num < 0) {
return
}
cloneCounters[idx].number += num
setCounters(cloneCounters)
}

// ปุ่ม C ต้องใช้ได้
// ตัวเลขต้องไม่ติดลบ
const hdlAddCounter = ()=>{
let newId = counters.length===0 ? 1 : counters.at(-1).id +1
// setCounter([...counters, {id: newId, number : 0}])
const cloneCounters = [...counters]
cloneCounters.push( {id: newId, number: 0} )
setCounters(cloneCounters)
}

return (
<>
<h1 className='text-center'>Codecamp Academy 01</h1>
<button className='text-center' onClick={hdlAddCounter}>Add Counter</button>
<SumInfo color="mediumpurple" size="big"/>

{counters.map( el => {
return <Counter key={el.id} item={el} hdlUpdate={hdlUpdate}/>
} )}

</>
)
}