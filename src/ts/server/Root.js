// Class: server.Root

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../hxClasses_stub").default;

// Constructor

var Root = function() {
}

// Meta

Root.__name__ = ["server","Root"];
Root.prototype = {
	hello: function(name) {
		if(name == null) {
			name = "World";
		}
		return "Hello, " + name + "!";
	}
};
Root.prototype.__class__ = Root.prototype.constructor = $hxClasses["server.Root"] = Root;

// Init



// Statics




// Export

exports.default = Root;