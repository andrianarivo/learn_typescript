const itemsContainer = document.querySelectorAll('.items-container') as NodeListOf<HTMLDivElement>

let actualContainer: HTMLDivElement,
    actualBtn: HTMLButtonElement,
    actualUl: HTMLUListElement,
    actualForm: HTMLFormElement,
    actualTextInput: HTMLInputElement,
    actualValidation: HTMLSpanElement

itemsContainer.forEach((container) => {
  addContainerListeners(container)
});

function addContainerListeners(currentContainer: HTMLDivElement) {
  const currentContainerDeletionBtn = currentContainer.querySelector('.delete-container-btn') as HTMLButtonElement
  const currentAddItemBtn = currentContainer.querySelector('.add-item-btn') as HTMLButtonElement
  const currentCloseFormBtn = currentContainer.querySelector('.close-form-btn') as HTMLButtonElement
  const currentForm = currentContainer.querySelector('form') as HTMLFormElement

  deleteBtnListeners(currentContainerDeletionBtn)
  addItemBtnListeners(currentAddItemBtn)
  closingFormBtnListeners(currentCloseFormBtn)
  addFormSubmitListeners(currentForm)
  addDDListeners(currentContainer)
}

function deleteBtnListeners(btn: HTMLButtonElement) {
  btn.addEventListener('click', handleContainerDeletion)
}

function handleContainerDeletion(e: MouseEvent) {
  const btn = e.target as HTMLButtonElement
  const btnsArray = [...document.querySelectorAll('.delete-container-btn')] as HTMLButtonElement[]
  const containers = [...document.querySelectorAll('.items-container')] as HTMLDivElement[]
  containers[btnsArray.indexOf(btn)].remove()
}

function addItemBtnListeners(btn: HTMLButtonElement) {
  btn.addEventListener('click', handleAddItem)
}

function handleAddItem(e: MouseEvent) {
  const btn = e.target as HTMLButtonElement
  if (actualContainer) {
    toggleForm(actualBtn, actualForm, false)
  }
  setContainerItem(btn)
  toggleForm(actualBtn, actualForm, true)
}

function toggleForm(btn: HTMLButtonElement, form: HTMLFormElement, action: boolean) {
  if (!action) {
    form.style.display = "none"
    btn.style.display = "block"
  } else if (action) {
    form.style.display = "block"
    btn.style.display = "none"
  }
}

function setContainerItem(btn: HTMLButtonElement) {
  actualBtn = btn
  actualContainer = btn.parentElement as HTMLDivElement
  actualUl = actualContainer.querySelector('ul') as HTMLUListElement
  actualForm = actualContainer.querySelector('form') as HTMLFormElement
  actualTextInput = actualForm.querySelector('input') as HTMLInputElement
  actualValidation = actualForm.querySelector('.validation-msg') as HTMLSpanElement
}

function closingFormBtnListeners(btn: HTMLButtonElement) {
  btn.addEventListener('click', () => {
    toggleForm(actualBtn, actualForm, false)
  })
}

function addFormSubmitListeners(form: HTMLFormElement) {
  form.addEventListener('submit', createNewItem)
}

function createNewItem(e: Event) {
  e.preventDefault()
  // Validation
  if (actualTextInput.value.length === 0) {
    actualValidation.textContent = "Must be at least 1 character long"
    return
  } else {
    actualValidation.textContent = ""

  }
  // Création Item
  const itemContent = actualTextInput.value
  const li = `
    <li class="item" draggable="true">
      <p>${itemContent}</p>
      <button>X</button>
    </li>
  `
  actualUl.insertAdjacentHTML('beforeend', li)
  actualTextInput.value = ""

  const item = actualUl.lastElementChild as HTMLLIElement
  const liBtn = item.querySelector('button') as HTMLButtonElement
  handleItemDeletion(liBtn)
  addDDListeners(item)
}

function handleItemDeletion(btn: HTMLButtonElement) {
  btn.addEventListener('click', () => {
    btn.parentElement?.remove()
  })
}

