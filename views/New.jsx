const React = require('react');
const Default = require('./Default');


class New extends React.Component{
    render(){
        return(
            <Default>

            <div className="row">
                <form className="col s12" action="/anime" method="POST">

                    <div className="row">
                        <div className="input-field col s12">
                            <label for="title" >Title</label>
                            <input type="text" id="title" name="title" />
                        </div>
                    </div>

                    <div className="row">
                        <div className="input-field col s12">
                            <label for="synopsis" >Synopsis</label>
                            <textarea id="synopsis" name="synopsis" />
                        </div>
                    </div>

                    <div className="row">
                        <div className="input-field col s6">
                            <label for="numOfEpisodes" >Number of Episodes</label>
                            <input type="number" id="numOfEpisodes" name="numOfEpisodes"/>
                        </div>
                        <div className="input-field col s6">
                            <label for="season" >Season Aired</label>
                            <input type="text" id="season" name="season" />
                        </div>
                    </div>

                    <div className="row">
                        <div className="input-field col s6">
                            <label for="rating" >Rating</label>
                            <input type="number" id="rating" name="rating" />
                        </div>
                        <div className="input-field col s6">
                            <label for="watched">
                                <input type="checkbox" id="watched" name="watched" />
                                <span >Watched</span>
                            </label>
                            
                        </div>
                    </div>

                    <div className="row">
                        <div className="input-field col s12">
                            <label for="notes" >Notes</label>
                            <textarea id="notes" name="notes"/>
                        </div>
                    </div>

                    <div className="row">
                        <div className="input-field col s12">
                            <label for="img" >Image URL</label>
                            <input type="url" id="image" name="image" />
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