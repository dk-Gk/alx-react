const $ = require('jquery');
const _ = require('lodash');
import './body.css';

$('body').append('<button>Click here to get started</button>');
$('body').append('<p id="count"></p>');

function updateCounter() {
    let res = $('#count').html() || 0;
    $('button').on('click', () => {
	times++;
	$('#count').html(`${res} clicks on the button`);
    });
};

_.debounce(updateCounter(), 500);
