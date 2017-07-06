'use strict';

require('dotenv').config();

const GtfsRealtimeBindings = require('gtfs-realtime-bindings');
const request = require('request');
const fs = require('fs');
const MTA_API_KEY = process.env.MTA_API_KEY;
const FEED_ID = 0;

const opts = {
  method: 'GET',
  url: `http://datamine.mta.info/mta_esi.php?key=${MTA_API_KEY}&feed_id=${FEED_ID}`,
  encoding: null
};

request(opts, (error, response, body) => {
  if (!error && response.statusCode == 200) {
    const feed = GtfsRealtimeBindings.FeedMessage.decode(body);
  }
});