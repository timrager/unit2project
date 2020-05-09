const React = require('react');
const Default = require('./Default');

class Edit extends React.Component{
    render(){

        const { _id, epTitle, epSynopsis, epRating, epWatched, epNotes, epImage } = this.props.thisEpisode;
        console.log(this.props.thisEpisode)

        return(
            <Default>

            <div className="row">
                <form className="col s12" action={`/anime/episode/${_id}?_method=PUT`} method="POST">

                    <div className="row">
                        <div className="input-field col s12">
                            <label htmlFor="title">Title</label>
                            <input type="text" id="title" name="epTitle" defaultValue={epTitle}/>
                        </div>
                    </div>

                    <div className="row">
                        <div className="input-field col s12">
                            <label htmlFor="synopsis">Synopsis</label>
                            <textarea id="epSynopsis" name="synopsis" defaultValue={epSynopsis} />
                        </div>
                    </div>

                    <div className="row">
                        <div className="input-field col s6">
                            <label htmlFor="rating">Rating</label>
                            <input type="number" id="rating" name="epRating" defaultValue={epRating}/>
                        </div>
                        <div className="input-field col s6">
                            <label htmlFor="watched">
                                <input type="checkbox" id="watched" name="epWatched" checked={epWatched}/>
                                <span>Watched</span>
                            </label>
                            
                        </div>
                    </div>

                    <div className="row">
                        <div className="input-field col s12">
                            <label htmlFor="notes">Notes</label>
                            <textarea id="notes" name="epNotes" defaultValue={epNotes}/>
                        </div>
                    </div>

                    <div className="row">
                        <div className="input-field col s12">
                            <label htmlFor="image">Image URL</label>
                            <input type="url" id="image" name="epImage" defaultValue={epImage}/>
                        </div>
                    </div>

                    <input type="submit"  className="waves-effect waves-light btn-small light-blue darken-2" name="" value="Submit Edit"/>


                </form>
            </div>
        
            </Default>
            
        )
    }
}

module.exports = Edit;