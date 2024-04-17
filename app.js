/**
 * Example template tag that generates a random number 
 * between a user-provided MIN and MAX
 */
module.exports.templateTags = [{
    name: 'nowPlusSeconds',
    displayName: 'Now+Seconds',
    description: 'Adds given seconds to current time and displays in Unix Format ',
    args: [
        {
            displayName: 'Adding seconds',
            description: 'Number of seconds To Be Added to current time (negative values supported)',
            type: 'number',
            defaultValue: 60
        },
        {
            displayName: 'TimeZone (hh:mm)',
            description: 'The time zone time difference relative to GMT time in hh:mm format. Example: for Iran -> 3:30 ',
            type: 'string',
            defaultValue: '03:30'
        }
    ],
    async run (context, seconds, timeZone) {
        
        if(!seconds && seconds!=0){
            seconds = 60;
        }

        if(!timeZone){
            timeZone = '03:30';
        }

        var tzDelta = 0;
        
        var segments = timeZone.split(':');

        if(segments && segments.length >0){

            if(segments.length ==1){
                tzDelta = Number(segments[0])*60*1000;
            }
            if(segments.length ==2){
                tzDelta = Number(segments[0])*3600*1000;
                tzDelta += Number(segments[1])*60*1000;
            }
        }

        var now = new Date().getTime() + tzDelta;

        var linuxTime  = Math.floor(now/1000);
        
        var linuxTime = linuxTime + seconds;
    
        return linuxTime;
    }
}];