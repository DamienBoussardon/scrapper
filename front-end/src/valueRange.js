export const displayValues = () => {
  const arrayDPE = ['A','B','C','D','E','F','G'];
    let getVals = () =>{
      for(let i = 1; i < 4; i++){
          var rangeLower = document.getElementById('range-' + i + 'a').value;
        var rangeUpper = document.getElementById('range-' + i + 'b').value;
        var displayElement = document.getElementById('tracker-' + i +'');
        if(i === 1){
            displayElement.innerHTML = "€ " + rangeLower + "k - €" + rangeUpper + "k";
        }
        else if(i == 2){
          displayElement.innerHTML = rangeLower + "m² -  " + rangeUpper + "m²";
        }
        else{
          return displayElement.innerHTML =  "    " + arrayDPE[rangeLower] + "   -   " + arrayDPE[rangeUpper];
        }
      }
    };
     let editValues = () => {
       var sliderSections = document.getElementsByClassName("input-range-container");
        for (var x = 0; x < sliderSections.length; x++) {
          var sliders = sliderSections[x].getElementsByTagName("input");
          for (var y = 0; y < sliders.length; y++) {
            console.log(sliders)
            if (sliders[y].type === "range") {
              sliders[y].oninput = getVals;
              sliders[y].oninput();
            }
          }
        }
      };
      editValues();
};
