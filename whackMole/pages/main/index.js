let start = (e) => {
  let gameMode = e.target.className
  window.location.href = `../game/index.html?gameMode=${gameMode}`
  // pm.navigateTo({ url: 'pages/game/game', value: { gameMode: id } })
}