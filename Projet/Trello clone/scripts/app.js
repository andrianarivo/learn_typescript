"use strict";
const itemsContainer = document.querySelectorAll('.items-container');
let actualContainer, actualBtn, actualUl, actualForm, actualTextInput, actualValidation;
function deleteBtnListeners(btn) {
    btn.addEventListener('click', handleContainerDeletion);
}
function handleContainerDeletion(e) {
    const btn = e.target;
    const btnsArray = [...document.querySelectorAll('.delete-container-btn')];
    const containers = [...document.querySelectorAll('.items-container')];
    containers[btnsArray.indexOf(btn)].remove();
}
function addItemBtnListeners(btn) {
    btn.addEventListener('click', handleAddItem);
}
function setContainerItem(btn) {
    actualBtn = btn;
    actualContainer = btn.parentElement;
    actualUl = actualContainer.querySelector('ul');
    actualForm = actualContainer.querySelector('form');
    actualTextInput = actualForm.querySelector('input');
    actualValidation = actualForm.querySelector('.validation-msg');
}
function toggleForm(btn, form, action) {
    if (!action) {
        form.style.display = "none";
        btn.style.display = "block";
    }
    else if (action) {
        form.style.display = "block";
        btn.style.display = "none";
    }
}
function handleAddItem(e) {
    const btn = e.target;
    if (actualContainer) {
        toggleForm(actualBtn, actualForm, false);
    }
    setContainerItem(btn);
    toggleForm(actualBtn, actualForm, true);
}
function addContainerListeners(currentContainer) {
    const currentContainerDeletionBtn = currentContainer.querySelector('.delete-container-btn');
    const currentAddItemBtn = currentContainer.querySelector('.add-item-btn');
    deleteBtnListeners(currentContainerDeletionBtn);
    addItemBtnListeners(currentAddItemBtn);
}
itemsContainer.forEach((container) => {
    addContainerListeners(container);
});
