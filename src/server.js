// cron module import
var CronJob = require('cron').CronJob;

// External script
var script = require('./scripts/main.js');

// Creating cron job
var job = new CronJob({
    cronTime: '0 * * * * *',
    onTick: function () {
        console.log(this.msg);
        console.log('Executing script... Result is: ' + script.execute());
    },
    start: false,
    timeZone: 'Europe/Paris',
    context: {msg: 'Timer ticks...'}
});

// Starting the job
job.start();