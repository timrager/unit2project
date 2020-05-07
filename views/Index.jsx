const React = require('react');
const Default = require('./Default');
const Navbar = require('./Navbar')

class Index extends React.Component{
    render(){

        const { allSeries }  = this.props;

        return(

            <div>
            <Navbar></Navbar>

            <Default>
            <div className="row">
                {
                  allSeries.map((series, i) => {
                    return (
                      <div className="col m4">
                        <div className="card z-depth-5 hoverable">  
                          <div className="card-image">
                            <img src={series.image}/>
                          </div>
                          <div className="card-content">
                            <span className="card-title" >{series.title}</span>
                            <p>{series.synopsis}</p>
                          </div>
                          <div className="card-action">
                            <a href={`/anime/${series._id}/edit`} className="waves-effect waves-light btn-small"><i className="material-icons right">edit</i>Edit Series</a>
                            <a href={`/anime/${series._id}`} className="waves-effect waves-light btn-small"><i className="material-icons right">search</i>Series Details</a>
                            <a href={`/anime/neweps/${series._id}`} className="waves-effect waves-light btn-small"><i className="material-icons right">add</i>Add Episodes</a>
                            <form action={`/anime/${series._id}?_method=DELETE`} method="POST">
                                        <button type="submit" value="delete" className="waves-effect waves-light btn-small red"><i className="material-icons right">delete</i>Delete Series</button>
                            </form>
                          </div>
                        </div>
                      </div>
                      
                    )
                  })
                }
                </div>
            </Default>
          </div>
        )
    }
}

module.exports = Index;