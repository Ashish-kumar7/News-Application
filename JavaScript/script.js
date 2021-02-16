console.log("Ashish is Great");

//a920ac689c294c5b97983e06b29912bb
let sources='google-news';
let api='a920ac689c294c5b97983e06b29912bb';

let newsAccordion=document.getElementById("newsAccordion");

const xhr=new XMLHttpRequest();

xhr.open('GET',`http://newsapi.org/v2/top-headlines?sources=${sources}&apiKey=${api}`,true);

xhr.onload=function(){
    if(this.status===200){
        let json=JSON.parse(this.responseText);
      
        let articles=json.articles;
       // console.log(articles);
        let totnews ="";
        articles.forEach(function(element,index) {
            let news=`
            <div class="card">
            <div class="card-header" id="heading${index}">
                <h5 class="mb-0">
                    <button class="btn btn-link" data-toggle="collapse" data-target="#collapse${index}"
                        aria-expanded="true" aria-controls="collapse${index}">
                        <b>Breaking News ${index+1} : </b> ${element.title}
                    </button>
                </h5>
            </div>

            <div id="collapse${index}" class="collapse " aria-labelledby="heading${index}" data-parent="#newsAccordion">
                <div class="card-body">${element.content}. <a href="${element.url}" target="_blank" >Read more Here. </a> </div>
            </div>
        </div>
`
    
    totnews+=news;
    newsAccordion.innerHTML=totnews;
    });
    
    }
    else{
        console.log("Error");
    }
}


xhr.send();

