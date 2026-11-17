/* Business Quest settings - edit these values in Notepad, save, done. */
window.BQ_SETTINGS = {
  teacher: "Mr. Chris",        // the name students are sent to
  teacherCodeHash: "28236939743aa318e415138beb6707b5f7d55ddfcd1508984ce97a73fec2b1f7",   // scrambled form of the teacher code (the code itself is not stored here). To change the code, open change-code.html
  hearts: 5,                   // hearts per student (only wrong answers cost hearts)
  maxChallenges: 1,            // how many times per game a student is sent to you when hearts run out (0 = never; hearts then refill with a points penalty)
  pace: 1.0,                   // writing-timer speed: 1.0 = normal, 1.2 = 20% longer timers, 0.8 = 20% shorter
  deskAnimals: 99,             // 99 = every written animal comes to your desk. 1 = only the biggest question (the others are self-checked). 0 = no desk checks
  bossCheck: "once",           // "once" = in a boss, students write every animal answer first and you check them all in ONE visit. "each" = a visit after every boss animal, as in version 9
  bossSaveCode: false,         // true = type the code a second time to save the boss marks. false = one code opens the boss check, then just tap Save
  deskSaveCode: false,         // true = type the code a second time to save a level mark. false = one code opens the marking screen, then just tap Save
  lockLevels: true,            // true = the score is hidden until you type your code, and each next level opens with your code on its lock screen. false = all levels open and the score shows at once
  unlockWithScore: false,      // true = the code that shows the score also opens the next level (one code less). false = the next level asks for its own code
  bell: true,                  // the red bell in every level and boss: an estimated final score when class runs out of time. false hides it
  music: true                  // false = no background music for the whole class (animal sounds and effects still play)
};
