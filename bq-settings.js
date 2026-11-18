/* Business Quest settings - edit these values in Notepad, save, done. */
window.BQ_SETTINGS = {
  teacher: "Mr. Chris",        // the name students are sent to
  hearts: 5,                   // hearts per student (only wrong answers cost hearts)
  maxChallenges: 1,            // how many times per game a student is sent to you when hearts run out (0 = never; hearts then refill with a points penalty)
  pace: 1.0,                   // writing-timer speed: 1.0 = normal, 1.2 = 20% longer timers, 0.8 = 20% shorter
  deskAnimals: 99,             // 99 = every written animal comes to your desk. 1 = only the biggest question (the others are self-checked). 0 = no desk checks
  bossCheck: "once",           // "once" = in a boss, students write every animal answer first and you check them all in ONE visit. "each" = a visit after every boss animal, as in version 9
  bossSaveCode: false,         // true = type the code a second time to save the boss marks. false = one code opens the boss check, then just tap Save
  deskSaveCode: false,         // true = type the code a second time to save a level mark. false = one code opens the marking screen, then just tap Save
  lockLevels: true,            // true = the score is hidden until you type the code for that level, and each next level opens with its own code on its lock screen. false = all levels open and the score shows at once
  unlockWithScore: false,      // true = the code that shows the score also opens the next level (one code less). false = the next level asks for its own code
  bell: true,                  // the red bell in every level and boss: an estimated final score when class runs out of time. false hides it
  music: true                  // false = no background music for the whole class (animal sounds and effects still play)
};

/* Version 14: one 6-digit code for each level and boss, typed on the keypad.
   The lines below are scrambled forms. They are not the codes, and a code cannot be read from them.
   Your codes are in the file "Teacher codes - Business Quest v14". To make a new set, open change-code.html.
   Do not edit these lines by hand. */
