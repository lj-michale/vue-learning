(function (doc) {
  const docEl = doc.documentElement

  doc.addEventListener('DOMContentLoaded', () => {
    const clientWidth = docEl.clientWidth  //获取屏幕宽度

    docEl.style.fontSize = 20 * (clientWidth / 320) + 'px'  //让1rem=20px
  })
})(document)
