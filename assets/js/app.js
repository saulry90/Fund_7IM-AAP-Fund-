// Tooltips
const iconInfo = document.querySelectorAll(".fa-info");
const tooltip = document.querySelectorAll(".tooltipInfo");
for (let i = 0; i < iconInfo.length; i++) {
      iconInfo[i].addEventListener('mouseenter', event => {
            tooltip[i].style.display = "block"
      })      
      iconInfo[i].addEventListener('mouseleave', event => {
            tooltip[i].style.display = "none"
      })  
      
      if (screen.width < 730) {
            iconInfo[i].addEventListener('clic', event => {
                  tooltip[i].style.display = "block"
            })      
            iconInfo[i].addEventListener('clic', event => {
                  tooltip[i].style.display = "none"
            })  
      }
}

// Advanced filter search
const btnAdvFilter = document.querySelector("#btnAdvanced");
const optsFilter = document.querySelector("#optionsFilter");
const btnSearch = document.querySelector(".btnSearchFull");

btnAdvFilter.addEventListener('click', event => {
      if (optsFilter.style.display == "block") {
            optsFilter.style.display = "none"
            btnSearch.style.display = "block"
            btnAdvFilter.value = "Advanced filter"
      }else {
            optsFilter.style.display = "block" 
            btnSearch.style.display = "none"
            btnAdvFilter.value = "Simple search"
      }

})     

// Popup mis fav
const btnFav = document.querySelector(".botnFav");
const popup = document.querySelector(".popupFav");
const btnClose = document.querySelector(".fa-close");

btnFav.addEventListener('click', event => {
      popup.style.display = "flex" 
})
btnClose.addEventListener('click', event => {
      popup.style.display = "none" 
})
// Popup add fav
const Addfavpopup = document.querySelector(".popupAddFav");
const iconHeart = document.querySelector("#boton-heart");
const btnQuit = document.querySelector(".fa_quit");

iconHeart.addEventListener('click', event => {
      if(iconHeart.style.color != "blue") {
           Addfavpopup.style.display = "flex" 
            iconHeart.style.color = "#b32929" 
      }
      else {
            Addfavpopup.style.display = "none" 
      }
      
})
btnQuit.addEventListener('click', event => {
      
      iconHeart.removeAttribute("id")
      Addfavpopup.style.opacity  = "0" 
      Addfavpopup.style.display = "none" 
      
})

// Tabs
function openCity(evt, cityName) {
      let i, tabcontent, tablinks;
      tabcontent = document.getElementsByClassName("tabcontent");
      for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
      }
      tablinks = document.getElementsByClassName("tablinks");
      for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
      }
      document.getElementById(cityName).style.display = "block";
      evt.currentTarget.className += " active";
}

// selects checkbox
var expanded = false;

function showCheckboxes() {
  var checkboxes = document.getElementById("checkboxes");
  if (!expanded) {
    checkboxes.style.display = "block";
    expanded = true;
  } else {
    checkboxes.style.display = "none";
    expanded = false;
  }
}

function showCheckboxes2() {
  var checkboxes2 = document.getElementById("checkboxes2");
  if (!expanded) {
    checkboxes2.style.display = "block";
    expanded = true;
  } else {
    checkboxes2.style.display = "none";
    expanded = false;
  }
}

function showCheckboxes3() {
  var checkboxes3 = document.getElementById("checkboxes3");
  if (!expanded) {
    checkboxes3.style.display = "block";
    expanded = true;
  } else {
    checkboxes3.style.display = "none";
    expanded = false;
  }
}

function toggle(source) {
      checkboxes = document.getElementsByName('checkOpc');
      for(var i=0, n=checkboxes.length;i<n;i++) {
        checkboxes[i].checked = source.checked;
      }
    }
