/* Business Quest settings - edit these values in Notepad, save, done. */
window.BQ_SETTINGS = {
  teacher: "Mr. Chris",        // the name students are sent to
  teacherCodeHash: "bed2c56d30ccc826c2aa2a2070dded9c52eb2255efbe2fd33a443cae110dc7be",   // scrambled form of the teacher code (the code itself is not stored here). To change the code, open change-code.html
  hearts: 5,                   // hearts per student (only wrong answers cost hearts)
  maxChallenges: 1,            // how many times per game a student is sent to you when hearts run out (0 = never; hearts then refill with a points penalty)
  pace: 1.0,                   // writing-timer speed: 1.0 = normal, 1.2 = 20% longer timers, 0.8 = 20% shorter
  deskAnimals: 99,             // 99 = every written animal comes to your desk. 1 = only the biggest question (the others are self-checked). 0 = no desk checks
  bossCheck: "once",           // "once" = in a boss, students write every animal answer first and you check them all in ONE visit. "each" = a visit after every boss animal, as in version 9
  bossSaveCode: false,         // true = type the code a second time to save the boss marks. false = one code opens the boss check, then just tap Save
  lockLevels: true,            // true = you unlock each next level with your code on the score screen. false = all levels open
  music: true                  // false = no background music for the whole class (animal sounds and effects still play)
};
