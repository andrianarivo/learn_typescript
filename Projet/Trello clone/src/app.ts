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
}

function handleItemDeletion(btn: HTMLButtonElement) {
  btn.addEventListener('click', () => {
    btn.parentElement?.remove()
  })
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
