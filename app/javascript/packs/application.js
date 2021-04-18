// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.
//= require jquery3
//= require popper
//= require bootstrap-sprockets

import Rails from "@rails/ujs"
import Turbolinks from "turbolinks"
import * as ActiveStorage from "@rails/activestorage"
import "channels"

Rails.start()
Turbolinks.start()
ActiveStorage.start()

function carrusel() {
    window.addEventListener('load', function(){
        console.log('cargado');

        var img = [];
        img [0] = '/images/1.jpg';
        img [1] = '/images/2.jpg';
        img [2] = '/images/3.jpg';
        img [3] = '/images/4.jpg';
        img [4] = '/images/5.jpg';

        var i = 0;
        var time = 2000;

        function slide(){
            
            document.slider.src = img [i];
            if(i < 4){
                i++;
            }else{
                i = 0;
            }
        }

        setInterval(slide, time);

    });
}