let input = document.getElementById("city");
let button = document.createElement("button");
button.innerHTML = "submit";
button.className = "btn blue";
let div = document.getElementById("all");
div.appendChild(button);
button.onclick = function () {
  fetch(
    //   `https://api.openweathermap.org/data/2.5/weather?q=Liverpool,uk&appid=3f3e70a22276142872e9c96aff44db87`
    `https://api.openweathermap.org/data/2.5/forecast?q=${input.value}&appid=3f3e70a22276142872e9c96aff44db87`
  )
    .then((res) => res.json())
    .then((data) => {
      data.list.forEach((element, index) => {
        console.log(
          index === 0 ||
            index === 8 ||
            index === 16 ||
            index === 24 ||
            index === 32 ||
            index === 40
            ? element
            : ""
        );

        // console.log(data.city.name);

        if (
          index === 0 ||
          index === 8 ||
          index === 16 ||
          index === 24 ||
          index === 32 ||
          index === 40
        ) {
          //creating the card and it's element
          let divCard = document.createElement("div");
          let divImage = document.createElement("div");
          let divCont = document.createElement("div");
          let city = document.createElement("p");
          let date = document.createElement("p");
          let temp = document.createElement("p");
          let precip = document.createElement("p");
          let humidy = document.createElement("p");
          let wind = document.createElement("p");
          let desc = document.createElement("span");
          let high = document.createElement("p");
          let low = document.createElement("p");

          //giving classes
          divCard.className = "card";
          divImage.className = "card-image";
          divCont.className = "card-content";

          //giving values
          city.innerHTML = data.city.name;
          date.innerHTML = element.dt_txt;
          temp.innerHTML = element.main.temp;
          let mainn = element.weather;
          mainn.map((item) => {
            desc.innerHTML = item.description;

            let iconcode = item.icon;
            let image = document.createElement("img");
            image.id = "image";
            image.src = "http://openweathermap.org/img/w/" + iconcode + ".png";

            divImage.appendChild(image);
            divCard.appendChild(divImage);
          });

          //appending to parent element
          divCont.appendChild(city);
          divCont.appendChild(temp);
          divCard.appendChild(divCont);
          document.getElementById("all").appendChild(divCard);
        }
      });
    });
};
//creating a footer
