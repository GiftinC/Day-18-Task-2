document.querySelector("button").addEventListener("click", result);

var container = document.createElement("div");
container.setAttribute("Class", "container");

var row = document.createElement("div");
row.setAttribute("Class", "row");

async function result() {
    try {
        row.innerHTML = "";
        var data = await fetch("https://api.imgflip.com/get_memes");
        var res = await data.json();
        console.log(res);
      
       var index = Math.floor(Math.random() * 100);
       console.log(index);
        var col = document.createElement("div");
        col.setAttribute("Class","column");
        col.innerHTML = `<img src="${res.data.memes[index].url}">`

        row.append(col);
        container.append(row);
        document.body.append(container);
}
    catch (error) {
        console.log(error)
    }
}
