//exercise page logic to direct user to next page, create history record and move to next exercise
const nextWorkout = document.querySelectorAll('.exerData');

const gotoHistoryPage = async (event) => {
    event.preventDefault();
    document.location.replace('/api/workouthistory');
};

const createHistoryLog = async () => {
    const routineId = nextWorkout[0].id.split("-")[1];

    if (routineId) {
        const response = await fetch('/api/workouthistory', {
            method: 'POST',
            body: JSON.stringify({ routineId: routineId, date: Date.now() }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (!response.ok) {
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

    //creating history log upon completion of the 3rd exercise
    if (numberId % 3 ==0) {
        console.log("true");
        createHistoryLog();
    }

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
    event.preventDefault();
    document.location.replace('/api/workouthistory');
};


document.querySelector('#finishBtn').addEventListener('click', gotoHistoryPage);
document.querySelector('#nextBtn').addEventListener('click', nextExercise);