// Shortcuts

export function $(selector: string): NodeList {
  return document.querySelectorAll(selector)
}

export function HideElement(selector: string): boolean {
  const element = <HTMLElement>document.querySelector(selector)
  if (element) {
    element.style.display = 'none'
    return true
  } else {
    return false
  }
}

export function showElement(selector: string): boolean {
  const element = <HTMLElement>document.querySelector(selector)
  if (element) {
    element.style.display = ''
    return true
  } else {
    return false
  }
}

// Functionalities

export function whenElementIsLoaded(selector: string, callback: () => void) {
  const recursive = setInterval(function () {
    if (document.querySelector(selector) != null) {
      callback()
      clearInterval(recursive)
    }
  }, 100)
}

export function changeposition(
  selectorElementToMove: string,
  selectorNextTo: string,
  first: boolean
): boolean {
  const elementToMove = document.querySelector(selectorElementToMove)
  const elementNexTo = document.querySelector(selectorNextTo)
  if (!elementToMove || !elementNexTo) return false
  if (first) {
    elementNexTo?.prepend(elementToMove)
    return true
  } else {
    elementNexTo?.append(elementToMove)
    return true
  }
}

// Utilities

export function getLanguage() {
  return document.documentElement.lang
}

export function detectDeviceType() {
  if (
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    )
  ) {
    return 'Mobile'
  } else return 'Desktop'
}

export function getCurrentUrl() {
  return window.location.href
}

export function getCurrentPath() {
  return window.location.pathname
}

export function getURLParameters(url = window.location.href) {
  return (url.match(/([^?=&]+)(=([^&]*))/g) || []).map((e) => {
    return { [e.split('=')[0]]: e.split('=')[1] }
  })
}
