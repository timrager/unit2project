const React = require('react');
const Default = require('./Default');


class New extends React.Component{
    render(){
        const { thisSeries }  = this.props;
        console.log( thisSeries )
        return(
            <Default>

            <div className="row">
                <form className="col s12" action={`/anime/neweps/${thisSeries._id}`} method="POST">

                    <div className="row">
                        <div className="input-field col s12">
                            <label htmlFor="seriesTitle">Series Title</label>
                            <input type="text" id="seriesTitle" name="seriesTitle" defaultValue={thisSeries.title}/>
                            <input type="text" id="seriesId" name="seriesId" defaultValue={thisSeries._id}/>
                        </div>
                    </div>

                    <div className="row">
                        <div className="input-field col s12">
                            <label htmlFor="title">Episode Title</label>
                            <input type="text" id="title" name="epTitle" />
                        </div>
                    </div>

                    <div className="row">
                        <div className="input-field col s12">
                            <label htmlFor="synopsis">Synopsis</label>
                            <textarea id="synopsis" name="epSynopsis" />
                        </div>
                    </div>

                    <div className="row">
                        <div className="input-field col s6">
                            <label htmlFor="rating">Rating</label>
                            <input type="number" id="rating" name="epRating" />
                        </div>
                        <div className="input-field col s6">
                            <label htmlFor="watched">
                                <input type="checkbox" id="watched" name="epWatched" />
                                <span>Watched</span>
                            </label>
                            
                        </div>
                    </div>

                    <div className="row">
                        <div className="input-field col s12">
                            <label htmlFor="notes">Notes</label>
                            <textarea id="notes" name="epNotes"/>
                        </div>
                    </div>

                    <div className="row">
                        <div className="input-field col s12">
                            <label htmlFor="img">Image URL</label>
                            <input type="url" id="image" name="epImage" />
                        </div>
                    </div>

                    <input type="submit" className="waves-effect waves-light btn light-blue darken-2" name="" value="Submit"/>

                </form>
            </div>
        
            </Default>

        )
    }
}

module.exports = New;