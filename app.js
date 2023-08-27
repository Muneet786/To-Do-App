// function foo(){
//     var a = document.getElementById('inp')
//     var b = a.setAttribute('class','aaa')
//     console.log(b)
// }
var getol = document.getElementById('ol')

function foo(){
    var a = document.getElementById('inp')
    var li = document.createElement('li')
    var litext = document.createTextNode(a.value)
    li.appendChild(litext)
    getol.appendChild(li)
    a.value = ''
    var deletebtn = document.createElement('button')
    var deletebtntext = document.createTextNode('Delete')
    deletebtn.appendChild(deletebtntext)
    li.appendChild(deletebtn)
    deletebtn.setAttribute('onclick','del(this)')
    var editbtn = document.createElement('button')
    var editbtntext = document.createTextNode('Edit')
    editbtn.appendChild(editbtntext)
    li.appendChild(editbtn)
    editbtn.setAttribute('onclick','editfun(this)')
    deletebtn.setAttribute('class','btn btn-danger')
    editbtn.setAttribute('class','btn btn-info')
}

function deleteall(){
    getol.innerHTML = ''
}

function del(e){
      e.parentNode.remove()
}

function editfun(e){
   var a = prompt('Enter Edit Value',e.parentNode.firstChild.nodeValue)
   e.parentNode.firstChild.nodeValue = a
}