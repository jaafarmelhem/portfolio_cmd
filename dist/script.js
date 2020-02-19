const BLACKLISTED_KEY_CODES = [38];
const COMMANDS = {
  help:
    'Supported commands: <span class="code">about</span>, <span class="code">experience</span>, <span class="code">education</span>, <span class="code">awards</span>, <span class="code">skills</span>, <span class="code">contact</span>',
  about:
    "Hello 👋<br>I'm Jaafar Melhem. I’m a 22 years old full stack developer currently living in Lebanon. I love coding and writing stuff for humans. I have a burning passion to help others with the code that I create. I enjoy the limitless potential of the impact that I can have with what I build. It is what pushes me every day to become a better developer. Outside of coding, I am an outdated things fan, and you can find me reading books!",
  skills:
    '<span class="code">Languages:</span> C#, Java, C, Python, HTML, CSS, JavaScript<br><span class="code">Technologies:</span> Git, SQL<br><span class="code">Frameworks:</span> React.js, Vue.js, Django',
  education:
    "Al Afak-Institute, Nabatieh 2015-2018 <br/> License Technique (LT) - Management Information System (MIS) major <br/> Grade achieved:  15.6/20",
  resume: 
   "<a href='./resume.pdf' class='success link'>resume.pdf</a>",
  experience: 
    "● Back End Developer in Al Majmoua (The Lebanese Association for Development) Abdel Kader Street, Beirut, Lebanon | October 2018 – Present : Worked as a full-time Software Developer (Back End) and handling several real-world .Net applications in the big micro financial institution in Lebanon, I’ve gained a profound experience which made me gain many communication skills, teamwork, time management, critical thinking and able to handle-workload and many additional responsibilities effectively. Contributing and integrating Microfinance Institutions applications. <br/> ● Teacher in Al Afak-institute Nabatieh | 2017 – 2018 : Teaching Microsoft Office (Word, Access, Excel, PowerPoint) for CAP1 and 2, BT1 and 2, TS1 in the accounting and IT majors.",
  contact:
    "You can contact me on any of following links:<br><a href='https://www.facebook.com/jatin.rao.51/' class='success link'>Facebook</a> ,<a href='https://www.instagram.com/jatin.codes/' class='success link'>Instagram</a>, <a href='https://www.twitter.com/jatinn_r/' class='success link'>Twitter</a>",
  awards:
    "♦Third in Lebanon | 2017 - 2018 <br/> LT(License Technique), in al Afak-institute  Nabatieh. <br/> ♦Third in Lebanon | 2016 - 2017 <br/> TS(Senior Technician), in al Afak-institute  Nabatieh."
};
let userInput, terminalOutput;

const app = () => {
  userInput = document.getElementById("userInput");
  terminalOutput = document.getElementById("terminalOutput");
  document.getElementById("dummyKeyboard").focus();
  console.log("Application loaded");
};

const execute = function executeCommand(input) {
  let output;
  input = input.toLowerCase();
  if (input.length === 0) {
    return;
  }
  output = `<div class="terminal-line"><span class="success">➜</span> <span class="directory">~</span> ${input}</div>`;
  if (!COMMANDS.hasOwnProperty(input)) {
    output += `<div class="terminal-line">no such command: ${input}</div>`;
    console.log("Oops! no such command");
  } else {
    output += COMMANDS[input];
  }

  terminalOutput.innerHTML = `${
    terminalOutput.innerHTML
  }<div class="terminal-line">${output}</div>`;
  terminalOutput.scrollTop = terminalOutput.scrollHeight;
};

const key = function keyEvent(e) {
  const input = userInput.innerHTML;

  if (BLACKLISTED_KEY_CODES.includes(e.keyCode)) {
    return;
  }

  if (e.key === "Enter") {
    execute(input);
    userInput.innerHTML = "";
    return;
  }

  userInput.innerHTML = input + e.key;
};

const backspace = function backSpaceKeyEvent(e) {
  if (e.keyCode !== 8 && e.keyCode !== 46) {
    return;
  }
  userInput.innerHTML = userInput.innerHTML.slice(
    0,
    userInput.innerHTML.length - 1
  );
};

document.addEventListener("keydown", backspace);
document.addEventListener("keypress", key);
document.addEventListener("DOMContentLoaded", app);