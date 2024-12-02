// const workBtn = document.getElementById('work-btn');
// const breakBtn = document.getElementById('break-btn');
// const startBtn = document.getElementById('start-timer');
// const timerDisplay = document.getElementById('timer-display');
// let isWorking = true;
// let timerInterval;
// let totalTime = 25 * 60; // Set initial time to 25 minutes (in seconds)
// let studyTime = 0;
// let breakTime = 0;
// let isBreak = false;

// // Function to update the timer display
// function updateTimerDisplay() {
//     const minutes = Math.floor(totalTime / 60);
//     const seconds = totalTime % 60;
//     timerDisplay.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
// }

// // Initialize the timer display when the page loads
// updateTimerDisplay();

// workBtn.addEventListener('click', () => {
//     workBtn.classList.add('active');
//     breakBtn.classList.remove('active');
//     isWorking = true;
//     resetTimer(studyTime * 60 || 25 * 60);
// });

// breakBtn.addEventListener('click', () => {
//     breakBtn.classList.add('active');
//     workBtn.classList.remove('active');
//     isWorking = false;
//     resetTimer(breakTime * 60 || 5 * 60);
// });

// startBtn.addEventListener('click', toggleTimer);

// function resetTimer(duration) {
//     clearInterval(timerInterval);
//     totalTime = duration;
//     updateTimerDisplay();
//     startBtn.textContent = '▶';
// }

// function toggleTimer() {
//     if (!timerInterval) {
//         startTimer();
//         startBtn.textContent = '⏸';
//     } else {
//         clearInterval(timerInterval);
//         timerInterval = null;
//         startBtn.textContent = '▶';
//     }
// }

// function startTimer() {
//     timerInterval = setInterval(() => {
//         if (totalTime > 0) {
//             totalTime--;
//             updateTimerDisplay();
//         } else {
//             clearInterval(timerInterval);
//             timerInterval = null;
//             startBtn.textContent = '▶';
//             if (isWorking) {
//                 breakBtn.click();
//             } else {
//                 workBtn.click();
//             }
//         }
//     }, 1000);
// }

// // Initialize the timer
// resetTimer(25 * 60);

// async function logStudySession(topic, duration) {
//     const token = localStorage.getItem('token');
//     try {
//         const response = await fetch('/study/log-session', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//                 'Authorization': `Bearer ${token}`
//             },
//             body: JSON.stringify({ topic, duration })
//         });

//         if (!response.ok) {
//             throw new Error(`HTTP error! status: ${response.status}`);
//         }

//         const data = await response.json();
//         console.log(data.message);
//         alert('Study session logged successfully');
//     } catch (error) {
//         console.error('Error logging study session:', error);
//         alert('Failed to log study session: ' + error.message);
//     }
// }

// // Call this function when the user submits the study session form
// document.getElementById('study-form').addEventListener('submit', function(e) {
//     e.preventDefault();
//     const topic = document.getElementById('topic').value;
//     const duration = parseInt(document.getElementById('duration').value);
//     logStudySession(topic, duration);
// });

// async function updateLeaderboard() {
//     const leaderboardType = document.getElementById('leaderboardType').value;
//     const filterValue = document.getElementById('filterValue').value;

//     try {
//         const response = await fetch(`/study/leaderboard?type=${leaderboardType}&value=${filterValue}`);
//         if (!response.ok) {
//             throw new Error('Network response was not ok');
//         }
//         const leaderboardData = await response.json();

//         const leaderboardElement = document.getElementById('leaderboard');
//         leaderboardElement.innerHTML = '';

//         leaderboardData.forEach((user, index) => {
//             const li = document.createElement('li');
//             const hours = Math.floor(user.studyTime / 60);
//             const minutes = user.studyTime % 60;
//             li.textContent = `${index + 1}. ${user.name} - ${hours}h ${minutes}m`;
//             leaderboardElement.appendChild(li);
//         });
//     } catch (error) {
//         console.error('Error fetching leaderboard:', error);
//         alert('Failed to fetch leaderboard. Please try again.');
//     }
// }

// // Call this function when the page loads and after each study session
// updateLeaderboard();

// document.getElementById('stop-timer').addEventListener('click', () => {
//     clearInterval(timerInterval);
//     timerInterval = null;
// });

