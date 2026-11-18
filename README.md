# Malayalam Anywhere (Windows tray app, v0.1)

Type Malayalam in **any** Windows program (Word, Notepad, Photoshop, browsers…). A global key (default **Scroll Lock**)
switches Malayalam typing on/off; **Pause/Break** cycles the layout. Both keys can be changed from the tray menu.

* Layouts: Inscript, GIST, Typewriter, Panchari, Varityper (phonetic) – same engine as the Malayalam Studio web app.
* Font type (output):
  * **Unicode** – for Noto Sans Malayalam, Anjali, Manjari … Chillus are typed as ONE character (ൻ ർ ൽ ൾ ൺ),
    so Inscript `V` `D` `]` gives ൻ, not `ന്‍` / "ന്ർ".
  * **ML-TT** – for ML-TT Ambili, ML-TT Revathi … (legacy codes, like ISM). Install the font on the PC and choose it in the program.
  * **MLW-TT** – for the MLW-TT series.

## Run / build (on Windows, Node.js 20+ installed)
    npm install
    npm start          # runs from source, icon appears in the tray
    npm run dist       # makes dist\Malayalam Anywhere.exe (portable)
Or push this folder to GitHub: the included workflow builds the .exe for you (Actions → build-windows-exe → artifact).
`npm test` checks the typing engine (works on any OS).

## Known limits
* Not yet tested on a real Windows PC – the typing engine is tested, the Windows hook layer (`app/winapi.js`) needs your first run.
* Reordering of a word (e.g. Typewriter െ+ക → കെ) is done by Backspace + retype; programs that delete a whole letter-cluster
  on Backspace may behave differently.
* Programs running as Administrator ignore the hook unless this app is also run as Administrator.
* Manglish (type English letters → Malayalam popup) is not included yet.
* Games / password boxes that read raw keys won't receive Malayalam – switch off with the on/off key.
