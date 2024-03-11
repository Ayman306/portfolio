document.getElementById('downloadCv').addEventListener('click', function() {
    window.open('./assets/Aymanuddin.pdf', '_blank');
  });

  function sendEmail() {
  var recipient = 'aymanuddin.se@gmail.com';
  var subject = 'Hey Ayman, lets collaborate!';
  var mailtoLink = 'mailto:' + recipient + '?subject=' + encodeURIComponent(subject);
  window.location.href = mailtoLink;
}

function navigateProject(name) {
    switch (name) {
        case 'pangaeax':
            window.open('https://www.pangaeax.com/', '_blank');
            break;
        case 'samhita':
            window.open('https://samhita.org/', '_blank');
            break;
        case 'mmj':
            window.open('https://store.mangaloremerijaan.com/', '_blank');  
            break;
        case 'pace':
            window.open('https://pacewisdom.com/', '_blank');
            break;
        default:
            break;
    }  
}

// Get the current date
const currentDate = new Date();

// Set the start date to June 2022
const startDate = new Date('June 1, 2022');

// Calculate the difference in months
const diffMonths = (currentDate.getFullYear() - startDate.getFullYear()) * 12 + (currentDate.getMonth() - startDate.getMonth());

// Calculate the number of years
const years = Math.floor(diffMonths / 12);

// Calculate the remaining months
const months = diffMonths % 12;

// Display the result in the <p> tag with id 'result'
document.getElementById('totalExp').textContent = `${years} year, ${months} month`;

document.addEventListener("DOMContentLoaded", function () {
    // Create cursor element
    const cursor = document.createElement("div");
    cursor.classList.add("cursor-gradient");
    document.body.appendChild(cursor);

    // Update cursor position
    document.addEventListener("mousemove", function (e) {
        cursor.style.left = e.clientX + "px";
        cursor.style.top = e.clientY + "px";
    });

    // Hide default cursor
    document.body.style.cursor = "none";
});

