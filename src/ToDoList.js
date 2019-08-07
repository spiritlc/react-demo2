import React, { useState } from 'react';

// 表单
function InputBlock(props) {
  const [name, changeName] = useState('')
  function addName() {
    if (!name) { 
      alert('请输入名称')
    } else {
      props.addNoList(name)
    }
  }
  return (
    <div>
      <input value={name} type="text" onChange={ e => changeName(e.target.value) }/>
      <button onClick={addName}>添加</button>
    </div>
  )
}
// 展示未完成
function ShowNoList(props) {
  return (
    <div>
      {props.noArr.map((item, index) => {
        return <div key={index} onClick={ () => props.changeNoList(item, index) }>{ item.name }</div>
      })}
    </div>
  )
}
// 展示已完成
function ShowAllList(props) {
  return (
    <div>
      {props.doneArr.map((item, index) => {
        return <div key={ index } onClick={ () => props.changeDoneToNo(item, index) } >{ item.name }</div>
      })}
    </div>
  )
}

export default function ToDoList() {
  const [noArr, changeNoArr] = useState([])
  const [doneArr, changeDoneArr] = useState([])
  function addNoList(name) {
    changeNoArr([...noArr, {name}])
  }
  function changeNoToDone(item, index) { // 切换未完成为已完成
    let newArr = Array.prototype.concat(noArr)
    newArr.splice(index, 1)
    changeNoArr(newArr)
    changeDoneArr([...doneArr, item])
  }
  function changeDoneToNo(item, index) { // 切换未完成为已完成
    let newArr = Array.prototype.concat(doneArr)
    newArr.splice(index, 1)
    changeNoArr([...noArr, item])
    changeDoneArr(newArr)
  }
  return (
    <div>
      <InputBlock addNoList={addNoList}></InputBlock>
      进行中
      <ShowNoList changeNoList={changeNoToDone} noArr={noArr}></ShowNoList>
      已完成
      <ShowAllList changeDoneToNo={changeDoneToNo} doneArr={doneArr}></ShowAllList>
    </div>
  )
}