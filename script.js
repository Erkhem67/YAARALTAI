const enterBtn = document.getElementById("enterBtn");

enterBtn.addEventListener("click", showCase1);

function showCase1() {
  document.body.innerHTML = `
    <main class="system-screen">
      <div class="system-box">

        <div class="system-small">CASE FILE #001</div>

        <h1>WHY DID I MAKE THIS?</h1>

        <div class="system-info">
          <p>You might be wondering why I made an entire website instead of just texting you...</p>
          <br>
          <p>Honestly?</p>
          <br>
          <p>I wanted to do something you'll remember.</p>
        </div>

        <button id="nextBtn">NEXT →</button>

      </div>
    </main>
  `;

  document.getElementById("nextBtn").addEventListener("click", showCase2);
}

function showCase2() {
  document.body.innerHTML = `
    <main class="system-screen">
      <div class="system-box">

        <div class="system-small">CASE FILE #002</div>

        <h1>IELTS</h1>

        <div class="system-info">
          <p>I know you're nervous about your IELTS.</p>
          <br>
          <p>But I genuinely believe in you.</p>
          <br>
          <p><strong>Band 8.</strong> I know you can do it.</p>
          <br>
          <p>So don't let the nerves convince you otherwise.</p>
          <br>
          <p>I believe in you.</p>
        </div>

        <button id="nextBtn">NEXT →</button>

      </div>
    </main>
  `;

  document.getElementById("nextBtn").addEventListener("click", showCase3);
}

function showCase3() {
  document.body.innerHTML = `
    <main class="system-screen">
      <div class="system-box">

        <div class="system-small">CASE FILE #003</div>

        <h1>THE SISTER</h1>

        <div class="system-info">
          <p>And then there's the other challenge...</p>
          <br>
          <p>Meeting your sister.</p>
          <br>
          <p>Apparently she said I look like</p>
          <p><strong>"I can take one punch."</strong></p>
          <br>
          <p>...</p>
          <br>
          <p>I can take one punch.</p>
          <p>Probably.</p>
        </div>

        <button id="nextBtn">NEXT →</button>

      </div>
    </main>
  `;

  document.getElementById("nextBtn").addEventListener("click", showRealMessage);
}

function showRealMessage() {
  document.body.innerHTML = `
    <main class="system-screen">
      <div class="system-box">

        <div class="system-small">THE REAL MESSAGE</div>

        <h1>ENOUGH EVIDENCE.</h1>

        <div class="system-info">
          <p>The actual reason I made this...</p>
          <br>
          <p>I really like talking to you.</p>
          <br>
          <p>I like having you in my life.</p>
          <br>
          <p>And I've been thinking about this for a while.</p>
          <br>
          <p>So I wanted to ask you properly.</p>
        </div>

        <button id="nextBtn">CONTINUE →</button>

      </div>
    </main>
  `;

  document.getElementById("nextBtn").addEventListener("click", showQuestion);
}

function showQuestion() {
  document.body.innerHTML = `
    <main class="system-screen">
      <div class="system-box">

        <div class="system-small">FINAL QUESTION</div>

        <h1>WILL YOU BE<br>MY GIRLFRIEND?</h1>

        <div class="system-info">
          <p>This is the part where you decide.</p>
        </div>

        <button id="yesBtn">YES</button>

      </div>
    </main>
  `;

  document.getElementById("yesBtn").addEventListener("click", showSuccess);
}

function showSuccess() {
  document.body.innerHTML = `
    <main class="system-screen">
      <div class="system-box">

        <div class="system-small">MISSION COMPLETE</div>

        <h1>GIRLFRIEND<br>UNLOCKED</h1>

        <div class="system-info">
          <p>Thank you for saying yes.</p>
          <br>
          <p>Үнсье 😘</p>
          <br>
          <p>Үнэхээр их хайртай шүү. Te amo.</p>
        </div>

        <button id="pressEnterBtn">PRESS ENTER</button>

      </div>
    </main>
  `;

  document
    .getElementById("pressEnterBtn")
    .addEventListener("click", showEnding);
}

function showEnding() {
  document.body.innerHTML = `
    <main class="system-screen">
      <div class="system-box">

        <div class="system-small">END OF THE SYSTEM</div>

        <h1>THIS WAS ONLY<br>THE BEGINNING.</h1>

        <div class="system-info">
          <p>❤️</p>
        </div>

      </div>
    </main>
  `;
}