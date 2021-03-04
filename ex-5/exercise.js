function loadBooks(array) {

}

// Paste here your array
var books = [
    { title: 'The Design of EveryDay Things',  author: 'Don Norman', alreadyRead: false , img : "https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.techexplorist.com%2Fwp-content%2Fuploads%2F2017%2F06%2Flovers-touch.jpg&imgrefurl=https%3A%2F%2Fwww.techexplorist.com%2Flovers-touch-breathing-heartbeat-syncs-pain-wanes%2F6077%2F&tbnid=-a-iXAZ_wxWfmM&vet=12ahUKEwjknuG9kJLvAhVVNuwKHVHQDUYQMygLegUIARDzAQ..i&docid=vu1A2iOdnXVB3M&w=1500&h=1133&q=lovers&safe=active&ved=2ahUKEwjknuG9kJLvAhVVNuwKHVHQDUYQMygLegUIARDzAQ"},
    { title: 'The power of now', author: 'Ekhart Tolle', alreadyRead: true , img : "https://www.google.com/imgres?imgurl=https%3A%2F%2Fbeststatusquote.com%2Fwp-content%2Fuploads%2F2020%2F05%2FLove-Birds.jpg&imgrefurl=https%3A%2F%2Fbeststatusquote.com%2Flove-notes-for-lovers%2F&tbnid=GCJhAu5UUWfHEM&vet=12ahUKEwjknuG9kJLvAhVVNuwKHVHQDUYQMygPegUIARD7AQ..i&docid=VJ7xu5mT4B7dqM&w=626&h=417&q=lovers&safe=active&ved=2ahUKEwjknuG9kJLvAhVVNuwKHVHQDUYQMygPegUIARD7AQ"},
    { title: 'The Three Body Problem', author: 'Liu Cixin', alreadyRead: true, img : "https://www.google.com/imgres?imgurl=https%3A%2F%2F4kwallpapers.com%2Fimages%2Fwallpapers%2Fcouple-sunset-proposal-silhouette-romantic-lovers-together-3840x2560-448.jpg&imgrefurl=https%3A%2F%2F4kwallpapers.com%2Flove%2Fcouple-sunset-proposal-silhouette-romantic-lovers-together-448.html&tbnid=t-OCGGiKT9UTpM&vet=12ahUKEwjknuG9kJLvAhVVNuwKHVHQDUYQMygbegUIARCZAg..i&docid=gI8NJDrSNtSArM&w=3840&h=2560&q=lovers&safe=active&ved=2ahUKEwjknuG9kJLvAhVVNuwKHVHQDUYQMygbegUIARCZAg"},
  ];


  books.forEach(function(item){
      var titleTag = document.createElement("p");
      var b = document.createElement("p");
      var x = document.createTextNode(item.title);
      var y = document.createTextNode(item.author);
      var image = document.createElement("img");
      image.setAttribute("src", item.img);
      titleTag.appendChild(x);
      b.appendChild(y);
      item.alreadyRead == true ? titleTag.style.backgroundColor = "pink": titleTag.style.backgroundColor = "violet";
      var bookList = document.createElement(ul)
      var listItem1 = document.createElement("li");
      var listItem2 = document.createElement("li");
      var listItem3 = document.createElement("li");
      listItem1.appendChild(titleTag);
      listItem2.appendChild(b);
      listItem3.appendchild(image);
      bookList.appendChild(listItem1);
      bookList.appendChild(listItem2);
      bookList.appendChild(listItem3);
      document.getElementsByTagName("body")[0].appendChild(bookList);
  });

// This function will execute when the window loads