window.BQ_CODES = {
  "1.1-L1": "919c9975b21ad1310dc340306266884acf21187d64572c636c307f6904195e8c",
  "1.1-L2": "459533a05c88ca32cb6150d0d36b2ff09902eca7188002a32187d80907c60d37",
  "1.1-L3": "50dd51e0af564eb0647bd84ce6469bf774de337a6d9500e4b71a6d08bde6ea21",
  "1.1-L4": "8abdc153f54afeea17543c1d219ffa3f9342f5be2e25846fcf9d169387a8bfa1",
  "1.1-BOSS": "c67c68fc0dc68aab01bf950425c64840b4519c07c7ea5972c85dcbd6d923c5e4",
  "1.2-L1": "4cf04bcbadb83a5ae8db21a4094f19e8aed127e5400e1a27bb824173f3e80609",
  "1.2-L2": "d5457362227199fff1e5bb28e06f16156b79a69ff2801f0336650faea4791309",
  "1.2-L3": "87916a867a0b4dd24dd1fed1b02c5f5f1105dab763a03501a389682b7757b2ba",
  "1.2-BOSS": "4de8b4a1e9addf3a7381d725b708a640d61ea667e3b5f6d9cab8b47a90e1f172",
  "1.3a-L1": "18f137eeb79a0518156d11439be82b3419a56fc9036374d086fe945eb3a09198",
  "1.3a-L2": "3c8c0e058d74a59c375af8b58a16321ae0f3565d54e82ca55d065908633c7ff1",
  "1.3a-L3": "798e4502db8b3731651ad0fca2f8b0ffe41261e086496a9fcb7363799889230a",
  "1.3a-BOSS": "34641789d9e79f779df40328d58ad9e1980ec2c8daa21a4316c42e898ef6cbbc",
  "1.3b-L1": "61be8ad61332dbd03565dcf89c0722a4787e8c95446c5e9bec5e0b990deaa4e9",
  "1.3b-L2": "bb2efbe007290c5d6612d9b30523928e4e66385459ac887eab0fd4dc00be3923",
  "1.3b-L3": "7a7b392c1e2e8cffbab51cfc0b0aa64d9ce2a9e280a27f044be44892560dd5e1",
  "1.3b-BOSS": "2104cc32a833e111553cd57711209e294b06032a77209c164da2461fe2aca0e3",
  "1.4-L1": "10a1359b8363dacc025da171d5e089e07cf5758beb10714d46e6bf89818bc875",
  "1.4-L2": "0c34b5173b2fa720f0a203114d4ed8b785a6d23c493f0de102f0de7bc2335872",
  "1.4-L3": "f3656d2fa2d366c44bb250255c2669ee3665747a82edd2378be42431a9755449",
  "1.4-BOSS": "fa34c5b860ea3ea2ecb3656560f287772157fd9e4d2e046fb6b05c406b3a7551",
  "1.5-L1": "107a4cb6d534fe90c532febecd85df4ecef2b736020ba7cc6c2710f15f39d26e",
  "1.5-L2": "a27cd4ca00b977b6b4ea7d6bfe889d9007652143827c61a1807cccfd565abed5",
  "1.5-L3": "c682dd9fd34d3194cc4aa06ffee7a751ab6315a6a4b460fd313d3c90c00f3d3b",
  "1.5-BOSS": "6901650708b99e422e196bd197d55064b2179e44b1a08278bc59ed1794119dc3",
  "2.1a-L1": "f4884df37048a3546a942d85fea8c78b9eea4a49485a91aba674578e956158ed",
  "2.1a-L2": "4a50c6f350be22a3da7b69e0be705851b3baeb8f208b198251ee19ab62901c47",
  "2.1a-L3": "7473c27306a391c68925ee1ca57574ecc92ed78e85c80c8f342fd4ed50a21d58",
  "2.1a-BOSS": "e14c9fd499b7197240f893a05c7c104b2877233a70dddc35334f92c67448355f",
  "2.1b-L1": "27cddedecd6ea1d9360ae439253a614218c5c7d97cc0c9c6d74dc37cdbfd880a",
  "2.1b-L2": "adcd08b9f25828dc5a8dfd8ced5c7f929aba413c2b698f475b05df64379c4f70",
  "2.1b-L3": "6727a6e739ef75b391aa9a3c1182daa516ba1ccdfbc9c861ee4e39911e5d15e0",
  "2.1b-BOSS": "76600dbe311a07750cdfb99331e9e29baefb152b258eec4baa2699e2bfcbd02e",
  "2.2a-L1": "2206723fd6afaca55e92cfeac3de0192ff7b5acbeb80f96bd8f23bec4912a389",
  "2.2a-L2": "7b61859d63faa956425e50c63550de942420e71e5f3220877b23f6529f710667",
  "2.2a-L3": "36d92834471a430728f4a88e542d7f3a44325ca32945341b97d9f849194d046b",
  "2.2a-BOSS": "165c3bd091ca778e7eb10278683f8c02e0247f8052a5358e13b5aaa6413dab9a",
  "2.2b-L1": "1408de3eb0a23d25e03c5aab201e0bb0a0f386d3bbf0bbd003023e767be65877",
  "2.2b-L2": "806fbebf1ac19d9c4d78976f5c401a5841949efd5ae3ce4c118afde31068d061",
  "2.2b-L3": "4f52368ed4b3da6fbf3ad7cd35194f1600153e821c655e8a0e0c28170c98aeb6",
  "2.2b-BOSS": "5008fcbaf613ec57c8e0e216f74e2eaa8f03a328ff88275972c81d257423b14e",
  "2.3-L1": "2fed78d8e43e0ef8fc2f5b40b052ff62d230a71dda5a5524813b4ff3baefef18",
  "2.3-L2": "0d95d8741e5c441bc1f76fb137fa4bdc03d4abe400b5c28efd20fb5ae0db4636",
  "2.3-L3": "b248178792f50fef76e1a5765c6e2ba7ad1126b90317edfc958eb0026d6e1918",
  "2.3-BOSS": "3dc6ab150d04b2e80ef5dfdc827522c710639854daf8cad54567b86f240ab549",
  "2.4a-L1": "10b960f2c1d26557ed4d816b7b718f5eb9f6e15156546e84066a016cdb3e2787",
  "2.4a-L2": "4aa35a41e8f983f5979765abfd55681bd817e7598f76fd8b6d86d1eb152e5037",
  "2.4a-L3": "6f69cd0575c9b33ce0b3bf7e414a9248485694d050a41d46dee6a1471ebfec7e",
  "2.4a-BOSS": "1af339cb058d64a5c43046c9c03ec11b70023aed569b7909642a31149596d73f",
  "2.4b-L1": "a0a414ee9918ffe3d6439a2aafe04d52534e32aeb81e48939fd62d8c4bc2bb74",
  "2.4b-L2": "8f5a048da9b23a0d887e1465f37ccc9810f646c6fbc7ffde5791a604abd01157",
  "2.4b-L3": "197f84426f9115b927ac4f4d8ec335f416a7e47ad979c799b5c588ed47b419a2",
  "2.4b-BOSS": "b936ab0eb40244ce8341f4571009f5bbf00131b7cec781ce08bd06411686388e",
  "3.1a-L1": "06e38c24855ec8ba1c9176f0c69ea298f037985a62628d1827b5fc9f8234b29b",
  "3.1a-L2": "c5c5989ebe0cf998990d57a0b5be4199b1563385122a2733858ddfb76e3d7b23",
  "3.1a-L3": "42f176cd1845b0cf37b9883bc401217c990e9828cf297d8f7e3a98864d2415b8",
  "3.1a-BOSS": "74d8fc04f50754d1ba8c184c962132d1aa190fdc279726a41bc1332b3b933bfb",
  "3.1b-L1": "a130f3fb24122e8bb13736cee95fade2f21ea5928778c2b611fd9a804af6f293",
  "3.1b-L2": "750bf6b319104c95de1582e98d48ac617c20037ad6a505af2400883f430f29e8",
  "3.1b-L3": "e822458727520f3af4167e778d838b7ee2b2c519fa8dd833236c10e9034c12b6",
  "3.1b-BOSS": "8963328f3ed2e3ec77c9d6be682e065d5da1c6ac2386af4e3f0db7b5a83d9e8e",
  "3.2-L1": "0e257e2606bc462faa6d8532ba6a9acf0471072c6c0db259582a0773abc9bd71",
  "3.2-L2": "6dc6811d4f853c5d0147d413afd8eecd3850af9bb8be87badd2b2dc45654936e",
  "3.2-L3": "857daba7ae0bf6635bf5b9d5e00c83a4b81877241bae86244673c567b80fd06e",
  "3.2-BOSS": "2d69232e533c3a0dc851ea379b32d28e8620bb45a8665d66db64de44a6841dff",
  "3.3a-L1": "6e1167133a6153292ab96447f2274ebf7070e5a35fac5df155e737709266518c",
  "3.3a-L2": "51e4c201f931534631eaa70cd07cee99a2e7101af4aafc986ecc9215aa6ce7bf",
  "3.3a-L3": "c75efffb3f49331dbe6af87e7413b9d3299a3d1b747eb1fb9b4d71ee2ea69437",
  "3.3a-BOSS": "e36029c4470e1363acacdf41464ab3c6895c8967f299103c213fd9e4c6842e6a",
  "3.3b-L1": "ed8019d091ade42999ac897ffaf548f97fc4417a8c2212dc7bb32df84ed01ab1",
  "3.3b-L2": "32901ea52b33654917fe7022e14b52e1d36b279092b11d9afd1e8617c09a7f0b",
  "3.3b-L3": "62f3d72519009d6690182a2828e8c0f1ff232e2417a67dcfbbbc7aae0cce8cdc",
  "3.3b-BOSS": "56751c248b8f32bafa82f7f288ed88dbe6e48c9efd5251bbc92811fa5cece539",
  "3.3c-L1": "20f62430c67d92e1bbafb22710e542bd360c55981e2d5250b25357a443cc9131",
  "3.3c-L2": "9ec8884f28b48f1fa4f61722e4bf2477ef202d1e54a8be4ad73e7d975daedd6d",
  "3.3c-L3": "beb549e596c4c9977e8a512b643c1f412a24d58e0f29ecc40c51528bc770f66c",
  "3.3c-BOSS": "7dbe025c731383f510a55c738ed2606fcbf9d1cfcc9fb8a60927ef275787ca9a",
  "3.3d-L1": "a1c4707dddd402da6e4eeac3a5495891853aee7abbbe78d63b31d18230172026",
  "3.3d-L2": "e95d00ae5378090398a916262c1cfd26e559f2fd1926afdd3dc4da252d9a4a4d",
  "3.3d-L3": "58165efad59c2dd1e741c5ed53a56da3c55297145264b8f97039a720403f2a2f",
  "3.3d-BOSS": "43bb3a068cdaf0f37c0a570cebafbb3ff87571f4e257cdce62e47392f5c32666",
  "3.4-L1": "77348da951081a8fa57564f4f62f60bcd30c2aa9ae234342e7f301425ba2deb9",
  "3.4-L2": "08bb285600cbefe9dcb92b297bb736abceb60fe3c21b1eefe45597a150be8916",
  "3.4-L3": "a6f32dcd4da1a5438dfdec186393cc0488ab314ecd3002e717e3966f9e7cde70",
  "3.4-BOSS": "8ee2d8d7844ddbe3b1ac7fd7b90fd8507d1fc3ba173f8018584c5e79f1400cf1"
};
