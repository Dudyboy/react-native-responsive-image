var React = require('react');
var Device = require('./device');
var { Image } = require('react-native');

var ResponsiveImage = React.createClass({
    setNativeProps: function(nativeProps) {
        this._root.setNativeProps(nativeProps);
    },
    render: function () {
        var width = Math.ceil(this.props.initWidth * Device.scale);
        var height = Math.ceil(this.props.initHeight * Device.scale);

        var radius = width/2;

        return (
            <Image style={ this.props.circle ? [{width: width, height: height, borderRadius: radius}, this.props.style] : [{width: width, height: height}, this.props.style]}
                   source={this.props.source}
                   ref={component => this._root = component}>
                {this.props.children}
            </Image>
        );
    }
});

module.exports = ResponsiveImage;
