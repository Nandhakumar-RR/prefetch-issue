import Route from '@ember/routing/route';
import $ from 'jquery';

export default Route.extend({
    prefetch() {      
        return $.get('/contacts')
    }
});