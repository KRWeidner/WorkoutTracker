module.exports = {

    format_date: (date) => {
        return `${new Date(date).getMonth() + 1}/${new Date(date).getDate()}/${new Date(date).getFullYear() + 5
            }`;
    },
    speak: (startTime) => {
        const say = require('say');
        say.getInstalledVoices();
        let voices = say.getInstalledVoices();
        say.speak(startTime, 'Alex');
    },
    ifCond: (value, options) => {
        if (value.length === 0) {
            return options.fn(this);
        }
        return options.inverse(this);
    }
}
