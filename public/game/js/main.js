'use strict';
/* global Monogatari */
/* global monogatari */

/**
 * =============================================================================
 * This is the file where you should put all your custom JavaScript code,
 * depending on what you want to do, there are 3 different places in this file
 * where you can add code.
 *
 * 1. Outside the $_ready function: At this point, the page may not be fully
 *    loaded yet, however you can interact with Monogatari to register new
 *    actions, components, labels, characters, etc.
 *
 * 2. Inside the $_ready function: At this point, the page has been loaded, and
 *    you can now interact with the HTML elements on it.
 *
 * 3. Inside the init function: At this point, Monogatari has been initialized,
 *    the event listeners for its inner workings have been registered, assets
 *    have been preloaded (if enabled) and your game is ready to be played.
 *
 * You should always keep the $_ready function as the last thing on this file.
 * =============================================================================
 **/

const { $_ready, $_ } = Monogatari;

// 1. Outside the $_ready function:

class StatisticsScreen extends Monogatari.ScreenComponent {

	static setup () {
			this.engine.translation('Deutsch', {
					Statistics: 'Aufgaben'
			});
			return Promise.resolve ();
	}

	static bind () {
			this.engine.component ('main-menu').addButtonAfter ('Load', {
					string: 'Statistics',
					data: {
							action: 'open-screen',
							open: 'statistics'
					}
			});
			return Promise.resolve ();
	}

	constructor (...args) {
			super(...args);
	}

	render () {
			return `
					<button class="top left" data-action="back"><span class="fas fa-arrow-left"></span></button>
					<h2 data-string="Statistics">Statistics</h2>
					<div data-content="help">
							<p>Spiele das Spiel mehrfach durch, so dass du mehrere Lebenswege erlebst.</p>
							<p>1. Welche unmittelbaren positiven oder negativen Konsequenzen hatten die rot markierten Entscheidungen?</p>
							<p>2. Durch welche Verhaltensweisen hat/hätte der Charakter negative Konsequenzen vermeiden können?</p>
							<p>3. Erkläre deine Schlussfolgerungen.</p>
					</div>
			`;
	}
}

StatisticsScreen.tag = 'statistics-screen';

$_ready (() => {
	// 2. Inside the $_ready function:

	monogatari.registerComponent(StatisticsScreen);
	

	monogatari.init ('#monogatari').then (() => {
		// 3. Inside the init function:
	// 	monogatari.translation('Deutsch', {
	// 		MyButton: 'My Button'
	// });
	
	// monogatari.component ('main-menu').addButtonAfter ('Load', {
	// 		string: 'MyButton',
	// 		data: {
	// 				action: 'open-screen',
	// 				open: 'my-screen'
	// 		}
	// });

	// monogatari.translation('Deutsch', {
	// 	helpButton: 'My Button'
	// });

	monogatari.component ('quick-menu').addButtonAfter ('Back', {
		string: 'Help',
		data: {
			action: 'open-screen',
			open: 'statistics'
		}
	});


	});
});
