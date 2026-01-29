function initAboutMeView() {
  console.log("Showing About Me section");
}
function initStudiesView() {
  console.log("Showing Studies section");
}
function initLangSkillsView() {
  console.log("Showing Languages and Skills section");
}
function initWorkExpView() {
  console.log("Showing Work Experience section");
}
function initProjectsView() {
  console.log("Showing Personal Projects section");
}
function initContactMeView() {
  console.log("Showing Contact section");
}
document.getElementById('btn-aboutMe').addEventListener('click', initAboutMeView);
document.getElementById('btn-studies').addEventListener('click', initStudiesView);
document.getElementById('btn-langSkills').addEventListener('click', initLangSkillsView);
document.getElementById('btn-workExp').addEventListener('click', initWorkExpView);
document.getElementById('btn-projects').addEventListener('click', initProjectsView);
document.getElementById('btn-contactMe').addEventListener('click', initContactMeView);
