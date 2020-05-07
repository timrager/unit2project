const React = require('react');

class Default extends React.Component{
    render() {
        return (
            <html>
                <head>
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css"></link>
                    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.min.css"></link>
                    <link rel="stylesheet" href="/css/style.css"></link>

                </head>
                <body>
                    <div className="container">
                        {this.props.children}
                    </div>
                    <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
                    <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
                    <script src="/js/extras.js"></script>
                </body>
            </html>
        )
    }
}

module.exports = Default;