let newsList = document.getElementById("newsList");
let newspage = document.getElementById("newspage")


for(let index = 0; index < news.length; index++) {

    // let new = news[index]; // post is an object
    //post.title = "HELLO WORLD"
  
    let newsItem = `
    <li>
      <label>${news.articles.title}</label>
      <p>${news.articles.description}</p>
    </li>
    `
  
    newspage.insertAdjacentHTML('beforeend',newsItem)
  
  }

// let completed = ''
// console.log(news.articles)
// for(let i = 0; i <news.articles.length; i++){
//     if (news.articles[i] == "TechCrunch"){
//         let newsItem = `
//         <li>
//             <label>${news.articles[i].author}</label>
//             <div>
//             <p>${news.articles[i].title} </p>
//             <p>${news.articles[i].description}</p>
//             <p>${news.articles[i].url}</p> 
//             <p id="image"><img src="${news.articles[i].urlToImage}"></img></p>
//             <p>${news.articles[i].publishedAt}</p>
//             </div>
//         </li>
//     `
//     completed += newsItem
    
//     }
//     // 
    
//     // let dish = dishes[i]

//     // let dishItem = `
//     // <li>
//     //     <h2>Starters</h2>
//     //     <label>${dish.title}</label>
//     //     <p>${dish.description} - ${dish.price}</p>
//     //     <img src="${dish.imageURL}">

//     // </li>
//     // `
//     // starters.insertAdjacentHTML('beforeend',dishItem)
// }
// newspage.innerHTML = completed