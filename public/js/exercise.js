const gotoHistoryPage = async (event) => {
    event.preventDefault();

    const routineId = document.querySelector('#routineId').value.trim();

    if (routineId) {
        const response = await fetch('/api/workouthistory', {
            method: 'POST',
            body: JSON.stringify({ routineId: routineId, date: Date.now }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/workouthistory');
        } else {
            alert(response.statusText);
        }
    }
};




document
    .querySelector('#finishBtn')
    .addEventListener('submit', gotoHistoryPage);
document
    .querySelector('#nextBtn')
    .addEventListener('submit', nextExercise);