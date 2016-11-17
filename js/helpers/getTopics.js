var PATH_TO_TOPICS = '../../data/topics.json';

function getTopics(callback) {

    $.getJSON(PATH_TO_TOPICS, callback);

}