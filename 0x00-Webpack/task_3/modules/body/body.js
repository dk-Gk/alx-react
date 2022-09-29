import $ from "jquery";
import _ from 'lodash';
import './body.css';

$('body').append(`<p>Dashboard data for the students</p>`);
$('body').append(`<button>Click here to get started</button>`);
$('body').append(`<p id='count'></p>`);

const updateCounter = () => {
    let cont = $('#count').html()
    $('button').click(function() {
        cont++;
        $('#count').html(`${cont} clicks on the button`)
    })
} 

_.debounce(updateCounter, 500);
updateCounter();
