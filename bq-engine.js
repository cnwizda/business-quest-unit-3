var BQ_CSS="*{box-sizing:border-box;-webkit-tap-highlight-color:transparent}\nhtml,body{margin:0;height:100%;background:#0b1020;overflow:hidden;font-family:\"Trebuchet MS\",Verdana,system-ui,sans-serif;color:#1b1b2f;user-select:none;-webkit-user-select:none;touch-action:manipulation}\n#stage{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);overflow:hidden;background:#000;box-shadow:0 0 0 4px #000}\n#cv{position:absolute;inset:0;width:100%;height:100%;image-rendering:pixelated;image-rendering:crisp-edges}\n#hud{position:absolute;left:0;right:0;top:0;display:none;align-items:center;gap:8px;padding:4px 8px;font-weight:900;color:#fff;text-shadow:2px 2px 0 #000;font-size:clamp(11px,2.4vh,18px);pointer-events:none;z-index:5}\n#hud .grow{flex:1;text-align:center;opacity:.9}\n#hud .pill{background:rgba(0,0,0,.45);border-radius:8px;padding:2px 8px}\n#storm{display:none;align-items:center;gap:4px}\n#storm .bar{width:clamp(60px,14vw,140px);height:10px;background:#3b2a12;border:2px solid #000;border-radius:3px;overflow:hidden}\n#storm .bar i{display:block;height:100%;background:linear-gradient(90deg,#c9a26b,#8d6e3a);width:100%;transition:width .5s}\n#mute{position:absolute;right:6px;top:4px;z-index:30;font-size:clamp(16px,3.4vh,24px);background:rgba(0,0,0,.5);color:#fff;border:2px solid #fff;border-radius:10px;padding:0 6px;cursor:pointer}\n#ctrl{position:absolute;inset:0;display:none;pointer-events:none;z-index:6}\n#ctrl button{position:absolute;bottom:4%;pointer-events:auto;width:min(17vh,96px);height:min(17vh,96px);border-radius:50%;border:4px solid rgba(255,255,255,.85);background:rgba(0,0,0,.35);color:#fff;font-size:min(7vh,40px);font-weight:900;touch-action:none}\n#ctrl button.on{background:rgba(255,213,79,.6)}\n#bL{left:3%}#bR{left:calc(3% + min(19vh,108px))}#bJ{right:3%;width:min(20vh,112px)!important;height:min(20vh,112px)!important;background:rgba(229,57,53,.45)!important}\n#ov{position:absolute;inset:0;display:none;align-items:center;justify-content:center;z-index:10;background:rgba(5,8,20,.55);padding:2%}\n#ov.on{display:flex}\n.card{background:#fffdf5;border:4px solid #1b1b2f;border-radius:14px;box-shadow:6px 6px 0 #1b1b2f;padding:clamp(8px,2.2vh,18px) clamp(10px,2.5vw,22px);width:min(94%,760px);max-height:96%;overflow:auto;font-size:clamp(13px,3.1vh,20px);line-height:1.35;animation:pop .25s ease-out}\n@keyframes pop{from{transform:scale(.85);opacity:0}to{transform:scale(1);opacity:1}}\n.card h1{margin:0 0 .3em;font-size:1.5em;letter-spacing:1px}\n.card h2{margin:0 0 .3em;font-size:1.2em}\n.btn{display:inline-block;margin:.35em .25em 0 0;padding:.45em .9em;font:inherit;font-weight:900;border:3px solid #1b1b2f;border-radius:10px;background:#ffd54f;box-shadow:3px 3px 0 #1b1b2f;cursor:pointer;color:#1b1b2f}\n.btn:active{transform:translate(2px,2px);box-shadow:1px 1px 0 #1b1b2f}\n.btn[disabled]{background:#cfcfcf;color:#555;cursor:default}\n.btn.go{background:#66bb6a}.btn.alt{background:#90caf9}\n.opts{display:grid;grid-template-columns:1fr 1fr;gap:.45em;margin-top:.5em}\n.opts.one{grid-template-columns:1fr}\n.opt{font:inherit;font-weight:700;text-align:left;padding:.5em .7em;border:3px solid #1b1b2f;border-radius:10px;background:#e3f2fd;box-shadow:3px 3px 0 #1b1b2f;cursor:pointer;color:#1b1b2f}\n.opt.sel{background:#fff59d}.opt.ok{background:#a5d6a7}.opt.bad{background:#ef9a9a;text-decoration:line-through;opacity:.8}\n.opt[disabled]{cursor:default}\n.cmd{display:inline-flex;align-items:center;gap:.4em;background:#1b1b2f;color:#ffd54f;border-radius:8px;padding:.1em .6em;font-weight:900;letter-spacing:1px}\n.cmdm{font-size:.8em;color:#555;margin:.2em 0 .4em;font-style:italic}\n.qtext{font-weight:700;font-size:1.08em;margin:.3em 0}\n.fb{margin-top:.5em;padding:.4em .6em;border-radius:8px;display:none;font-weight:700}\n.fb.ok{display:block;background:#e8f5e9;border:2px solid #2e7d32}\n.fb.bad{display:block;background:#ffebee;border:2px solid #c62828}\n.write{position:relative;border:5px solid #ff6f00;background:#fff8e1}\n.write.wings{border-color:#64b5f6;background:#f3f9ff}\n.write .flames{font-size:1.4em;text-align:center;letter-spacing:.2em;animation:flick .3s infinite alternate}\n@keyframes flick{from{transform:scaleY(1);opacity:1}to{transform:scaleY(1.15);opacity:.75}}\n.write .wingrow{font-size:1.4em;text-align:center;animation:flap .5s infinite alternate}\n@keyframes flap{from{transform:translateY(0)}to{transform:translateY(-5px)}}\n.term{font-size:1.9em;font-weight:900;text-align:center;margin:.1em 0;color:#bf360c;letter-spacing:1px}\n.wings .term{color:#1565c0}\n.def{font-size:1.1em;font-weight:700;text-align:center;background:#fff;border:2px dashed #999;border-radius:8px;padding:.4em}\n.ex{text-align:center;margin:.4em 0}\n.stamp{display:inline-block;border:3px solid #6a1b9a;color:#6a1b9a;border-radius:6px;padding:0 .4em;font-weight:900;letter-spacing:2px;transform:rotate(-4deg);background:#f3e5f5}\n.how{font-size:.85em;background:#eceff1;border-radius:8px;padding:.3em .6em;margin-top:.4em}\n.row{display:flex;gap:.6em;align-items:center;flex-wrap:wrap}\n.center{text-align:center}\n.big{font-size:2.2em;font-weight:900}\n.heroes{display:grid;grid-template-columns:repeat(5,1fr);gap:.4em;margin-top:.4em}\n.hero{border:3px solid #1b1b2f;border-radius:10px;background:#e8eaf6;padding:.2em;text-align:center;cursor:pointer;font-size:.72em;line-height:1.15;box-shadow:2px 2px 0 #1b1b2f}\n.hero canvas{width:100%;image-rendering:pixelated;display:block;background:linear-gradient(#bde3ff,#e6f6ff);border-radius:6px}\n.hero.sel{background:#ffd54f;transform:scale(1.05)}\n.hero b{display:block;font-size:1.1em}\ninput.name{font:inherit;font-size:1.3em;font-weight:800;padding:.3em .5em;border:3px solid #1b1b2f;border-radius:10px;width:100%;margin:.3em 0}\n.dlg{position:absolute;left:2%;right:2%;bottom:3%;z-index:9;background:#fffdf5;border:4px solid #1b1b2f;border-radius:12px;box-shadow:5px 5px 0 #1b1b2f;padding:.5em .8em;font-size:clamp(14px,3.5vh,22px);font-weight:700;min-height:22%;display:none}\n.dlg .who{position:absolute;top:-1.1em;left:.6em;background:#1b1b2f;color:#ffd54f;border-radius:8px;padding:0 .5em;font-size:.85em}\n.dlg .nxt{position:absolute;right:.5em;bottom:.2em;animation:flap .4s infinite alternate}\n.ttl{position:absolute;inset:0;z-index:9;display:none;flex-direction:column;align-items:center;justify-content:center;color:#fff;text-shadow:4px 4px 0 #000;text-align:center;pointer-events:none}\n.ttl .a{font-size:clamp(14px,4vh,26px);font-weight:900;letter-spacing:3px;color:#ffd54f;animation:pop .5s}\n.ttl .b{font-size:clamp(26px,9vh,64px);font-weight:900;letter-spacing:2px;animation:zoom .7s}\n.ttl .c{font-size:clamp(14px,4vh,26px);font-weight:800;margin-top:.3em;animation:pop 1s}\n@keyframes zoom{from{transform:scale(3);opacity:0}to{transform:scale(1);opacity:1}}\n.logo{font-size:clamp(28px,11vh,80px);font-weight:900;letter-spacing:3px;color:#ffd54f;text-shadow:4px 4px 0 #c62828,8px 8px 0 #000;line-height:1}\n.blink{animation:blink 1s infinite}@keyframes blink{50%{opacity:.2}}\n#bann{position:absolute;left:50%;top:14%;transform:translateX(-50%);z-index:8;background:#fffdf5;border:4px solid #1b1b2f;border-radius:12px;padding:.3em .8em;font-weight:900;font-size:clamp(13px,3.4vh,22px);text-align:center;display:none;width:min(92%,720px);box-shadow:4px 4px 0 #1b1b2f}\n#lanes{position:absolute;inset:0;z-index:7;display:none;pointer-events:none}\n.fall{position:absolute;width:30%;background:#fff;border:3px solid #1b1b2f;border-radius:10px;padding:.35em;font-weight:800;font-size:clamp(11px,2.8vh,17px);text-align:center;box-shadow:3px 3px 0 #1b1b2f;pointer-events:auto;cursor:pointer;line-height:1.2}\n.fall.ok{background:#a5d6a7}.fall.bad{background:#ef9a9a}\n.sortbtns{position:absolute;bottom:4%;left:0;right:0;display:none;justify-content:space-between;padding:0 3%;z-index:8}\n.sortbtns .btn{font-size:clamp(15px,4vh,26px);padding:.4em 1em}\n.timer{height:10px;background:#ddd;border:2px solid #1b1b2f;border-radius:6px;overflow:hidden;margin:.3em 0}\n.timer i{display:block;height:100%;background:#43a047;width:100%}\n.check{display:flex;gap:.5em;align-items:flex-start;padding:.3em .4em;border-radius:8px;margin:.2em 0;background:#f1f8e9;cursor:pointer}\n.check input{width:1.3em;height:1.3em;flex:none;margin-top:.15em}\n.slot{border:3px dashed #888;border-radius:10px;padding:.35em .6em;margin:.25em 0;min-height:2em;background:#fafafa}\n.slot.full{border-style:solid;border-color:#2e7d32;background:#e8f5e9}\n.slot b{color:#6a1b9a}\n.match{display:grid;grid-template-columns:1fr;gap:.4em}\n.mrow{background:#f5f5f5;border-radius:8px;padding:.3em .5em}\n.chips{display:flex;flex-wrap:wrap;gap:.3em;margin-top:.2em}\n.chip{font:inherit;font-size:.85em;font-weight:700;border:2px solid #1b1b2f;border-radius:20px;padding:.15em .6em;background:#fff;cursor:pointer}\n.chip.sel{background:#fff59d}.chip.ok{background:#a5d6a7}.chip.bad{background:#ef9a9a}\n.work{font-family:inherit;font-weight:800;background:#263238;color:#c3e88d;border-radius:8px;padding:.4em .6em;margin:.3em 0;min-height:1.5em;white-space:pre-wrap}\n.final .big{color:#c62828}\n.score{font-size:2.6em;font-weight:900;color:#1b5e20;text-shadow:2px 2px 0 #c8e6c9}\n.sname{font-size:2.3em;font-weight:900;color:#0d47a1;line-height:1.1;word-break:break-word}\n#rot{position:fixed;inset:0;background:#0b1020;color:#fff;z-index:99;display:none;align-items:center;justify-content:center;text-align:center;font-size:22px;font-weight:800;padding:20px}\n@media (orientation:portrait) and (max-width:900px){#rot{display:flex}}\n.pop{position:absolute;z-index:11;font-weight:900;color:#ffd54f;text-shadow:2px 2px 0 #000;font-size:clamp(16px,4.5vh,30px);pointer-events:none;animation:up 1.2s forwards}\n@keyframes up{to{transform:translateY(-60px);opacity:0}}\n.shake{animation:shake .35s}@keyframes shake{25%{transform:translateX(-8px)}75%{transform:translateX(8px)}}\nsmall{font-size:.8em}\n\n.shakeS{animation:shakeS .35s}@keyframes shakeS{0%,100%{transform:translate(-50%,-50%)}25%{transform:translate(calc(-50% - 8px),-50%)}75%{transform:translate(calc(-50% + 8px),-50%)}}\n\n#fade{position:absolute;inset:0;background:#000;opacity:0;transition:opacity .25s;pointer-events:none;z-index:20}\n.logo span{display:inline-block;animation:lb 1.3s ease-in-out infinite}.logo span:nth-child(2n){animation-delay:.16s}.logo span:nth-child(3n){animation-delay:.32s}.logo span:nth-child(5n){animation-delay:.48s}@keyframes lb{50%{transform:translateY(-9%)}}\n.card{background:linear-gradient(#fffef8,#fff6dc)}\n.opt{background:linear-gradient(#eef7ff,#d6ebff)}.opt.ok{background:#a5d6a7}.opt.bad{background:#ef9a9a}.opt.sel{background:#fff59d}\n.btn{background:linear-gradient(#ffe27a,#ffc928)}.btn.go{background:linear-gradient(#8fd694,#57b35c)}.btn.alt{background:linear-gradient(#b3dcff,#7fc1f7)}.btn[disabled]{background:#cfcfcf}\n.write{background:linear-gradient(#fffbea,#ffe9b8)}.write.wings{background:linear-gradient(#f7fbff,#dcefff)}\n\n#mg{position:absolute;inset:0;z-index:12;background:rgba(12,16,48,.92);color:#fff;display:flex;flex-direction:column;align-items:center;padding:2% 4%;font-size:clamp(14px,3.6vh,24px);touch-action:none}\n#mg .mgh{text-align:center;color:#ffd54f;text-shadow:2px 2px 0 #000}#mg .mgh small{color:#fff}\n#mg .timer{width:70%;flex:none}\n#mg .mga{position:relative;flex:1;width:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:.4em}\n#mg .mgbig{font-size:min(26vh,120px);transition:transform .08s;line-height:1}\n#mg .mgbtn{font-size:1.3em;padding:.5em 1.4em;touch-action:none}\n#mg .mgl{position:absolute;top:0;bottom:0;width:33.33%;border-left:2px dashed rgba(255,255,255,.2)}#mg .mgl[data-l=\"0\"]{left:0}#mg .mgl[data-l=\"1\"]{left:33.33%}#mg .mgl[data-l=\"2\"]{left:66.66%}\n#mg .mgbag{position:absolute;bottom:2%;font-size:min(16vh,70px);transform:translateX(-50%);transition:left .12s;pointer-events:none}\n#mg .mgs{position:absolute;font-size:min(13vh,56px);transform:translateX(-50%);transition:top 1.15s linear;pointer-events:none}\n#mg .mgc{position:absolute;top:0;right:2%;font-weight:900;color:#ffd54f}\n#mg .mgt{position:absolute;font-size:min(16vh,70px);cursor:pointer;animation:pop .15s}\n#mg .mgtrack{position:relative;width:90%;height:min(22vh,100px);background:rgba(255,255,255,.12);border:3px solid #fff;border-radius:14px}\n#mg .mgzone{position:absolute;left:62%;width:22%;top:0;bottom:0;background:rgba(76,175,80,.7)}\n#mg .mgcup{position:absolute;top:8%;font-size:min(15vh,64px);line-height:1;transition:left .05s linear}\n#mg .mgflag{position:absolute;right:0;top:8%;font-size:min(15vh,64px);line-height:1}\n#mg .mgrow{display:flex;gap:8%;width:90%;justify-content:space-between}\n#mg .mgr{font-size:2em;font-weight:900;text-shadow:3px 3px 0 #000}\n\n#ex{position:absolute;inset:0;z-index:13;background:#151a33;display:flex;flex-direction:column;align-items:center;padding:1% 2%;gap:1%}\n#ex .exw{position:relative;height:60%;aspect-ratio:320/118;max-width:100%;flex:none}\n#ex canvas{display:block;width:100%;height:100%;image-rendering:pixelated;image-rendering:crisp-edges;border:4px solid #000;border-radius:10px;box-shadow:5px 5px 0 #000;background:#f4ead4}\n#ex .exb{position:relative;flex:1;width:92%;background:#fffdf5;border:4px solid #1b1b2f;border-radius:12px;box-shadow:4px 4px 0 #000;padding:.9em .8em .3em;font-size:clamp(13px,3.5vh,21px);font-weight:700;line-height:1.3;overflow:auto;margin-top:.6em}\n#ex .exb .who{position:absolute;top:-1.1em;left:.6em;background:#1c2a52;color:#ffd54f;border-radius:8px;padding:0 .5em;font-size:.85em}\n#ex .exn{position:absolute;right:3%;bottom:3%;font-size:clamp(13px,3.4vh,20px);margin:0}\n\n#ex .exb{padding:.4em .7em}#ex .exb .who{position:static;display:inline-block;margin:0 .5em .15em 0}\n\n.dlg{top:8%;bottom:auto;min-height:0;max-height:34%;overflow:visible;padding:.45em 2.2em .45em .8em;font-size:clamp(13px,3.3vh,20px)}\n\n/* v7: animals, desk flow, board */\n#mus{position:absolute;right:calc(6px + 2.4em);top:4px;z-index:30;font-size:clamp(16px,3.4vh,24px);background:rgba(0,0,0,.5);color:#fff;border:2px solid #fff;border-radius:10px;padding:0 6px;cursor:pointer}\n#an{position:absolute;inset:0;z-index:14;background:radial-gradient(circle,#31449a,#0b1020);display:flex;flex-direction:column;align-items:center;justify-content:center;color:#fff;text-align:center;overflow:hidden;cursor:pointer}\n#an .anr{position:absolute;left:50%;top:50%;width:220vh;height:220vh;margin:-110vh 0 0 -110vh;background:repeating-conic-gradient(rgba(255,255,255,.08) 0 10deg,transparent 10deg 20deg);animation:anspin 16s linear infinite}\n@keyframes anspin{to{transform:rotate(360deg)}}\n#an .ana{position:relative;font-size:min(40vh,180px);line-height:1.15;animation:anin .55s cubic-bezier(.2,1.6,.4,1),anbob .45s .55s infinite alternate}\n#an .ana img{height:1em;image-rendering:pixelated;vertical-align:middle}\n@keyframes anin{from{transform:translateX(140%) scale(.3) rotate(25deg)}to{transform:none}}\n@keyframes anbob{from{transform:translateY(0)}to{transform:translateY(-5%)}}\n#an .ant{position:relative;font-size:min(9vh,40px);font-weight:900;color:#ffd54f;text-shadow:3px 3px 0 #000;letter-spacing:1px}\n#an .ant b{color:#39ff14}\n#an .ans{position:relative;font-size:min(5vh,22px);font-weight:700;padding:0 4%}\n#an .and{position:relative;margin-top:.4em;background:#ff6a00;color:#000;font-weight:900;border-radius:10px;padding:.1em .7em;font-size:min(5vh,22px)}\n.anbig{font-size:2.4em;line-height:1.1}.anbig img,.card h2 img.ani{height:1em;image-rendering:pixelated;vertical-align:middle}\n.cmd img{height:1.1em;image-rendering:pixelated}\n.card.animal{border-color:#ff6a00;box-shadow:6px 6px 0 #ff6a00}\n.pts{display:flex;flex-direction:column;gap:.2em;margin-top:.2em}\n.pt{display:block;padding:.1em .5em;border-radius:6px;border:2px solid #b0bec5;background:#fff;color:#555;transition:all .2s}\n.pt.lit{background:#c8ffb8;border-color:#2e7d32;color:#1b1b2f;font-weight:700}\n.mk{display:inline-block;padding:0 .4em;border-radius:8px;border:3px solid #1b1b2f}.mk.g{background:#a5d6a7}.mk.l{background:#ffcc80}\n.exbd{position:absolute;left:32%;top:25%;width:63.5%;height:45%;color:#f6f3d8;font-family:\"Comic Sans MS\",\"Chalkboard SE\",\"Trebuchet MS\",sans-serif;font-weight:700;font-size:clamp(10px,3.7vh,21px);line-height:1.2;display:none;overflow:hidden;pointer-events:none}\n.exbd b{color:#39ff14}.exbd u{color:#ffb74d;text-decoration:none}\n#ex .exb.trap{background:#fff3e0;border-color:#e65100}\n.exos{display:flex;gap:.5em;flex-wrap:wrap;margin:.3em 0 2.4em}\n.exo{font:inherit;font-weight:800;padding:.25em .8em;border:3px solid #1b1b2f;border-radius:10px;background:#e3f2fd;box-shadow:3px 3px 0 #1b1b2f;color:#1b1b2f;cursor:pointer}\n.exo.ok{background:#a5d6a7}.exo.bad{background:#ef9a9a;text-decoration:line-through}\ninput.tcode{font-size:1.05em}\n.exbd.sm{font-size:clamp(9px,2.9vh,17px)}\n.tfoot{position:sticky;bottom:calc(-1 * clamp(8px,2.2vh,18px));background:#fff6dc;border-top:3px solid #ff6a00;margin:.4em -.3em 0;padding:.3em .3em clamp(8px,2.2vh,18px);display:flex;flex-direction:column;gap:.25em}\n.tfoot input.name{margin:0;font-size:1em;width:auto;flex:1;min-width:0}.tfoot .fb{margin:0}\nimg.ani{height:1.15em;width:auto;vertical-align:middle;image-rendering:pixelated}\n#an .ana img.ani{height:1em}.anbig img.ani{height:1em}\n.unl{margin-top:.5em;padding:.5em;border:3px dashed #1b1b2f;border-radius:12px;background:#fff8e1}.unl.ok{border-style:solid;background:#e8f5e9}.unl .how{margin:0 0 .3em}\n", BQ_SHELL="<div id=\"stage\"><canvas id=\"cv\"></canvas>\n<div id=\"hud\"><span id=\"hH\" class=\"pill\"></span><span id=\"hC\" class=\"pill\"></span><span class=\"grow\" id=\"hT\"></span><span id=\"storm\" class=\"pill\"><span id=\"stI\">\ud83c\udf2a\ufe0f</span><span class=\"bar\"><i></i></span></span><span id=\"hS\" class=\"pill\" style=\"margin-right:7.4em\"></span></div>\n<button id=\"mute\" aria-label=\"Sound on or off\">\ud83d\udd0a</button><button id=\"mus\" aria-label=\"Music on or off\">\ud83c\udfb5</button>\n<div id=\"ctrl\"><button id=\"bL\" aria-label=\"Left\">\u25c0</button><button id=\"bR\" aria-label=\"Right\">\u25b6</button><button id=\"bJ\" aria-label=\"Jump\">\u2912</button></div>\n<div id=\"bann\"></div><div id=\"lanes\"></div><div id=\"sortb\" class=\"sortbtns\"></div>\n<div id=\"fade\"></div><div id=\"ttl\" class=\"ttl\"></div><div id=\"dlg\" class=\"dlg\"></div><div id=\"ov\"></div></div>\n<div id=\"rot\">\ud83d\udcf1\u21bb<br>Turn your phone sideways<br>to play Business Quest.</div>";
(function(){var st=document.createElement('style');st.textContent=BQ_CSS;document.head.appendChild(st);document.body.insertAdjacentHTML('beforeend',BQ_SHELL);})();
/* Business Quest engine v13.1 - one engine, many levels. Content lives in window.LEVEL. */
(function(){
'use strict';
var L = window.LEVEL; window.BQ={log:[],cur:null};
var SET = window.BQ_SETTINGS || {};
var TEACHER = SET.teacher || L.teacher || 'Mr. Wizda', PACE = +((/[?&]pace=([\d.]+)/.exec(location.search)||[])[1]) || +SET.pace || 1, TCODE = SET.teacherCode ? String(SET.teacherCode) : null, HMAX = +SET.hearts || 5, MAXLOCK = L.free ? 0 : (SET.maxChallenges==null ? 1 : +SET.maxChallenges);
var FAST = /[?&]fast=1/.test(location.search);
var W = 320, H = 180, GROUND = 148, T = 16;
function $(s){return document.querySelector(s);}
var stageEl = $('#stage'), cv = $('#cv'), ctx = cv.getContext('2d');
cv.width = W; cv.height = H; ctx.imageSmoothingEnabled = false;

/* ---------- storage ---------- */
var store = {
  get:function(k,d){try{var v=localStorage.getItem(k);return v==null?d:JSON.parse(v);}catch(e){return d;}},
  set:function(k,v){try{localStorage.setItem(k,JSON.stringify(v));}catch(e){}},
  del:function(k){try{localStorage.removeItem(k);}catch(e){}}
};

/* ---------- audio (all synthesized, no files) ---------- */
var Snd = (function(){
  var samples={}, SMAP={coin:'coin',right:'ding',wrong:'buzzer',eagle:'eagle',bear:'bear',horse:'horse',flag:'tadaa',win:'applause',cash:'cash',aww:'aww',boom:'vineboom',hawk:'hawk',owl:'owl',wolf:'wolf',camel:'camel',goat:'goat',yak:'yak',leopard:'leopard',crane:'crane',unlock:'unlock',fanfare:'fanfare',pop:'pop',page:'page',chalk:'chalk',fail:'fail',good:'good'};
  var GAIN={coin:0.35,eagle:1.3,bear:1,horse:1.2,owl:0.6,wolf:0.6,camel:0.6,goat:0.6,yak:0.6,leopard:0.55,crane:0.6,unlock:0.5,fanfare:0.55,pop:0.6,page:0.7,chalk:1.2,fail:0.5,good:0.6};
  var ANIMALS={eagle:1,owl:1,wolf:1,horse:1,yak:1,camel:1,goat:1,bear:1,leopard:1,crane:1}, curA=null, loops={};
  var musicOn=store.get('bq_music',true)&&SET.music!==false;
  function quiet(){ var o=document.getElementById('ov'); return (o&&o.classList.contains('on'))||document.getElementById('ex')||document.getElementById('an'); }
  var ac=null, master=null, muted=store.get('bq_mute',false), mTimer=null;
  function init(){ if(ac) return; try{ ac=new (window.AudioContext||window.webkitAudioContext)(); master=ac.createGain(); master.gain.value=muted?0:0.5; master.connect(ac.destination);}catch(e){ac=null;}
    if(ac&&window.BQ_SAMPLES){ Object.keys(BQ_SAMPLES).forEach(function(k){ try{ var bin=atob(BQ_SAMPLES[k]), u=new Uint8Array(bin.length); for(var i=0;i<bin.length;i++) u[i]=bin.charCodeAt(i); ac.decodeAudioData(u.buffer,function(b){samples[k]=b;},function(){}); }catch(e){} }); } }
  function resume(){ init(); if(ac&&ac.state==='suspended') ac.resume(); }
  function tone(f,d,type,vol,t0,slide){ if(!ac) return; var t=ac.currentTime+(t0||0); var o=ac.createOscillator(), g=ac.createGain(); o.type=type||'square'; o.frequency.setValueAtTime(f,t); if(slide) o.frequency.exponentialRampToValueAtTime(Math.max(30,slide),t+d); g.gain.setValueAtTime(vol||0.1,t); g.gain.exponentialRampToValueAtTime(0.0001,t+d); o.connect(g); g.connect(master); o.start(t); o.stop(t+d+0.03); }
  function noise(d,vol,t0,freq){ if(!ac) return; var t=ac.currentTime+(t0||0); var n=Math.floor(ac.sampleRate*d), b=ac.createBuffer(1,n,ac.sampleRate), a=b.getChannelData(0); for(var i=0;i<n;i++) a[i]=Math.random()*2-1; var s=ac.createBufferSource(); s.buffer=b; var f=ac.createBiquadFilter(); f.type='lowpass'; f.frequency.value=freq||1000; var g=ac.createGain(); g.gain.setValueAtTime(vol||0.2,t); g.gain.exponentialRampToValueAtTime(0.0001,t+d); s.connect(f); f.connect(g); g.connect(master); s.start(t); }
  function vib(f,d,type,vol,rate,depth,t0,endF){ if(!ac) return; var t=ac.currentTime+(t0||0); var o=ac.createOscillator(), g=ac.createGain(), l=ac.createOscillator(), lg=ac.createGain(); o.type=type; o.frequency.setValueAtTime(f,t); if(endF) o.frequency.linearRampToValueAtTime(endF,t+d); l.frequency.value=rate; lg.gain.value=depth; l.connect(lg); lg.connect(o.frequency); g.gain.setValueAtTime(0.0001,t); g.gain.linearRampToValueAtTime(vol,t+0.04); g.gain.setValueAtTime(vol,t+d*0.7); g.gain.exponentialRampToValueAtTime(0.0001,t+d); o.connect(g); g.connect(master); o.start(t); l.start(t); o.stop(t+d+0.05); l.stop(t+d+0.05); }
  var fx = {
    jump:function(){tone(330,0.15,'square',0.07,0,700);},
    coin:function(){tone(988,0.07,'square',0.07);tone(1319,0.2,'square',0.07,0.07);},
    bump:function(){tone(150,0.08,'square',0.12,0,90);},
    block:function(){tone(523,0.08,'square',0.1);tone(784,0.14,'square',0.1,0.08);},
    right:function(){[523,659,784,1047].forEach(function(f,i){tone(f,0.13,'square',0.09,i*0.08);});},
    wrong:function(){tone(196,0.18,'sawtooth',0.11);tone(147,0.32,'sawtooth',0.11,0.18);},
    hurt:function(){tone(440,0.3,'square',0.1,0,110);},
    fire:function(){noise(0.6,0.18,0,1800);tone(220,0.45,'triangle',0.1,0,880);},
    wings:function(){[784,988,1175,1568,2093].forEach(function(f,i){tone(f,0.3,'triangle',0.08,i*0.07);});},
    door:function(){noise(0.5,0.25,0,400);tone(110,0.45,'square',0.1,0,55);},
    tick:function(){tone(1200,0.03,'square',0.035);},
    type:function(){tone(600+Math.random()*250,0.025,'square',0.02);},
    flag:function(){[392,523,659,784,659,784,1047].forEach(function(f,i){tone(f,0.17,'square',0.09,i*0.12);});},
    ding:function(){tone(1568,0.35,'triangle',0.1);},
    storm:function(){noise(1.4,0.25,0,300);tone(73,1.3,'sawtooth',0.1,0,55);},
    win:function(){[523,523,523,659,587,523,784,1047].forEach(function(f,i){tone(f,0.2,'square',0.09,i*0.15);});},
    eagle:function(){vib(2200,0.5,'sine',0.12,30,120,0,1500);vib(2000,0.45,'sine',0.1,30,100,0.5,1300);},
    owl:function(){tone(420,0.28,'sine',0.2,0,380);tone(400,0.45,'sine',0.2,0.38,360);},
    wolf:function(){vib(350,1.3,'sine',0.14,5,10,0,700);},
    horse:function(){vib(1100,0.75,'sawtooth',0.05,18,90,0,500);},
    camel:function(){noise(0.7,0.22,0,250);vib(110,0.7,'sawtooth',0.08,12,20);},
    goat:function(){vib(520,0.65,'sawtooth',0.07,9,25,0,470);},
    bear:function(){noise(0.9,0.3,0,180);vib(80,0.9,'sawtooth',0.1,8,15);},
    leopard:function(){noise(0.55,0.25,0,500);vib(160,0.55,'sawtooth',0.08,25,30);},
    cash:function(){tone(1318,0.3,'triangle',0.12);tone(1568,0.4,'triangle',0.1,0.14);},
    aww:function(){tone(300,0.5,'sine',0.12,0,180);},
    boom:function(){tone(90,0.4,'sine',0.3,0,40);},
    hawk:function(){vib(2400,0.5,'sine',0.1,30,120,0,1400);},
    marmot:function(){tone(2600,0.08,'sine',0.12);tone(2600,0.08,'sine',0.12,0.16);}
  };
  fx.unlock=fx.door; fx.good=fx.cash; fx.fail=fx.aww; fx.pop=fx.tick; fx.fanfare=fx.flag; fx.yak=fx.bear; fx.crane=fx.hawk; fx.page=function(){}; fx.chalk=function(){};
  function N(s){ if(!s||s==='0') return 0; var m=s.match(/([A-G])(#?)(\d)/); var idx={C:0,D:2,E:4,F:5,G:7,A:9,B:11}[m[1]]+(m[2]?1:0); return 440*Math.pow(2,(idx-9)/12+(+m[3]-4)); }
  var tunes = {
    run:{bpm:150,mel:'E5 G5 A5 G5 E5 D5 C5 D5 E5 E5 G5 0 A5 C6 A5 G5 E5 G5 A5 C6 D6 C6 A5 G5 E5 D5 C5 D5 E5 0 0 0',bass:'C3 0 G3 0 C3 0 G3 0 A2 0 E3 0 A2 0 E3 0 F2 0 C3 0 F2 0 C3 0 G2 0 D3 0 G2 0 G2 0'},
    movie:{bpm:96,mel:'C5 0 E5 0 G5 0 E5 0 A5 0 G5 0 E5 0 0 0 D5 0 E5 0 G5 0 A5 0 G5 0 E5 0 D5 0 0 0',bass:'C3 0 0 0 G2 0 0 0 A2 0 0 0 E3 0 0 0 F2 0 0 0 C3 0 0 0 G2 0 0 0 G2 0 0 0'},
    boss:{bpm:160,mel:'A4 A4 C5 A4 D5 C5 A4 G4 A4 A4 C5 D5 E5 D5 C5 A4 E5 E5 D5 C5 D5 C5 A4 G4 A4 0 A4 0 E4 G4 A4 0',bass:'A2 0 A2 0 A2 0 A2 0 F2 0 F2 0 G2 0 G2 0 A2 0 A2 0 A2 0 A2 0 E2 0 E2 0 E2 0 E2 0'}
  };
  function music(name){
    if(mTimer){clearInterval(mTimer);mTimer=null;}
    if(!name||!tunes[name]) return;
    var t=tunes[name], mel=t.mel.split(' ').map(N), bass=t.bass.split(' ').map(N), step=60/t.bpm/2, i=0;
    mTimer=setInterval(function(){ if(ac&&!muted&&musicOn&&!quiet()&&document.visibilityState!=='hidden'){ var m=mel[i%mel.length], b=bass[i%bass.length]; if(m) tone(m,step*0.9,'square',0.018); if(b) tone(b,step*0.9,'triangle',0.035); if(i%4===0) noise(0.07,0.055,0,160); if(i%4===2) noise(0.04,0.025,0,7000);} i++; }, step*1000);
  }
  return {
    init:init, resume:resume, music:music,
    fx:function(n){ if(muted||!ac) return; var sm=SMAP[n]; try{ if(sm&&samples[sm]){ var src=ac.createBufferSource(); src.buffer=samples[sm]; var g=ac.createGain(); g.gain.value=GAIN[n]||0.8; src.connect(g); g.connect(master); if(ANIMALS[n]){ if(curA){ try{curA.stop();}catch(e2){} } curA=src; } src.start(); } else if(fx[n]) fx[n](); }catch(e){} },
    loop:function(n,on){ if(loops[n]){ try{loops[n].stop();}catch(e){} loops[n]=null; } if(!on||muted||!ac||!samples[n]) return; try{ var src=ac.createBufferSource(); src.buffer=samples[n]; src.loop=true; var g=ac.createGain(); g.gain.value=GAIN[n]||0.8; src.connect(g); g.connect(master); src.start(); loops[n]=src; }catch(e){} },
    toggleMusic:function(){ musicOn=!musicOn; store.set('bq_music',musicOn); return musicOn; }, musicOn:function(){return musicOn;}, has:function(n){return !!samples[n];},
    toggle:function(){ muted=!muted; store.set('bq_mute',muted); if(master) master.gain.value=muted?0:0.5; return muted; },
    isMuted:function(){return muted;}
  };
})();

/* ---------- characters ---------- */
var HEROES = [
  {id:'zaya',name:'Zaya',title:'the Cashmere Queen',g:'girl',skin:'#e8b48a',hair:'#1b1010',hs:'long',top:'#c2185b',trim:'#ffd54f',low:'#7b1fa2',acc:'cashmere'},
  {id:'baatar',name:'Baatar',title:'the Herder',g:'boy',skin:'#d39a70',hair:'#1b1010',hs:'short',top:'#1e88e5',trim:'#ffca28',low:'#3e2723',hat:'loovuz',mount:'horse'},
  {id:'altan',name:'Altantsetseg',title:'the Eagle Huntress',g:'girl',skin:'#d9a07a',hair:'#1b1010',hs:'braids',top:'#6d4c41',trim:'#ffb300',low:'#3e2723',hat:'fur',acc:'eagle'},
  {id:'enkh',name:'Enkhbilguun',title:'the Wrestler',g:'boy',skin:'#d9a07a',hair:'#111111',hs:'short',top:'zodog',trim:'#e53935',low:'#1e40af',hat:'wrestler'},
  {id:'khulan',name:'Khulan',title:'the Naadam Archer',g:'girl',skin:'#e0aa80',hair:'#20140f',hs:'pony',top:'#1565c0',trim:'#ffeb3b',low:'#0d47a1',acc:'bow'},
  {id:'baterdene',name:'Bat-Erdene',title:'the Throat Singer',g:'boy',skin:'#d39a70',hair:'#111111',hs:'short',top:'#8e24aa',trim:'#ffd54f',low:'#4a148c',hat:'round',acc:'notes'},
  {id:'oyunaa',name:'Oyunaa',title:'the Morin Khuur Star',g:'girl',skin:'#e8b48a',hair:'#2a1a12',hs:'bun',top:'#00897b',trim:'#ffd54f',low:'#004d40',acc:'khuur'},
  {id:'ganbold',name:'Ganbold',title:'the UB Delivery Rider',g:'boy',skin:'#dfa67c',hair:'#111111',hs:'short',top:'#f9a825',trim:'#212121',low:'#37474f',hat:'helmet',mount:'scooter'},
  {id:'nomin',name:'Nomin',title:'the Tech Founder',g:'girl',skin:'#e6b088',hair:'#151010',hs:'bob',top:'#6a1b9a',trim:'#ce93d8',low:'#263238',acc:'laptop',glasses:true},
  {id:'joe',name:'Cool Potato Joe',title:'Guest Star',g:'boy',potato:true}
];
var NPC = {
  saraa:{id:'saraa',name:'Saraa',skin:'#e8b48a',hair:'#1b1010',hs:'pony',top:'#ef6c00',trim:'#ffffff',low:'#5d4037',acc:'apron'},
  joe:HEROES[9],
  chris:{id:'chris',name:'Mr. Chris',skin:'#f2cdb0',hair:'#a8763e',hs:'short',top:'#1c2a52',trim:'#1c2a52',low:'#1c2a52',acc:'suit'}
};
function heroById(id){ for(var i=0;i<HEROES.length;i++) if(HEROES[i].id===id) return HEROES[i]; return HEROES[0]; }
function boxOf(h){ if(h.mount==='horse') return {w:18,h:28}; if(h.mount==='scooter') return {w:16,h:24}; if(h.potato) return {w:10,h:15}; return {w:10,h:19}; }

function R(c,x,y,w,h,col){ c.fillStyle=col; c.fillRect(Math.round(x),Math.round(y),w,h); }
function drawPerson(c,h,frame,tick,noLegs){
  var sk=h.skin, top=h.top==='zodog'?h.skin:h.top;
  var sw = frame===1?1:frame===2?-1:0;
  if(!noLegs){
    var bt='#3e2723';
    if(frame===3){ R(c,-4,-6,3,4,h.low); R(c,1,-7,3,4,h.low); R(c,-4,-3,3,2,bt); R(c,1,-4,3,2,bt); }
    else { R(c,-4+sw,-5,3,5,h.low); R(c,1-sw,-5,3,5,h.low); R(c,-4+sw,-2,3,2,bt); R(c,1-sw,-2,3,2,bt); }
  } else { R(c,-1,-5,3,4,h.low); R(c,-1,-2,3,2,'#3e2723'); }
  // back items
  if(h.acc==='bow'){ R(c,-7,-17,1,11,'#8d6e63'); R(c,-6,-17,1,1,'#ddd'); R(c,-6,-7,1,1,'#ddd'); }
  if(h.acc==='khuur'){ R(c,-8,-19,2,14,'#6d4c41'); R(c,-9,-21,3,2,'#4e342e'); R(c,-7,-11,1,6,'#ffcc80'); }
  if(h.hs==='long'){ R(c,-5,-17,2,9,h.hair); }
  if(h.hs==='braids'){ R(c,-5,-15,1,9,h.hair); R(c,-5,-6,1,1,'#e53935'); }
  if(h.acc==='cashmere'){ var wv=Math.round(Math.sin(tick/6)*1.5); R(c,-10,-12+wv,5,2,'#f8bbd0'); R(c,-13,-11+wv,3,2,'#f48fb1'); }
  // body
  if(h.top==='zodog'){
    R(c,-5,-12,10,7,sk); R(c,-5,-12,10,2,h.trim); R(c,-5,-12,2,5,h.trim); R(c,3,-12,2,5,h.trim);
    R(c,-5,-5,10,2,h.low);
  } else {
    R(c,-5,-12,10,8,top); R(c,0,-12,1,4,h.trim); R(c,-5,-8,10,1,h.trim);
    if(h.acc==='apron'){ R(c,-3,-10,6,7,'#ffffff'); } if(h.acc==='suit'){ R(c,-2,-12,4,5,'#ffffff'); R(c,0,-12,1,6,'#16307a'); R(c,-1,-12,1,2,'#16307a'); R(c,3,-10,2,2,'#e53935'); R(c,3,-8,2,1,'#ffd54f'); }
  }
  var asw = frame===3?-2:sw;
  R(c,-7,-12+asw,2,6,h.top==='zodog'?sk:top); R(c,5,-12-asw,2,6,h.top==='zodog'?sk:top);
  R(c,-7,-6+asw,2,1,sk); R(c,5,-6-asw,2,1,sk);
  if(h.acc==='eagle'){ R(c,5,-11,5,3,'#6d4c41'); R(c,8,-13,2,2,'#f5f5f5'); R(c,10,-12,1,1,'#ffb300'); R(c,4,-10,2,2,'#4e342e'); }
  if(h.acc==='laptop'){ R(c,4,-9,6,3,'#90a4ae'); R(c,5,-8,4,1,'#e3f2fd'); }
  // head
  R(c,-4,-18,8,6,sk); R(c,1,-16,1,2,'#111'); R(c,3,-16,1,2,'#111'); R(c,1,-13,3,1,'#8d3a2a');
  if(h.glasses){ R(c,0,-16,2,2,'rgba(0,0,0,.6)'); R(c,3,-16,2,2,'rgba(0,0,0,.6)'); R(c,2,-16,1,1,'#111'); }
  // hair
  R(c,-4,-19,8,2,h.hair); R(c,-4,-17,2,3,h.hair);
  if(h.hs==='pony'){ R(c,-6,-18,2,5,h.hair); }
  if(h.hs==='bun'){ R(c,-3,-21,4,2,h.hair); }
  if(h.hs==='bob'){ R(c,-5,-18,2,6,h.hair); }
  // hats
  if(h.hat==='loovuz'){ R(c,-5,-20,10,2,'#c62828'); R(c,-3,-22,6,2,'#c62828'); R(c,-1,-24,2,2,'#ffd54f'); }
  if(h.hat==='fur'){ R(c,-5,-21,10,3,'#a1887f'); R(c,-5,-18,2,5,'#a1887f'); R(c,-2,-23,4,2,'#e53935'); }
  if(h.hat==='round'){ R(c,-4,-21,8,3,'#4a148c'); R(c,-5,-19,10,1,'#ffd54f'); R(c,-1,-22,2,1,'#e53935'); }
  if(h.hat==='helmet'){ R(c,-5,-21,10,4,'#e53935'); R(c,1,-18,4,1,'#90caf9'); }
  if(h.hat==='wrestler'){ R(c,-4,-21,8,2,'#1e40af'); R(c,-2,-23,4,2,'#1e40af'); R(c,-1,-24,2,1,'#e53935'); }
  if(h.acc==='cashmere'){ R(c,-3,-21,6,1,'#ffd54f'); R(c,-3,-22,1,1,'#ffd54f'); R(c,0,-23,1,2,'#ffd54f'); R(c,2,-22,1,1,'#ffd54f'); R(c,-5,-12,10,2,'#f8bbd0'); }
  if(h.acc==='apron'){ R(c,-4,-20,8,1,'#ef6c00'); }
  if(h.acc==='notes' && (tick>>4)%2){ R(c,6,-24,1,4,'#fff'); R(c,6,-24,3,1,'#fff'); R(c,5,-21,2,2,'#fff'); }
}
function drawPotato(c,frame,tick){
  var sw = frame===1?1:frame===2?-1:0;
  R(c,-3+sw,-3,1,3,'#5d4037'); R(c,2-sw,-3,1,3,'#5d4037'); R(c,-4+sw,-1,3,1,'#212121'); R(c,1-sw,-1,3,1,'#212121');
  R(c,-5,-14,10,11,'#c89b5a'); R(c,-6,-12,12,7,'#c89b5a'); R(c,-4,-15,8,1,'#c89b5a'); R(c,-4,-3,8,1,'#a97c45');
  R(c,-3,-6,1,1,'#8d6337'); R(c,3,-9,1,1,'#8d6337'); R(c,-4,-13,1,1,'#8d6337');
  R(c,-3,-11,8,2,'#111'); R(c,-4,-11,1,1,'#111'); R(c,0,-10,1,1,'#555');
  R(c,-1,-7,4,1,'#5d2a1a'); R(c,3,-8,1,1,'#5d2a1a');
  R(c,-8,-9-sw,2,1,'#5d4037'); R(c,6,-9+sw,2,1,'#5d4037');
}
function drawHorse(c,frame,tick){
  var a = frame===0?0:(tick>>2)%4;
  var leg=[[0,0,0,0],[1,-1,1,-1],[2,0,-2,0],[1,1,-1,-1]][a];
  R(c,-10,-13,19,7,'#8d5524'); R(c,6,-18,4,7,'#8d5524'); R(c,8,-20,6,4,'#8d5524'); R(c,12,-18,2,2,'#6d3f17');
  R(c,6,-19,2,6,'#2b1a10'); R(c,-12,-13,2,7,'#2b1a10'); R(c,10,-19,1,1,'#111');
  R(c,-9+leg[0],-6,2,6,'#7a4518'); R(c,-6+leg[1],-6,2,6,'#7a4518'); R(c,3+leg[2],-6,2,6,'#7a4518'); R(c,6+leg[3],-6,2,6,'#7a4518');
  R(c,-9+leg[0],-1,2,1,'#222'); R(c,-6+leg[1],-1,2,1,'#222'); R(c,3+leg[2],-1,2,1,'#222'); R(c,6+leg[3],-1,2,1,'#222');
  R(c,-3,-14,6,2,'#c62828');
}
function drawScooter(c,frame,tick){
  R(c,-8,-7,16,3,'#26a69a'); R(c,-9,-4,5,4,'#212121'); R(c,5,-4,5,4,'#212121'); R(c,-8,-3,3,2,'#9e9e9e'); R(c,6,-3,3,2,'#9e9e9e');
  R(c,6,-16,2,10,'#455a64'); R(c,5,-17,4,1,'#212121'); R(c,-10,-18,7,7,'#ffb300'); R(c,-9,-16,5,1,'#e65100');
}
function drawCharRaw(c,h,x,y,frame,face,tick){
  c.save(); c.translate(Math.round(x),Math.round(y)); if(face<0) c.scale(-1,1);
  if(h.potato){ drawPotato(c,frame,tick); }
  else if(h.mount==='horse'){ drawHorse(c,frame,tick); c.translate(0,-9); drawPerson(c,h,0,tick,true); }
  else if(h.mount==='scooter'){ drawScooter(c,frame,tick); c.translate(-1,-5); drawPerson(c,h,0,tick,true); }
  else drawPerson(c,h,frame,tick,false);
  c.restore();
}
function portrait(h,scale){
  var c=document.createElement('canvas'); c.width=36; c.height=36; var x=c.getContext('2d'); x.imageSmoothingEnabled=false;
  drawChar(x,h,18,33,0,1,16); c.style.width=(36*(scale||3))+'px'; return c;
}

/* ---------- backgrounds ---------- */
function rng(seed){ var s=seed>>>0||1; return function(){ s=(s*1664525+1013904223)>>>0; return s/4294967296; }; }
var tick=0;
function drawBG(theme,camX,storm){
  var g, i, x, vt=theme; if(theme==='night') theme='street'; if(theme==='gobi'||theme==='snow') theme='steppe';
  var hc1=vt==='gobi'?'#e0b46a':vt==='snow'?'#f1f6fb':'#8bc34a', hc2=vt==='gobi'?'#cf9c4e':vt==='snow'?'#dfe9f2':'#7cb342';
  if(theme==='coast'){
    g=ctx.createLinearGradient(0,0,0,H); g.addColorStop(0,'#5ec4ff'); g.addColorStop(1,'#d8f3ff'); ctx.fillStyle=g; ctx.fillRect(0,0,W,H);
    R(ctx,260,18,16,16,'#fff59d');
    for(i=0;i<6;i++){ x=((i*90-camX*0.15)%540+540)%540-60; R(ctx,x,30+(i%3)*12,34,7,'#ffffff'); R(ctx,x+6,25+(i%3)*12,20,6,'#ffffff'); }
    R(ctx,0,104,W,44,'#1e88e5'); R(ctx,0,104,W,3,'#90caf9');
    for(i=0;i<14;i++){ x=((i*28-camX*0.35+tick*0.3)%392+392)%392-36; R(ctx,x,112+(i%4)*8,10,1,'#bbdefb'); }
    for(i=0;i<4;i++){ x=((i*150-camX*0.35)%600+600)%600-60; R(ctx,x,98,18,4,'#795548'); R(ctx,x+8,88,1,10,'#5d4037'); R(ctx,x+9,88,6,6,'#fff'); }
  } else if(theme==='steppe'){
    g=ctx.createLinearGradient(0,0,0,H); g.addColorStop(0,'#4fa3e0'); g.addColorStop(1,'#cfeeff'); ctx.fillStyle=g; ctx.fillRect(0,0,W,H);
    R(ctx,40,20,14,14,'#fff59d');
    ctx.fillStyle=hc1; for(i=0;i<8;i++){ x=((i*70-camX*0.15)%560+560)%560-80; ctx.beginPath(); ctx.ellipse(x,118,70,30,0,Math.PI,0); ctx.fill(); }
    ctx.fillStyle=hc2; for(i=0;i<8;i++){ x=((i*90+30-camX*0.3)%720+720)%720-90; ctx.beginPath(); ctx.ellipse(x,132,80,24,0,Math.PI,0); ctx.fill(); }
    for(i=0;i<4;i++){ x=((i*140+60-camX*0.45)%560+560)%560-40; R(ctx,x,122,20,12,'#fafafa'); R(ctx,x+2,118,16,4,'#eeeeee'); R(ctx,x+6,115,8,3,'#e0e0e0'); R(ctx,x+8,126,4,8,'#e65100'); R(ctx,x,124,20,1,'#1565c0'); }
  } else {
    g=ctx.createLinearGradient(0,0,0,H); g.addColorStop(0,'#7cc8ff'); g.addColorStop(1,'#e2f5ff'); ctx.fillStyle=g; ctx.fillRect(0,0,W,H);
    R(ctx,270,16,14,14,'#fff59d');
    ctx.fillStyle='#5b8a62'; for(i=0;i<5;i++){ x=((i*130-camX*0.1)%650+650)%650-100; ctx.beginPath(); ctx.moveTo(x,120); ctx.lineTo(x+60,62+(i%2)*12); ctx.lineTo(x+130,120); ctx.fill(); }
    var cols=['#e6cfa8','#c9d6df','#f2b5a0','#d7e3c1','#cfc2e8'];
    for(i=0;i<9;i++){ x=((i*64-camX*0.35)%576+576)%576-64; var bh=48+(i*37%30); R(ctx,x,GROUND-bh,46,bh,cols[i%5]);
      for(var wy=GROUND-bh+6;wy<GROUND-8;wy+=9) for(var wx=x+5;wx<x+42;wx+=9) R(ctx,wx,wy,5,5,'#5c7a99'); }
    for(i=0;i<5;i++){ x=((i*110+40-camX*0.7)%550+550)%550-60; R(ctx,x,GROUND-34,2,34,'#455a64'); R(ctx,x-3,GROUND-36,8,3,'#fff59d'); }
  }
  if(vt==='night'){ ctx.fillStyle='rgba(8,10,50,.62)'; ctx.fillRect(0,0,W,H); var rs=rng(5); for(i=0;i<40;i++){ R(ctx,rs()*W,rs()*70,1,1,(tick>>4)%3===i%3?'#fff':'#9fa8da'); } R(ctx,270,16,14,14,'#fffde7'); for(i=0;i<30;i++){ x=((rs()*576-camX*0.35)%576+576)%576-20; R(ctx,x,GROUND-20-rs()*50,4,4,'#ffe082'); } }
  if(vt==='snow'){ var rw=rng(3); for(i=0;i<50;i++){ R(ctx,((rw()*W+tick*0.3*(1+rw()))%W+W)%W,(rw()*H+tick*(0.4+rw()*0.5))%H,1+(i%2),1+(i%2),'#fff'); } }
  if(storm>0){
    ctx.fillStyle='rgba('+(L.tint||'176,132,70')+','+(0.15+storm*0.45)+')'; ctx.fillRect(0,0,W,H);
    var r=rng(9); for(i=0;i<Math.floor(30+storm*70);i++){ var px=((r()*W*2-tick*(2+r()*3))%W+W)%W, py=r()*H; R(ctx,px,py,3+r()*6,1,'rgba(120,85,40,.6)'); }
  }
}
function drawGround(theme,x,y,w,camX){
  var top=theme==='coast'?'#f2d38b':theme==='steppe'?'#7cb342':'#9e9e9e';
  var top2=theme==='coast'?'#e0b866':theme==='steppe'?'#558b2f':'#bdbdbd';
  var dirt=theme==='coast'?'#d9b06a':theme==='steppe'?'#6d4c41':'#6d4c41';
  if(theme==='gobi'){top='#f2d38b';top2='#e0b866';dirt='#d9b06a';} if(theme==='snow'){top='#f5f9fc';top2='#cfdbe6';dirt='#7f8c99';}
  var sx=x-camX; R(ctx,sx,y,w,H-y+2,dirt); R(ctx,sx,y,w,4,top); R(ctx,sx,y+4,w,2,top2);
  for(var i=0;i<w;i+=16) R(ctx,sx+i,y+10+((i/16)%2)*8,4,2,'rgba(0,0,0,.15)');
}
function drawStand(x,y,label){
  R(ctx,x,y-30,44,30,'#8d6e63'); R(ctx,x+2,y-20,40,18,'#ffe0b2');
  for(var i=0;i<6;i++) R(ctx,x-2+i*8,y-38,8,8,i%2?'#ffffff':'#e53935');
  label=label||'MILK TEA'; var lw=label.length*4+6; R(ctx,x+22-lw/2,y-48,lw,10,'#fff'); ctx.fillStyle='#bf360c'; ctx.font='bold 6px monospace'; ctx.fillText(label,x+25-lw/2,y-41);
  R(ctx,x+10,y-16,6,9,'#bcaaa4'); R(ctx,x+11,y-17,4,2,'#fff'); R(ctx,x+26,y-16,6,9,'#bcaaa4');
}

/* ---------- DOM helpers ---------- */
var ov=$('#ov'), hud=$('#hud'), ctrl=$('#ctrl'), dlg=$('#dlg'), ttl=$('#ttl'), bann=$('#bann'), lanes=$('#lanes'), sortb=$('#sortb');
function show(html,cls){ if(bann.style.display==='block'&&!/Joe says|carries|Catch/.test(bann.textContent)) bann.style.display='none'; ov.innerHTML='<div class="card '+(cls||'')+'">'+html+'</div>'; ov.classList.add('on'); return ov.firstChild; }
function hide(){ ov.classList.remove('on'); ov.innerHTML=''; }
function onTap(el,fn){ el.addEventListener('click',function(e){ e.preventDefault(); Snd.resume(); fn(e); }); }
function wait(ms){ return new Promise(function(r){ setTimeout(r,ms); }); }
function clickOnce(el){ return new Promise(function(r){ onTap(el,function(){ if(el.disabled) return; el.disabled=true; r(); }); }); }
function countdown(btn,secs,during,after){
  return new Promise(function(res){
    btn.disabled=true; var s=FAST?1:Math.max(3,Math.round(secs*PACE)); btn.textContent=during+' '+s;
    var iv=setInterval(function(){ s--; if(s<=0){ clearInterval(iv); btn.disabled=false; btn.textContent=after; res(); } else { btn.textContent=during+' '+s; if(s<=3) Snd.fx('tick'); } },FAST?120:1000);
  });
}
function popAt(text,el){ var p=document.createElement('div'); p.className='pop'; p.textContent=text; var r=stageEl.getBoundingClientRect(); var x=r.width/2, y=r.height*0.35; if(el){ var e=el.getBoundingClientRect(); x=e.left-r.left+e.width/2; y=e.top-r.top; } p.style.left=(x-40)+'px'; p.style.top=y+'px'; stageEl.appendChild(p); setTimeout(function(){p.remove();},1300); }
function fill(s){ return String(s).replace(/\{name\}/g,S.first||'friend').replace(/\{hero\}/g,hero?hero.name:'you').replace(/\{teacher\}/g,TEACHER); }
function shuffle(a){ a=a.slice(); for(var i=a.length-1;i>0;i--){ var j=Math.floor(Math.random()*(i+1)); var t=a[i]; a[i]=a[j]; a[j]=t; } return a; }

/* ---------- command words ---------- */
var CRANE="data:image/svg+xml,"+encodeURIComponent("<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' shape-rendering='crispEdges'><rect x='4' y='7' width='8' height='4' fill='#b0bec5'/><rect x='5' y='8' width='5' height='2' fill='#eceff1'/><rect x='2' y='8' width='3' height='3' fill='#78909c'/><rect x='1' y='10' width='3' height='2' fill='#37474f'/><rect x='11' y='3' width='2' height='5' fill='#455a64'/><rect x='11' y='1' width='3' height='3' fill='#263238'/><rect x='9' y='2' width='2' height='1' fill='#ffffff'/><rect x='14' y='2' width='2' height='1' fill='#ffb300'/><rect x='12' y='2' width='1' height='1' fill='#e53935'/><rect x='6' y='11' width='1' height='5' fill='#546e7a'/><rect x='9' y='11' width='1' height='5' fill='#546e7a'/></svg>");
var craneImg=new Image(); craneImg.src=CRANE;
var CMD = {
  STATE:['🦅','eagle','Give a short, clear fact. No explanation needed.','EAGLE','1 mark for each correct point (2 or 4 marks). Short answers are fine.',''],
  DEFINE:['🦉','owl','Give the exact meaning of the term.','OWL','2 marks for a full, clear meaning. 1 mark if it is only partly right. An example alone is not enough.','"... is ..."'],
  IDENTIFY:['🐺','wolf','Name or pick out the right thing.','WOLF','1 mark for each correct thing (2 or 4 marks). A few words are enough.',''],
  OUTLINE:['🐎','horse','Give the main point, with a little detail.','HORSE','For each point: 1 mark for the point + 1 mark for using the business in the question. Two points = 4 marks.','"One ... is ..., which ..."'],
  DESCRIBE:['🐂','yak','Say what it is like, or what happens.','YAK','For each point: 1 mark for the point + 1 mark for a detail. Two points = 4 marks.','"It is ... It has ..."'],
  EXPLAIN:['🐫','camel','Say WHY or HOW. Link it: because... so...','CAMEL','For each point: the point 1 + use the business 1 + because / so 1. Two points = 6 marks.','"One ... is ... because ... so ..."'],
  CALCULATE:['🐐','goat','Work it out from the numbers. Show your working.','GOAT','2 marks for the right answer. 1 mark if the method is right but the answer is wrong.','"... ÷ ... × 100 = ..."'],
  DISCUSS:['🐻','bear','Write about BOTH sides: one point for, one point against.','BEAR','6 marks. Each side: the point 1 + use the business 1 + because / so 1.','"One advantage is ... because ... However, ... because ..."'],
  JUSTIFY:['🐆','leopard','Make a choice. Back it up with reasons.','SNOW LEOPARD','8 marks: knowledge 2 + use the business 2 + because / so 2 + your decision, with why the other side loses, 2.','"I think ... because ... However, ... Overall, ..."'],
  CONSIDER:['crane','crane','Look at every option. Weigh them. Then choose one.','CRANE','12 marks. 1-4: the options are only named. 5-8: one option explained well, with a decision. 9-12: two or more explained, a decision, and why the others lose.','"Option 1 ... Option 2 ... I recommend ... because ..."']
};
var LBL = {
  'TRUE OR FALSE':['👍','Is it right or wrong?'], 'FILL THE GAP':['✏️','Pick the missing word.'], 'MEMORY CHECK':['🧠','Notebook closed! What do you remember?'],
  'SECOND CHANCE':['🔁','You missed this before. Fix it now!'], RIDDLE:['🧩','Crack the emoji code.'], MATCH:['🔗','Match each one to the right answer.'],
  'QUICK CHECK':['⚡','Tap the right answer.'], 'QUICK WRITE':['✍️','A short answer in your notebook.'], 'THINK FAST':['🤔','Answer in your head.']
};
function aniHTML(cmd){ var c=CMD[cmd]; if(!c) return ''; return c[0]==='crane'?'<img class="ani" alt="crane" src="'+CRANE+'">':c[0]; }
function aniDraw(c2,cmd,x,y,sz){ var c=CMD[cmd]; if(!c) return; if(c[0]==='crane'){ try{ c2.drawImage(craneImg,Math.round(x),Math.round(y-sz),sz,sz); }catch(e){} return; } c2.font=sz+'px "Apple Color Emoji","Noto Color Emoji","Segoe UI Emoji",sans-serif'; c2.textBaseline='alphabetic'; c2.fillStyle='#000'; c2.fillText(c[0],Math.round(x),Math.round(y)); }
function cmdBadge(cmd,marks){ var c=CMD[cmd], l=LBL[cmd]||['❓','']; return '<div class="cmd">'+(c?aniHTML(cmd):l[0])+' '+cmd+(marks?' <span>['+marks+']</span>':'')+'</div><div class="cmdm">'+(c?c[2]:l[1])+'</div>'; }
function cmdSound(cmd){ var c=CMD[cmd]; if(c) Snd.fx(c[1]); }

/* ---------- score state ---------- */
var S = {score:0,marks:0,maxMarks:0,self:0,selfMax:0,coins:0,streak:0,stamps:[],hearts:3,t0:0,name:'',first:'',missed:[],fixed:0,revDone:0,visits:0,locks:0,needLock:0,tmarks:0,tmax:0};
var hero=null;
function addScore(n){ S.score=Math.max(0,S.score+n); updHUD(); }
function gotMarks(n,el){ bossHit=14; S.marks+=n; S.streak++; if(S.streak%3===0&&S.hearts<HMAX&&S.hearts>0) S.hearts++; var bonus=S.streak>=3?50:0; addScore(n*100+bonus); popAt('+'+n+' mark'+(n>1?'s':'')+(bonus?' 🔥x'+S.streak:''),el); updHUD(); }
function missed(){ S.streak=0; hurt(); }
function hurt(plat){
  if(plat){ addScore(-20); Snd.fx('hurt'); stageEl.classList.add('shakeS'); setTimeout(function(){stageEl.classList.remove('shakeS');},400); return; }
  S.hearts--; Snd.fx('hurt'); updHUD(); stageEl.classList.add('shakeS'); setTimeout(function(){stageEl.classList.remove('shakeS');},400);
  if(S.hearts<=0){ if(S.locks<MAXLOCK){ S.needLock=1; Snd.fx('aww'); } else { S.hearts=HMAX; addScore(-150); Snd.fx('aww'); popAt('💔 Out of hearts! -150. Hearts refilled.'); } }
}
function updHUD(){
  $('#hH').textContent='❤️'.repeat(Math.max(0,S.hearts))+'🖤'.repeat(Math.max(0,HMAX-S.hearts));
  $('#hS').textContent='⭐ '+S.score.toLocaleString('en-US');
  $('#hC').textContent='₮ '+S.coins;
  if(L.boss){ var p=S.maxMarks?Math.max(0,1-S.marks/S.maxMarks):1; $('#storm').style.display='flex'; $('#storm i').style.width=(p*100)+'%'; }
}
function countMax(){
  var m=0, sm=0, tm=0;
  L.stages.forEach(function(st){
    if(st.type==='run') st.items.forEach(function(it){ if(it.kind==='q'){ if(it.type==='animal'){ if(it.desk) tm+=it.marks; else sm+=it.marks; } else if(it.type==='tgate'){ it.qs.forEach(function(x){ tm+=x.marks; }); } else if(it.type==='flash'){ if(!it.teacher) sm+=it.marks; } else m+=qMarks(it); } });
    if(st.type==='quiz') st.qs.forEach(function(q){ if(q.type==='animal'){ if(q.desk) tm+=q.marks; else sm+=q.marks; } else if(q.type==='flash') sm+=q.marks; else m+=qMarks(q); });
    if(st.type==='forge') m+=st.slots.length;
    if(st.type==='rain') m+=st.rounds.length;
    if(st.type==='sort') m+=st.items.length;
    if(st.type==='dodge') m+=st.claims.length;
    if(st.type==='write') sm+=st.marks;
  });
  S.maxMarks=m; S.selfMax=sm; S.tmax=tm;
}
function qMarks(q){ if(q.type==='calc') return q.steps.length; if(q.type==='match') return q.rows.length; return q.marks||1; }

/* ---------- question UI ---------- */
function askRaw(q){
  return new Promise(function(done){
    var type=q.type||'mcq', cmd=q.cmd||(type==='tf'?'TRUE OR FALSE':'QUICK CHECK');
    var head=cmdBadge(cmd,qMarks(q))+'<div class="qtext">'+fill(q.q)+'</div>'+(q.pre?'<div class="how">'+fill(q.pre)+'</div>':'');
    var card, fb; window.BQ.cur={type:type,q:q};
    if(type==='animal'){ animalQ(q,done); return; }
    if(type==='tgate'){ tGate(q,done); return; }
    if(type==='flash'){ flashQ(q,cmdBadge(cmd,q.marks)+'<div class="qtext">'+fill(q.q)+'</div>',done); return; }
    function finish(){ var b=document.createElement('button'); b.className='btn go'; b.textContent='Continue ▶'; card.appendChild(b); b.scrollIntoView({block:'nearest'}); clickOnce(b).then(function(){ hide(); done(); }); }
    if(type==='mcq'||type==='tf'){
      var opts = type==='tf'?['👍 TRUE','👎 FALSE']:q.options, ans = type==='tf'?(q.answer?0:1):q.answer;
      var order = type==='tf'?[0,1]:shuffle(opts.map(function(_,i){return i;}));
      card=show(head+'<div class="opts '+(opts.some(function(o){return o.length>34;})?'one':'')+'"></div><div class="fb"></div>');
      var box=card.querySelector('.opts'); fb=card.querySelector('.fb'); var first=true;
      order.forEach(function(i){ var b=document.createElement('button'); b.className='opt'; b.innerHTML=fill(opts[i]); box.appendChild(b);
        onTap(b,function(){ if(b.disabled) return;
          if(i===ans){ box.querySelectorAll('.opt').forEach(function(x){x.disabled=true;}); b.classList.add('ok'); Snd.fx('right'); if(q.retry){ if(first){ addScore(50); S.fixed++; popAt('+50 FIXED IT! 💪',b); } } else if(first) gotMarks(q.marks||1,b); else popAt('✔ Right - no marks on a 2nd try',b);
            fb.className='fb ok'; fb.innerHTML='✅ '+fill(q.why||'Correct!'); finish(); }
          else { if(first&&!q.retry&&S.missed.length<12) S.missed.push({type:type,q:q.q,options:q.options,answer:q.answer,why:q.why,hint:q.hint,cmd:q.cmd,pre:q.pre}); first=false; b.classList.add('bad'); b.disabled=true; Snd.fx('wrong'); if(q.retry) Snd.fx('aww'); else missed(); fb.className='fb bad'; fb.innerHTML='❌ '+fill(q.hint||'Not quite. Try again.'); }
        }); });
    } else if(type==='multi'){
      card=show(head+'<div class="how">Pick '+q.answers.length+', then press Check.</div><div class="opts"></div><div class="fb"></div><button class="btn alt">Check ✔</button>');
      var bx=card.querySelector('.opts'); fb=card.querySelector('.fb'); var chk=card.querySelector('.btn'); var sel={};
      shuffle(q.options.map(function(_,i){return i;})).forEach(function(i){ var b=document.createElement('button'); b.className='opt'; b.innerHTML=fill(q.options[i]); b.dataset.i=i; bx.appendChild(b);
        onTap(b,function(){ if(b.disabled) return; sel[i]=!sel[i]; b.classList.toggle('sel',!!sel[i]); }); });
      onTap(chk,function(){ var picked=Object.keys(sel).filter(function(k){return sel[k];}).map(Number); if(picked.length!==q.answers.length){ fb.className='fb bad'; fb.textContent='Pick exactly '+q.answers.length+'.'; return; }
        chk.remove(); var good=picked.filter(function(p){return q.answers.indexOf(p)>=0;}).length;
        bx.querySelectorAll('.opt').forEach(function(b){ var i=+b.dataset.i; b.disabled=true; b.classList.remove('sel'); if(q.answers.indexOf(i)>=0) b.classList.add('ok'); else if(sel[i]) b.classList.add('bad'); });
        if(good===q.answers.length){ Snd.fx('right'); gotMarks(qMarks(q),bx); fb.className='fb ok'; fb.innerHTML='✅ '+fill(q.why||''); }
        else { Snd.fx('wrong'); missed(); if(good) gotMarks(good,bx); fb.className='fb bad'; fb.innerHTML='Green = right answers. '+fill(q.why||''); }
        finish(); });
    } else if(type==='match'){
      card=show(head+'<div class="match"></div><div class="fb"></div><button class="btn alt">Check ✔</button>');
      var mb=card.querySelector('.match'); fb=card.querySelector('.fb'); var ck=card.querySelector('.btn'); var pick={};
      q.rows.forEach(function(r,ri){ var d=document.createElement('div'); d.className='mrow'; d.innerHTML='<b>'+fill(r[0])+'</b><div class="chips"></div>'; var ch=d.querySelector('.chips');
        q.choices.forEach(function(c,ci){ var b=document.createElement('button'); b.className='chip'; b.textContent=c; b.dataset.ci=ci; ch.appendChild(b);
          onTap(b,function(){ if(b.disabled) return; pick[ri]=ci; ch.querySelectorAll('.chip').forEach(function(x){x.classList.toggle('sel',x===b);}); }); });
        mb.appendChild(d); });
      onTap(ck,function(){ if(Object.keys(pick).length<q.rows.length){ fb.className='fb bad'; fb.textContent='Choose an answer for every row.'; return; }
        ck.remove(); var good=0;
        q.rows.forEach(function(r,ri){ var row=mb.children[ri]; row.querySelectorAll('.chip').forEach(function(b){ b.disabled=true; var ci=+b.dataset.ci; if(ci===r[1]) b.classList.add('ok'); else if(pick[ri]===ci) b.classList.add('bad'); b.classList.remove('sel'); }); if(pick[ri]===r[1]) good++; });
        if(good===q.rows.length){ Snd.fx('right'); gotMarks(good,mb); fb.className='fb ok'; fb.innerHTML='✅ All correct! '+fill(q.why||''); }
        else { Snd.fx('wrong'); missed(); if(good) gotMarks(good,mb); fb.className='fb bad'; fb.innerHTML=good+' of '+q.rows.length+' right. Green shows the answer. '+fill(q.why||''); }
        finish(); });
    } else if(type==='calc'){
      card=show(head+'<div class="work"></div><div class="qtext step"></div><div class="opts"></div><div class="fb"></div>');
      var wk=card.querySelector('.work'), stp=card.querySelector('.step'), ob=card.querySelector('.opts'); fb=card.querySelector('.fb'); var si=0;
      function step(){ var s=q.steps[si], first=true; stp.innerHTML='Step '+(si+1)+': '+fill(s.p); ob.innerHTML='';
        shuffle(s.o.map(function(_,i){return i;})).forEach(function(i){ var b=document.createElement('button'); b.className='opt'; b.textContent=s.o[i]; ob.appendChild(b);
          onTap(b,function(){ if(b.disabled) return;
            if(i===s.a){ Snd.fx('right'); if(first) gotMarks(1,b); wk.textContent+=(wk.textContent?'\n':'')+s.w; fb.className='fb'; si++; if(si<q.steps.length) step(); else { stp.innerHTML=''; ob.innerHTML=''; fb.className='fb ok'; fb.innerHTML='✅ '+fill(q.why||'Done!'); finish(); } }
            else { first=false; b.classList.add('bad'); b.disabled=true; Snd.fx('wrong'); missed(); fb.className='fb bad'; fb.innerHTML='❌ '+fill(s.h||'Check the numbers and try again.'); }
          }); }); }
      step();
    }
  });
}

/* ---------- write-it (key term) ---------- */
function writeIt(t){
  return new Promise(function(done){
    var fire=t.kind!=='wings';
    Snd.fx(fire?'fire':'wings');
    var deco=fire?'<div class="flames">🔥🔥🔥🔥🔥🔥🔥</div>':'<div class="wingrow">🪽 👼 🪽</div>';
    var c=show(deco+'<div class="center"><b>'+(fire?'🔥 FIRE WORD - key term':'👼 ANGEL WORD - helper word')+'</b></div><div class="term">'+t.word+'</div><div class="def">'+t.def+'</div>'+
      (t.ex?'<div class="ex">'+fill(t.ex)+'</div>':'')+
      '<div class="how">✍️ <b>Write in your notebook:</b> '+t.word+' - meaning. Then write the stamp next to it: <span class="stamp">'+t.stamp+'</span>'+(t.exam?'<br>📝 Exam: '+t.exam:'')+(t.pg?'<br>📖 In your book: <b>'+t.pg+'</b>':'')+'</div>'+
      '<div class="center"><button class="btn go">.</button></div>', 'write'+(fire?'':' wings'));
    var b=c.querySelector('.btn');
    countdown(b,t.secs||(fire?40:25),'✍️ Keep writing...','✅ I wrote it!').then(function(){ Snd.fx('ding'); });
    clickOnce(b).then(function(){ S.stamps.push(t.stamp); addScore(50); popAt('+50 ✍️'); hide(); done(); });
  });
}

/* ---------- input ---------- */
var K={l:false,r:false,j:false,jp:false};
var keyMap={ArrowLeft:'l',KeyA:'l',ArrowRight:'r',KeyD:'r',ArrowUp:'j',KeyW:'j',Space:'j'};
window.addEventListener('keydown',function(e){ var k=keyMap[e.code]; if(!k) return; if(document.activeElement&&document.activeElement.tagName==='INPUT') return; e.preventDefault(); if(k==='j'&&!K.j) K.jp=true; K[k]=true; });
window.addEventListener('keyup',function(e){ var k=keyMap[e.code]; if(k) K[k]=false; });
function bindBtn(id,k){ var b=$(id), ids={};
  function upd(){ var on=Object.keys(ids).length>0; if(k==='j'&&on&&!K.j) K.jp=true; K[k]=on; b.classList.toggle('on',on); }
  b.addEventListener('pointerdown',function(e){ e.preventDefault(); Snd.resume(); ids[e.pointerId]=1; try{b.setPointerCapture(e.pointerId);}catch(x){} upd(); });
  ['pointerup','pointercancel','lostpointercapture'].forEach(function(ev){ b.addEventListener(ev,function(e){ delete ids[e.pointerId]; upd(); }); });
  b.addEventListener('contextmenu',function(e){e.preventDefault();});
}
bindBtn('#bL','l'); bindBtn('#bR','r'); bindBtn('#bJ','j');
function controls(on,jump){ $('#bL').style.display=$('#bR').style.display=''; ctrl.style.display=on?'block':'none'; $('#bJ').style.display=jump===false?'none':'block'; K.l=K.r=K.j=K.jp=false; }

/* ---------- main loop ---------- */
var scene={update:function(){},draw:function(){ drawBG(L.theme||'street',0,L.boss?stormLevel():0); }};
function stormLevel(){ return S.maxMarks?Math.max(0,1-S.marks/S.maxMarks):1; }
var acc=0, last=0;
function frame(ts){
  if(!last) last=ts; acc+=Math.min(100,ts-last); last=ts;
  if(window.BQ.bellOpen){ acc=0; } else while(acc>=16.667){ for(var fk=0;fk<(FAST?10:1);fk++){ tick++; scene.update(); } acc-=16.667; K.jp=false; }
  ctx.imageSmoothingEnabled=false; scene.draw();
  requestAnimationFrame(frame);
}
requestAnimationFrame(frame);

/* ---------- RUN stage (platformer) ---------- */
var PR={words:(L.props&&L.props.words)||[],emojis:(L.props&&L.props.emojis)||[]};
function emo(e,x,y,sz){ ctx.font=(sz||11)+'px "Apple Color Emoji","Noto Color Emoji","Segoe UI Emoji",sans-serif'; ctx.textBaseline='alphabetic'; ctx.fillStyle='#000'; ctx.fillText(e,Math.round(x),Math.round(y)); }
function buildCourse(st){
  var r=rng(st.seed||7), solids=[], items=[], coins=[], haz=[], deco=[], gx=0, x=10*T;
  function gseg(a,b){ solids.push({x:a,y:GROUND,w:b-a,h:60,kind:'ground'}); }
  function coinRow(cx,cy,n,arc){ for(var i=0;i<n;i++) coins.push({x:cx+i*12,y:cy-(arc?Math.round(Math.sin(i/(n-1||1)*Math.PI)*14):0),t:false}); }
  deco.push({k:'stand',x:3*T,label:st.standLabel}); if(st.place&&st.place.s) deco.push({k:'sign',x:8*T,t:st.place.s,pl:1});
  st.items.forEach(function(it,idx){
    for(var rep=0;rep<2;rep++){ var len=(8+Math.floor(r()*3))*T, mid=x+3*T, f=r();
    if(idx===0&&rep===0) f=0.8;
    if(f<0.34){ var gw=(st.mode==='ride'?2:2+Math.floor(r()*2))*T; gseg(gx,mid); gx=mid+gw; coinRow(mid-4,GROUND-34,Math.floor(gw/12)+1,true); }
    else if(f<0.68){ var bw=Math.min(6*T,len-3*T); solids.push({x:mid,y:GROUND-42,w:bw,h:10,kind:'brick'}); coinRow(mid+8,GROUND-55,Math.floor((bw-12)/12),false); if(r()<0.6) haz.push({k:'tyre',x:mid+5*T,y:GROUND,vx:-0.55,x0:mid,x1:mid+5*T}); }
    else { if(r()<0.5) haz.push({k:'bill',x:mid+2*T,y0:GROUND-48,ph:r()*6}); else haz.push({k:'tyre',x:mid+3*T,y:GROUND,vx:-0.6,x0:mid,x1:mid+6*T}); coinRow(mid,GROUND-24,4,false); }
    x+=len; }
    if(PR.words.length&&idx%2===0) deco.push({k:'sign',x:x-7*T,t:PR.words[((idx/2)+(st.seed||0))%PR.words.length]});
    if(PR.emojis.length&&idx%3===1) deco.push({k:'crate',x:x-11*T,e:PR.emojis[(idx+(st.seed||0))%PR.emojis.length]});
    if(it.kind!=='q'||it.type==='animal'){ items.push({k:it.kind==='q'?'animal':'term',x:x,y:GROUND-22,d:it,taken:false}); x+=6*T; }
    else { var blk={x:x+3*T-18,y:GROUND-62,w:16,h:16,kind:'q',q:it,used:false}; var door={x:x+3*T,y:-40,w:16,h:GROUND+40,kind:'door',open:false,drop:0}; blk.door=door; solids.push(blk,door); x+=7*T; }
  });
  x+=6*T; var flagX=x; deco.push({k:'stand',x:flagX+2*T,label:st.standLabel}); x+=10*T; gseg(gx,x);
  return {solids:solids,items:items,coins:coins,haz:haz,deco:deco,flagX:flagX,len:x};
}
function overlap(a,b){ return a.x<b.x+b.w && a.x+a.w>b.x && a.y<b.y+b.h && a.y+a.h>b.y; }
function runStage(st){
  return new Promise(function(done){
    var C=buildCourse(st), bx=boxOf(hero);
    var P={x:2*T+8,y:GROUND,vx:0,vy:0,onG:true,face:1,inv:0,coy:0,buf:0,safe:2*T+8,frame:0,anim:0};
    var cam=0, paused=false, ending=0, pops=[];
    function ctl(){ controls(true,true); if(st.mode==='ride'){ $('#bL').style.display='none'; $('#bR').style.display='none'; } }
    hud.style.display='flex'; ctl(); Snd.music('run');
    if(st.intro){ bann.innerHTML=fill(st.intro); bann.style.display='block'; setTimeout(function(){bann.style.display='none';},4500); }
    function pbox(){ return {x:P.x-bx.w/2,y:P.y-bx.h,w:bx.w,h:bx.h}; }
    function solidList(){ return C.solids.filter(function(s){ return !(s.kind==='door'&&s.open)&&!(s.kind==='q'&&s.used); }); }
    function trigger(blk){
      paused=true; controls(false); Snd.fx('block'); blk.used=true; blk.bump=12; Pt.add(blk.x+8,blk.y,10,['#ffd54f','#ffffff'],2.2,20);
      ask(blk.q).then(function(){ blk.door.open=true; Snd.fx('door'); Pt.add(blk.door.x+8,GROUND-30,26,['#78909c','#455a64','#b0bec5'],3.2,30); paused=false; ctl(); });
    }
    function pop(t,x,y){ pops.push({t:t,x:x,y:y,life:50}); }
    function trip(){ if(FAST&&S.micro&&S.micro[0]>=2){ P.inv=100; return; } paused=true; controls(false); K.l=K.r=K.j=false; microGame(MICRO[(L.micro||0)%MICRO.length]).then(function(win){ addScore(win?30:-20); popAt(win?'+30 Saved!':'-20'); paused=false; P.inv=100; P.vx=0; ctl(); }); }
    scene={
      update:function(){
        var i,s,b,sl; Pt.step();
        C.haz.forEach(function(h){ if(h.k==='tyre'){ h.x+=h.vx; if(h.x<h.x0||h.x>h.x1) h.vx*=-1; } });
        C.solids.forEach(function(s){ if(s.kind==='door'&&s.open&&s.drop<200) s.drop+=4; });
        pops.forEach(function(p){p.life--;p.y-=0.5;}); pops=pops.filter(function(p){return p.life>0;});
        if(paused) return;
        if(window.BQ.bot) window.BQ.bot(P,C,K,bx);
        if(ending){ ending++; P.vx=0; if(ending===1) Snd.fx('flag'); if(ending>110){ scene.update=function(){}; Snd.music(null); controls(false); done(); } return; }
        var dir=st.mode==='ride'?1:(K.r?1:0)-(K.l?1:0), MAXV=st.mode==='ride'?1.45:1.9;
        if(dir){ P.vx+=dir*(P.onG?0.2:0.14); P.face=dir; } else P.vx*=P.onG?0.78:0.96;
        P.vx=Math.max(-MAXV,Math.min(MAXV,P.vx)); if(Math.abs(P.vx)<0.03) P.vx=0;
        if(K.jp) P.buf=8; if(P.buf>0) P.buf--;
        if(P.onG) P.coy=6; else if(P.coy>0) P.coy--;
        if(P.buf>0&&P.coy>0){ P.vy=-4.35; P.onG=false; P.coy=0; P.buf=0; Snd.fx('jump'); Pt.add(P.x,P.y,5,'#efe6d6',1.4,14); }
        else if(K.jp&&!P.onG&&(st.mode==='fly'||!P.dj)){ P.vy=st.mode==='fly'?-3.0:-3.9; P.dj=true; P.buf=0; window.BQ.tele.dj++; Snd.fx('jump'); Pt.add(P.x,P.y,6,['#ffffff','#b3e5fc'],1.6,14); }
        if(P.y-bx.h<6&&P.vy<0){ P.vy=0; }
        if(!K.j&&P.vy<-1.6) P.vy=-1.6;
        P.vy=Math.min(6,P.vy+(st.mode==='fly'?0.15:0.22));
        sl=solidList();
        P.x+=P.vx; b=pbox();
        for(i=0;i<sl.length;i++){ s=sl[i]; if(overlap(b,s)){ if(P.vx>0) P.x=s.x-bx.w/2-0.01; else if(P.vx<0) P.x=s.x+s.w+bx.w/2+0.01; P.vx=0; b=pbox(); if(s.kind==='q'&&!s.used&&!paused){ trigger(s); } } }
        if(P.x<bx.w/2) P.x=bx.w/2;
        var wasG=P.onG, fallV=P.vy; P.y+=P.vy; b=pbox(); P.onG=false;
        for(i=0;i<sl.length;i++){ s=sl[i]; if(overlap(b,s)){
          if(P.vy>0){ if(!wasG&&fallV>2.2) Pt.add(P.x,s.y,7,'#efe6d6',1.8,12); if(s.kind==='brick'&&!wasG) window.BQ.tele.brick++; P.y=s.y; P.vy=0; P.onG=true; P.dj=false; if(s.kind==='q'&&!s.used){ trigger(s); } if(s.kind==='ground') P.safe=Math.max(s.x+bx.w,Math.min(P.x,s.x+s.w-bx.w)); }
          else if(P.vy<0){ P.y=s.y+s.h+bx.h; P.vy=0; if(s.kind==='q'&&!s.used) trigger(s); else Snd.fx('bump'); }
          b=pbox(); } }
        if(P.y>H+30){ P.x=P.safe; P.y=GROUND-2; P.vx=P.vy=0; P.inv=60; trip(); return; }
        if(P.inv>0) P.inv--; if(P.sh>0) P.sh--;
        b=pbox();
        C.coins.forEach(function(c){ if(!c.t&&overlap(b,{x:c.x-3,y:c.y-4,w:6,h:8})){ c.t=true; S.coins++; addScore(10); Snd.fx('coin'); Pt.add(c.x,c.y,6,['#ffd54f','#fff59d','#ffffff'],1.6,16,0.04); } });
        C.haz.forEach(function(h){ var hb=h.k==='tyre'?{x:h.x-5,y:h.y-10,w:10,h:10}:{x:h.x-6,y:h.y0+Math.sin(tick/20+h.ph)*14-5,w:12,h:9};
          if(P.inv===0&&!paused&&!(P.sh>0)&&overlap(b,hb)){ trip(); P.sh=420; P.inv=90; P.vx=-P.face*2; P.vy=-2.5; pop(h.k==='tyre'?'OUCH!':'BILLS!',P.x,P.y-30); } });
        for(i=0;i<C.items.length;i++){ var it=C.items[i]; if(!it.taken&&P.x>=it.x-6){ it.taken=true; paused=true; controls(false); if(it.k==='animal') window.BQ.tele.animals=(window.BQ.tele.animals||0)+1; Pt.add(it.x,it.y-4,18,it.d.kind==='term'?['#ff6f00','#ffca28','#fff']:['#ffffff','#80deea','#ffd54f'],2.6,26,0.02); (function(){ var dd=it.d; (dd.kind==='q'?ask(dd):(dd.sk?explainIt(dd.sk):Promise.resolve()).then(function(){ return (dd.kind==='scroll'?readIt:writeIt)(dd); })).then(function(){ if(dd.kind==='q'){ pop('CAUGHT!',P.x+14,P.y-30); Snd.fx('coin'); Pt.add(P.x,P.y-12,22,['#39ff14','#ff6a00','#ffffff'],2.6,26,0.02); } paused=false; ctl(); }); })(); break; } }
        if(P.x>=C.flagX){ ending=1; addScore(200); }
        P.anim+=Math.abs(P.vx); P.frame=!P.onG?3:Math.abs(P.vx)>0.2?(Math.floor(P.anim/6)%2?1:2):0;
        cam+=((P.x-130)-cam)*0.12; cam=Math.max(0,Math.min(C.len-W,cam));
      },
      draw:function(){
        drawBG(st.theme,cam,0);
        C.deco.forEach(function(d){ var dx=d.x-cam; if(dx<-90||dx>W+20) return; if(d.k==='stand') drawStand(dx,GROUND,d.label);
          else if(d.k==='sign'){ var tw=d.t.length*5+10; R(ctx,dx+4,GROUND-12,2,12,'#5d4037'); R(ctx,dx+tw-6,GROUND-12,2,12,'#5d4037'); R(ctx,dx-1,GROUND-30,tw+2,19,'#3e2723'); R(ctx,dx,GROUND-29,tw,17,'#fff8e1'); R(ctx,dx,GROUND-29,tw,3,d.pl?'#015197':'#c62828'); ctx.font='bold 8px monospace'; ctx.fillStyle='#1b1b2f'; ctx.fillText(d.t,dx+5,GROUND-16); }
          else if(d.k==='crate'){ R(ctx,dx,GROUND-14,16,14,'#a1887f'); R(ctx,dx,GROUND-14,16,2,'#d7ccc8'); R(ctx,dx+7,GROUND-14,2,14,'#8d6e63'); emo(d.e,dx+1,GROUND-15+Math.sin(tick/14+d.x)*1.5,13); } });
        // flag
        var fx=C.flagX-cam; R(ctx,fx,GROUND-90,2,90,'#eeeeee'); R(ctx,fx-2,GROUND-92,6,3,'#ffd54f');
        var fy=ending?Math.max(GROUND-88,GROUND-14-ending):GROUND-14; mnFlag(ctx,fx+2,fy,18,11);
        C.solids.forEach(function(s){ var sx=s.x-cam; if(sx>W+20||sx+s.w<-20) return;
          if(s.kind==='ground') drawGround(st.theme,s.x,s.y,s.w,cam);
          else if(s.kind==='brick'){ R(ctx,sx,s.y,s.w,s.h,'#b5651d'); for(var i=0;i<s.w;i+=8) R(ctx,sx+i,s.y+((i/8)%2)*6,1,6,'#6d3a0f'); R(ctx,sx,s.y+5,s.w,1,'#6d3a0f'); R(ctx,sx,s.y+s.h-1,s.w,1,'#5a2e0a'); R(ctx,sx,s.y,s.w,1,'#e0954a'); }
          else if(s.kind==='q'){ if(s.bump>0) s.bump--; var bob=s.used?-Math.round(Math.sin((s.bump||0)/12*3.14)*5):Math.round(Math.sin(tick/10)); if(s.used){ R(ctx,sx,s.y+bob,16,16,'rgba(141,110,99,.28)'); return; } R(ctx,sx-1,s.y+bob-1,18,18,(tick>>3)%2?'#39ff14':'#b6ff00'); R(ctx,sx,s.y+bob,16,16,'#ff6a00'); R(ctx,sx,s.y+bob,16,1,'#fff3c4'); R(ctx,sx+1,s.y+15+bob,15,1,'#7a4a00');
            if(!s.used){ ctx.fillStyle='#ffffff'; ctx.font='bold 12px monospace'; ctx.fillText('?',sx+5,s.y+12+bob); } }
          else if(s.kind==='door'){ var top=s.y+s.drop; R(ctx,sx,top,16,GROUND-top,'#78909c'); for(var yy=top;yy<GROUND;yy+=8){ R(ctx,sx,yy,16,1,'#455a64'); R(ctx,sx+((yy/8)%2?4:11),yy,1,8,'#455a64'); }
            if(!s.open){ R(ctx,sx+3,GROUND-40,10,9,'#ffd54f'); R(ctx,sx+5,GROUND-45,6,5,'rgba(0,0,0,0)'); R(ctx,sx+5,GROUND-46,1,6,'#ffd54f'); R(ctx,sx+10,GROUND-46,1,6,'#ffd54f'); R(ctx,sx+5,GROUND-46,6,1,'#ffd54f'); R(ctx,sx+7,GROUND-37,2,3,'#5d3a00'); } }
        });
        C.coins.forEach(function(c){ if(c.t) return; var sx=c.x-cam; if(sx<-8||sx>W+8) return; if(PR.emojis.length&&(c.x>>2)%3===0){ var eb=Math.sin(tick/9+c.x)*1.5; ctx.fillStyle='#111'; ctx.beginPath(); ctx.arc(sx,c.y+1+eb,9,0,7); ctx.fill(); ctx.fillStyle=(tick>>3)%2?'#39ff14':'#b6ff00'; ctx.beginPath(); ctx.arc(sx,c.y+1+eb,8,0,7); ctx.fill(); emo(PR.emojis[(c.x>>4)%PR.emojis.length],sx-6,c.y+5+eb,11); return; } var w=[6,4,2,4][((tick>>3)+(c.x>>3))%4]; R(ctx,sx-w/2-2,c.y-6,w+4,12,(tick>>3)%2?'#39ff14':'#b6ff00'); R(ctx,sx-w/2-1,c.y-5,w+2,10,'#111'); R(ctx,sx-w/2,c.y-4,w,8,'#ff7a00'); R(ctx,sx-w/2,c.y-4,1,8,'#ffe600'); if(w>4) R(ctx,sx-1,c.y-2,2,4,'#ffe600'); });
        C.haz.forEach(function(h){ if(h.k==='tyre'){ var sx=h.x-cam; R(ctx,sx-5,h.y-9,10,8,'#212121'); R(ctx,sx-4,h.y-10,8,10,'#212121'); R(ctx,sx-2,h.y-7,4,4,'#757575'); var a=(tick>>2)%2; R(ctx,sx-1+(a?2:-2),h.y-6,1,2,'#bdbdbd'); }
          else { var sx2=h.x-cam, yy=h.y0+Math.sin(tick/20+h.ph)*14; R(ctx,sx2-6,yy-5,12,9,'#fafafa'); R(ctx,sx2-5,yy-3,10,1,'#e53935'); R(ctx,sx2-5,yy,8,1,'#9e9e9e'); R(ctx,sx2-5,yy+2,6,1,'#9e9e9e'); var wf=(tick>>3)%2; R(ctx,sx2-9,yy-4-wf,3,2,'#fff'); R(ctx,sx2+6,yy-4-wf,3,2,'#fff'); } });
        C.items.forEach(function(it){ if(it.taken) return; var sx=it.x-cam, yy=it.y+Math.round(Math.sin(tick/9)*3); var fire=it.d.kind!=='wings'; if(sx<-30||sx>W+30) return;
          if(it.k==='animal'){ var hc2=(tick>>3)%2?'#39ff14':'#ff6a00', hop=Math.abs(Math.round(Math.sin(tick/8)*4)); ctx.fillStyle='rgba(0,0,0,.28)'; ctx.fillRect(sx-10,GROUND-2,20,3); R(ctx,sx-16,GROUND-36,32,2,hc2); R(ctx,sx-16,GROUND-36,2,36,hc2); R(ctx,sx+14,GROUND-36,2,36,hc2); R(ctx,sx-12,GROUND-27,24,25,'rgba(255,255,255,.82)'); R(ctx,sx-13,GROUND-25,26,21,'rgba(255,255,255,.82)'); aniDraw(ctx,it.d.cmd,sx-11,GROUND-4-hop,21); var lw=it.d.cmd.length*5+6; R(ctx,sx-lw/2,GROUND-50,lw,11,'#1b1b2f'); ctx.font='bold 8px monospace'; ctx.fillStyle=it.d.desk?'#ff9100':'#ffd54f'; ctx.fillText(it.d.cmd,sx-lw/2+3,GROUND-41); if(it.d.desk){ R(ctx,sx-3,GROUND-63,7,10,'#ff6a00'); ctx.fillStyle='#fff'; ctx.fillText('!',sx-1,GROUND-55); } return; }
          var hc=(tick>>3)%2?'#39ff14':'#ff6a00', ab=Math.round(Math.sin(tick/6)*2); R(ctx,sx-14,yy-20,28,2,hc); R(ctx,sx-14,yy+8,28,2,hc); R(ctx,sx-14,yy-20,2,30,hc); R(ctx,sx+12,yy-20,2,30,hc); R(ctx,sx-5,yy-33+ab,10,3,'#ff6a00'); R(ctx,sx-3,yy-30+ab,6,2,'#ff6a00'); R(ctx,sx-1,yy-28+ab,2,2,'#ff6a00');
          if(it.d.kind==='scroll'){ var sp=(tick>>3)%3; R(ctx,sx-12+sp*4,yy-14,2,2,'#fff'); R(ctx,sx+8-sp*3,yy-12+sp,2,2,'#80deea'); R(ctx,sx-10,yy-9,20,16,'#111'); R(ctx,sx-9,yy-8,18,14,it.d.tag==='case'?'#ff6a00':'#39ff14'); R(ctx,sx-6,yy-5,12,1,'#111'); R(ctx,sx-6,yy-2,12,1,'#111'); R(ctx,sx-6,yy+1,8,1,'#111'); } else if(fire){ if(tick%5===0) Pt.add(it.x+(Math.random()*14-7),yy-10,1,'#ffb300',0.5,18,-0.03); for(var k=0;k<7;k++){ var fh=4+((tick+k*7)%9); R(ctx,sx-9+k*3,yy-6-fh,2,fh,k%2?'#ff6f00':'#ffca28'); } }
          else { var up=(tick>>3)%2; R(ctx,sx-16,yy-6-up*3,8,3,'#ffffff'); R(ctx,sx-14,yy-3-up*3,6,2,'#e3f2fd'); R(ctx,sx+8,yy-6-up*3,8,3,'#ffffff'); R(ctx,sx+8,yy-3-up*3,6,2,'#e3f2fd'); R(ctx,sx-4,yy-14,8,2,'#ffd54f'); }
          R(ctx,sx-7,yy-6,14,10,'#fff3c4'); R(ctx,sx-8,yy-7,2,12,'#d7b98e'); R(ctx,sx+6,yy-7,2,12,'#d7b98e'); R(ctx,sx-4,yy-3,8,1,'#8d6e63'); R(ctx,sx-4,yy,6,1,'#8d6e63'); });
        if(!(P.inv>0&&(tick>>2)%2)) drawChar(ctx,hero,P.x-cam,P.y,P.frame,P.face,tick);
        if(st.mode==='fly'&&!P.onG){ var wf=(tick>>2)%2; R(ctx,P.x-cam-11,P.y-17-wf*4,6,3,'#fff'); R(ctx,P.x-cam+5,P.y-17-wf*4,6,3,'#fff'); }
        Pt.draw(cam);
        ctx.font='bold 8px monospace'; pops.forEach(function(p){ ctx.fillStyle='#000'; ctx.fillText(p.t,p.x-cam-11,p.y+1); ctx.fillStyle='#ffd54f'; ctx.fillText(p.t,p.x-cam-12,p.y); });
        if(ending>20){ ctx.fillStyle='rgba(0,0,0,.35)'; ctx.fillRect(0,60,W,40); ctx.font='bold 16px monospace'; ctx.fillStyle='#ffd54f'; ctx.fillText('ZONE CLEAR!',100,86); }
      }
    };
    updHUD();
  });
}

/* ---------- MOVIE stage ---------- */
function movieStage(st){
  return new Promise(function(done){
    hud.style.display='none'; controls(false); Snd.music(null);
    var si=0, actors=[], camX=0;
    function castOf(id){ return id==='hero'?hero:NPC[id]; }
    scene={
      update:function(){ actors.forEach(function(a){ if(a.to!=null&&Math.abs(a.x-a.to)>0.6){ var d=a.to>a.x?1:-1; a.x+=d*0.9; a.face=d; a.anim++; a.frame=(a.anim>>3)%2?1:2; } else { a.frame=0; if(a.faceEnd) a.face=a.faceEnd; } }); camX+=st.pan||0; },
      draw:function(){ drawBG(st.bg||L.theme,camX,st.storm||0); drawGround(st.bg||L.theme,0,GROUND,W+10,0); if(st.stand!==false&&(st.bg||L.theme)!=='coast') drawStand(st.standX||220,GROUND,st.standLabel);
        actors.forEach(function(a){ var tk=a.id===talker; drawChar(ctx,a.h,a.x,GROUND-(tk&&(tick>>3)%2?2:0),a.frame,a.face,tick); if(tk){ R(ctx,a.x-3,GROUND-44,7,7,'#fff'); R(ctx,a.x-1,GROUND-37,3,2,'#fff'); R(ctx,a.x-1,GROUND-43,3,1+((tick>>3)%3),'#1b1b2f'); } }); R(ctx,0,0,W,11,'#000'); R(ctx,0,H-9,W,9,'#000'); }
    };
    function nextScene(){
      if(si>=st.scenes.length){ dlg.style.display='none'; Snd.music(null); done(); return; }
      var sc=st.scenes[si++];
      if(sc.cast) actors=sc.cast.map(function(c){ return {id:c.id,h:castOf(c.id),x:c.x,to:c.to!=null?c.to:null,face:c.face||1,faceEnd:c.faceEnd,frame:0,anim:0}; });
      var p=Promise.resolve();
      if(sc.title) p=p.then(function(){ return titleCard(sc.title); });
      (sc.lines||[]).forEach(function(ln){ p=p.then(function(){ return say(ln[0],ln[1]); }); });
      p.then(nextScene);
    }
    nextScene();
  });
}
function titleCard(t){
  return new Promise(function(res){
    ttl.innerHTML='<div class="a">'+fill(t.a||'')+'</div><div class="b">'+fill(t.b||'')+'</div><div class="c">'+fill(t.c||'')+'</div>'; ttl.style.display='flex'; Snd.fx(t.sound||'ding');
    setTimeout(function(){ ttl.style.display='none'; res(); }, FAST?200:(t.ms||3200));
  });
}
function say(who,text){
  return new Promise(function(res){ talker=who;
    var nm = who==='hero'?hero.name:who==='saraa'?(L.npc||'Saraa'):who==='joe'?'Cool Potato Joe 🥔😎':who==='chris'?TEACHER+' 🧑‍🏫':who==='narrator'?'📖':who;
    text=fill(text); dlg.innerHTML='<div class="who">'+nm+'</div><span class="tx"></span><span class="nxt" style="display:none">▶</span>'; dlg.style.display='block';
    var tx=dlg.querySelector('.tx'), nx=dlg.querySelector('.nxt'), i=0, doneTyping=false, ready=false;
    var iv=setInterval(function(){ i+=1; tx.textContent=text.slice(0,i); if(i%2) Snd.fx('type'); if(i>=text.length){ clearInterval(iv); doneTyping=true; setTimeout(function(){ ready=true; nx.style.display='inline'; },700); } },FAST?2:28);
    function tap(e){ e.preventDefault(); Snd.resume(); if(!doneTyping){ clearInterval(iv); tx.textContent=text; doneTyping=true; setTimeout(function(){ ready=true; nx.style.display='inline'; },700); return; } if(!ready) return; stageEl.removeEventListener('click',tap); talker=null; res(); }
    stageEl.addEventListener('click',tap);
  });
}

/* ---------- other stages ---------- */
function idle(){ if(L.boss){ bossScene(null,function(){ drawChar(ctx,hero,W/2,GROUND,0,1,tick); }); return; } var th=L.theme; scene={update:function(){},draw:function(){ drawBG(th,tick*0.25,0); drawGround(th,0,GROUND,W+10,0); drawChar(ctx,hero,60,GROUND,0,1,tick); }}; }
function notebookStage(st){
  hud.style.display='flex'; controls(false); idle();
  var c=show('<h1>📓 Notebook time</h1><div class="how" style="font-size:1em">'+st.lines.map(function(l,i){return '<div>'+(i+1)+'. '+fill(l)+'</div>';}).join('')+'</div>'+
    (st.note?'<p>'+fill(st.note)+'</p>':'')+'<div class="center"><button class="btn go">.</button></div>');
  var b=c.querySelector('.btn'); countdown(b,st.secs||40,'✍️ Writing...','✅ Ready!');
  return clickOnce(b).then(function(){ hide(); });
}
function cardStage(st){
  hud.style.display='flex'; controls(false); idle();
  var c=show('<h2>'+fill(st.title)+'</h2><div>'+fill(st.body)+'</div><div class="center"><button class="btn go">.</button></div>');
  var b=c.querySelector('.btn'); countdown(b,st.secs||20,'📖 Reading...','Ready ▶');
  return clickOnce(b).then(function(){ hide(); });
}
function quizStage(st){
  hud.style.display='flex'; controls(false); idle(); if(st.music) Snd.music(st.music);
  var p = st.title?titleCard({a:st.kicker||'',b:st.title,c:st.sub||'',ms:st.sound?3200:2400,sound:st.sound}):Promise.resolve();
  st.qs.forEach(function(q){ p=p.then(function(){ return ask(q); }); });
  return p.then(function(){ Snd.music(null); });
}
function forgeStage(st){
  return new Promise(function(done){
    hud.style.display='flex'; controls(false); idle();
    var c=show('<div class="center"><b>⚒️ ANSWER FORGE</b></div>'+cmdBadge(st.cmd,st.slots.length)+'<div class="qtext">'+fill(st.q)+'</div>'+(st.pre?'<div class="how">'+fill(st.pre)+'</div>':'')+
      st.slots.map(function(s){return '<div class="slot"><b>'+s.label+'</b> <span></span></div>';}).join('')+'<div class="qtext step"></div><div class="opts one"></div><div class="fb"></div>');
    setTimeout(function(){cmdSound(st.cmd);},150);
    var slots=c.querySelectorAll('.slot'), ob=c.querySelector('.opts'), stp=c.querySelector('.step'), fb=c.querySelector('.fb'), si=0;
    function next(){
      if(si>=st.slots.length){ return finishForge(); }
      var s=st.slots[si], first=true; stp.innerHTML='Choose the '+s.label+':'; ob.innerHTML='';
      shuffle(s.o.map(function(_,i){return i;})).forEach(function(i){ var b=document.createElement('button'); b.className='opt'; b.innerHTML=fill(s.o[i]); ob.appendChild(b);
        onTap(b,function(){ if(b.disabled) return;
          if(i===s.a){ Snd.fx('right'); if(first) gotMarks(1,slots[si]); slots[si].classList.add('full'); slots[si].querySelector('span').innerHTML=fill(s.o[i]); fb.className='fb'; si++; next(); }
          else { first=false; b.classList.add('bad'); b.disabled=true; Snd.fx('wrong'); missed(); fb.className='fb bad'; fb.innerHTML='❌ '+fill(s.h||'That piece does not fit. Try another.'); }
        }); });
    }
    function finishForge(){
      stp.innerHTML=''; ob.innerHTML=''; fb.className='fb ok';
      fb.innerHTML='🏆 <b>Your full answer:</b><br>'+fill(st.model)+'<br><br><b>✍️ Copy this answer into your notebook.</b>';
      var b=document.createElement('button'); b.className='btn go'; c.appendChild(b);
      countdown(b,st.secs||60,'✍️ Copying...','📋 Show why it scores').then(function(){Snd.fx('ding');});
      clickOnce(b).then(function(){
        var ms=document.createElement('div'); ms.className='how'; ms.innerHTML='<b>✅ Why it scores (mark scheme):</b><br>'+st.scheme.map(function(x){return '• '+fill(x);}).join('<br>'); c.appendChild(ms);
        var b2=document.createElement('button'); b2.className='btn go'; b2.textContent='Continue ▶'; c.appendChild(b2); b2.scrollIntoView({block:'nearest'});
        clickOnce(b2).then(function(){ hide(); done(); });
      });
    }
    next();
  });
}
function writeStage(st){
  return new Promise(function(done){
    hud.style.display='flex'; controls(false); idle();
    var c=show('<div class="center"><b>📝 EXAM PRACTICE - write in your notebook</b></div>'+cmdBadge(st.cmd,st.marks)+(st.case?'<div class="how">'+fill(st.case)+'</div>':'')+'<div class="qtext">'+fill(st.q)+'</div>'+
      (st.tips?'<div class="how"><b>Tips:</b><br>'+st.tips.map(function(t){return '• '+fill(t);}).join('<br>')+'</div>':'')+'<div class="center"><button class="btn go">.</button></div>');
    setTimeout(function(){cmdSound(st.cmd);},150);
    var b=c.querySelector('.btn'); countdown(b,st.secs||90,'✍️ Writing...','📋 Show the mark scheme').then(function(){Snd.fx('ding');});
    clickOnce(b).then(function(){
      b.remove();
      var d=document.createElement('div'); d.innerHTML='<div class="fb ok" style="display:block"><b>Model answer:</b><br>'+fill(st.model)+'</div><div class="how"><b>Tick each point YOU wrote.</b> Be honest - '+TEACHER+' checks your notebook.</div>'+
        st.checklist.map(function(x,i){return '<label class="check"><input type="checkbox" data-m="'+(x[1]||1)+'"> <span>'+fill(x[0])+' <b>('+(x[1]||1)+')</b></span></label>';}).join('')+
        '<div class="center"><button class="btn go">Save my marks ✔</button></div>';
      c.appendChild(d); d.scrollIntoView({block:'nearest'});
      var sb=d.querySelector('.btn');
      clickOnce(sb).then(function(){ var m=0; d.querySelectorAll('input:checked').forEach(function(x){ m+=+x.dataset.m; }); m=Math.min(m,st.marks); S.self+=m; addScore(m*100); popAt('+'+m+' self-marked'); Snd.fx('right'); hide(); done(); });
    });
  });
}

/* ---------- BOSS mini-games ---------- */
function bossScene(onUpd,onDraw){
  scene={update:onUpd||function(){},draw:function(){ drawBG(L.theme||'steppe',tick*0.3,stormLevel()); drawGround(L.theme||'steppe',0,GROUND,W+10,0); drawBossCloud(); if(onDraw) onDraw(); }};
}
function rainStage(st){
  return new Promise(function(done){
    hud.style.display='flex'; Snd.music('boss');
    var lane=1, hx=W/2, ri=0, laneX=[W/6,W/2,5*W/6];
    bossScene(function(){ if(K.jp){} hx+=(laneX[lane]-hx)*0.25; }, function(){ drawChar(ctx,hero,hx,GROUND,0,1,tick); });
    var prevL=false, prevR=false;
    var poll=setInterval(function(){ if(K.l&&!prevL) lane=Math.max(0,lane-1); if(K.r&&!prevR) lane=Math.min(2,lane+1); prevL=K.l; prevR=K.r; },30);
    titleCard({a:'BOSS PHASE',b:st.title,c:st.sub,ms:2600,sound:'storm'}).then(round);
    function round(){
      if(ri>=st.rounds.length){ clearInterval(poll); lanes.style.display='none'; bann.style.display='none'; controls(false); Snd.music(null); done(); return; }
      var rd=st.rounds[ri++]; st._n=ri-1; controls(true,false);
      bann.innerHTML='Catch the meaning of: <span style="color:#c62828">'+rd.term+'</span>'; bann.style.display='block';
      lanes.innerHTML=''; lanes.style.display='block';
      var ord=shuffle([0,1,2]), cards=[];
      ord.forEach(function(oi,li){ var d=document.createElement('div'); d.className='fall'; d.textContent=rd.o[oi]; d.style.left=(li*33.3+1.6)+'%'; d.style.top='22%'; d.style.transition='top '+(FAST?1:(st.secs||9))+'s linear'; d.dataset.oi=oi; lanes.appendChild(d); cards.push(d);
        d.addEventListener('pointerdown',function(e){ e.preventDefault(); lane=li; }); });
      requestAnimationFrame(function(){ requestAnimationFrame(function(){ cards.forEach(function(d){ d.style.top='56%'; }); }); });
      setTimeout(function(){
        controls(false);
        var caught=cards[lane], ok=+caught.dataset.oi===0;
        cards.forEach(function(d){ if(+d.dataset.oi===0) d.classList.add('ok'); else if(d===caught) d.classList.add('bad'); });
        if(ok){ Snd.fx('right'); gotMarks(1,caught); } else { Snd.fx('wrong'); missed(); }
        setTimeout(round, ok?1300:2600);
      },(FAST?1.2:(st.secs||9))*1000);
    }
  });
}
function sortStage(st){
  return new Promise(function(done){
    hud.style.display='flex'; Snd.music('boss'); controls(false);
    var yx=W+20, ii=0, target=null, cur=null;
    bossScene(function(){ if(cur&&target==null){ yx+=( (W/2) - yx)*0.04; } if(target!=null){ yx+=(target-yx)*0.12; } }, function(){
      if(!cur) return; var x=yx; R(ctx,x-14,GROUND-16,28,12,'#4e342e'); R(ctx,x-16,GROUND-14,4,6,'#3e2723'); R(ctx,x+12,GROUND-20,8,8,'#4e342e'); R(ctx,x+19,GROUND-22,2,4,'#eeeeee'); R(ctx,x+12,GROUND-22,2,3,'#eeeeee');
      var a=(tick>>3)%2; R(ctx,x-12+a,GROUND-4,3,4,'#3e2723'); R(ctx,x-4-a,GROUND-4,3,4,'#3e2723'); R(ctx,x+4+a,GROUND-4,3,4,'#3e2723'); R(ctx,x+10-a,GROUND-4,3,4,'#3e2723');
      R(ctx,x-9,GROUND-24,18,8,'#c8a165'); R(ctx,x-9,GROUND-21,18,1,'#8d6e3a'); R(ctx,x-2,GROUND-26,4,2,'#8d6e3a'); if(PR.emojis.length) emo(PR.emojis[ii%PR.emojis.length],x-7,GROUND-25,13);
      ctx.font='bold 9px monospace'; ctx.fillStyle='#fff'; ctx.fillText('◀ '+st.left.replace(/[^A-Z ]/g,'').trim(),6,40); ctx.fillText(st.right.replace(/[^A-Z ]/g,'').trim()+' ▶',W-90,40);
    });
    sortb.innerHTML='<button class="btn alt">⬅ '+st.left+'</button><button class="btn alt">'+st.right+' ➡</button>';
    var bl=sortb.children[0], br=sortb.children[1];
    titleCard({a:'BOSS PHASE',b:st.title,c:st.sub,ms:2600,sound:'storm'}).then(item);
    function item(){
      if(ii>=st.items.length){ cur=null; sortb.style.display='none'; bann.style.display='none'; Snd.music(null); done(); return; }
      cur=st.items[ii++]; st._n=ii-1; yx=W+20; target=null;
      window.BQ.cur={type:'sort',a:cur.a}; bann.innerHTML=(st.carrier||'🐂 The yak carries')+': <span style="color:#6a1b9a">'+cur.t+'</span><div class="timer"><i></i></div>'; bann.style.display='block'; sortb.style.display='flex';
      var bar=bann.querySelector('.timer i'), t0=Date.now(), lim=(st.secs||8)*1000, answered=false;
      function answer(side){ if(answered) return; answered=true; clearInterval(iv); sortb.style.display='none';
        var ok=side===cur.a; target=side==='L'?-30:W+30;
        if(ok){ Snd.fx('right'); gotMarks(1,bann); bann.innerHTML='✅ '+cur.t+' → '+(cur.a==='L'?st.left:st.right)+(cur.why?'<br><small>'+cur.why+'</small>':''); }
        else { Snd.fx('wrong'); missed(); bann.innerHTML='❌ '+cur.t+' goes '+(cur.a==='L'?st.left:st.right)+(cur.why?'<br><small>'+cur.why+'</small>':''); }
        setTimeout(item, ok?1500:3000); }
      var iv=setInterval(function(){ var p=1-(Date.now()-t0)/lim; bar.style.width=Math.max(0,p*100)+'%'; if(p<=0) answer('timeout'); },100);
      bl.onclick=function(e){ e.preventDefault(); answer('L'); }; br.onclick=function(e){ e.preventDefault(); answer('R'); };
      var kp=setInterval(function(){ if(answered){clearInterval(kp);return;} if(K.l) answer('L'); if(K.r) answer('R'); },50);
    }
  });
}
function dodgeStage(st){
  return new Promise(function(done){
    hud.style.display='flex'; Snd.music('boss');
    var claimT=0, ci=0, P={y:GROUND,vy:0,onG:true}, wx=0, gateX=null, lastJump=-999, cur=null, hx=70, result=null, rt=0;
    bossScene(function(){
      wx+=1.2;
      if(K.jp&&P.onG&&cur){ P.vy=-4.6; P.onG=false; lastJump=tick; Snd.fx('jump'); }
      P.vy+=0.2; P.y+=P.vy; if(P.y>=GROUND){ P.y=GROUND; P.vy=0; P.onG=true; }
      if(gateX!=null){ gateX-=1.2; if(gateX<=hx&&cur&&result==null){ var saidTrue=lastJump>=claimT; var ok=saidTrue===cur.a; result=ok; rt=tick; judge(ok,saidTrue); } }
    }, function(){
      if(gateX!=null){ var gx=gateX; R(ctx,gx-6,GROUND-74,40,8,'#e3f2fd'); R(ctx,gx-2,GROUND-78,32,4,'#ffffff'); ctx.font='bold 10px monospace'; ctx.fillStyle='#2e7d32'; ctx.fillText('TRUE',gx,GROUND-82);
        R(ctx,gx-6,GROUND-36,6,36,'#8d6e63'); R(ctx,gx+28,GROUND-36,6,36,'#8d6e63'); R(ctx,gx-6,GROUND-40,40,6,'#a1887f'); ctx.fillStyle='#c62828'; ctx.fillText('FALSE',gx+1,GROUND-26); }
      drawChar(ctx,hero,hx,P.y,P.onG?((tick>>3)%2?1:2):3,1,tick);
    });
    titleCard({a:'BOSS PHASE',b:st.title,c:st.sub,ms:2600,sound:'storm'}).then(next);
    function next(){
      if(ci>=st.claims.length){ cur=null; gateX=null; controls(false); bann.style.display='none'; Snd.music(null); done(); return; }
      cur=st.claims[ci++]; st._n=ci-1; result=null; gateX=W+60; lastJump=-999; claimT=tick; controls(true,true); $('#bL').style.display='none'; $('#bR').style.display='none';
      window.BQ.cur={type:'dodge',a:cur.a}; bann.innerHTML='🥔😎 Joe says: "'+cur.t+'"<br><small>JUMP = 👍 TRUE &nbsp;&nbsp; STAY DOWN = 👎 FALSE</small>'; bann.style.display='block';
    }
    function judge(ok,saidTrue){
      controls(false);
      if(ok){ Snd.fx('right'); gotMarks(1,bann); } else { Snd.fx('wrong'); missed(); }
      bann.innerHTML=(ok?'✅ ':'❌ ')+'It is '+(cur.a?'👍 TRUE':'👎 FALSE')+'. '+(cur.why||'');
      setTimeout(function(){ gateX=null; next(); }, ok?1800:3200);
    }
  });
}

/* ---------- v2 additions ---------- */
function readIt(t){
  return new Promise(function(done){
    var isCase=t.tag==='case';
    Snd.fx(isCase?'block':'wings');
    var pairs=!isCase&&t.lines.length>1&&t.lines.length%2===0, steps=pairs&&/^\d+$/.test(t.lines[0]);
    var c=show('<div class="center"><b>'+(isCase?'📁 CASE FILE - read carefully. Questions are coming!':'📜 '+(t.kicker||'BIG IDEA'))+'</b></div><h2 style="color:'+(isCase?'#5d4037':'#00695c')+'">'+(isCase?'':'⭐ ')+t.title+'</h2>'+
      t.lines.map(function(l,i){return '<div style="margin:'+(pairs?(i%2?'0':'.3em 0 0'):'.2em 0')+'">'+(isCase?l:(pairs&&i%2===0?'• ':'')+'<b>'+l+'</b>')+'</div>';}).join('')+
      (isCase?'':'<div class="how">✍️ <b>Write in your notebook:</b> the ⭐ heading and '+(steps?'all the steps':pairs?'all the terms and definitions':'all the lines in bold')+'.</div>')+
      '<div class="center"><button class="btn go">.</button></div>', 'write wings');
    var b=c.querySelector('.btn');
    countdown(b,t.secs||25,isCase?'📖 Reading...':'✍️ Keep writing...',isCase?'Got it ▶':'✅ I wrote it!').then(function(){ Snd.fx('ding'); });
    clickOnce(b).then(function(){ addScore(isCase?10:30); t._d=1; hide(); done(); });
  });
}
function flashQ(q,head,done){
  var think=q.mode==='think';
  var card=show(head+(q.ctx?'<div class="how">'+fill(q.ctx)+'</div>':'')+
    '<div class="center" style="font-weight:800;color:'+(think?'#6a1b9a':'#bf360c')+'">'+(think?'🤔 THINK of your answer. Whisper it. No writing.':'✍️ WRITE your answer in your notebook.')+'</div>'+(q.teacher?'<div class="how">🧑‍🏫 <b>'+TEACHER+' will check this answer.</b> Use your book. Write neatly.</div>':'')+
    (q.tips&&q.tips.length?'<div class="how"><b>The examiner wants:</b><br>'+q.tips.map(function(t){return '✔ '+t;}).join('<br>')+'</div>':'')+
    '<div class="center"><button class="btn go">.</button></div>');
  var b=card.querySelector('.btn');
  countdown(b,q.secs||30,think?'🤔 Thinking...':'✍️ Writing...',q.teacher?'✅ Done writing ▶':'👀 Show the answer').then(function(){ Snd.fx('ding'); });
  clickOnce(b).then(function(){
    if(q.teacher){ addScore(20); hide(); done(); return; }
    b.remove();
    var d=document.createElement('div');
    d.innerHTML='<div class="fb ok" style="display:block"><b>Model answer:</b><br>'+fill(q.model)+(q.why?'<br><small><b>Why it scores:</b> '+fill(q.why)+'</small>':'')+'</div>'+
      '<div class="how"><b>How many marks did YOUR answer earn?</b> Be honest - '+TEACHER+' checks your notebook.</div><div class="row marks" style="justify-content:center"></div>';
    card.appendChild(d);
    var row=d.querySelector('.marks');
    for(var m=0;m<=q.marks;m++){ (function(m){ var mb=document.createElement('button'); mb.className='btn '+(m===0?'':'go'); mb.textContent=m; row.appendChild(mb);
      onTap(mb,function(){ if(row.dataset.done) return; row.dataset.done=1; S.self+=m; addScore(m*100); if(m>0){ Snd.fx('cash'); popAt('+'+m+' self-marked',row); } hide(); done(); }); })(m); }
    d.scrollIntoView({block:'nearest'});
  });
}
function storyStage(st){
  return new Promise(function(done){
    hud.style.display='flex'; controls(false); idle(); var i=0;
    function next(){
      if(i>=st.stages.length){ var e=show('<div class="center"><div class="big">💡</div><h2>'+(st.moral||'Every choice has a cost.')+'</h2><button class="btn go">Continue ▶</button></div>'); clickOnce(e.querySelector('.btn')).then(function(){hide();done();}); return; }
      var s=st.stages[i++];
      var c=show('<div class="center"><b>🗺️ ADVENTURE · '+i+' of '+st.stages.length+'</b></div><h2>'+s.title+'</h2><div>'+s.scenario+'</div><div class="opts one"><button class="opt">🅰️ '+s.A+'</button><button class="opt">🅱️ '+s.B+'</button></div><div class="fb"></div>');
      var os=c.querySelectorAll('.opt'), fb=c.querySelector('.fb');
      [0,1].forEach(function(k){ onTap(os[k],function(){ if(os[0].disabled) return; os[0].disabled=os[1].disabled=true; os[k].classList.add('sel'); Snd.fx('block'); addScore(50);
        fb.className='fb ok'; fb.innerHTML='<b>You chose '+'AB'.charAt(k)+':</b> '+(k?s.dB:s.dA)+'<br><b>The other path:</b> '+(k?s.dA:s.dB);
        var b=document.createElement('button'); b.className='btn go'; b.textContent='Continue ▶'; c.appendChild(b); b.scrollIntoView({block:'nearest'}); clickOnce(b).then(function(){hide();next();}); }); });
    }
    next();
  });
}

/* ---------- v4: teacher gates ---------- */
function sha256(s){ function rr(v,a){return (v>>>a)|(v<<(32-a));} var mp=Math.pow, mw=mp(2,32), i, j, res='', words=[], abl=s.length*8, h=sha256.h=sha256.h||[], k=sha256.k=sha256.k||[], pc=k.length, isC={};
  for(var c=2;pc<64;c++){ if(!isC[c]){ for(i=0;i<313;i+=c) isC[i]=c; h[pc]=(mp(c,.5)*mw)|0; k[pc++]=(mp(c,1/3)*mw)|0; } }
  s+='\x80'; while(s.length%64-56) s+='\x00';
  for(i=0;i<s.length;i++){ j=s.charCodeAt(i); if(j>>8) return ''; words[i>>2]|=j<<((3-i)%4)*8; }
  words[words.length]=((abl/mw)|0); words[words.length]=(abl);
  for(j=0;j<words.length;){ var w=words.slice(j,j+=16), oh=h; h=h.slice(0,8);
    for(i=0;i<64;i++){ var w15=w[i-15], w2=w[i-2], a=h[0], e=h[4];
      var t1=h[7]+(rr(e,6)^rr(e,11)^rr(e,25))+((e&h[5])^((~e)&h[6]))+k[i]+(w[i]=(i<16)?w[i]:(w[i-16]+(rr(w15,7)^rr(w15,18)^(w15>>>3))+w[i-7]+(rr(w2,17)^rr(w2,19)^(w2>>>10)))|0);
      var t2=(rr(a,2)^rr(a,13)^rr(a,22))+((a&h[1])^(a&h[2])^(h[1]&h[2]));
      h=[(t1+t2)|0].concat(h); h[4]=(h[4]+t1)|0; }
    for(i=0;i<8;i++) h[i]=(h[i]+oh[i])|0; }
  for(i=0;i<8;i++){ for(j=3;j+1;j--){ var b=(h[i]>>(j*8))&255; res+=((b<16)?0:'')+b.toString(16); } }
  return res; }
function codeOK(v){ return codeOK0(v)||codeOK0(String(v).toLowerCase().replace(/\s+/g,'')); }
function codeOK0(v){ return TCODE!==null ? v===TCODE : sha256('bq:'+v)===(SET.teacherCodeHash||'28236939743aa318e415138beb6707b5f7d55ddfcd1508984ce97a73fec2b1f7'); }
window.BQ_sha256=sha256;

function teacherGate(headHtml){
  return new Promise(function(res){
    S.visits++; window.BQ.cur={type:'gate'}; Snd.fx('boom'); controls(false);
    var c=show(headHtml+'<div class="how">🧑‍🏫 <b>'+TEACHER+' only:</b> type the teacher code.</div><input class="name tcode" type="password" autocomplete="off" placeholder="Teacher code"><div class="fb"></div><button class="btn go">Unlock 🔓</button>');
    var inp=c.querySelector('input'), fb=c.querySelector('.fb');
    function ok(){ if(codeOK(inp.value.trim())){ Snd.fx('unlock'); res(c); } else { fb.className='fb bad'; fb.textContent='Wrong code. Only '+TEACHER+' can unlock this.'; inp.value=''; Snd.fx('wrong'); } }
    onTap(c.querySelector('.btn'),ok); inp.addEventListener('keydown',function(e){ if(e.key==='Enter') ok(); });
  });
}
function challenge(){
  return teacherGate('<div class="center"><div class="big">💔</div><h2>Out of hearts!</h2><div>Go to <b>'+TEACHER+'</b>. He will give you a <b>paper test</b>.<br>Finish it, hand it in, and he will unlock your game.</div></div>').then(function(){ S.locks++; S.needLock=0; S.hearts=HMAX; updHUD(); hide(); popAt('❤️ Hearts refilled!'); });
}
function ask(q){ return (q.sk?explainIt(q.sk):Promise.resolve()).then(function(){ return askRaw(q); }).then(function(){ q._d=1; return S.needLock?challenge():null; }); }
function tGate(q,done){
  teacherGate('<div class="center"><div class="big">🧑‍🏫</div><h2>TEACHER CHECK</h2><div>Take your <b>notebook</b> and your <b>book</b> to '+TEACHER+'. He checks your answers for:<br><b>'+q.title+'</b></div></div>').then(function(c){
    c.innerHTML='<h2>🧑‍🏫 '+TEACHER+' marks: '+q.title+'</h2>'+q.qs.map(function(x,i){ return '<div class="mrow"><b>'+(i+1)+'. '+x.q+'</b><div class="fb ok" style="display:block"><small>'+x.model+'</small></div><div class="row tmarks" data-i="'+i+'"></div></div>'; }).join('')+'<div class="center"><button class="btn go" disabled>Save marks ✔</button></div>';
    var got={}, sv=c.querySelector('.btn.go');
    c.querySelectorAll('.tmarks').forEach(function(row){ var i=+row.dataset.i; for(var m=0;m<=q.qs[i].marks;m++){ (function(m){ var b=document.createElement('button'); b.className='chip'; b.textContent=m; b.style.fontSize='1.1em'; row.appendChild(b); onTap(b,function(){ got[i]=m; row.querySelectorAll('.chip').forEach(function(z){ z.classList.toggle('sel',z===b); }); if(Object.keys(got).length===q.qs.length) sv.disabled=false; }); })(m); } });
    clickOnce(sv).then(function(){ var t=0; for(var k in got) t+=got[k]; S.tmarks+=t; addScore(t*100); Snd.fx('cash'); popAt('+'+t+' from '+TEACHER); hide(); done(); });
  });
}

/* ---------- v7: command-word animals ---------- */
function animalSplash(cmd,marks,desk,batch){
  return new Promise(function(res){
    var A=CMD[cmd], an=document.createElement('div'); an.id='an'; controls(false);
    an.innerHTML='<div class="anr"></div><div class="ana">'+aniHTML(cmd)+'</div><div class="ant">'+A[3]+' = <b>'+cmd+'</b>'+(marks?' ['+marks+']':'')+'</div><div class="ans">'+A[2]+'</div>'+(desk?'<div class="and">'+(batch?'📝 Write it. '+TEACHER+' checks all boss answers together.':'🧑‍🏫 '+TEACHER+' marks this one!')+'</div>':'');
    stageEl.appendChild(an); cmdSound(cmd); var gone=false; window.BQ.cur={type:'splash'};
    try{ var zoo=store.get('bq_zoo',{}); zoo[cmd]=(zoo[cmd]||0)+1; store.set('bq_zoo',zoo); }catch(e){}
    function go(){ if(gone) return; gone=true; an.remove(); res(); }
    setTimeout(function(){ onTap(an,go); },FAST?0:900); setTimeout(go,FAST?120:2800);
  });
}
function animalIntro(cmd){
  S.seen=S.seen||{}; if(S.seen[cmd]) return Promise.resolve(); S.seen[cmd]=1;
  var A=CMD[cmd];
  var c=show('<div class="center"><div class="anbig">'+aniHTML(cmd)+'</div><h2>The '+A[3].toLowerCase()+' calls. The question says <span class="cmd">'+cmd+'</span></h2></div><div class="how" style="font-size:1em"><b>What to do:</b> '+A[2]+'<br><b>How the marks come:</b> '+A[4]+(A[5]?'<br><b>Start like this:</b> <i>'+A[5]+'</i>':'')+'</div><div class="center"><button class="btn alt">🔊 Hear it again</button><button class="btn go">Got it ▶</button></div>','animal');
  onTap(c.querySelector('.btn.alt'),function(){ cmdSound(cmd); });
  return clickOnce(c.querySelector('.btn.go')).then(function(){ hide(); });
}
function ptsHTML(q,lit){ var p=q.points||[]; if(!p.length) return ''; return '<div class="how"><b>'+(q.exam?'The examiner wants:':'Mark points:')+'</b><div class="pts">'+p.map(function(t){return '<span class="pt'+(lit?' lit':'')+'">✔ '+t+'</span>';}).join('')+'</div></div>'; }
function animalQ(q,done){
  var cmd=q.cmd, desk=!!q.desk, quick=!!q.quick, batch=BATCH&&!quick;
  if(batch) desk=true;
  animalSplash(cmd,q.marks,desk,batch).then(function(){ return animalIntro(cmd); }).then(function(){
    window.BQ.cur={type:'animal',q:q};
    var card=show((batch?'<div class="center" style="font-weight:800;color:#c62828">🌪️ BOSS ANSWER '+q._n+' OF '+BATCHN+'</div>':'')+cmdBadge(cmd,q.marks)+(q.ctx?'<div class="how">'+fill(q.ctx)+'</div>':'')+'<div class="qtext">'+fill(q.q)+'</div>'+
      (q.exam?ptsHTML(q,false):'')+
      (q.start&&!quick?'<div class="how pre">💬 <b>Start like this:</b> <i>'+q.start+'</i></div>':'')+
      '<div class="center pre" style="font-weight:800;color:'+(quick?'#6a1b9a':'#bf360c')+'">'+(quick?'🤔 THINK of your answer. Whisper it. No writing.':(q.closed?'📕 Close your notes. ':'')+'✍️ WRITE your answer in your notebook.')+'</div>'+
      (batch?'<div class="how">🧑‍🏫 <b>Boss rule:</b> write ALL '+BATCHN+' answers first. Number each one. Then '+TEACHER+' checks them together in ONE visit.</div>':desk?'<div class="how">🧑‍🏫 <b>'+TEACHER+' will mark this answer.</b> Write neatly.'+(q.pg?' Your book can help: <b>'+q.pg+'</b>.':'')+'</div>':(q.pg&&!quick&&!q.closed?'<div class="how pre">📖 Help in your book: <b>'+q.pg+'</b></div>':''))+
      '<div class="center"><button class="btn go">.</button></div>','animal');
    var b=card.querySelector('.btn'); if(!quick) Snd.fx('page');
    countdown(b,q.secs||30,quick?'🤔 Thinking...':'✍️ Writing...',batch?(q._n>=BATCHN?'✅ All '+BATCHN+' written - go to '+TEACHER+' ▶':'✅ Written - next animal ▶'):desk?'✅ Done - go to '+TEACHER+' ▶':'👀 Check my answer').then(function(){ Snd.fx('ding'); });
    clickOnce(b).then(function(){
      if(batch){ if(q._n===1) BQUE=[]; BQUE.push(q); addScore(20); if(q._n>=BATCHN) batchDesk(BQUE.slice(),done); else { hide(); done(); } }
      else if(desk) deskFlow(q,done); else selfFlow(q,card,b,done); });
  });
}
function selfFlow(q,card,b,done){
  b.remove(); card.querySelectorAll('.pre').forEach(function(z){ z.remove(); }); var d=document.createElement('div');
  d.innerHTML='<div class="fb ok" style="display:block"><b>Best answer:</b><br>'+fill(q.model)+(q.why?'<br><small><b>Why it scores:</b> '+fill(q.why)+'</small>':'')+'</div>'+(q.exam?'':ptsHTML(q,false))+
    '<div class="how"><b>How many marks did YOUR answer earn?</b> Be honest - '+TEACHER+' checks your notebook.</div><div class="row marks" style="justify-content:center"></div>';
  card.appendChild(d);
  card.querySelectorAll('.pt').forEach(function(p,i){ setTimeout(function(){ p.classList.add('lit'); Snd.fx('pop'); },FAST?0:400+i*350); });
  var row=d.querySelector('.marks');
  for(var m=0;m<=q.marks;m++){ (function(m){ var mb=document.createElement('button'); mb.className='btn '+(m===0?'':'go'); mb.textContent=m; row.appendChild(mb);
    onTap(mb,function(){ if(row.dataset.done) return; row.dataset.done=1; S.self+=m; addScore(m*100); if(m>0){ Snd.fx('cash'); popAt('+'+m+' self-marked',row); }
      if(m<q.marks&&!q.quick) fixIt(q,m,false,done); else { hide(); done(); } }); })(m); }
  d.scrollIntoView({block:'nearest'});
}
function fixIt(q,m,byTeacher,done){
  var good=m>=q.marks*0.6; if(byTeacher) Snd.fx(good?'good':'fail'); window.BQ.cur={type:'fix',q:q};
  var c=show('<div class="center"><h2>'+aniHTML(q.cmd)+' '+(byTeacher?'🧑‍🏫 '+TEACHER+' gave you':'You scored')+' <span class="mk '+(good?'g':'l')+'">'+m+' / '+q.marks+'</span></h2></div><div class="fb ok" style="display:block"><b>Best answer:</b><br>'+fill(q.model)+'</div>'+ptsHTML(q,true)+
    '<div class="how" style="font-size:1em">🖊️ <b>Fix your answer now.</b> Use a <b>different color pen</b>. '+(m>=q.marks?'Full marks! Copy any better words from the best answer.':'Add what you missed from the best answer.')+'</div><div class="center"><button class="btn go">.</button></div>','animal');
  var b=c.querySelector('.btn'); Snd.fx('page');
  countdown(b,byTeacher?(q.fix||30):15,'🖊️ Fixing...','✅ I fixed it ▶').then(function(){ Snd.fx('ding'); });
  clickOnce(b).then(function(){ addScore(20); hide(); done(); });
}
var DSAVE=SET.deskSaveCode===true;
function deskFlow(q,done){
  teacherGate('<div class="center"><div class="anbig">'+aniHTML(q.cmd)+'</div><h2>Take your notebook to '+TEACHER+'</h2><div>He marks your <b>'+q.cmd+'</b> answer. Do not close this page.</div></div>').then(function(c){
    window.BQ.cur={type:'deskmark',q:q}; c.classList.add('animal');
    c.innerHTML='<h2>🧑‍🏫 '+TEACHER+' marks · '+aniHTML(q.cmd)+' '+q.cmd+' ['+q.marks+']</h2><div><small>'+fill(q.q)+'</small></div><div class="fb ok" style="display:block"><b>Best answer:</b><br>'+fill(q.model)+(q.why?'<br><small><b>Examiner note:</b> '+fill(q.why)+'</small>':'')+'</div>'+ptsHTML(q,false)+
      '<div class="tfoot"><div class="row" style="justify-content:center"><b>Mark for '+S.first+':</b><span class="row tmarks"></span></div><div class="row" style="justify-content:center;flex-wrap:nowrap">'+(DSAVE?'<input class="name tcode" type="password" autocomplete="off" placeholder="Teacher code">':'')+'<button class="btn go" style="margin:0;white-space:nowrap">Save mark ✔</button></div><div class="fb"></div></div>';
    c.scrollTop=0; var got=null, row=c.querySelector('.tmarks'), inp=c.querySelector('.tfoot input'), fb=c.querySelector('.tfoot .fb');
    c.querySelectorAll('.pt').forEach(function(p){ p.style.cursor='pointer'; onTap(p,function(){ p.classList.toggle('lit'); Snd.fx('pop'); }); });
    for(var m=0;m<=q.marks;m++){ (function(m){ var ch=document.createElement('button'); ch.className='chip'; ch.textContent=m; ch.style.fontSize='1.25em'; ch.style.minWidth='2em'; row.appendChild(ch); onTap(ch,function(){ got=m; row.querySelectorAll('.chip').forEach(function(z){ z.classList.toggle('sel',z===ch); }); }); })(m); }
    var saved=false;
    function ok(){ if(saved) return; if(got===null){ fb.className='fb bad'; fb.textContent='Tap a mark first.'; return; }
      if(DSAVE&&!codeOK(inp.value.trim())){ fb.className='fb bad'; fb.textContent='Wrong code. Only '+TEACHER+' can save the mark.'; inp.value=''; Snd.fx('wrong'); return; }
      saved=true; S.tmarks+=got; addScore(got*100); if(got>0) popAt('+'+got+' from '+TEACHER); fixIt(q,got,true,done); }
    onTap(c.querySelector('.btn.go'),ok); if(inp) inp.addEventListener('keydown',function(e){ if(e.key==='Enter') ok(); });
  });
}
(function(){ if(SET.deskAnimals==null) return; var want=+SET.deskAnimals, all=[]; L.stages.forEach(function(st){ (st.items||st.qs||[]).forEach(function(it){ if(it.type==='animal') all.push(it); }); });
  var on=all.filter(function(a){return a.desk;}); if(want<on.length) on.slice(want).forEach(function(a){ a.desk=0; });
  else { var off=all.filter(function(a){return !a.desk&&!a.quick;}).sort(function(x,y){return y.marks-x.marks;}); for(var i=0;i<off.length&&on.length+i<want;i++) off[i].desk=1; } })();

/* ---------- v10: bosses - write every animal answer first, then ONE desk check for all of them ---------- */
var BATCH=!!L.boss && SET.bossCheck!=='each' && !(SET.deskAnimals!=null && +SET.deskAnimals===0), BATCHN=0, BQUE=[], SAVECODE=SET.bossSaveCode===true;
(function(){ if(!BATCH) return; var all=[]; L.stages.forEach(function(st){ (st.items||st.qs||[]).forEach(function(it){ if(it.type==='animal'&&!it.quick) all.push(it); }); });
  if(!all.length){ BATCH=false; return; } all.forEach(function(a,i){ a.desk=1; a._n=i+1; }); BATCHN=all.length; })();
function batchDesk(qs,done){
  var tot=0; qs.forEach(function(q){ tot+=q.marks; });
  teacherGate('<div class="center"><div class="anbig">'+qs.map(function(q){return aniHTML(q.cmd);}).join(' ')+'</div><h2>Take your notebook to '+TEACHER+'</h2><div>He checks <b>all '+qs.length+' boss answers</b> in one visit. Do not close this page.</div></div>').then(function(c){
    window.BQ.cur={type:'batchmark',qs:qs}; c.classList.add('animal');
    c.innerHTML='<h2>🧑‍🏫 '+TEACHER+' marks · BOSS · '+qs.length+' answers ['+tot+']</h2>'+
      qs.map(function(q,i){ return '<div class="mrow bq" style="margin:.35em 0"><div class="cmd">'+aniHTML(q.cmd)+' '+(i+1)+'. '+q.cmd+' <span>['+q.marks+']</span></div><div><small>'+fill(q.q)+'</small></div><div class="fb ok" style="display:block"><b>Best answer:</b><br>'+fill(q.model)+(q.why?'<br><small><b>Examiner note:</b> '+fill(q.why)+'</small>':'')+'</div>'+ptsHTML(q,false)+'<div class="row" style="justify-content:center;gap:.25em"><b>Mark '+(i+1)+':</b><span class="row tmarks" data-i="'+i+'" style="gap:.25em"></span></div></div>'; }).join('')+
      '<div class="tfoot"><div class="row" style="justify-content:center;flex-wrap:nowrap"><b>'+S.first+': <span class="btot">0 of '+qs.length+' marked</span></b>'+(SAVECODE?'<input class="name tcode" type="password" autocomplete="off" placeholder="Teacher code">':'')+'<button class="btn go" style="margin:0 0 0 .6em;white-space:nowrap">Save all marks 🔒</button></div><div class="fb"></div></div>';
    c.scrollTop=0; var got={}, inp=c.querySelector('.tfoot input'), fb=c.querySelector('.tfoot .fb'), bt=c.querySelector('.btot'), saved=false;
    c.querySelectorAll('.pt').forEach(function(p){ p.style.cursor='pointer'; onTap(p,function(){ p.classList.toggle('lit'); Snd.fx('pop'); }); });
    function upd(){ var n=Object.keys(got).length, t=0; for(var k in got) t+=got[k]; bt.textContent=n<qs.length?n+' of '+qs.length+' marked':t+' / '+tot; }
    c.querySelectorAll('.tmarks').forEach(function(row){ var i=+row.dataset.i;
      for(var m=0;m<=qs[i].marks;m++){ (function(m){ var ch=document.createElement('button'); ch.className='chip'; ch.textContent=m; ch.style.fontSize='1.15em'; ch.style.minWidth='1.9em'; row.appendChild(ch);
        onTap(ch,function(){ got[i]=m; row.querySelectorAll('.chip').forEach(function(z){ z.classList.toggle('sel',z===ch); }); upd(); }); })(m); } });
    function ok(){ if(saved) return;
      if(Object.keys(got).length<qs.length){ fb.className='fb bad'; fb.textContent='Tap a mark for every answer first.'; return; }
      if(SAVECODE&&!codeOK(inp.value.trim())){ fb.className='fb bad'; fb.textContent='Wrong code. Only '+TEACHER+' can save the marks.'; inp.value=''; Snd.fx('wrong'); return; }
      saved=true; var t=0; for(var k in got) t+=got[k]; S.tmarks+=t; addScore(t*100); if(t>0) popAt('+'+t+' from '+TEACHER); batchFix(qs,got,t,tot,done); }
    onTap(c.querySelector('.tfoot .btn.go'),ok); if(inp) inp.addEventListener('keydown',function(e){ if(e.key==='Enter') ok(); });
  });
}
function batchFix(qs,got,t,tot,done){
  var good=t>=tot*0.6; Snd.fx(good?'good':'fail'); window.BQ.cur={type:'batchfix',qs:qs};
  var c=show('<div class="center"><h2>🧑‍🏫 '+TEACHER+' gave you <span class="mk '+(good?'g':'l')+'">'+t+' / '+tot+'</span> for the boss</h2></div>'+
    qs.map(function(q,i){ var m=got[i]; return '<div class="mrow" style="margin:.35em 0"><b>'+aniHTML(q.cmd)+' '+(i+1)+'. '+q.cmd+': <span class="mk '+(m>=q.marks*0.6?'g':'l')+'">'+m+' / '+q.marks+'</span></b><div><small>'+fill(q.q)+'</small></div><div class="fb ok" style="display:block"><b>Best answer:</b><br>'+fill(q.model)+'</div>'+ptsHTML(q,true)+'</div>'; }).join('')+
    '<div class="how" style="font-size:1em">🖊️ <b>Fix ALL '+qs.length+' answers now.</b> Use a <b>different color pen</b>. Add what you missed from each best answer.</div><div class="center"><button class="btn go">.</button></div>','animal');
  c.scrollTop=0; var b=c.querySelector('.btn'); Snd.fx('page');
  countdown(b,20+20*qs.length,'🖊️ Fixing...','✅ I fixed them all ▶').then(function(){ Snd.fx('ding'); });
  clickOnce(b).then(function(){ addScore(20*qs.length); hide(); done(); });
}

/* ---------- v5: micro-challenges (falls and hazards) ---------- */
var MICRO=['pump','sheep','coins','tea','gallop'];
var MICRON={pump:['🧠 BRAIN PUMP','Tap PUMP fast! Fill the brain before time runs out.'],sheep:['🐑 CASHMERE CATCH','Tap a lane to move your wool bag. Catch the sheep!'],coins:['₮ TÖGRÖG TAP','Tap every coin before it disappears!'],tea:['🧋 MILK TEA STOP','Tap STOP when the cup is in the green zone.'],gallop:['🐎 NAADAM GALLOP','Tap LEFT, RIGHT, LEFT, RIGHT to gallop to the flag!']};
function microGame(kind){
  return new Promise(function(res){
    var mg=document.createElement('div'); mg.id='mg'; stageEl.appendChild(mg); Snd.fx('boom');
    var nm=MICRON[kind], T=kind==='pump'?6000:kind==='gallop'?7000:kind==='tea'?8000:0, done=false, timers=[], t0=Date.now();
    mg.innerHTML='<div class="mgh"><b>'+nm[0]+'</b><br><small>'+nm[1]+'</small></div><div class="timer"><i></i></div><div class="mga"></div>';
    var area=mg.querySelector('.mga'), bar=mg.querySelector('.timer i'), M=window.BQ.micro={kind:kind};
    S.micro=S.micro||[0,0]; S.micro[0]++;
    function every(ms,fn){ var id=setInterval(fn,ms); timers.push(id); return id; }
    function end(win){ if(done) return; done=true; timers.forEach(clearInterval); window.BQ.micro=null; if(win) S.micro[1]++;
      area.innerHTML='<div class="mgr">'+(win?'✅ SAVED! +30':'💥 OUCH! -20')+'</div>'; Snd.fx(win?'right':'wrong'); setTimeout(function(){ mg.remove(); res(win); },800); }
    if(T) every(100,function(){ var p=1-(Date.now()-t0)/T; bar.style.width=Math.max(0,p*100)+'%'; if(p<=0) end(false); });
    function tapb(el,fn){ el.addEventListener('pointerdown',function(e){ e.preventDefault(); Snd.resume(); fn(e); }); }
    if(kind==='pump'){
      var n=0, need=22; area.innerHTML='<div class="mgbig" id="mgb">🧠</div><button class="btn go mgbtn">⛽ PUMP!</button>';
      var b=area.querySelector('#mgb'); tapb(area.querySelector('.mgbtn'),function(){ n++; Snd.fx('jump'); b.style.transform='scale('+(0.5+n/need*1.3)+')'; if(n>=need) end(true); });
      b.style.transform='scale(.5)';
    } else if(kind==='sheep'){
      var lane=1, got=0, k=0, total=6, cur=null; bar.parentNode.style.visibility='hidden';
      area.innerHTML='<div class="mgl" data-l="0"></div><div class="mgl" data-l="1"></div><div class="mgl" data-l="2"></div><div class="mgbag">🧺</div><div class="mgc">0 / '+total+'</div>';
      var bag=area.querySelector('.mgbag'), cnt=area.querySelector('.mgc');
      function setLane(l){ lane=l; bag.style.left=(l*33.3+16.6)+'%'; }
      area.querySelectorAll('.mgl').forEach(function(el){ tapb(el,function(){ setLane(+el.dataset.l); }); }); setLane(1);
      function drop(){ if(done) return; if(k>=total){ end(got>=4); return; } k++; var l=Math.floor(Math.random()*3); M.lane=l;
        var s=document.createElement('div'); s.className='mgs'; s.textContent='🐑'; s.style.left=(l*33.3+16.6)+'%'; s.style.top='-5%'; area.appendChild(s);
        requestAnimationFrame(function(){ requestAnimationFrame(function(){ s.style.top='72%'; }); });
        setTimeout(function(){ if(done) return; if(lane===l){ got++; Snd.fx('coin'); s.textContent='✨'; } else { Snd.fx('bump'); s.textContent='💨'; } cnt.textContent=got+' / '+total; setTimeout(function(){ s.remove(); },250); setTimeout(drop,300); },1150); }
      setTimeout(drop,500);
    } else if(kind==='coins'){
      var hit=0, shown=0, tot=8; bar.parentNode.style.visibility='hidden'; area.innerHTML='<div class="mgc">0 / '+tot+'</div>'; var cn=area.querySelector('.mgc');
      function pop(){ if(done) return; if(shown>=tot){ end(hit>=6); return; } shown++; var c=document.createElement('div'); c.className='mgt'; c.textContent='🪙'; c.style.left=(8+Math.random()*78)+'%'; c.style.top=(12+Math.random()*58)+'%'; area.appendChild(c); var alive=true;
        tapb(c,function(){ if(!alive) return; alive=false; hit++; Snd.fx('coin'); cn.textContent=hit+' / '+tot; c.remove(); });
        setTimeout(function(){ alive=false; c.remove(); pop(); },950); }
      setTimeout(pop,400);
    } else if(kind==='tea'){
      var pos=0, dir=1, tries=2; area.innerHTML='<div class="mgtrack"><div class="mgzone"></div><div class="mgcup">🧋</div></div><button class="btn go mgbtn">✋ STOP!</button><div class="mgc">2 tries</div>';
      var cup=area.querySelector('.mgcup'), tc=area.querySelector('.mgc'); M.zone=[62,82];
      every(30,function(){ pos+=dir*2.2; if(pos>=96){pos=96;dir=-1;} if(pos<=0){pos=0;dir=1;} M.pos=pos; cup.style.left=pos+'%'; });
      tapb(area.querySelector('.mgbtn'),function(){ if(pos>=60&&pos<=84) end(true); else { tries--; tc.textContent=tries+' tries'; Snd.fx('bump'); if(tries<=0) end(false); } });
    } else {
      var st=0, need2=18, last=''; area.innerHTML='<div class="mgtrack"><div class="mgcup" style="left:0">🐎</div><div class="mgflag">🏁</div></div><div class="mgrow"><button class="btn alt mgbtn" data-s="L">◀ LEFT</button><button class="btn alt mgbtn" data-s="R">RIGHT ▶</button></div>';
      var h=area.querySelector('.mgcup'); M.next='L';
      area.querySelectorAll('.mgbtn').forEach(function(bn){ tapb(bn,function(){ var s=bn.dataset.s; if(s===last) return; last=s; M.next=s==='L'?'R':'L'; st++; Snd.fx('bump'); h.style.left=(st/need2*88)+'%'; if(st>=need2) end(true); }); });
    }
  });
}

/* ---------- v6: Mr. Chris explains (classroom skit) ---------- */
var _exo=document.createElement('canvas'); _exo.width=_exo.height=64; var _exc=_exo.getContext('2d');
var EMOFONT='"Apple Color Emoji","Noto Color Emoji","Segoe UI Emoji",sans-serif';
/* ---------- v13: the board acts out the idea. boardAnim(c, a, t, em) draws one animation frame on Mr. Chris's chalkboard.
   c = 2D context in the 320 x 118 lesson picture; the free board area is x 102-306, y 27-80.
   a = the animation, e.g. ['g','🧑','🏪','💵'] ; t = ticks since this frame of the lesson started ; em(e,x,y,size) draws an emoji. ---------- */
function boardAnim(c,a,t,em){
  var k=a[0], CX=204, CY=56, LX=128, RX=280, W='#f6f3d8', G='#cfe8d6', Y='#ffe082';
  function ln(x1,y1,x2,y2,col,w){ c.strokeStyle=col||G; c.lineWidth=w||1; c.beginPath(); c.moveTo(x1,y1); c.lineTo(x2,y2); c.stroke(); }
  function tx(s,x,y,sz,al,col){ c.font='bold '+(sz||8)+'px monospace'; c.fillStyle=col||W; c.textAlign=al||'center'; c.textBaseline='alphabetic'; c.fillText(s,x,y); c.textAlign='left'; }
  function ease(u){ u=Math.max(0,Math.min(1,u)); return u*u*(3-2*u); }
  function pop(t0,d){ var u=(t-t0)/(d||10); return u<=0?0:u>=1?1:(u<0.7?u/0.7*1.25:1.25-(u-0.7)/0.3*0.25); }
  function arrow(x1,x2,y,col){ ln(x1,y,x2,y,col); var d=x2>x1?-1:1; ln(x2+5*d,y-3,x2,y,col); ln(x2+5*d,y+3,x2,y,col); }
  function al(v){ c.globalAlpha=Math.max(0,Math.min(1,v)); }
  var bob=Math.sin(t/14)*1.5, i, n, u, e1, x, y, s;
  if(k==='g'||k==='x'){                      /* give: A hands O to B.  exchange: O goes one way, O2 comes back */
    var A=a[1], B=a[2], O=a[3]||'💵', O2=a[4]||'📦', per=120; u=(t%per)/per; e1=ease(u/0.72);
    var x1=A?LX+17:LX-22, x2=B?RX-17:RX+22;
    if(A) em(A,LX,CY+(u<0.08?-2:0),24); if(B) em(B,RX,CY+((u>0.72&&u<0.82)?-3:0),24);
    arrow(LX+18,RX-18,k==='x'?CY+15:CY+17,G);
    al(u<0.9?1:(1-u)*10); em(O,x1+(x2-x1)*e1,CY-6-Math.sin(e1*Math.PI)*13,15); al(1);
    if(k==='x'){ arrow(RX-18,LX+18,CY+22,Y); al(u<0.9?1:(1-u)*10); em(O2,x2-(x2-x1)*e1,CY+7+Math.sin(e1*Math.PI)*5,15); al(1); }
    return;
  }
  if(k==='c'){                               /* combine: the parts slide together and become R */
    var R=a[1], P=a.slice(2), per2=190; u=(t%per2)/per2; n=P.length;
    if(u<0.5){ e1=ease(u/0.45); for(i=0;i<n;i++){ var sx=n===1?LX:LX+(RX-LX)*i/(n-1), sy=CY+((n>2&&i%2)?-12:0); em(P[i],sx+(CX-sx)*e1,sy+(CY-sy)*e1,22-6*e1); }
      if(n>1&&u<0.3){ tx('+',CX,CY+4,12,'center',Y); } }
    else { s=Math.min(1,(u-0.5)/0.08); em(R,CX,CY+bob,Math.round(14+18*(s<0.7?s/0.7*1.2:1.2-(s-0.7)/0.3*0.2)));
      for(i=0;i<6;i++){ var an=i/6*6.283+t/30, rr=22+((t+i*7)%20)*0.5; al(1-((t+i*7)%20)/20); tx('✦',CX+Math.cos(an)*rr*1.5,CY+Math.sin(an)*rr*0.7+3,7,'center',Y); } al(1); }
    return;
  }
  if(k==='s'){                               /* split: W breaks into its parts */
    var Wh=a[1], Q=a.slice(2), per3=190; u=(t%per3)/per3; n=Q.length;
    if(u<0.3){ em(Wh,CX,CY+bob,Math.round(30*pop((t%per3),10))); }
    else { e1=ease((u-0.3)/0.35); al(1-e1); em(Wh,CX,CY,Math.round(30-10*e1)); al(1);
      for(i=0;i<n;i++){ var tx2=n===1?CX:LX+6+(RX-LX-12)*i/(n-1); em(Q[i],CX+(tx2-CX)*e1,CY+(i%2?5:-3)*e1+(e1>=1?Math.sin(t/12+i)*1.5:0),Math.round(10+10*e1)); if(e1<1) ln(CX,CY,CX+(tx2-CX)*e1,CY,G); } }
    return;
  }
  if(k==='u'||k==='d'){                      /* up / down: bars that rise or fall, with the thing that changes */
    var E=a[1], per4=200, tt=t%per4, hs=k==='u'?[9,17,26,36]:[36,26,17,9];
    ln(140,78,236,78,W); ln(140,78,140,34,W);
    for(i=0;i<4;i++){ var g=ease((tt-i*14)/26), h=hs[i]*g; c.fillStyle=k==='u'?'#8bd3a0':'#ef9a9a'; c.fillRect(148+i*22,78-h,14,h); c.fillStyle='rgba(255,255,255,.35)'; c.fillRect(148+i*22,78-h,14,1); }
    var gg=ease((tt-50)/40); if(k==='u'){ ln(152,66,152+66*gg,66-30*gg,Y,2); if(gg>=1){ ln(218,36,211,37,Y,2); ln(218,36,216,43,Y,2); } }
    else { ln(152,40,152+66*gg,40+26*gg,Y,2); if(gg>=1){ ln(218,66,211,65,Y,2); ln(218,66,216,59,Y,2); } }
    if(E) em(E,270,CY-2+(k==='u'?-1:1)*(6*gg-3)+bob,26);
    tx(k==='u'?'▲':'▼',270,CY+24,10,'center',k==='u'?'#8bd3a0':'#ef9a9a');
    return;
  }
  if(k==='v'){                               /* versus: two sides on a see-saw */
    var ang=Math.sin(t/38)*0.13, px=CX, py=70, L2=66, ca=Math.cos(ang), sa=Math.sin(ang);
    c.fillStyle=G; c.beginPath(); c.moveTo(px,py); c.lineTo(px-7,80); c.lineTo(px+7,80); c.fill();
    ln(px-L2*ca,py-L2*sa,px+L2*ca,py+L2*sa,W,2);
    em(a[1],px-(L2-8)*ca,py-(L2-8)*sa-13,24); em(a[2],px+(L2-8)*ca,py+(L2-8)*sa-13,24);
    if(a[3]){ if(a[3].length<=3) em(a[3],CX,38,13); else tx(a[3],CX,38,8,'center',Y); }
    return;
  }
  if(k==='q'||k==='l'||k==='h'){             /* q: steps, one lit at a time.  l: a set that pops in.  h: a chain with something moving along it */
    var hi=k==='q'?a[1]:-1, Es=a.slice(2), per5=46; n=Es.length; var gap=Math.min(44,190/n), x0=CX-gap*(n-1)/2;
    if(k==='q'&&hi<0) hi=Math.floor(t/per5)%n;
    for(i=0;i<n;i++){ var pp=pop(i*9,10); if(pp<=0) continue; x=x0+gap*i; var on=(k!=='q')||i===hi, sz=(k==='q'?(on?26:17):(n>4?19:22))*pp;
      y=CY+(k==='h'?4:0)+(k==='q'?(on?-Math.abs(Math.sin(t/9))*4:2):Math.sin(t/12+i*1.3)*2);
      al(on?1:0.5); em(Es[i],x,y,Math.round(sz)); al(1);
      if(i<n-1&&k!=='l') tx('›',x+gap/2,CY+(k==='h'?8:4),11,'center',G); }
    if(k==='q'&&n>1){ ln(x0-10,76,x0+gap*(n-1)+10,76,G); c.fillStyle=Y; c.fillRect(x0+gap*hi-6,75,12,3); }
    if(k==='h'){ var leg=60, tot=leg*(n-1)+40, tt2=t%tot, seg=Math.min(n-2,Math.floor(tt2/leg)), uu=ease(Math.min(1,(tt2-seg*leg)/(leg-12)));
      if(tt2<leg*(n-1)) em(a[1],x0+gap*(seg+uu),CY-13-Math.sin(uu*Math.PI)*7,14); else em(a[1],x0+gap*(n-1),CY-14+bob,14); }
    return;
  }
  if(k==='n'||k==='y'){                      /* no / yes: a stamp on the thing */
    em(a[1]||'🤔',CX,CY+bob,30); s=pop(18,10); if(s>0){ em(k==='n'?'❌':'✅',CX+18,CY+12,Math.round(18*s)); }
    if(a[2]) tx(a[2],CX,36,8,'center',k==='n'?'#ef9a9a':'#8bd3a0');
    return;
  }
  if(k==='p'){                               /* pyramid: five levels, one lit (0 = bottom) */
    var hl=a[1], top=31, bot=80, hw=70, lv=5, hh=(bot-top)/lv;
    for(i=0;i<lv;i++){ var yb=bot-i*hh, yt=yb-hh, wb=hw*(1-i/lv), wt=hw*(1-(i+1)/lv);
      if(i===hl){ c.fillStyle='rgba(255,224,130,'+(0.45+0.25*Math.sin(t/8))+')'; c.beginPath(); c.moveTo(CX-wb,yb); c.lineTo(CX+wb,yb); c.lineTo(CX+wt,yt); c.lineTo(CX-wt,yt); c.fill(); }
      ln(CX-wb,yb,CX+wb,yb,W); ln(CX-wb,yb,CX-wt,yt,W); ln(CX+wb,yb,CX+wt,yt,W); }
    if(hl>=0&&a[2]){ var yy=bot-hl*hh-hh/2; em(a[2],CX+hw*(1-(hl+0.5)/lv)+20,yy+bob*0.6,18); }
    var cl=(t%150)/150; em('🧗',CX-hw*(1-cl)-12,bot-cl*(bot-top)-2,11);
    return;
  }
  if(k==='L'){                               /* product life cycle: sales over time, one stage lit */
    var st=a[1], x0l=112, x1l=298, yb2=74, pts=[], NN=48;
    function cy(v){ var r; if(v<0.2) r=0.06+0.5*v; else if(v<0.5) r=0.16+0.74*ease((v-0.2)/0.3); else if(v<0.75) r=0.9+0.06*Math.sin((v-0.5)/0.25*Math.PI); else r=0.9-0.6*ease((v-0.75)/0.25); return yb2-r*40; }
    var bnd=[0,0.2,0.5,0.75,1], nm=['INTRO','GROWTH','MATURITY','DECLINE'];
    if(st>=0&&st<4){ c.fillStyle='rgba(255,224,130,'+(0.22+0.1*Math.sin(t/8))+')'; c.fillRect(x0l+(x1l-x0l)*bnd[st],30,(x1l-x0l)*(bnd[st+1]-bnd[st]),yb2-30); }
    ln(x0l,yb2,x1l,yb2,W); ln(x0l,yb2,x0l,30,W);
    var prog=Math.min(1,t/70); c.strokeStyle=Y; c.lineWidth=2; c.beginPath(); for(i=0;i<=NN*prog;i++){ var v=i/NN; if(i===0) c.moveTo(x0l+(x1l-x0l)*v,cy(v)); else c.lineTo(x0l+(x1l-x0l)*v,cy(v)); } c.stroke();
    for(i=0;i<4;i++){ tx(nm[i],x0l+(x1l-x0l)*(bnd[i]+bnd[i+1])/2,80,6,'center',i===st?Y:G); if(i) ln(x0l+(x1l-x0l)*bnd[i],yb2,x0l+(x1l-x0l)*bnd[i],yb2-3,W); }
    var dv=st>=0&&st<4?bnd[st]+(bnd[st+1]-bnd[st])*((t%120)/120):(t%240)/240; em(a[2]||'📦',x0l+(x1l-x0l)*dv,cy(dv)-9,13);
    return;
  }
  if(k==='O'){                               /* organisation chart: tall (many levels) or flat (few levels); a message travels down */
    var tall=a[1]==='tall', rows=tall?[1,2,4]:[1,6], ry=tall?[35,52,69]:[38,66], prev=null, path=[];
    for(i=0;i<rows.length;i++){ var cnt=rows[i], w2=tall?(i===1?60:30):28, xs=[]; for(n=0;n<cnt;n++) xs.push(CX+(n-(cnt-1)/2)*w2);
      if(prev) xs.forEach(function(xx,j){ var px2=prev.xs[Math.min(prev.xs.length-1,Math.floor(j*prev.xs.length/xs.length))]; ln(px2,prev.y+4,xx,ry[i]-5,G); });
      xs.forEach(function(xx,j){ em(i===0?'👩‍💼':(tall&&i<rows.length-1?'👔':'👷'),xx,ry[i],tall?13:(i===0?15:12)); });
      path.push([xs[0],ry[i]]); prev={xs:xs,y:ry[i]}; }
    var seg2=path.length-1, lp=(t%(seg2*40+30)), sg=Math.min(seg2-1,Math.floor(lp/40)), uu2=ease(Math.min(1,(lp-sg*40)/34));
    em('✉️',path[sg][0]+(path[sg+1][0]-path[sg][0])*uu2-11,path[sg][1]+(path[sg+1][1]-path[sg][1])*uu2,9);
    tx(tall?'TALL: 3 LEVELS':'FLAT: 2 LEVELS',304,36,6,'right',Y);
    return;
  }
  if(k==='P'){                               /* pie: one slice of pct percent */
    var pct=a[1], gr=ease(t/50), r=23, cxp=CX-36, cyp=CY+1;
    c.fillStyle='#3d7a63'; c.beginPath(); c.arc(cxp,cyp,r,0,6.2832); c.fill();
    c.fillStyle=Y; c.beginPath(); c.moveTo(cxp,cyp); c.arc(cxp,cyp,r,-1.5708,-1.5708+6.2832*pct/100*gr); c.closePath(); c.fill();
    c.strokeStyle=W; c.lineWidth=1; c.beginPath(); c.arc(cxp,cyp,r,0,6.2832); c.stroke();
    if(a[3]!=='') tx(gr>=1&&a[3]?a[3]:Math.round(pct*gr)+'%',CX+28,CY+2,a[3]&&a[3].length>4?13:16,'center',Y); if(a[2]) em(a[2],CX+72,CY-2+bob,22);
    return;
  }
  if(k==='k'){                               /* chalk: Mr. Chris writes the key words or the sum */
    var Ls=a.slice(1), chars=Math.floor(t/2.2), used=0, ys=Ls.length===1?[CY+4]:Ls.length===2?[CY-4,CY+12]:[CY-10,CY+4,CY+18];
    for(i=0;i<Ls.length;i++){ var str=String(Ls[i]), show=str.slice(0,Math.max(0,chars-used)); used+=str.length+4; var fs=str.length>26?7:str.length>18?9:11; if(show) tx(show,CX,ys[i],fs,'center',i===Ls.length-1&&Ls.length>1?Y:W); }
    return;
  }
  if(k==='book'){                            /* open your book at page ... */
    var op=t>26; em(op?'📖':'📕',CX-48,CY+(op?bob:Math.sin(t/3)*1.5),Math.round(30*(op?pop(26,10):1)));
    tx('OPEN YOUR BOOK',CX+26,CY-6,9,'center',W); if(op) tx(String(a[1]).toUpperCase(),CX+26,CY+12,14,'center',Y);
    return;
  }
  /* 'o' : one thing in the spotlight */
  s=pop(0,12); em(a[1]||'✏️',CX,CY+bob,Math.round(32*s));
  var rr2=18+(t%50)*0.35; al(1-(t%50)/50); c.strokeStyle=G; c.lineWidth=1; c.beginPath(); c.ellipse(CX,CY,rr2*1.25,rr2*0.8,0,0,6.2832); c.stroke(); al(1);
  for(i=0;i<4;i++){ var an2=i/4*6.283+t/40; tx('✦',CX+Math.cos(an2)*46,CY+Math.sin(an2)*17+3,6,'center',Y); }
}
function explainIt(sk){
  return new Promise(function(res){
    var ex=document.createElement('div'); ex.id='ex'; stageEl.appendChild(ex); window.BQ.cur={type:'explain'}; controls(false);
    ex.innerHTML='<div class="exw"><canvas width="320" height="118"></canvas><div class="exbd"></div></div><div class="exb"><div class="who">'+TEACHER+' 🧑‍🏫</div><span class="tx"></span></div><button class="btn go exn" disabled>…</button>';
    var cv2=ex.querySelector('canvas'), c=cv2.getContext('2d'), tx=ex.querySelector('.tx'), nb=ex.querySelector('.exn'), bd=ex.querySelector('.exbd'), exb=ex.querySelector('.exb'), boardOn=false, bt=null;
    var fi=-1, n=0, pop=0, at=0, talking=false, done=false, typ=null, dust=[], F=sk.frames, raf=0;
    if(sk.pg){ if(window.BQ.lastPg!==sk.pg) F=[{e:'📖',t:'📖 Open your book at '+sk.pg+', {name}.',a:['book',sk.pg]}].concat(sk.frames); window.BQ.lastPg=sk.pg; }
    function em(e,x,y,sz){ c.font=sz+'px '+EMOFONT; c.textAlign='center'; c.textBaseline='middle'; c.fillStyle='#fff'; c.fillText(e,Math.round(x),Math.round(y)); c.textAlign='left'; c.textBaseline='alphabetic'; }
    function room(){
      n++; c.imageSmoothingEnabled=false;
      R(c,0,0,320,92,'#f4ead4'); R(c,0,66,320,26,'#dccaa6'); R(c,0,66,320,1,'#b9a37c'); R(c,0,92,320,26,'#b98a5a'); for(var i=0;i<320;i+=40){ R(c,i,92,1,26,'#a37748'); } R(c,0,104,320,1,'#a37748');
      R(c,6,10,46,40,'#8d6e63'); R(c,9,13,40,34,'#8fd3ff'); R(c,9,36,40,11,'#7cc46a'); R(c,28,13,2,34,'#8d6e63'); R(c,9,29,40,2,'#8d6e63'); var cx=((n*0.15)%60)-12; if(cx>0&&cx<32){ R(c,9+cx,17,9,3,'#fff'); R(c,11+cx,15,5,2,'#fff'); }
      R(c,10,56,34,3,'#c62828'); R(c,12,59,2,8,'#8d6e63'); R(c,40,59,2,8,'#8d6e63');
      R(c,94,5,220,80,'#6d4c41'); R(c,98,9,212,72,'#1f4d3a'); R(c,98,9,212,2,'#18402f'); R(c,94,85,220,4,'#8d6e63'); R(c,120,83,6,2,'#fff'); R(c,130,83,5,2,'#ffe082'); R(c,290,82,12,3,'#cfd8dc');
      c.font='bold 9px monospace'; c.fillStyle='#f6f3d8'; var ttl=(sk.title||'').toUpperCase(), tmax=sk.pg?(sk.pg.length>9?24:27):36; if(ttl.length>tmax) ttl=ttl.slice(0,tmax-1)+'…'; c.fillText(ttl,104,21); R(c,104,24,Math.min(200,ttl.length*5.4),1,'#f6f3d8');
      if(sk.pg){ c.fillStyle='#ffe082'; c.textAlign='right'; c.fillText('📖 '+sk.pg.replace(/^pages? /,'P.').toUpperCase(),306,21); c.textAlign='left'; }
      var k, sx=106;
      for(k=0;!boardOn&&k<F.length&&F.length>1&&F.length<=10;k++){ R(c,100,30+k*5,2,2,k<=fi?'#ffe082':'#3d7a63'); }
      if(fi>=0){ var f=F[fi]; pop=Math.min(14,pop+1); var s=pop<8?pop/8*1.25:1.25-(pop-8)/6*0.25, bob=Math.sin(n/14)*1.5; at++; if(boardOn) em(f.e||'✏️',297,74+bob,Math.round(15*s)); else if(f.a){ c.save(); try{ boardAnim(c,f.a,at,em); }catch(err){ em(f.e||'✏️',204,56+bob,Math.round(30*s)); } c.restore(); c.globalAlpha=1; } else em(f.e||'✏️',204,56+bob,Math.round(30*s));
        if(f.x&&!boardOn&&!f.a){ for(k=0;k<f.x.length&&k<3;k++){ em(f.x[k],240+k*24,64-bob,Math.round(18*Math.min(1,pop/10))); } }
        if(pop===3&&!boardOn){ for(k=0;k<10;k++) dust.push({x:204,y:56,vx:(Math.random()-0.5)*3,vy:(Math.random()-0.6)*2.4,l:22}); } }
      for(k=dust.length-1;k>=0;k--){ var d=dust[k]; d.x+=d.vx; d.y+=d.vy; d.vy+=0.08; if(--d.l<=0) dust.splice(k,1); else R(c,d.x,d.y,1,1,'#f6f3d8'); }
      _exc.clearRect(0,0,64,64); drawChar(_exc,NPC.chris,32,58,0,1,n);
      var tb=talking&&(n>>3)%2?1:0; c.drawImage(_exo,14,30,36,32,8,22-tb*2,108,96);
      c.strokeStyle='#5d4037'; c.lineWidth=2; c.beginPath(); c.moveTo(72,74-tb*2); c.lineTo(104+Math.sin(n/9)*2,58+Math.cos(n/9)*2); c.stroke();
      if(talking){ R(c,60,20,18,12,'#fff'); R(c,64,32,4,3,'#fff'); R(c,64,24,2+((n>>2)%3)*4,2,'#1b1b2f'); R(c,64,28,8,1,'#90a4ae'); }
      if(hero){ _exc.clearRect(0,0,64,64); drawChar(_exc,hero,32,58,0,-1,n); c.drawImage(_exo,10,22,44,40,262,58,66,60); }
      R(c,250,108,70,10,'#8d6e63'); R(c,250,106,70,3,'#a1887f');
    }
    function loop(){ if(done) return; room(); raf=requestAnimationFrame(loop); } loop();
    function ready(i){ if(done) return; nb.disabled=false; nb.textContent=i<F.length-1?'Next ▶':(sk.end||'✍️ Got it! Now write it'); }
    function chalk(html){ boardOn=true; bd.style.display='block'; bd.classList.toggle('sm',html.replace(/<[^>]+>/g,'').length>150); var words=html.split(' '), k=0; bd.innerHTML=''; Snd.loop('chalk',true);
      bt=setInterval(function(){ k+=FAST?99:1; bd.innerHTML=words.slice(0,k).join(' '); if(k>=words.length){ clearInterval(bt); bt=null; Snd.loop('chalk',false); } },110); }
    function showF(i){ fi=i; pop=0; at=0; var f=F[i], s=Array.from(fill(f.t||'')), k=0; nb.disabled=true; nb.textContent='…'; tx.textContent=''; talking=true; Snd.fx('block');
      exb.classList.toggle('trap',!!f.trap); var old=exb.querySelector('.exos'); if(old) old.remove();
      if(f.board) chalk(f.board);
      typ=setInterval(function(){ k+=2; tx.textContent=s.slice(0,k).join(''); if(k%6===0) Snd.fx('type'); if(k>=s.length){ clearInterval(typ); talking=false;
        if(f.check){ var os=document.createElement('div'); os.className='exos'; f.check.o.forEach(function(o,oi){ var ob=document.createElement('button'); ob.className='exo'; ob.innerHTML=o; if(oi===f.check.a) ob.dataset.ok=1; os.appendChild(ob);
            onTap(ob,function(){ if(ob.disabled) return; if(oi===f.check.a){ os.querySelectorAll('.exo').forEach(function(z){z.disabled=true;}); ob.classList.add('ok'); Snd.fx('right'); addScore(20); popAt('+20 ✔',ob); ready(i); } else { ob.classList.add('bad'); ob.disabled=true; Snd.fx('wrong'); tx.textContent=fill(f.check.h||'Not quite. Look at the board again.'); } }); });
          exb.appendChild(os); }
        else setTimeout(function(){ ready(i); },FAST?10:(f.board?1500:800)); } },FAST?1:20); }
    onTap(nb,function(){ if(nb.disabled) return; if(fi<F.length-1) showF(fi+1); else { done=true; cancelAnimationFrame(raf); if(typ) clearInterval(typ); if(bt) clearInterval(bt); Snd.loop('chalk',false); ex.remove(); res(); } });
    showF(0);
  });
}

/* ---------- flow ---------- */
var SAVEKEY='bq_save_'+L.id;
function save(i){ store.set(SAVEKEY,{i:i,S:S,hero:hero.id}); }
function runStageByType(st){
  switch(st.type){
    case 'movie': return movieStage(st);
    case 'notebook': return notebookStage(st);
    case 'run': return runStage(st);
    case 'quiz': return quizStage(st);
    case 'forge': return forgeStage(st);
    case 'write': return writeStage(st);
    case 'card': return cardStage(st);
    case 'rain': return rainStage(st);
    case 'sort': return sortStage(st);
    case 'dodge': return dodgeStage(st);
    case 'story': return storyStage(st);
  }
  return Promise.resolve();
}
function play(from){
  var i=from;
  function step(){
    if(i>=L.stages.length){ finish(); return; }
    if(S.needLock){ challenge().then(step); return; }
    if(i===L.stages.length-1&&S.missed.length&&!S.revDone){ S.revDone=1; var rq=S.missed.slice(0,6).map(function(m){ var c={}; for(var k in m) c[k]=m[k]; c.retry=1; c.cmd='SECOND CHANCE'; return c; }); quizStage({kicker:'FIX YOUR MISTAKES',title:'🔁 SECOND CHANCE',sub:'You missed these. Get them right now!',qs:rq}).then(function(){ trans(step); }); return; }
    save(i); window.BQ.si=i; if(bellBtn) bellBtn.style.display='block'; var st=L.stages[i], t0=Date.now(), k0=tick; curPlace=st.place||L.place||null;
    runStageByType(st).then(function(){ window.BQ.log.push({type:st.type,ms:Date.now()-t0,ticks:tick-k0}); i++; trans(step); });
  }
  step();
}
/* ---------- v12: the red bell. Class is over before the level is: the teacher types the code and sees an ESTIMATED final score ---------- */
var BELL=!L.free && SET.bell!==false, bellBtn=null, bellOv=null; window.BQ.bellOpen=false;
function bellInit(){
  if(!BELL) return;
  var css=document.createElement('style');
  css.textContent='#bell{position:absolute;right:calc(6px + 4.8em);top:4px;z-index:30;font-size:clamp(16px,3.4vh,24px);background:#d32f2f;color:#fff;border:2px solid #fff;border-radius:10px;padding:0 6px;cursor:pointer;display:none}#bellov{position:absolute;inset:0;display:none;align-items:center;justify-content:center;z-index:40;background:rgba(5,8,20,.82);padding:2%}#bellov .card{border-color:#b71c1c;box-shadow:6px 6px 0 #b71c1c}';
  document.head.appendChild(css);
  bellBtn=document.createElement('button'); bellBtn.id='bell'; bellBtn.setAttribute('aria-label','Out of time: early score'); bellBtn.textContent='🔔'; stageEl.appendChild(bellBtn);
  bellOv=document.createElement('div'); bellOv.id='bellov'; stageEl.appendChild(bellOv);
  $('#hS').style.marginRight='10.6em';
  onTap(bellBtn,function(e){ if(e&&e.stopPropagation) e.stopPropagation(); bellAsk(); }); bellBtn.addEventListener('click',function(e){ e.stopPropagation(); });
}
function bellClose(){ if(!bellOv) return; bellOv.style.display='none'; bellOv.innerHTML=''; window.BQ.bellOpen=false; }
function bellEstimate(){
  /* What is done so far: every stage before the current one, and in the current stage every card already finished (_d) or round already played (_n).
     am/as/at = tap, self and teacher marks the student has already had the chance to earn.
     fbDone/fbTot = the fixed bonus points on offer (flags, scrolls read, lesson checks, stamps, story choices, written animals): so far / in the whole game. */
  var si=window.BQ.si==null?-1:window.BQ.si, am=0, as=0, at=0, done=0, total=0, fbDone=0, fbTot=0, runDone=0, runTot=0;
  function chk(it){ var n=0; if(it&&it.sk&&it.sk.frames) it.sk.frames.forEach(function(f){ if(f.check) n++; }); return 20*n; }
  function bonus(st,it,isQ){
    if(!isQ) return (it.tag==='case'?10:30)+chk(it);
    if(it.type==='animal') return chk(it)+(BATCH?40:20);
    if(it.type==='flash') return chk(it)+((st.type!=='quiz'&&it.teacher)?20:0);
    return chk(it);
  }
  L.stages.forEach(function(st,k){
    var list=st.items||st.qs||st.rounds||st.claims||(st.type==='story'?st.stages:null), n=list?list.length:1, full=k<si, cur=k===si;
    total+=n;
    if(st.type==='run'||st.type==='quiz'){
      var last=-1, ans=[], allAn=true, flag=st.type==='run'?200:0;
      fbTot+=flag; if(full) fbDone+=flag;
      list.forEach(function(it,j){
        var isQ=st.type==='quiz'||it.kind==='q', d=full||(cur&&!!it._d), v=bonus(st,it,isQ);
        fbTot+=v;
        if(isQ&&it.type==='animal'){ ans.push(it); if(!d) allAn=false; }
        if(!d) return; last=j; fbDone+=v; if(!isQ) return;
        if(it.type==='animal'){ if(!it.desk) as+=it.marks; }
        else if(it.type==='tgate'){ }
        else if(it.type==='flash'){ if(st.type==='quiz'||!it.teacher) as+=it.marks; }
        else am+=qMarks(it);
      });
      ans.forEach(function(it){ if(it.desk&&(full||(cur&&(BATCH?allAn:it._d)))) at+=it.marks; });
      if(full) done+=n; else if(cur) done+=last+1;
      if(st.type==='run'){ runTot+=n; runDone+=full?n:(cur?last+1:0); }
    } else if(st.type==='rain'||st.type==='sort'||st.type==='dodge'){ if(full||cur){ var c=full?n:Math.min(n,st._n||0); am+=c; done+=c; } }
    else if(st.type==='forge'){ if(full){ am+=st.slots.length; done+=n; } }
    else if(st.type==='write'){ if(full){ as+=st.marks; done+=n; } }
    else if(st.type==='notebook'){ fbTot+=50; if(full){ fbDone+=50; done+=n; } }
    else if(st.type==='story'){ fbTot+=50*n; if(full){ fbDone+=50*n; done+=n; } }
    else if(full) done+=n;
  });
  var M=S.maxMarks, SM=S.selfMax, TM=S.tmax;
  am=Math.min(am,M); as=Math.min(as,SM); if(S.tmarks>0) at=TM; at=Math.min(at,TM);
  var p=total?Math.min(1,done/total):0, cl=function(x){ return Math.max(0,Math.min(1,x)); };
  var rAll=(am+as)>0?cl((S.marks+S.self)/(am+as)):null;
  var rM=am>0?cl(S.marks/am):rAll, rS=as>0?cl(S.self/as):rAll, rT=at>0?cl(S.tmarks/at):rAll;
  if(rM==null) rM=rT; if(rS==null) rS=rM; if(rT==null) rT=rM;
  var dflt=false;
  if(rM==null){ if(p<0.1) return {none:true,p:p}; dflt=true; rM=rS=rT=0.7; }   /* nothing answered yet, but a good part is played: assume 7 right in 10 and say so */
  var pm=Math.max(S.marks,Math.min(M,S.marks+(M-am)*rM)), ps=Math.max(S.self,Math.min(SM,S.self+(SM-as)*rS)), pt=Math.max(S.tmarks,Math.min(TM,S.tmarks+(TM-at)*rT));
  /* the other points, in three parts.
     Fixed bonuses (flags, scrolls, lesson checks, stamps): the student gets the rest by playing on, so they are added in full.
     Coins: they lie along the runs, so they grow with the share of the runs already played.
     Streak bonuses minus penalties: they come with right answers, so they grow with the tap marks still to come. */
  var other=S.score-100*(S.marks+S.self+S.tmarks), coinPts=10*(S.coins||0), rest=other-fbDone-coinPts;
  var pc=(runTot>0&&runDone>0)?coinPts/Math.max(0.15,runDone/runTot):coinPts;
  var pr=(rest>0&&S.marks>0)?rest*Math.min(4,pm/S.marks):rest;
  var po=fbTot+pc+pr, rO=pr;
  var est=Math.max(S.score,Math.round((100*(pm+ps+pt)+po)/10)*10), pct=M?pm/M:0, stars=pct>=0.9?3:pct>=0.7?2:pct>=0.4?1:0;
  return {est:est,stars:stars,p:p,pm:pm,ps:ps,pt:pt,M:M,SM:SM,TM:TM,am:am,as:as,at:at,sofar:S.score,other:other,fbDone:fbDone,fbTot:fbTot,rO:rO,dflt:dflt};
}
window.BQ.bellEstimate=bellEstimate;
function bellAsk(){
  if(!bellOv||window.BQ.bellOpen) return; window.BQ.bellOpen=true; Snd.fx('boom'); bellOv.style.display='flex';
  bellOv.innerHTML='<div class="card"><div class="center"><div class="big">🔔 OUT OF TIME?</div><div>Tap the bell only when <b>'+TEACHER+'</b> says class is over.</div>'+
    '<div class="how" style="font-size:1.05em;margin-top:.5em">👉 Take your <b>notebook</b> and <b>this screen</b> to '+TEACHER+'. He types his code to see your score.<br>🙈 Your score is hidden until then.</div>'+
    '<div class="unl"><input class="name tcode" type="password" autocomplete="off" placeholder="Teacher code"><div class="fb"></div>'+
    '<div class="row" style="justify-content:center"><button class="btn back">◀ Back to the game</button><button class="btn go">Show the score 🔓</button></div></div></div></div>';
  var inp=bellOv.querySelector('input'), fb=bellOv.querySelector('.fb');
  function ok(){
    if(!codeOK(inp.value.trim())){ fb.className='fb bad'; fb.textContent='Wrong code. Only '+TEACHER+' can show the score.'; inp.value=''; Snd.fx('wrong'); return; }
    bellShow();
  }
  onTap(bellOv.querySelector('.back'),bellClose); onTap(bellOv.querySelector('.go'),ok); inp.addEventListener('keydown',function(e){ if(e.key==='Enter') ok(); });
}
function bellShow(){
  var e=bellEstimate(), head='<div class="big">🔔 EARLY SCORE</div><div>'+fill(L.code+' · '+L.short)+'</div><div class="sname">'+S.name+'</div>';
  if(e.none){
    bellOv.innerHTML='<div class="card"><div class="center final">'+head+'<div class="how" style="font-size:1.05em;margin-top:.5em">Too little of this '+(L.boss?'boss':'level')+' is played to estimate a score.<br>No score was recorded.</div><button class="btn go back">◀ Back to the game</button></div></div>';
    onTap(bellOv.querySelector('.back'),bellClose); return;
  }
  Snd.fx('unlock'); var r=store.get('bq_rec',{}); r[L.gid]={score:e.est,name:S.name,t:Date.now(),est:1,played:Math.round(e.p*100),sofar:S.score}; store.set('bq_rec',r);
  var rd=function(x){ return Math.round(x); }, pc=Math.round(e.p*100);
  bellOv.innerHTML='<div class="card"><div class="center final">'+head+
    '<div class="score">≈ '+e.est.toLocaleString('en-US')+' points</div>'+
    '<div style="font-size:1.6em">'+'⭐'.repeat(e.stars)+'☆'.repeat(3-e.stars)+'</div>'+
    '<div><b>Estimated final score.</b> Played: <b>'+pc+'%</b> of this '+(L.boss?'boss':'level')+'. &nbsp; Points so far: <b>'+S.score.toLocaleString('en-US')+'</b></div>'+
    '<div><b>Estimated marks:</b> Game '+rd(e.pm)+' / '+e.M+(e.SM?' &nbsp; Self-marked '+rd(e.ps)+' / '+e.SM:'')+(e.TM?' &nbsp; 🧑‍🏫 '+TEACHER+'\'s mark '+rd(e.pt)+' / '+e.TM+(e.at>=e.TM?' (marked)':' (not marked yet)'):'')+'</div>'+
    '<div><small>Estimate = the points so far + the rest of the '+(L.boss?'boss':'level')+' at this student\'s own rate so far.</small></div>'+
    (e.dflt?'<div class="how">⚠️ No question is answered yet. For the rest, this estimate uses 7 right answers in 10.</div>':e.p<0.25?'<div class="how">⚠️ Less than a quarter was played. This estimate is rough.</div>':'')+
    '<div class="unl ok"><div class="fb ok" style="display:block">✅ <b>'+TEACHER+' recorded this score.</b><br>Finish the '+(L.boss?'boss':'level')+' later and your real score takes its place.</div><button class="btn go back">▶ Keep playing</button></div></div></div>';
  bellOv.firstChild.scrollTop=0; onTap(bellOv.querySelector('.back'),bellClose);
}
function finish(){
  if(bellBtn) bellBtn.style.display='none'; bellClose();
  store.del(SAVEKEY); hud.style.display='flex'; controls(false); Snd.music(null); Snd.fx('flag'); setTimeout(function(){Snd.fx('win');},900);
  var secs=Math.round((Date.now()-S.t0)/1000), mm=Math.floor(secs/60), ss=secs%60;
  var pct=S.maxMarks?S.marks/S.maxMarks:0, stars=pct>=0.9?3:pct>=0.7?2:pct>=0.4?1:0;
  var best=store.get('bq_best_'+L.id,0); if(S.score>best) store.set('bq_best_'+L.id,S.score);
  scene={update:function(){},draw:function(){ drawBG(L.theme,tick*0.4,0); drawGround(L.theme,0,GROUND,W+10,0); drawChar(ctx,hero,W/2,GROUND-((tick>>4)%2?6:0),(tick>>4)%2?3:0,1,tick); if(tick%2===0) Pt.add(Math.random()*W,-4,1,['#e53935','#ffd54f','#43a047','#1e88e5','#ab47bc'],1.2,110,0.03); Pt.step(); Pt.draw(0); }};
  window.BQ.cur={type:'final'};
  var head='<div class="big">'+(L.free?'⭐ REVIEW COMPLETE!':L.boss?'🏆 BOSS CLEARED!':'🏁 LEVEL COMPLETE!')+'</div>'+
    '<div>'+fill(L.code+' · '+L.short)+'</div>'+
    '<div class="sname">'+S.name+'</div>';
  var body='<div class="score">'+S.score.toLocaleString('en-US')+' points</div>'+
    '<div style="font-size:1.6em">'+'⭐'.repeat(stars)+'☆'.repeat(3-stars)+'</div>'+
    (S.missed.length?'<div><small>🔁 First-try mistakes: '+S.missed.length+' &nbsp; Fixed in Second Chance: '+S.fixed+'</small></div>':'')+
    '<div><b>Game marks:</b> '+S.marks+' / '+S.maxMarks+(S.selfMax?' &nbsp; <b>Self-marked:</b> '+S.self+' / '+S.selfMax:'')+(S.tmax?' &nbsp; <b>🧑‍🏫 '+TEACHER+'\'s mark:</b> '+S.tmarks+' / '+S.tmax:'')+' &nbsp; <b>Time:</b> '+mm+':'+(ss<10?'0':'')+ss+'</div>'+
    (function(){ var z=store.get('bq_zoo',{}), ks=Object.keys(CMD).filter(function(k){return z[k];}); return ks.length&&!L.free?'<div><b>Your animal book:</b> '+ks.map(function(k){return aniHTML(k)+'×'+z[k];}).join(' &nbsp;')+' <small>('+ks.length+' of 10 animals)</small></div>':''; })()+
    (S.stamps.length?'<div><b>Notebook stamps ('+S.stamps.length+'):</b> '+S.stamps.map(function(s){return '<span class="stamp">'+s+'</span>';}).join(' ')+'</div>':'');
  if(L.free){
    var newBest=S.score>best;
    var cf=show('<div class="center final">'+head+body+
      '<div class="how" style="font-size:1.05em;margin-top:.5em">'+(newBest&&best>0?'🏆 <b>NEW BEST SCORE!</b> Your old best was '+best.toLocaleString('en-US')+'.':best>0?'🏆 Your best score: <b>'+best.toLocaleString('en-US')+'</b>. Can you beat it?':'🏆 This is your first score. Play again to beat it!')+'<br>No need to see '+TEACHER+'. Stay at your desk.</div>'+
      '<div class="row" style="justify-content:center"><button class="btn go again">🔁 Play again</button><button class="btn menu">🏠 More games</button></div></div>');
    onTap(cf.querySelector('.again'),function(){ location.reload(); }); onTap(cf.querySelector('.menu'),function(){ location.hash='#c-ef'; location.reload(); });
    return;
  }
  var nxt=(L.next?'<div><small>Next: '+fill(L.next)+'</small></div>':'');
  if(!LOCKS){ show('<div class="center final">'+head+body+'<div class="how" style="font-size:1.05em;margin-top:.5em">👉 <b>Go to '+TEACHER+'\'s desk now.</b> Bring your <b>notebook</b> and <b>this screen</b> so he can record your score'+(L.boss?' for full points.':'.')+'<br>Do not close this page.</div>'+nxt+'</div>'); return; }
  var c=show('<div class="center final">'+head+
    '<div class="how" style="font-size:1.05em;margin-top:.5em">👉 <b>Go to '+TEACHER+'\'s desk now.</b> Bring your <b>notebook</b> and <b>this screen</b>.<br>🙈 Your score is hidden. '+TEACHER+' types his code to show it.<br>Do not close this page.</div>'+
    '<div class="unl"><input class="name tcode" type="password" autocomplete="off" placeholder="Teacher code"><div class="fb"></div><button class="btn go">Show the score 🔓</button></div></div>');
  endUnlock(c,head,body,nxt);
}

/* ---------- v9: every animal to the desk + teacher unlock chain ---------- */
var ORDER=[["g-1-1-l1", "1.1 L1 What a business does.html", "1.1 Level 1: What a business does"], ["g-1-1-l2", "1.1 L2 The four factors of production.html", "1.1 Level 2: The four factors of production"], ["g-1-1-l3", "1.1 L3 Added value.html", "1.1 Level 3: Added value"], ["g-1-1-l4", "1.1 L4 Opportunity cost.html", "1.1 Level 4: Opportunity cost"], ["g-1-1-boss", "1.1 BOSS.html", "1.1 BOSS: The Great Dust Storm"], ["g-1-2-l1", "1.2 L1 The three sectors.html", "1.2 Level 1: The three sectors"], ["g-1-2-l2", "1.2 L2 Private and public.html", "1.2 Level 2: Private and public"], ["g-1-2-l3", "1.2 L3 Sectors change.html", "1.2 Level 3: Sectors change"], ["g-1-2-boss", "1.2 BOSS.html", "1.2 BOSS: The Zud Blizzard"], ["g-1-3a-l1", "1.3a L1 Entrepreneurs.html", "1.3a Level 1: Entrepreneurs"], ["g-1-3a-l2", "1.3a L2 The business plan.html", "1.3a Level 2: The business plan"], ["g-1-3a-l3", "1.3a L3 Government support.html", "1.3a Level 3: Government support"], ["g-1-3a-boss", "1.3a BOSS.html", "1.3a BOSS: The Tuul River Flood"], ["g-1-3b-l1", "1.3b L1 Measuring size.html", "1.3b Level 1: Measuring size"], ["g-1-3b-l2", "1.3b L2 Growing.html", "1.3b Level 2: Growing"], ["g-1-3b-l3", "1.3b L3 Succeed or fail.html", "1.3b Level 3: Succeed or fail"], ["g-1-3b-boss", "1.3b BOSS.html", "1.3b BOSS: The UB Smog Cloud"], ["g-1-4-l1", "1.4 L1 The four main types.html", "1.4 Level 1: The four main types"], ["g-1-4-l2", "1.4 L2 Other forms.html", "1.4 Level 2: Other forms"], ["g-1-4-l3", "1.4 L3 Choosing.html", "1.4 Level 3: Choosing"], ["g-1-4-boss", "1.4 BOSS.html", "1.4 BOSS: The Big Power Cut"], ["g-1-5-l1", "1.5 L1 Business objectives.html", "1.5 Level 1: Business objectives"], ["g-1-5-l2", "1.5 L2 Stakeholder groups.html", "1.5 Level 2: Stakeholder groups"], ["g-1-5-l3", "1.5 L3 When objectives conflict.html", "1.5 Level 3: When objectives conflict"], ["g-1-5-boss", "1.5 BOSS.html", "1.5 BOSS: The Gobi Sandstorm"], ["g-2-1a-l1", "2.1a L1 The recruitment process.html", "2.1a Level 1: The recruitment process"], ["g-2-1a-l2", "2.1a L2 Selecting inside or out.html", "2.1a Level 2: Selecting, inside or out"], ["g-2-1a-l3", "2.1a L3 Recommend and justify.html", "2.1a Level 3: Recommend and justify"], ["g-2-1a-boss", "2.1a BOSS.html", "2.1a BOSS: The Great Dust Storm"], ["g-2-1b-l1", "2.1b L1 The employment contract.html", "2.1b Level 1: The employment contract"], ["g-2-1b-l2", "2.1b L2 The law around the job.html", "2.1b Level 2: The law around the job"], ["g-2-1b-l3", "2.1b L3 Training.html", "2.1b Level 3: Training"], ["g-2-1b-boss", "2.1b BOSS.html", "2.1b BOSS: The Zud Blizzard"], ["g-2-2a-l1", "2.2a L1 How a business is organised.html", "2.2a Level 1: How a business is organised"], ["g-2-2a-l2", "2.2a L2 Ways of working.html", "2.2a Level 2: Ways of working"], ["g-2-2a-l3", "2.2a L3 What managers do.html", "2.2a Level 3: What managers do"], ["g-2-2a-boss", "2.2a BOSS.html", "2.2a BOSS: The Tuul River Flood"], ["g-2-2b-l1", "2.2b L1 Leadership styles.html", "2.2b Level 1: Leadership styles"], ["g-2-2b-l2", "2.2b L2 Shrinking the workforce.html", "2.2b Level 2: Shrinking the workforce"], ["g-2-2b-l3", "2.2b L3 Trade unions.html", "2.2b Level 3: Trade unions"], ["g-2-2b-boss", "2.2b BOSS.html", "2.2b BOSS: The UB Smog Cloud"], ["g-2-3-l1", "2.3 L1 Why communication matters.html", "2.3 Level 1: Why communication matters"], ["g-2-3-l2", "2.3 L2 Choosing the method.html", "2.3 Level 2: Choosing the method"], ["g-2-3-l3", "2.3 L3 When communication breaks.html", "2.3 Level 3: When communication breaks"], ["g-2-3-boss", "2.3 BOSS.html", "2.3 BOSS: The Big Power Cut"], ["g-2-4a-l1", "2.4a L1 Why people work.html", "2.4a Level 1: Why people work"], ["g-2-4a-l2", "2.4a L2 The theorists.html", "2.4a Level 2: The theorists"], ["g-2-4a-l3", "2.4a L3 Using the theories.html", "2.4a Level 3: Using the theories"], ["g-2-4a-boss", "2.4a BOSS.html", "2.4a BOSS: The Gobi Sandstorm"], ["g-2-4b-l1", "2.4b L1 Paying for effort.html", "2.4b Level 1: Paying for effort"], ["g-2-4b-l2", "2.4b L2 Beyond the payslip.html", "2.4b Level 2: Beyond the payslip"], ["g-2-4b-l3", "2.4b L3 Choosing the method.html", "2.4b Level 3: Choosing the method"], ["g-2-4b-boss", "2.4b BOSS.html", "2.4b BOSS: The Great Dust Storm"], ["g-3-1a-l1", "3.1a L1 The role of marketing.html", "3.1a Level 1: The role of marketing"], ["g-3-1a-l2", "3.1a L2 Markets on the move.html", "3.1a Level 2: Markets on the move"], ["g-3-1a-l3", "3.1a L3 Measuring the market.html", "3.1a Level 3: Measuring the market"], ["g-3-1a-boss", "3.1a BOSS.html", "3.1a BOSS: The Zud Blizzard"], ["g-3-1b-l1", "3.1b L1 Mass and niche.html", "3.1b Level 1: Mass and niche"], ["g-3-1b-l2", "3.1b L2 Slicing the market.html", "3.1b Level 2: Slicing the market"], ["g-3-1b-l3", "3.1b L3 Choosing your customers.html", "3.1b Level 3: Choosing your customers"], ["g-3-1b-boss", "3.1b BOSS.html", "3.1b BOSS: The Tuul River Flood"], ["g-3-2-l1", "3.2 L1 Why research and where answers live.html", "3.2 Level 1: Why research, and where answers live"], ["g-3-2-l2", "3.2 L2 Doing it yourself.html", "3.2 Level 2: Doing it yourself"], ["g-3-2-l3", "3.2 L3 Reading what exists and reading it well.html", "3.2 Level 3: Reading what exists, and reading it well"], ["g-3-2-boss", "3.2 BOSS.html", "3.2 BOSS: The UB Smog Cloud"], ["g-3-3a-l1", "3.3a L1 What makes a product sell.html", "3.3a Level 1: What makes a product sell"], ["g-3-3a-l2", "3.3a L2 New products and the life cycle.html", "3.3a Level 2: New products and the life cycle"], ["g-3-3a-l3", "3.3a L3 Extending the life.html", "3.3a Level 3: Extending the life"], ["g-3-3a-boss", "3.3a BOSS.html", "3.3a BOSS: The Big Power Cut"], ["g-3-3b-l1", "3.3b L1 Price five methods.html", "3.3b Level 1: Price: five methods"], ["g-3-3b-l2", "3.3b L2 Place the road to the buyer.html", "3.3b Level 2: Place: the road to the buyer"], ["g-3-3b-l3", "3.3b L3 Pricing it right.html", "3.3b Level 3: Pricing it right"], ["g-3-3b-boss", "3.3b BOSS.html", "3.3b BOSS: The Gobi Sandstorm"], ["g-3-3c-l1", "3.3c L1 Why shout and the nudge.html", "3.3c Level 1: Why shout, and the nudge"], ["g-3-3c-l2", "3.3c L2 Advertising.html", "3.3c Level 2: Advertising"], ["g-3-3c-l3", "3.3c L3 Ecommerce.html", "3.3c Level 3: Ecommerce"], ["g-3-3c-boss", "3.3c BOSS.html", "3.3c BOSS: The Great Dust Storm"], ["g-3-3d-l1", "3.3d L1 The mix assembled.html", "3.3d Level 1: The mix assembled"], ["g-3-3d-l2", "3.3d L2 Crossing borders.html", "3.3d Level 2: Crossing borders"], ["g-3-3d-l3", "3.3d L3 One mix justified.html", "3.3d Level 3: One mix, justified"], ["g-3-3d-boss", "3.3d BOSS.html", "3.3d BOSS: The Zud Blizzard"], ["g-3-4-l1", "3.4 L1 Why the law steps in.html", "3.4 Level 1: Why the law steps in"], ["g-3-4-l2", "3.4 L2 What it does to marketing.html", "3.4 Level 2: What it does to marketing"], ["g-3-4-l3", "3.4 L3 The law in action.html", "3.4 Level 3: The law in action"], ["g-3-4-boss", "3.4 BOSS.html", "3.4 BOSS: The Tuul River Flood"]];
var LOCKS=SET.lockLevels!==false, OIDX=-1; ORDER.forEach(function(o,i){ if(o[0]===L.gid) OIDX=i; });
function isOpen(g){ return !!store.get('bq_open',{})[g]; }
function setOpen(g){ var o=store.get('bq_open',{}); o[g]=1; store.set('bq_open',o); }
function gotoGame(o){ var u=o[0].split('-')[1], me=L.gid.split('-')[1];
  if(/^#g-/.test(location.hash)){ if(u===me){ location.hash='#'+o[0]; location.reload(); } else location.href='../business-quest-unit-'+u+'/#'+o[0]; }
  else location.href=encodeURI(o[1]); }
function levelGate(){
  if(L.free){ return pickHero(); }
  if(!LOCKS){ return L.key?askKey():pickHero(); }
  if(OIDX<=0||isOpen(L.gid)){ return pickHero(); }
  var p=ORDER[OIDX-1];
  teacherGate(store.get('bq_rec',{})[p[0]]?'<h1>🔒 '+L.code+'</h1><div>'+(store.get('bq_rec',{})[p[0]].est?'Your early score for <b>'+p[2]+'</b> is recorded. 🔔':'You finished <b>'+p[2]+'</b>. ✅')+'<br>Show this screen to <b>'+TEACHER+'</b>. He opens this level with his code.</div>':'<h1>🔒 This level is locked</h1><div>First finish <b>'+p[2]+'</b> and show <b>'+TEACHER+'</b> your score. He unlocks this level.</div>').then(function(){ setOpen(L.gid); hide(); pickHero(); });
}
function endUnlock(c,head,body,nxt){
  var box=c.querySelector('.unl'); if(!box) return; var nx=OIDX>=0?ORDER[OIDX+1]:null, AUTO=SET.unlockWithScore===true;
  var inp=box.querySelector('input'), fb=box.querySelector('.fb'), done=false;
  function ok(){ if(done) return;
    if(!codeOK(inp.value.trim())){ fb.className='fb bad'; fb.textContent='Wrong code. Only '+TEACHER+' can show the score.'; inp.value=''; Snd.fx('wrong'); return; }
    done=true; Snd.fx('unlock'); var r=store.get('bq_rec',{}); r[L.gid]={score:S.score,name:S.name,t:Date.now()}; store.set('bq_rec',r); if(nx&&AUTO) setOpen(nx[0]);
    var c2=show('<div class="center final">'+head+body+
      '<div class="unl ok"><div class="fb ok" style="display:block">✅ <b>'+TEACHER+' recorded your score.</b>'+
        (nx?(AUTO?'<br>🔓 Unlocked: <b>'+nx[2]+'</b>':'<br>🔒 Next: <b>'+nx[2]+'</b>. '+TEACHER+' opens it with his code.'):'<br>🎉 You finished every Business Quest game!')+'</div>'+
        (nx?'<button class="btn go">▶ '+(AUTO?'Play the next level':'Go to the next level')+'</button>':'')+'</div>'+nxt+'</div>');
    c2.scrollTop=0; var b=c2.querySelector('.unl .btn'); if(b) onTap(b,function(){ gotoGame(nx); }); }
  onTap(box.querySelector('.btn'),ok); inp.addEventListener('keydown',function(e){ if(e.key==='Enter') ok(); });
}
(function(){ var all=[]; L.stages.forEach(function(st){ (st.items||st.qs||[]).forEach(function(it){ if(it.type==='animal'&&!it.quick) all.push(it); }); });
  if(all.length>1&&all.every(function(a){return a.desk;})) L.stages.forEach(function(st){ (st.scenes||[]).forEach(function(sc){ (sc.lines||[]).forEach(function(ln){ if(typeof ln[1]==='string') ln[1]=ln[1].replace('One animal in this level is mine, {name}. Bring that answer to my desk and I will mark it.','Every animal in this level is mine, {name}. After each animal, bring your notebook to my desk and I will check it.'); }); }); }); })();
function keepAwake(){ try{ if(navigator.wakeLock) navigator.wakeLock.request('screen').catch(function(){}); }catch(e){} }
document.addEventListener('visibilitychange',function(){ if(document.visibilityState==='visible'&&S.t0) keepAwake(); });
/* ---------- start screens ---------- */
function start(){
  countMax();
  scene={update:function(){},draw:function(){ drawBG(L.theme,tick*0.4,L.boss?0.5:0); drawGround(L.theme,0,GROUND,W+10,0); HEROES.forEach(function(h,i){ var x=((tick*0.7+i*46)%(W+140))-70; drawChar(ctx,h,x,GROUND,(tick>>3)%2?1:2,1,tick); }); }};
  var c=show('<div class="center"><div class="logo">'+'BUSINESS QUEST'.split('').map(function(ch){return ch===' '?' ':'<span>'+ch+'</span>';}).join('')+'</div><div style="margin:.4em 0;font-weight:800">'+L.code+' · '+L.chapter+'</div><div class="big" style="font-size:1.6em;color:'+(L.boss?'#c62828':'#0d47a1')+'">'+(L.boss?'🌪️ ':L.free?'⭐ ':'')+L.title+'</div>'+
    '<div style="margin:.3em 0">'+(L.free?'⭐ <b>Early finisher game.</b> No notebook. No code. Beat your best score!':'📓 Have your <b>notebook</b> and <b>pen</b> ready. 🎧 Headphones are best.')+'</div><button class="btn go blink" style="font-size:1.3em">▶ TAP TO START</button></div>');
  clickOnce(c.querySelector('.btn')).then(function(){
    Snd.resume(); Snd.fx('coin'); keepAwake();
    try{ var de=document.documentElement; if(de.requestFullscreen) de.requestFullscreen().catch(function(){}); if(screen.orientation&&screen.orientation.lock) screen.orientation.lock('landscape').catch(function(){}); }catch(e){}
    askName();
  });
}
function askName(){
  var c=show('<h1>✏️ What is your name?</h1><div>Type your <b>real first and last name</b>.'+(L.free?'':' '+TEACHER+' will see it on your score screen.')+'</div><input class="name" maxlength="40" autocomplete="off" placeholder="First name Last name"><div class="fb"></div><button class="btn go">OK ▶</button>');
  var inp=c.querySelector('input'), fb=c.querySelector('.fb'); inp.value=store.get('bq_name','');
  setTimeout(function(){ try{inp.focus();}catch(e){} },200);
  function ok(){ var v=inp.value.trim().replace(/\s+/g,' '); if(v.length<3||v.indexOf(' ')<0){ fb.className='fb bad'; fb.textContent='Please type your first AND last name.'; Snd.fx('wrong'); return; }
    S.name=v.replace(/[<>&"]/g,''); S.first=S.name.split(' ')[0]; store.set('bq_name',S.name); Snd.fx('coin'); levelGate(); }
  onTap(c.querySelector('.btn'),ok); inp.addEventListener('keydown',function(e){ if(e.key==='Enter') ok(); });
}
function askKey(){ teacherGate('<h1>🔐 Boss gate</h1><div>Show <b>'+TEACHER+'</b> your notebook for this chapter. He unlocks the boss level.</div>').then(function(){ hide(); pickHero(); }); }
function pickHero(){
  var c=show('<h2>Choose your hero, '+S.first+'!</h2><div class="heroes"></div><div class="center"><button class="btn go" disabled>Let\'s go ▶</button></div>');
  var g=c.querySelector('.heroes'), go=c.querySelector('.btn'), chosen=store.get('bq_hero',null);
  HEROES.forEach(function(h){ var d=document.createElement('div'); d.className='hero'; d.appendChild(portrait(h,2)); d.insertAdjacentHTML('beforeend','<b>'+h.name+'</b>'+h.title); g.appendChild(d);
    onTap(d,function(){ g.querySelectorAll('.hero').forEach(function(x){x.classList.remove('sel');}); d.classList.add('sel'); hero=h; go.disabled=false; Snd.fx('coin'); });
    if(chosen===h.id){ d.classList.add('sel'); hero=h; go.disabled=false; } });
  clickOnce(go).then(function(){ store.set('bq_hero',hero.id); hide(); maybeResume(); });
}
function maybeResume(){
  var sv=store.get(SAVEKEY,null);
  if(sv&&sv.S&&sv.S.name===S.name&&sv.i>0){
    var c=show('<h2>Welcome back, '+S.first+'!</h2><div>You stopped in the middle of this level with <b>'+sv.S.score+'</b> points.</div><button class="btn go">▶ Continue</button><button class="btn alt">↺ Start over</button>');
    var bs=c.querySelectorAll('.btn');
    onTap(bs[0],function(){ for(var k in sv.S) S[k]=sv.S[k]; hide(); updHUD(); play(sv.i); });
    onTap(bs[1],function(){ store.del(SAVEKEY); hide(); begin(); });
  } else begin();
}
function begin(){ S.t0=Date.now(); S.hearts=HMAX; updHUD(); play(0); }

/* ---------- layout ---------- */
function layout(){ var s=Math.min(window.innerWidth/W, window.innerHeight/H); stageEl.style.width=Math.floor(W*s)+'px'; stageEl.style.height=Math.floor(H*s)+'px'; }
window.addEventListener('resize',layout); layout();
$('#mute').textContent=Snd.isMuted()?'🔇':'🔊';
onTap($('#mute'),function(e){ e.stopPropagation(); $('#mute').textContent=Snd.toggle()?'🔇':'🔊'; });
$('#mute').addEventListener('click',function(e){e.stopPropagation();});
if(SET.music===false) $('#mus').style.display='none'; $('#mus').style.opacity=Snd.musicOn()?1:0.4;
onTap($('#mus'),function(e){ e.stopPropagation(); $('#mus').style.opacity=Snd.toggleMusic()?1:0.4; });
$('#mus').addEventListener('click',function(e){e.stopPropagation();});
$('#hT').textContent=L.code+' · '+L.short;
document.title=L.code+' '+L.title+' - Business Quest';
window.BQ.tele={dj:0,brick:0}; bellInit(); window.BQ.buildCourse=buildCourse; window.BQ.S=S; window.BQ.K=K; window.BQ.preview=function(th,pl,cam){ curPlace=pl; scene={update:function(){},draw:function(){ drawBG(th,cam,0); drawGround(th,0,GROUND,W+10,cam); }}; }; window.BQ.CMD=CMD; window.BQ.Snd=Snd; window.BQ.HEROES=HEROES;
if(L.icon) $('#stI').textContent=L.icon;
/* ---------- v8: real Mongolian places and landmarks ---------- */
var curPlace=L.place||null;
function mnFlag(c,x,y,w,h){ var b=Math.round(w/3); R(c,x,y,b,h,'#c4272f'); R(c,x+b,y,w-2*b,h,'#015197'); R(c,x+w-b,y,b,h,'#c4272f'); R(c,x+1,y+1,Math.max(1,b-2),1,'#f9cf02'); R(c,x+1,y+3,Math.max(1,b-2),h-5,'#f9cf02'); R(c,x+2,y+4,Math.max(1,b-4),1,'#c4272f'); }
function drawLM(id,x,b){
  var c=ctx,i,k,w; x=Math.round(x);
  if(id==='ovoo'){ for(i=0;i<6;i++){ w=30-i*5; R(c,x+15-w/2,b-4-i*4,w,4,i%2?'#8d8d8d':'#a7a7a7'); R(c,x+15-w/2,b-4-i*4,w,1,'#c9c9c9'); } R(c,x+14,b-44,2,22,'#5d4037');
    for(i=0;i<3;i++){ var wv=Math.round(Math.sin(tick/9+i)*1.5); R(c,x+16,b-43+i*5,9+wv,3,'#1e88e5'); R(c,x+16+9+wv,b-42+i*5,3,2,'#64b5f6'); } R(c,x+5,b-9,3,2,'#f9cf02'); R(c,x+21,b-13,3,2,'#e53935'); }
  else if(id==='chinggis'){ R(c,x,b-24,60,24,'#d9d4c8'); R(c,x-2,b-26,64,3,'#bcb6a6'); for(i=4;i<58;i+=6) R(c,x+i,b-22,2,22,'#b0aa9b'); R(c,x+25,b-12,10,12,'#6d4c41'); R(c,x+8,b-30,44,5,'#c9c4b6');
    var sv='#cfd8dc', sd='#90a4ae'; R(c,x+14,b-44,30,10,sv); R(c,x+14,b-36,30,2,sd); R(c,x+16,b-35,3,6,sv); R(c,x+22,b-35,3,6,sd); R(c,x+34,b-35,3,6,sv); R(c,x+40,b-35,3,6,sd); R(c,x+40,b-52,6,10,sv); R(c,x+44,b-56,9,6,sv); R(c,x+51,b-53,3,3,sd); R(c,x+10,b-42,5,3,sd); R(c,x+7,b-40,4,6,sd);
    R(c,x+25,b-58,8,15,sv); R(c,x+26,b-63,6,6,sv); R(c,x+25,b-65,8,2,sd); R(c,x+33,b-55,7,2,sv); R(c,x+39,b-62,1,9,'#f9cf02'); }
  else if(id==='turtle'){ var rk='#8a7a68', rd='#6f6152', rl='#a39280'; R(c,x+2,b-16,40,16,rk); R(c,x+6,b-26,30,10,rk); R(c,x+12,b-32,18,6,rk); R(c,x+38,b-24,14,12,rk); R(c,x+48,b-22,8,7,rk); R(c,x+52,b-19,5,3,rd);
    R(c,x+6,b-26,30,2,rl); R(c,x+12,b-32,18,2,rl); R(c,x+40,b-24,10,2,rl); R(c,x+10,b-14,1,10,rd); R(c,x+22,b-22,1,14,rd); R(c,x+33,b-16,1,12,rd); R(c,x+50,b-20,2,2,'#2b2b2b'); R(c,x-2,b-4,8,4,rd); R(c,x+36,b-4,8,4,rd); }
  else if(id==='gandan'){ var wh='#f5f1e6', gr='#2e7d32', gd='#f9cf02'; R(c,x,b-20,50,20,wh); R(c,x-3,b-23,56,3,gr); R(c,x-5,b-21,3,2,gr); R(c,x+52,b-21,3,2,gr); R(c,x+8,b-36,34,13,wh); R(c,x+5,b-39,40,3,gr); R(c,x+15,b-50,20,11,wh); R(c,x+12,b-53,26,3,gr); R(c,x+24,b-59,2,6,gd); R(c,x+22,b-55,6,2,gd);
    R(c,x+21,b-12,8,12,'#b71c1c'); for(i=0;i<4;i++){ R(c,x+4+i*12+(i>1?6:0),b-15,5,6,'#b71c1c'); } for(i=0;i<3;i++) R(c,x+12+i*10,b-33,5,6,'#b71c1c'); R(c,x+22,b-47,6,6,'#b71c1c'); R(c,x,b-20,50,1,gd); R(c,x+8,b-36,34,1,gd); }
  else if(id==='bluesky'){ c.fillStyle='#3d8fd1'; c.beginPath(); c.moveTo(x+2,b); c.lineTo(x+2,b-78); c.quadraticCurveTo(x+34,b-50,x+32,b); c.fill(); c.fillStyle='#7cc4f2'; c.beginPath(); c.moveTo(x+2,b); c.lineTo(x+2,b-78); c.quadraticCurveTo(x+14,b-50,x+12,b); c.fill();
    for(i=6;i<74;i+=6){ R(c,x+2,b-i,Math.max(3,Math.round(30*Math.sqrt(1-i/80))),1,'rgba(255,255,255,.35)'); } R(c,x+2,b-80,1,6,'#eceff1'); }
  else if(id==='palace'){ R(c,x,b-26,96,26,'#e9e3d5'); R(c,x-2,b-28,100,3,'#c9c2b0'); for(i=4;i<94;i+=7) R(c,x+i,b-24,2,22,'#bdb5a2'); R(c,x+32,b-38,32,12,'#e9e3d5'); R(c,x+30,b-40,36,3,'#c9c2b0'); for(i=35;i<62;i+=6) R(c,x+i,b-36,2,34,'#bdb5a2');
    R(c,x+42,b-18,12,18,'#3e2723'); R(c,x+44,b-14,8,12,'#6d4c41'); R(c,x+45,b-19,6,6,'#5d4037'); R(c,x+46,b-23,4,4,'#5d4037'); R(c,x+47,b-52,1,12,'#9e9e9e'); mnFlag(c,x+48,b-52,12,7); }
  else if(id==='sukh'){ R(c,x+6,b-22,22,22,'#bdb5a2'); R(c,x+4,b-24,26,3,'#9e9684'); R(c,x+9,b-18,16,8,'#8d8674'); var bz='#4e5d52'; R(c,x+8,b-36,18,8,bz); R(c,x+9,b-28,2,5,bz); R(c,x+22,b-28,2,5,bz); R(c,x+13,b-29,2,5,bz); R(c,x+24,b-42,4,8,bz); R(c,x+26,b-45,6,4,bz); R(c,x+15,b-46,5,10,bz); R(c,x+16,b-50,3,4,bz); R(c,x+20,b-52,1,8,bz); R(c,x+20,b-53,5,1,bz); }
  else if(id==='zaisan'){ c.fillStyle='#6f9a86'; c.beginPath(); c.moveTo(x-20,b); c.lineTo(x+22,b-30); c.lineTo(x+40,b-30); c.lineTo(x+84,b); c.fill(); for(i=0;i<9;i++) R(c,x+10+i*5,b-6-i*2.6,6,1,'#e0e0e0');
    R(c,x+30,b-58,3,28,'#cfd8dc'); R(c,x+18,b-40,26,6,'#b0bec5'); R(c,x+18,b-40,26,1,'#eceff1'); for(i=0;i<6;i++) R(c,x+20+i*4,b-38,2,3,['#c4272f','#f9cf02','#015197'][i%3]); R(c,x+28,b-62,7,5,'#f9cf02'); }
  else if(id==='erdenezuu'){ R(c,x,b-12,112,12,'#f4f4f4'); R(c,x,b-13,112,2,'#d7d7d7'); for(i=0;i<8;i++){ k=x+3+i*14; R(c,k,b-20,8,8,'#ffffff'); R(c,k+1,b-24,6,4,'#ffffff'); R(c,k+3,b-30,2,6,'#f9cf02'); R(c,k,b-13,8,1,'#d7d7d7'); } R(c,x+50,b-10,12,10,'#b71c1c'); R(c,x+48,b-14,16,3,'#2e7d32'); }
  else if(id==='cliffs'){ var cl='#d8572a', cd='#b23f17', cs='#ef8a4d'; R(c,x,b-20,84,20,cl); R(c,x+6,b-30,26,10,cl); R(c,x+36,b-36,20,16,cl); R(c,x+60,b-26,18,6,cl); R(c,x+6,b-30,26,2,cs); R(c,x+36,b-36,20,2,cs); R(c,x+60,b-26,18,2,cs); R(c,x,b-20,84,1,cs); for(i=4;i<82;i+=9) R(c,x+i,b-18,2,18,cd); R(c,x,b-9,84,1,cd); R(c,x+88,b-4,7,4,'#f5f0e1'); R(c,x+90,b-6,4,2,'#f5f0e1'); }
  else if(id==='takhi'){ for(k=0;k<3;k++){ var hx=x+k*24, hb=b-(k%2), gz=((tick>>5)+k)%2; R(c,hx,hb-10,13,6,'#d9a05b'); R(c,hx,hb-5,13,1,'#f1dcc0'); R(c,hx+1,hb-4,2,4,'#3e2723'); R(c,hx+10,hb-4,2,4,'#3e2723'); R(c,hx+11,hb-14+gz*5,3,6,'#d9a05b'); R(c,hx+12,hb-15+gz*6,5,3,'#d9a05b'); R(c,hx+10,hb-15+gz*5,2,6,'#3e2723'); R(c,hx-2,hb-10,2,6,'#3e2723'); } }
  else if(id==='deer'){ for(k=0;k<2;k++){ var dx=x+k*26, db=b; R(c,dx,db-11,12,6,'#8d6e63'); R(c,dx+1,db-5,1,5,'#5d4037'); R(c,dx+10,db-5,1,5,'#5d4037'); R(c,dx+11,db-15,3,6,'#8d6e63'); R(c,dx+12,db-17,4,3,'#a1887f'); R(c,dx+12,db-23,1,6,'#efebe9'); R(c,dx+15,db-23,1,6,'#efebe9'); R(c,dx+10,db-22,3,1,'#efebe9'); R(c,dx+15,db-21,3,1,'#efebe9'); R(c,dx-1,db-11,2,3,'#efebe9'); } }
  else if(id==='statedept'){ R(c,x,b-44,64,44,'#d8c8a8'); R(c,x-2,b-46,68,3,'#a8926a'); for(k=0;k<3;k++) for(i=0;i<6;i++) R(c,x+4+i*10,b-40+k*10,6,6,'#6f8fb0'); R(c,x+6,b-12,52,3,'#c4272f'); R(c,x+26,b-9,12,9,'#5d4037'); R(c,x+14,b-54,36,8,'#c4272f'); c.font='bold 6px monospace'; c.fillStyle='#fff'; c.fillText('IKH DELGUUR',x+15,b-48); }
  else if(id==='chimney'){ for(k=0;k<2;k++){ var qx=x+k*22; R(c,qx,b-62,8,62,'#cfd8dc'); for(i=0;i<5;i++) R(c,qx,b-60+i*12,8,5,'#c62828'); for(i=0;i<5;i++){ var sp=((tick>>3)+i*3+k*5)%18; R(c,qx+2+sp/2,b-66-sp*1.6,5+sp/3,4+sp/4,'rgba(220,220,225,'+(0.55-sp*0.03)+')'); } } R(c,x-8,b-20,56,20,'#78909c'); R(c,x-8,b-22,56,2,'#546e7a'); }
  else if(id==='ger'){ R(c,x,b-12,26,12,'#fafafa'); R(c,x+2,b-17,22,5,'#eeeeee'); R(c,x+8,b-21,10,4,'#e0e0e0'); R(c,x+10,b-9,6,9,'#e65100'); R(c,x,b-10,26,1,'#015197'); R(c,x+12,b-24,2,3,'#795548'); }
}
function drawPlaceLayer(camX){
  if(!curPlace||!curPlace.lm||!curPlace.lm.length) return; var lm=curPlace.lm, n=lm.length*2, span=330;
  for(var i=0;i<n;i++){ var x=wrapX(i*span+150-camX*0.5,n*span)-120; if(x>-130&&x<W+10){ var id=lm[i%lm.length], sc={turtle:2,takhi:2,deer:2}[id]||1; if(sc>1){ ctx.save(); ctx.translate(Math.round(x),GROUND); ctx.scale(sc,sc); drawLM(id,0,0); ctx.restore(); } else drawLM(id,x,GROUND); } }
}
/* ===== v3 graphics: 16-bit style layers, outlines, particles ===== */
var talker=null, bossHit=0;
function grad(y0,y1,cols){ var g=ctx.createLinearGradient(0,y0,0,y1); cols.forEach(function(c,i){g.addColorStop(i/(cols.length-1),c);}); ctx.fillStyle=g; ctx.fillRect(0,y0,W,y1-y0); }
function ridge(col,base,amp,per,par,camX,seed){
  ctx.fillStyle=col; ctx.beginPath(); ctx.moveTo(0,H);
  for(var x=0;x<=W+4;x+=4){ var wx=x+camX*par; var y=base-amp*(0.55*Math.sin(wx/per+seed)+0.3*Math.sin(wx/(per*0.37)+seed*2.1)+0.15*Math.sin(wx/(per*0.13)+seed*5)); ctx.lineTo(x,Math.round(y)); }
  ctx.lineTo(W+4,H); ctx.fill();
}
function ridgeY(base,amp,per,par,camX,seed,x){ var wx=x+camX*par; return base-amp*(0.55*Math.sin(wx/per+seed)+0.3*Math.sin(wx/(per*0.37)+seed*2.1)+0.15*Math.sin(wx/(per*0.13)+seed*5)); }
function cloudsL(camX,par,y,col,n,seed){ var r=rng(seed); for(var i=0;i<n;i++){ var bx=r()*520, by=y+r()*22, w=22+r()*26; var x=((bx-camX*par-tick*0.05*(1+par*4))%520+520)%520-60; ctx.fillStyle=col; ctx.fillRect(x,by,w,6); ctx.fillRect(x+4,by-4,w-10,5); ctx.fillRect(x+9,by-7,Math.max(4,w-22),4); ctx.fillStyle='rgba(110,140,190,.22)'; ctx.fillRect(x+2,by+5,w-4,2); } }
var SKY={street:['#2f7fe0','#6fbcff','#bfe6ff','#eef9ff'],coast:['#1b7fd6','#4fb8ff','#b5e6ff','#e6f8ff'],steppe:['#2a78d0','#63b2f2','#bce4ff','#ecf8ff'],gobi:['#d9692f','#f2a04e','#f9cf8c','#fff0cc'],snow:['#6f97c4','#a9c8e6','#dcebf7','#ffffff'],night:['#050824','#10174a','#272a70','#51428a']};
function wrapX(v,m){ return ((v%m)+m)%m; }
function drawBG(theme,camX,storm){
  var i,x,y,r,th=SKY[theme]?theme:'street';
  grad(0,GROUND+2,SKY[th]);
  R(ctx,0,GROUND,W,H-GROUND,th==='coast'?'#0d4f9e':th==='night'?'#05060f':'#1b2230');
  var sx=th==='steppe'||th==='snow'?46:264, sy=th==='gobi'?52:26;
  if(th==='night'){ r=rng(5); for(i=0;i<70;i++){ var px=r()*W, py=r()*95; R(ctx,px,py,1,1,((tick>>4)+i)%9===0?'#ffffff':'#9aa6ff'); } ctx.fillStyle='rgba(255,255,220,.10)'; ctx.beginPath(); ctx.arc(sx,sy,18,0,7); ctx.fill(); ctx.fillStyle='#fffbe0'; ctx.beginPath(); ctx.arc(sx,sy,9,0,7); ctx.fill(); ctx.fillStyle=SKY.night[1]; ctx.beginPath(); ctx.arc(sx+4,sy-2,8,0,7); ctx.fill(); }
  else { ctx.fillStyle='rgba(255,246,170,.22)'; ctx.beginPath(); ctx.arc(sx,sy,16+Math.sin(tick/30)*1.5,0,7); ctx.fill(); ctx.fillStyle='rgba(255,246,170,.35)'; ctx.beginPath(); ctx.arc(sx,sy,12,0,7); ctx.fill(); ctx.fillStyle=th==='gobi'?'#fff3bd':'#fff59d'; ctx.beginPath(); ctx.arc(sx,sy,8,0,7); ctx.fill();
    cloudsL(camX,0.04,14,'rgba(255,255,255,.7)',5,11); cloudsL(camX,0.1,36,'#ffffff',4,23); }
  if(th==='street'||th==='night'){
    var nt=th==='night';
    ridge(nt?'#161d55':'#8fb2d6',112,26,90,0.06,camX,1.3); ridge(nt?'#11163f':'#6f9a86',124,18,60,0.1,camX,4.1);
    for(i=0;i<12;i++){ x=wrapX(i*52-camX*0.2,624)-50; var bh=30+(i*29%26); R(ctx,x,GROUND-bh,40,bh,nt?'#1c2150':'#9fb4c9'); for(y=GROUND-bh+5;y<GROUND-6;y+=8) for(var wx=x+4;wx<x+36;wx+=8) R(ctx,wx,y,4,4,nt?(((i*7+wx+y)%5===0)?'#ffe082':'#2a2f66'):'#7f97b0'); }
    var cols=nt?['#3a3566','#2f3c6b','#4a3559','#33456a','#3d3a70']:['#e9d2a8','#cfdbe6','#f5b9a3','#d9e6c2','#d2c5ec'], roof=nt?'#201c40':'#8d5a44';
    for(i=0;i<9;i++){ x=wrapX(i*68-camX*0.38,612)-66; bh=50+(i*37%34); var c0=cols[i%5]; R(ctx,x,GROUND-bh,48,bh,c0); R(ctx,x+44,GROUND-bh,4,bh,'rgba(0,0,0,.18)'); R(ctx,x-1,GROUND-bh-3,50,4,roof); if(i%3===0){ R(ctx,x+8,GROUND-bh-12,10,9,roof); R(ctx,x+12,GROUND-bh-20,1,8,'#555'); } if(i%3===1){ R(ctx,x+30,GROUND-bh-9,8,6,'#78909c'); }
      for(y=GROUND-bh+7;y<GROUND-14;y+=10) for(wx=x+5;wx<x+42;wx+=10){ var lit=nt&&((i*13+wx*3+y)%4!==0); R(ctx,wx,y,6,6,nt?(lit?(((tick>>5)+wx+y)%37===0?'#fff8c4':'#ffd54f'):'#232a55'):'#5c7ea3'); if(!nt) R(ctx,wx,y,6,2,'#a9c7e6'); }
      R(ctx,x+18,GROUND-12,10,12,nt?'#191b3a':'#6d4c41'); R(ctx,x+4,GROUND-13,12,3,i%2?'#e53935':'#1e88e5'); }
    for(i=0;i<6;i++){ x=wrapX(i*100+40-camX*0.75,600)-40; R(ctx,x,GROUND-36,2,36,'#37474f'); R(ctx,x-4,GROUND-38,10,3,'#455a64'); R(ctx,x-3,GROUND-35,8,2,nt?'#fff59d':'#eceff1'); if(nt){ ctx.fillStyle='rgba(255,236,150,.13)'; ctx.beginPath(); ctx.moveTo(x+1,GROUND-34); ctx.lineTo(x-16,GROUND); ctx.lineTo(x+18,GROUND); ctx.fill(); } }
    for(i=0;i<4;i++){ x=wrapX(i*150+90-camX*0.75,600)-30; R(ctx,x+5,GROUND-12,3,12,'#6d4c41'); ctx.fillStyle=nt?'#1f4d3a':'#43a047'; ctx.beginPath(); ctx.arc(x+6,GROUND-17,8,0,7); ctx.fill(); ctx.fillStyle=nt?'#2b6149':'#66bb6a'; ctx.beginPath(); ctx.arc(x+4,GROUND-19,5,0,7); ctx.fill(); }
  } else if(th==='coast'){
    ridge('#5d8f86',104,16,80,0.05,camX,2.2); for(x=0;x<W;x+=4){ y=ridgeY(104,16,80,0.05,camX,2.2,x); if(y<93) R(ctx,x,y,4,Math.min(5,93-y),'#ffffff'); }
    grad(102,GROUND+2,['#3fa4ee','#1f7fd6','#125fb5']);
    for(i=0;i<5;i++){ y=106+i*9; for(var k=0;k<9;k++){ x=wrapX(k*46+i*17-camX*(0.2+i*0.08)+Math.sin(tick/25+i)*5,414)-40; R(ctx,x,y,12+i*2,1,'rgba(255,255,255,'+(0.35+i*0.1)+')'); } }
    for(i=0;i<3;i++){ x=wrapX(i*190+60-camX*0.3,570)-50; y=100+Math.round(Math.sin(tick/22+i)*1.5); R(ctx,x,y,22,5,'#6d4c41'); R(ctx,x+2,y+5,18,2,'#4e342e'); R(ctx,x+7,y-6,9,6,'#efebe9'); R(ctx,x+7,y-7,9,1,'#c4272f'); R(ctx,x+9,y-4,2,2,'#4fc3f7'); R(ctx,x+13,y-4,2,2,'#4fc3f7'); R(ctx,x+3,y-9,1,9,'#3e2723'); mnFlag(ctx,x+4,y-9,6,4); }
    for(i=0;i<5;i++){ x=wrapX(i*90-camX*0.15-tick*0.25,450)-20; y=40+(i*23%30); var f=(tick>>3)%2; R(ctx,x,y+f,3,1,'#fff'); R(ctx,x+3,y+1-f,1,1,'#fff'); R(ctx,x+4,y+f,3,1,'#fff'); }
    for(i=0;i<6;i++){ x=wrapX(i*115+30-camX*0.6,690)-40; R(ctx,x+6,GROUND-10,3,10,'#5d4037'); for(k=0;k<3;k++){ ctx.fillStyle=k%2?'#2e6b4f':'#2f7d55'; ctx.beginPath(); ctx.moveTo(x+7,GROUND-40+k*9); ctx.lineTo(x+16-k,GROUND-22+k*8); ctx.lineTo(x-2+k,GROUND-22+k*8); ctx.fill(); } }
  } else {
    var gb=th==='gobi', sn=th==='snow';
    ridge(gb?'#d9945a':sn?'#c5d8ea':'#86aeda',100,34,110,0.05,camX,0.7);
    if(!gb){ for(x=0;x<W;x+=4){ y=ridgeY(100,34,110,0.05,camX,0.7,x); if(y<86) R(ctx,x,y,4,Math.min(6,86-y),'#ffffff'); } }
    ridge(gb?'#e6ad68':sn?'#e4eef7':'#6fae4e',122,16,70,0.14,camX,3.0);
    ridge(gb?'#f0c47c':sn?'#f6fafd':'#5a9a3c',136,10,45,0.3,camX,5.5);
    for(i=0;i<5;i++){ x=wrapX(i*130+50-camX*0.3,650)-40; y=Math.round(ridgeY(136,10,45,0.3,camX,5.5,x+10))+1;
      if(gb){ var bobc=(tick>>4)%2; R(ctx,x,y-9,12,6,'#8d5a2b'); R(ctx,x+3,y-12,3,3,'#8d5a2b'); R(ctx,x+7,y-12,3,3,'#8d5a2b'); R(ctx,x+11,y-14,2,7,'#8d5a2b'); R(ctx,x+12,y-15,3,2,'#8d5a2b'); R(ctx,x+1+bobc,y-3,1,4,'#6d4420'); R(ctx,x+9-bobc,y-3,1,4,'#6d4420'); }
      else { R(ctx,x,y-10,20,10,'#fafafa'); R(ctx,x+2,y-14,16,4,'#eeeeee'); R(ctx,x+6,y-17,8,3,'#e0e0e0'); R(ctx,x+8,y-7,4,7,'#e65100'); R(ctx,x,y-8,20,1,'#1565c0'); R(ctx,x+9,y-19,2,2,'#795548'); var sm=(tick>>3)%6; R(ctx,x+9+(sm%2),y-22-sm,2,2,'rgba(255,255,255,.6)'); } }
    for(i=0;i<7;i++){ x=wrapX(i*83+20-camX*0.3,581)-20; y=Math.round(ridgeY(136,10,45,0.3,camX,5.5,x+4));
      if(sn){ R(ctx,x+3,y-4,2,5,'#5d4037'); ctx.fillStyle='#2e6b4f'; ctx.beginPath(); ctx.moveTo(x+4,y-20); ctx.lineTo(x+11,y-4); ctx.lineTo(x-3,y-4); ctx.fill(); ctx.fillStyle='#fff'; ctx.beginPath(); ctx.moveTo(x+4,y-20); ctx.lineTo(x+7,y-13); ctx.lineTo(x+1,y-13); ctx.fill(); }
      else if(gb){ R(ctx,x+3,y-6,2,6,'#7b8f4e'); R(ctx,x,y-8,8,3,'#8fa35c'); }
      else { var gz=(tick>>5)%2; R(ctx,x,y-5,8,4,i%2?'#f5f5f5':'#6d4c41'); R(ctx,x+7,y-6+gz,3,3,i%2?'#f5f5f5':'#6d4c41'); R(ctx,x+1,y-1,1,2,'#333'); R(ctx,x+6,y-1,1,2,'#333'); } }
    if(sn){ r=rng(3); for(i=0;i<70;i++){ var s2=1+(i%2); R(ctx,wrapX(r()*W+tick*0.3*(1+r())-camX*0.2,W),(r()*H+tick*(0.4+r()*0.6))%H,s2,s2,'#fff'); } }
    if(gb){ r=rng(8); for(i=0;i<14;i++){ R(ctx,wrapX(r()*W-tick*(1+r()),W),100+r()*45,5,1,'rgba(255,240,200,.5)'); } }
  }
  drawPlaceLayer(camX);
  if(storm>0){ ctx.fillStyle='rgba('+(L.tint||'176,132,70')+','+(0.1+storm*0.38)+')'; ctx.fillRect(0,0,W,H); r=rng(9); for(i=0;i<Math.floor(30+storm*70);i++){ R(ctx,wrapX(r()*W*2-tick*(2+r()*3),W),r()*H,3+r()*6,1,'rgba(60,45,30,.45)'); } }
}
function drawGround(theme,x,y,w,camX){
  var PAL={street:['#8e8e93','#d1d1d6','#5b4037','#463029'],night:['#4b4d63','#7b7e9c','#2b2333','#1d1824'],coast:['#f4d98f','#fff3c4','#d9b06a','#bf9650'],gobi:['#f0c878','#ffe9b0','#cf9c4e','#b5843c'],steppe:['#55a630','#9be15d','#6d4c41','#573a31'],snow:['#f2f8fd','#ffffff','#8795a3','#6f7c89']};
  var P=PAL[theme]||PAL.street, sx=Math.round(x-camX), i, k;
  R(ctx,sx,y,w,H-y+2,P[2]);
  for(i=0;i<w;i+=8){ k=((x+i)*7)%13; R(ctx,sx+i,y+9+(k%5)*5,3,2,P[3]); if(k%4===0) R(ctx,sx+i+4,y+15+(k%3)*6,2,1,'rgba(255,255,255,.14)'); }
  R(ctx,sx,y,w,5,P[0]); R(ctx,sx,y,w,2,P[1]); R(ctx,sx,y+5,w,1,'rgba(0,0,0,.28)');
  if(theme==='steppe'){ for(i=0;i<w;i+=5){ k=((x+i)*13)%7; R(ctx,sx+i,y-1-(k%3),1,2+(k%3),k%2?'#55a630':'#7bc74a'); if(k===0) R(ctx,sx+i+2,y-3,2,2,(x+i)%3?'#ffeb3b':'#f48fb1'); } }
  if(theme==='street'||theme==='night'){ for(i=0;i<w;i+=16) R(ctx,sx+i,y+2,8,1,theme==='night'?'#9a9cc0':'#f5f5f5'); }
  if(theme==='coast'||theme==='gobi'){ for(i=0;i<w;i+=11){ k=((x+i)*5)%9; if(k<2) R(ctx,sx+i,y+1,2,1,'#fff8e1'); } }
  if(theme==='snow'){ for(i=0;i<w;i+=9){ k=((x+i)*3)%5; R(ctx,sx+i,y-1,4+k,1,'#ffffff'); } }
  R(ctx,sx,y,1,H-y,'rgba(0,0,0,.3)'); R(ctx,sx+w-1,y,1,H-y,'rgba(0,0,0,.3)');
}
var _spr=document.createElement('canvas'); _spr.width=_spr.height=64; var _sxc=_spr.getContext('2d');
var _sil=document.createElement('canvas'); _sil.width=_sil.height=64; var _lxc=_sil.getContext('2d');
function drawChar(c,h,x,y,frame,face,tk){
  _sxc.clearRect(0,0,64,64); drawCharRaw(_sxc,h,32,58,frame,face,tk);
  _lxc.globalCompositeOperation='source-over'; _lxc.clearRect(0,0,64,64); _lxc.drawImage(_spr,0,0); _lxc.globalCompositeOperation='source-in'; _lxc.fillStyle='#1a1026'; _lxc.fillRect(0,0,64,64);
  x=Math.round(x); y=Math.round(y);
  if(frame!==3){ c.fillStyle='rgba(0,0,0,.28)'; c.fillRect(x-7,y-1,14,2); c.fillRect(x-5,y+1,10,1); }
  var by=(frame===0&&(tk>>5)%2)?1:0;
  c.drawImage(_sil,x-33,y-58); c.drawImage(_sil,x-31,y-58); c.drawImage(_sil,x-32,y-59); c.drawImage(_sil,x-32,y-57);
  c.drawImage(_spr,0,0,64,52,x-32,y-58+by,64,52-by); c.drawImage(_spr,0,52,64,12,x-32,y-6,64,12);
}
var Pt={a:[],
  add:function(x,y,n,col,sp,life,g){ for(var i=0;i<n;i++) this.a.push({x:x,y:y,vx:(Math.random()-0.5)*sp,vy:-Math.random()*sp,l:life*(0.6+Math.random()*0.4),c:(col instanceof Array)?col[i%col.length]:col,g:g==null?0.12:g}); if(this.a.length>320) this.a.splice(0,this.a.length-320); },
  step:function(){ for(var i=this.a.length-1;i>=0;i--){ var p=this.a[i]; p.x+=p.vx; p.y+=p.vy; p.vy+=p.g; if(--p.l<=0) this.a.splice(i,1); } },
  draw:function(cam){ for(var i=0;i<this.a.length;i++){ var p=this.a[i], s=p.l>8?2:1; R(ctx,p.x-cam,p.y,s,s,p.c); } } };
function drawBossCloud(){
  var s=stormLevel(); if(s<=0.03) return;
  var cx=W-34+(1-s)*46+(bossHit>0?6:0), cy=66+Math.sin(tick/18)*3, rad=22+s*30, cols=L.tint||'176,132,70', i;
  for(i=0;i<10;i++){ var a=tick/22+i*0.63, rx=cx+Math.cos(a)*rad*0.5, ry=cy+Math.sin(a*1.3)*rad*0.38; ctx.fillStyle='rgba('+cols+','+(0.42+0.06*(i%3))+')'; ctx.beginPath(); ctx.arc(rx,ry,rad*(0.42+0.07*(i%3)),0,7); ctx.fill(); }
  ctx.fillStyle=bossHit>0?'rgba(255,255,255,.75)':'rgba(35,25,30,.6)'; ctx.beginPath(); ctx.arc(cx,cy,rad*0.6,0,7); ctx.fill();
  if(bossHit>0) bossHit--;
  var ex=cx-10, ey=cy-5, bl=(tick%170)<8||bossHit>0;
  R(ctx,ex-4,ey,8,bl?1:6,'#fff'); R(ctx,ex+8,ey,8,bl?1:6,'#fff'); if(!bl){ R(ctx,ex-3,ey+2,3,3,'#c62828'); R(ctx,ex+9,ey+2,3,3,'#c62828'); }
  R(ctx,ex-5,ey-3,9,2,'#111'); R(ctx,ex+8,ey-3,9,2,'#111'); R(ctx,ex-1,ey+11,14,2,'#111'); R(ctx,ex-2,ey+9+(s<0.4?3:0),2,2,'#111'); R(ctx,ex+12,ey+9+(s<0.4?3:0),2,2,'#111');
}
function trans(cb){ var f=$('#fade'); if(!f||FAST){ cb(); return; } f.style.opacity=1; setTimeout(function(){ cb(); setTimeout(function(){ f.style.opacity=0; },80); },270); }

start();
})();
