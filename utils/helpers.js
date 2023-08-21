module.exports = {

    format_date: (date) => {
        console.log(date);
        const dateTime = `${new Date(date).getMonth() + 1}/${new Date(date).getDate()}/${new Date(date).getFullYear() + 5
            }`;
            console.log(dateTime);
            return dateTime;
    },
    speak: (startTime, name) => {
        const say = require('say');
        say.getInstalledVoices();
        say.speak(name, 'Cellos');
    },
    ifCond: (value, options) => {
        if (value.length === 0) {
            return options.fn(this);
        }
        return options.inverse(this);
    }
}
