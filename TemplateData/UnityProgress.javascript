function UnityProgress(game, progress) {
  if (!game.Module)
    return;
  if (!game.logo) {
    game.logo = document.createElement("div");
    game.logo.className = "logo " + game.Module.splashScreenStyle;
    game.container.appendChild(game.logo);
  }
  if (!game.progress) {    
    game.progress = document.createElement("div");
    game.progress.className = "progress " + game.Module.splashScreenStyle;
    game.progress.empty = document.createElement("div");
    game.progress.empty.className = "empty";
    game.progress.appendChild(game.progress.empty);
    game.progress.full = document.createElement("div");
    game.progress.full.className = "full";
    game.progress.appendChild(game.progress.full);
    game.container.appendChild(game.progress);
  }
  game.progress.full.style.width = (100 * progress) + "%";
  game.progress.empty.style.width = (100 * (1 - progress)) + "%";
  if (progress == 1)
    game.logo.style.display = game.progress.style.display = "none";
}