function addDDListeners(container: HTMLElement) {
  container.addEventListener('dragstart', handleDragStart)
  container.addEventListener('dragover', handleDragOver)
  container.addEventListener('drop', handleDrop)
  container.addEventListener('dragend', handleDragEnd)
}

// Drag And Drop
let dragSrcEl: HTMLElement

function handleDragStart(this: HTMLElement, e: DragEvent) {
  e.stopPropagation()

  if (actualContainer) {
    toggleForm(actualBtn, actualForm, false)
  }

  dragSrcEl = this
  e.dataTransfer?.setData('text/html', this.innerHTML)
}

function handleDragOver(e: DragEvent) {
  e.preventDefault()
}

function handleDrop(this: HTMLElement, e: DragEvent) {
  e.stopPropagation()
  const receptionEl = this

  if (dragSrcEl.nodeName === "LI" && receptionEl.classList.contains("items-container")) {
    (receptionEl.querySelector('ul') as HTMLUListElement).appendChild(dragSrcEl)
    addDDListeners(dragSrcEl)
    handleItemDeletion(dragSrcEl.querySelector('button') as HTMLButtonElement)
  }

  if (dragSrcEl !== this && this.classList[0] === dragSrcEl.classList[0]) {
    dragSrcEl.innerHTML = this.innerHTML
    this.innerHTML = e.dataTransfer?.getData('text/html') as string
    restoreListenersAfterDrag(this)
  }
}

function restoreListenersAfterDrag(element: HTMLElement) {
  if (element.classList.contains('items-container')) {
    addContainerListeners(element as HTMLDivElement)
    element.querySelectorAll('li').forEach((li: HTMLLIElement) => {
      handleItemDeletion(li.querySelector('button') as HTMLButtonElement)
      addDDListeners(li)
    })
  } else {
    addDDListeners(element)
    handleItemDeletion(element.querySelector('button') as HTMLButtonElement)
  }
}

function handleDragEnd(this: HTMLElement, e: DragEvent) {
  e.stopPropagation()
  restoreListenersAfterDrag(this)
}

// Add New Container
const addContainerBtn = document.querySelector('.add-container-btn') as HTMLButtonElement
const addContainerForm = document.querySelector('.add-new-container form') as HTMLFormElement
const addContainerFormInput = document.querySelector('.add-new-container form input') as HTMLInputElement
const validationNewContainer = document.querySelector('.add-new-container form .validation-msg') as HTMLSpanElement
const addContainerCloseBtn = document.querySelector('.close-add-list') as HTMLButtonElement
const addNewContainer = document.querySelector('.add-new-container') as HTMLDivElement
const containersList = document.querySelector('.main-content') as HTMLDivElement

addContainerBtn.addEventListener('click', () => {
  toggleForm(addContainerBtn, addContainerForm, true)
})

addContainerCloseBtn.addEventListener('click', () => {
  toggleForm(addContainerBtn, addContainerForm, false)
})

addContainerForm.addEventListener('submit', createNewContainer)

function createNewContainer(e: Event) {
  e.preventDefault()
  if (addContainerFormInput.value.length === 0) {
    validationNewContainer.textContent = "Must be at least 1 character long"
    return
  } else {
    validationNewContainer.textContent = ""
  }

  const itemsContainer = document.querySelector('.items-container') as HTMLDivElement
  const newContainer = itemsContainer.cloneNode() as HTMLDivElement
  newContainer.innerHTML = `
      <div class="top-container">
          <h2>${addContainerFormInput.value}</h2>
          <button class="delete-container-btn">X</button>
      </div>
      <ul></ul>
      <button class="add-item-btn">Add an item</button>
      <form autocomplete="off">
          <div class="top-form-container">
              <label for="item">Add a new item</label>
              <button type="button" class="close-form-btn">X</button>
          </div>
          <input type="text" id="item"/>
          <span class="validation-msg"></span>
          <button type="submit">Submit</button>
      </form>
  `
  containersList.insertBefore(newContainer, addNewContainer)
  addContainerFormInput.value = ""
  addContainerListeners(newContainer)
}
