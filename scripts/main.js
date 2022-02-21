async function apiCall(url) {
    //add api call logic here
    try{
        let res = await fetch(url);
        let data = await res.json();
        return data;

    }catch(err){
        alert(err);
    }

}


function appendArticles(articles, main) {
    //add append logic here
   if(articles.length == 1){
    articles.map((elem)=>{
        let mainDiv = document.createElement("div");
        mainDiv.id = "mainDiv";
        let img =  document.createElement("img");
        img.src = elem.urlToImage;
        let descp = document.createElement("div");
        descp.textContent = elem.title;
        descp.style.fontWeight = "600";
        let details = document.createElement("p");
        details.textContent = elem.description;
        mainDiv.append(img,descp,details);
        main.append(mainDiv);
    });
   }
   else{
    articles.map((elem)=>{
        let mainDiv = document.createElement("div");
        mainDiv.id = "mainDiv";
        let img =  document.createElement("img");
        img.src = elem.urlToImage;
        let descp = document.createElement("div");
        descp.textContent = elem.title;
        descp.style.fontWeight = "600";
        mainDiv.addEventListener("click",()=>{
            localStorage.setItem("article",JSON.stringify(elem));
            location.href="news.html";
        });
        
        mainDiv.append(img,descp);
        main.append(mainDiv);
    });
   }

}

export { apiCall, appendArticles }