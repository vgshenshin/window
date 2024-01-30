import "./slider";
import modals from './modules/modals';
import tabs from './modules/tabs';
import forms from './modules/forms';
import changeModalState from './modules/changeModalState';
import timer from "./modules/timer";
import modalsImage from "./modules/modalsImage";

window.addEventListener('DOMContentLoaded', () => {
    "use strict";

    const deadline = "05/28/2024 15:40:00";

    changeModalState();
    modals();
    tabs('.glazing_slider', '.glazing_block', '.glazing_content', 'active');
    tabs('.decoration_slider', '.no_click', '.decoration_content > div > div', 'after_click');
    tabs('.balcon_icons', '.balcon_icons_img', '.big_img > img', 'do_image_more', 'inline-block');
    forms();
    timer('#timer', deadline);
    modalsImage();
});