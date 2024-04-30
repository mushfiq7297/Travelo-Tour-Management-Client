
import { Tooltip } from 'react-tooltip'


function Sort() {

    const myFunction =() => {
        document.getElementById("myDropdown").classList.toggle("show");
      }
      
      // Close the dropdown menu if the user clicks outside of it
      window.onclick = function(event) {
        if (!event.target.matches('.dropbtn')) {
          var dropdowns = document.getElementsByClassName("dropdown-content");
          var i;
          for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
              openDropdown.classList.remove('show');
            }
          }
        }
      }
  return (
    <div className="dropdown">
  <button onClick={myFunction} className="dropbtn font-bold text-purple-300">SORT</button>
  <div id="myDropdown" className="dropdown-content flex flex-col">
    <a href="#">Ascending</a>
    <a href="#">Descending</a>

  </div>
</div>

  );
}

export default Sort;