const time = document.querySelector(".time");
const trigger = document.querySelector(".trigger");
const nextWorkout = document.querySelectorAll('.exerData');

let timerInterval;
let timeElapsed = 0;

const toggleTimer = () => {
    //const timer = new Timer();
    console.log("here");
};


// trigger.addEventListener("click", toggleTimer);

const gotoHistoryPage = async (event) => {
    console.log("inside");
    event.preventDefault();

    const routineId = nextWorkout[0].id.split("-")[1];

    if (routineId) {
        console.log(routineId);
        const response = await fetch('/api/workouthistory', {
            method: 'POST',
            body: JSON.stringify({ routineId: routineId, date: Date.now() }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/api/workouthistory');
        } else {
            alert(response.statusText);
        }
    }
};

const nextExercise = async (event) => {
    event.preventDefault();
    const stringId = nextWorkout[0].id.split("-")[0];
    const numberId = Number(stringId) + 1;
    const finalString = String(numberId);
    const stringRoutineId = nextWorkout[0].id.split("-")[1];

    if (finalString && stringRoutineId) {
        const response = await fetch('/api/exercise/' + finalString + "/" + stringRoutineId, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {

            document.location.replace('/api/exercise/' + finalString + '/' + stringRoutineId);
        } else {
            alert(response.statusText);
        }
    }
};

const gotoHistoryPageFinal = async (event) => {
    console.log("inside");
    event.preventDefault();
    document.location.replace('/api/workouthistory');
};

document.querySelector('#finishBtn').addEventListener('click', gotoHistoryPage);
document.querySelector('#nextBtn').addEventListener('click', nextExercise);