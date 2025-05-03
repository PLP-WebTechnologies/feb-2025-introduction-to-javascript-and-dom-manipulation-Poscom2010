document.addEventListener('DOMContentLoaded', () => {
    // Creating variables and selecting objects from the document

    const headingText = document.getElementById('headingText');
    const textingArea = document.getElementById('textingArea');
    const clickMeBtn = document.getElementById('clickMe');
    const clearBtn = document.getElementById('clearBtn');

    //Creating the interactivity
    //Changing the color of the header

    headingText.style.color = 'blue';

    //Dynamically adjust the texting area to fit all text
    function adjustHeight () {
        textingArea.style.height = 'auto';
        textingArea.style.height = textingArea.scrollHeight + 'px'
    }

    clickMeBtn.addEventListener('click',() => {
        textingArea.value = 'I know you didnt bath today😀';
        adjustHeight();

    });

    clearBtn.addEventListener('click',() => {
        textingArea.value = 'Iam sorry was joke 😌';
        adjustHeight();

    });

    headingText.addEventListener('mouseenter',() => {
        headingText.style.color = 'red';
    });

    headingText.addEventListener('mouseleave',() => {
        headingText.style.color = 'blue';
    });

    document.body.style.backgroundColor = 'lightblue';
});