module.exports = {

    format_date: (date) => {
        return `${new Date(date).getMonth() + 1}/${new Date(date).getDate()}/${new Date(date).getFullYear()
            }`;
    },
    speak: (name, reps, sets) => {
        const Say = require('say').Say
        const say = new Say('win32' || 'linux');
        say.getInstalledVoices();
        say.speak(name + " "+ reps + "reps per set for" + sets + "sets",'Cellos',0.75);
    },
    ifCond: (value, options) => {
        if (value.length === 0) {
            return options.fn(this);
        }
        return options.inverse(this);
    }
}