// document.getElementById('reset-timer').addEventListener('click', () => {
//     clearInterval(timerInterval);
//     timerInterval = null;
//     document.getElementById('timer-display').textContent = '00:00:00';
//     totalTime = studyTime;
//     isBreak = false;
// });

// // Add this at the end of the file

// document.getElementById('leaderboardBtn').addEventListener('click', showLeaderboard);

// // Initial leaderboard update
// updateLeaderboard();

// function showLeaderboard() {
//     const leaderboardType = document.getElementById('leaderboardType').value;
//     const filterValue = document.getElementById('filterValue').value;

//     fetch(`/study/leaderboard?type=${leaderboardType}&value=${filterValue}`)
//         .then(response => response.json())
//         .then(users => {
//             const leaderboardList = document.getElementById('leaderboard');
//             leaderboardList.innerHTML = '';

//             // Add header row
//             const headerRow = document.createElement('li');
//             headerRow.className = 'leaderboard-header';
//             headerRow.innerHTML = `
//                 <span class="rank">Rank</span>
//                 <span class="name">Name</span>
//                 <span class="time">Time</span>
//             `;
//             leaderboardList.appendChild(headerRow);

//             // Add user rows
//             users.forEach((user, index) => {
//                 const li = document.createElement('li');
//                 li.className = 'leaderboard-item';
//                 li.innerHTML = `
//                     <span class="rank">#${index + 1}</span>
//                     <span class="name">${user.name}</span>
//                     <span class="time">${formatTime(user.studyTime)}</span>
//                 `;
//                 leaderboardList.appendChild(li);
//             });
//         })
//         .catch(error => {
//             console.error('Error fetching leaderboard:', error);
//             alert('Failed to fetch leaderboard. Please try again.');
//         });
// }

// function formatTime(minutes) {
//     const hours = Math.floor(minutes / 60);
//     const mins = minutes % 60;
//     return `${hours}h ${mins}m`;
// }

// // ... other code ...

// // Get the modal
// const modal = document.getElementById("report-modal");

// // Get the button that opens the modal
// const btn = document.getElementById("report-btn");

// // Get the <span> element that closes the modal
// const span = document.getElementsByClassName("close")[0];

// // When the user clicks the button, open the modal 
// btn.onclick = function() {
//   modal.style.display = "block";
//   updateReport();
// }

// // When the user clicks on <span> (x), close the modal
// span.onclick = function() {
//   modal.style.display = "none";
// }

// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }

// function updateReport() {
//   // Update summary stats
//   document.getElementById('hours-focused').textContent = '10'; // Replace with actual data
//   document.getElementById('days-accessed').textContent = '5'; // Replace with actual data
//   document.getElementById('day-streak').textContent = '3'; // Replace with actual data

//   // Create focus hours chart
//   const ctx = document.getElementById('focus-chart').getContext('2d');
//   new Chart(ctx, {
//     type: 'bar',
//     data: {
//       labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
//       datasets: [{
//         label: 'Focus Hours',
//         data: [2, 4, 3, 5, 2, 3, 1], // Replace with actual data
//         backgroundColor: '#4a69bd'
//       }]
//     },
//     options: {
//       responsive: true,
//       maintainAspectRatio: false,
//       scales: {
//         y: {
//           beginAtZero: true
//         }
//       }
//     }
//   });

//   // Populate project list
//   const projectList = document.getElementById('project-list');
//   projectList.innerHTML = ''; // Clear existing items
//   const projects = [
//     { name: 'Math', time: '2h 30m', color: '#FF6B6B' },
//     { name: 'Science', time: '1h 45m', color: '#4ECDC4' },
//     { name: 'History', time: '1h 15m', color: '#45B7D1' }
//   ]; // Replace with actual data
//   projects.forEach(project => {
//     const item = document.createElement('div');
//     item.className = 'project-item';
//     item.innerHTML = `
//       <div>
//         <span class="project-color" style="background-color: ${project.color}"></span>
//         ${project.name}
//       </div>
//       <div>${project.time}</div>
//     `;
//     projectList.appendChild(item);
//   });
// }

// // Don't forget to set the user info in the navbar
// document.getElementById('user-info').textContent = 'user@example.com'; // Replace with actual user data

// // Existing code ...
