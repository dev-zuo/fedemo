// Require the lib, get a working terminal
var term = require( 'terminal-kit' ).terminal ;

// Get some user input
term.magenta( "Enter your name: " ) ;

term.inputField(
	function( error , input ) {
		term.green( "\nYour name is '%s'\n" , input ) ;
	}
) ;