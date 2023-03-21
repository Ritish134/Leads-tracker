let myLeads = []
let oldLeads =[]

const inputEL =document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl= document.getElementById("ul-el")
const deleteBtn =document.getElementById("delete-btn")
const LeadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))
const tabBtn = document.getElementById("tab-btn")

if(LeadsFromLocalStorage) {
    myLeads= LeadsFromLocalStorage
    Render(myLeads)
}


tabBtn.addEventListener("click",function(){
    chrome.tabs.query({active: true, currentWindow : true}, function (tabs){
        myLeads.push(tabs[0].url)
    localStorage.setItem("myLeads", JSON.stringify(myLeads) )
    Render(myLeads)

    })
    
})
deleteBtn.addEventListener("dblclick", function(){
    localStorage.clear()
    myLeads=[]
    Render(myLeads)
})

inputBtn.addEventListener("click",function() {
    myLeads.push(inputEL.value)
    inputEL.value = ""
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    Render(myLeads)
    console.log( localStorage.getItem("myLeads"))
})
function Render(Leads) {
    let listItems = ""
for(let i= 0;i< Leads.length; i++) {
    listItems += `
    <li>
        <a target = '_blank' href= '${Leads[i]}'>
            ${Leads[i]}
        </a>
    </li>        
    `

    // const li = document.createElement("li")
    // li.textContent = myLeads[i]
    // ulEl.append(li)

}
    ulEl.innerHTML = listItems

}
// falsy values
//false 
//0
//""
//null--> developer siganalize emptiness
// undefined --> js siganilize emptiness
//NaN