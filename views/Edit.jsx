const React = require('react');
const Default = require('./Default');

class Edit extends React.Component{
    render(){

        const { _id, title, synopsis, numOfEpisodes, season, rating, watched, notes, image } = this.props.thisSeries;

        return(
            <Default>

            <div className="row">
                <form className="col s12" action={`/anime/${_id}?_method=PUT`} method="POST">

                    <div className="row">
                        <div className="input-field col s12">
                            <label for="title">Title</label>
                            <input type="text" id="title" name="title" defaultValue={title}/>
                        </div>
                    </div>

                    <div className="row">
                        <div className="input-field col s12">
                            <label for="synopsis">Synopsis</label>
                            <textarea id="synopsis" name="synopsis" defaultValue={synopsis} />
                        </div>
                    </div>

                    <div className="row">
                        <div className="input-field col s6">
                            <label for="numOfEpisodes">Number of Episodes</label>
                            <input type="number" id="numOfEpisodes" name="numOfEpisodes" defaultValue={numOfEpisodes}/>
                        </div>
                        <div className="input-field col s6">
                            <label for="season">Season Aired</label>
                            <input type="text" id="season" name="season" defaultValue={season}/>
                        </div>
                    </div>

                    <div className="row">
                        <div className="input-field col s6">
                            <label for="rating">Rating</label>
                            <input type="number" id="rating" name="rating" defaultValue={rating}/>
                        </div>
                        <div className="input-field col s6">
                            <label for="watched">
                                <input type="checkbox" id="watched" name="watched" checked={watched}/>
                                <span>Watched</span>
                            </label>
                            
                        </div>
                    </div>

                    <div className="row">
                        <div className="input-field col s12">
                            <label for="notes">Notes</label>
                            <textarea id="notes" name="notes" defaultValue={notes}/>
                        </div>
                    </div>

                    <div className="row">
                        <div className="input-field col s12">
                            <label for="img">Image URL</label>
                            <input type="url" id="image" name="image" defaultValue={image}/>
                        </div>
                    </div>

                    <input type="submit" name="" className="waves-effect waves-light btn-small light-blue darken-2" value="Submit Edit"/>


                </form>
            </div>
        
            </Default>
            
        )
    }
}

module.exports = Edit;