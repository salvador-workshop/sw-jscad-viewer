import { examples } from './examples.js'
import {
  baseDemos,
  swcadJsProfiles,
  swcadJsComponents,
  swcadJsModels,
  swcadJsUtils,
} from './projects.js'

const menu = /** @type {HTMLElement} */ (document.getElementById('menu'))

export const init = () => {
  const button = /** @type {HTMLElement} */ (document.getElementById('menu-button'))
  const content = /** @type {HTMLElement} */ (document.getElementById('menu-content'))

  const getMenuClick = (name, source) => {
    return async () => {
      console.log(`load project ${name} from ${source}`)
      document.location.hash = '#' + source
    }
  };

  const generateLink = (name, source, parent) => {
    const a = document.createElement('a')
    a.innerText = name
    a.addEventListener('click', getMenuClick(name, source))
    const li = document.createElement('li')
    li.appendChild(a)
    parent.appendChild(li)
  }

  // Menu button
  button.addEventListener('click', () => {
    menu.classList.toggle('open')
  })

  // Close menu when anything else is clicked
  window.addEventListener('click', e => {
    if (!button.contains(e.target) && !content.contains(e.target)) {
      dismiss()
    }
  })
  window.addEventListener('drop', () => dismiss())
  window.addEventListener('dragstart', () => dismiss())
  window.addEventListener('dragover', () => dismiss())

  // Add examples to menu
  const exampleDiv = /** @type {HTMLElement} */ (document.getElementById('examples'))
  examples.forEach(({ name, source }) => {
    const a = document.createElement('a')
    a.innerText = name
    a.addEventListener('click', getMenuClick(name, source))
    const li = document.createElement('li')
    li.appendChild(a)
    exampleDiv.appendChild(li)
  })

  // Add SW projects to menu

  const swBaseDemoDiv = /** @type {HTMLElement} */ (document.getElementById('sw-base-demo'))
  baseDemos.forEach(({ name, source }) => {
    generateLink(name, source, swBaseDemoDiv);
  });

  const swcadJsProfilesDiv = /** @type {HTMLElement} */ (
    document.getElementById('swcad-js-profiles')
  )
  swcadJsProfiles.forEach(({ name, source }) => {
    generateLink(name, source, swcadJsProfilesDiv);
  })

  const swcadJsComponentsDiv = /** @type {HTMLElement} */ (
    document.getElementById('swcad-js-components')
  )
  swcadJsComponents.forEach(({ name, source }) => {
    generateLink(name, source, swcadJsComponentsDiv);
  })

  const swcadJsModelsDiv = /** @type {HTMLElement} */ (
    document.getElementById('swcad-js-models')
  )
  swcadJsModels.forEach(({ name, source }) => {
    generateLink(name, source, swcadJsModelsDiv);
  })

  const swcadJsUtilsDiv = /** @type {HTMLElement} */ (
    document.getElementById('swcad-js-utils')
  )
  swcadJsUtils.forEach(({ name, source }) => {
    generateLink(name, source, swcadJsUtilsDiv);
  })
}

const dismiss = () => {
  menu.classList.remove('open')
}
