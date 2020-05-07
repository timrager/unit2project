const React = require('react');
const Default = require('./Default');

class Show extends React.Component {
    render() {

        const { _id, title, synopsis, numOfEpisodes, season, rating, watched, notes, image } = this.props.thisSeries;
        const episode = this.props.episode;

        console.log(episode)

        return(
            <Default>
              <div className="row">
                      <div className="col m12">
                        <div className="card">  
                          <div className="card-image">
                            <img src={image}/>
                            <span className="card-title" >{title}</span>
                          </div>
                          <div className="card-content">
                            <p>Synopsis: {synopsis}</p>
                            <p>Total Episodes: {numOfEpisodes}</p>
                            <p>Season Aired: {season}</p>
                            <p>Rating: {rating}</p>
                            <p>Watched: {watched ? `Seen` : `Not Seen`}</p>
                            <p>Notes: {notes}</p>
                          </div>
                          <div className="card-action">
                            <form action={`/anime/${_id}?_method=DELETE`} method="POST">
                                        <button type="submit" value="delete" className="waves-effect waves-light btn-small"><i className="material-icons right">delete</i>Delete Series</button>
                            </form>
                            <a href={`/anime/${_id}/edit`} className="waves-effect waves-light btn-small"><i className="material-icons right">edit</i>Edit Series</a>
                          </div>
                        </div>
                      </div>
              </div>
              <div className="row">
                {
                  episode.map((aEpisode, i) => {
                    return (
                      <div className="col m6">
                        <div className="card z-depth-5">  
                          <div className="card-image">
                            {/* <img src={aEpisode.epImage}/> */}
                          </div>
                          <div className="card-content">
                            <span className="card-title" >{aEpisode.epTitle}</span>
                            <p>Synopsis: {aEpisode.epSynopsis}</p>
                            <p>Rating: {aEpisode.epRating}</p>
                            <p>Watched: {aEpisode.epWatched ? `Seen` : `Not Seen`}</p>
                            <p>Notes: {aEpisode.epNotes}</p>
                          </div>
                          <div className="card-action">
                            <a href={`/anime/episode/${aEpisode._id}/edit`} className="waves-effect waves-light btn-small"><i className="material-icons right">edit</i>Edit Episode</a>
                            <form action={`/anime/episode/${aEpisode._id}?_method=DELETE`} method="POST">
                                        <button type="submit" value="delete" className="waves-effect waves-light btn-small red"><i className="material-icons right">delete</i>Delete Episode</button>
                            </form>
                          </div>
                        </div>
                      </div>
                    )
                  })
                }
                </div>
            </Default>
        )
    }
}

module.exports = Show;