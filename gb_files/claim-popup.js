const closeTarget = 'div.claims.popup-claim'
function hidePopupClaim() {
  document.querySelector('.popup-claim').classList.add('hide')
}

document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('.popup-claim__close').addEventListener('click', () => {
    hidePopupClaim()
  })

  const locationParams = (new URL(document.location)).searchParams
  if (locationParams.get('success_claim') !== null) {
    document.querySelector('.claims').classList.add('popup-claim')
    document.querySelector('.claims').classList.remove('hide')
  }
  const escHandler = e => {
    if (e.keyCode === 27) {
      hidePopupClaim()
    }
  }
  document.addEventListener('keydown', escHandler)
})