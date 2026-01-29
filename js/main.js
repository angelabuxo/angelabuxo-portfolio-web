function showView(viewId) {
  const views = document.querySelectorAll('.view');
  views.forEach(view => {
    view.classList.remove('is-active');
  });
  const target = document.getElementById(viewId);
  if (target) {
    target.classList.add('is-active');
  }
}

document.getElementById('btn-aboutMe').addEventListener('click', () => showView('ViewAboutMe'));
document.getElementById('btn-studies').addEventListener('click', () => showView('ViewStudies'));
document.getElementById('btn-langSkills').addEventListener('click', () => showView('ViewLangSkills'));
document.getElementById('btn-workExp').addEventListener('click', () => showView('ViewWorkExp'));
document.getElementById('btn-projects').addEventListener('click', () => showView('ViewProjects'));
document.getElementById('btn-contactMe').addEventListener('click', () => showView('ViewContactMe'));
const backButtons = document.querySelectorAll('.back-button');
backButtons.forEach(button => {
  button.addEventListener('click', () => showView('ViewMainMenu'));
});

showView('ViewMainMenu');