let ulTasks = $('#ulTasks')
let btnAdd = $('#btnAdd')
let btnClear = $('#btnClear')
let inpNewTask = $('#inpNewTask')
let btnCleanUp= $('#btnCleanUp')
let btnSort=$('#btnSort')

function addItem() {
    let listItem = $('<li>', {
        'class': 'list-group-item',
        text: inpNewTask.val()
    })
    listItem.click(() => {
        // console.log('clickedf', event.target)
        // $(event.target).toggleClass('disabled')
        $(listItem).toggleClass('done')
    })
    ulTasks.append(listItem)
    inpNewTask.val('')
}
function clearDone() {
    $('#ulTasks .done').remove()
    toggleInputButtons()

}
// function toggleInputButtons(valIsEmpty) {
//    if(!valIsEmpty)
//    {
//        btnClear.prop('disabled',false )
//        btnAdd.prop('disabled', false)
//    }
//    else{
//        btnClear.prop('disabled', true)
//        btnAdd.prop('disabled', true)
//    }
// }
function toggleInputButtons()
{
    btnClear.prop('disabled', inpNewTask.val()=='')
    btnAdd.prop('disabled', inpNewTask.val()=='')
    btnSort.prop('disabled', ulTasks.children().length<1)
    btnCleanUp.prop('disabled', ulTasks.children().length<1)
}

// inpNewTask.on('input',()=>{
//     // console.log(inpNewTask.val())
//     toggleInputButtons(inpNewTask.val() =='')
// })
 
inpNewTask.on('input', toggleInputButtons)
function sortDone()
{
    $('#ulTasks .done').appendTo(ulTasks)
}

inpNewTask.keypress((e) => {
    if (e.which == 13) {
        addItem();
        toggleInputButtons()
    }
})

btnAdd.click(() => {
    addItem();
    toggleInputButtons()
})


// btnAdd.click(addItem)
// is tarike se bhi call kar skte hai 
btnClear.click(() => {
    inpNewTask.val('')
    toggleInputButtons()
})
btnCleanUp.click(()=> {

    clearDone()
})
 
btnSort.click(()=> {
    sortDone()
})