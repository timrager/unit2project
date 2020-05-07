const React = require('react');

class Navbar extends React.Component{
    render(){
        return(

          <nav>
          <div class="nav-wrapper blue darken-4">
            <a href="#" class="brand-logo">Anime Tracker : アニメトラッカー</a>
            <ul id="nav-mobile" class="right hide-on-med-and-down">
              <li><a href="http://localhost:3000/anime/new">Enter New Series</a></li>
            </ul>
          </div>
        </nav>


          
        )
    }
}

module.exports = Navbar;