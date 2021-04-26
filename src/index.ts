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
