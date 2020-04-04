const axios = require('axios');
const Dev = require('../models/Dev')
const parseStringAsArray = require('../utils/parseStringAsArray')

// index, show, store, update, destroy
module.exports = {

    async index (request, response){
        const devs = await Dev.find();

        return response.json(devs);
    },

    async store (request, response) {
    const { githubUserName, techs, latitude, longitude } = request.body;
    
    let dev = await Dev.findOne({ githubUserName });

    if(!dev){
        const apiResponse = await axios.get(`https://api.github.com/users/${githubUserName}`);

    console.log(apiResponse.data);

    let { name, avatar_url, bio } = apiResponse.data;

    if(!name)
    {
        name = apiResponse.data.login;
    }

    const techsArray = parseStringAsArray(techs);

    const location = 
    {
        type: 'Point',
        coordinates: [longitude, latitude]
    }
    dev = await Dev.create({
        githubUserName,
        name,
        avatarUrl: avatar_url,
        bio,
        techs: techsArray,
        location
    })

    console.log(name, avatar_url, bio, githubUserName);
    }

    

    return response.json(dev);
    }
};