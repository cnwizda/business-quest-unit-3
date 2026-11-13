/* Business Quest settings - edit these values in Notepad, save, done. */
window.BQ_SETTINGS = {
  teacher: "Mr. Chris",        // the name students are sent to
  teacherCodeHash: "b2bea1aa43998c1d8b634368fa095e5c6765cb45d6b7f1e296c5a33c264731cd",   // scrambled form of the teacher code (the code itself is not stored here). To change the code, open change-code.html
  hearts: 5,                   // hearts per student (only wrong answers cost hearts)
  maxChallenges: 1,            // how many times per game a student is sent to you when hearts run out (0 = never; hearts then refill with a points penalty)
  pace: 1.0                    // writing-timer speed: 1.0 = normal, 1.2 = 20% longer timers, 0.8 = 20% shorter
};
