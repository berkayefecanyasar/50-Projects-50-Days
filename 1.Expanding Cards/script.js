/* First, when the relevant tab is clicked, the page expands.
 * The active title already performs tasks such as changing the flex value and setting the opacity of the relevant page.
 * The goal here is to add or remove the active class to the clicked area.
 */

const panels = document.querySelectorAll('.panel')

// Adds the active class to the clicked tab's class list
panels.forEach((panel) => {
    panel.addEventListener('click', () => {
        removeActiveClasses()
        panel.classList.add('active')
    })
})

// Removes the active class from all class names before adding the class name to the relevant active page
function removeActiveClasses() {
    panels.forEach((panel) => {
        panel.classList.remove('active')
    })
}
