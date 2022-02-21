import {sideb} from "./components/sidebar.js";
import {apiCall, appendArticles } from "./scripts/main.js"
  let sideB = sideb;
  document.querySelector("#sidebar").innerHTML = sideB()
  let url="https://shrouded-earth-23381.herokuapp.com/api/headlines/india";
  let IndiaData = await apiCall(url);
  console.log(IndiaData)
  let main = document.querySelector("#main")
  appendArticles(IndiaData,main)

  document.querySelector("#searchbar").addEventListener("keypress",(elem)=>{
    if(elem["key"] == "Enter"){
      let searchWord = document.querySelector("#searchbar").value
      if(searchWord == "cricket" || searchWord == "Cricket" ||searchWord == "CRICKET"){
        localStorage.setItem("searchWord",searchWord)
        location.href ="search.html"
      }
      else {
        alert("Key Not found");
      }
    }
  })
  document.querySelector("#home").addEventListener("click",()=>{
    location.href="index.html";
  })