
function getYear() {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    document.querySelector("#displayYear").innerHTML = currentYear;
}
getYear();

function openNav() {
    document.getElementById("myNav").classList.toggle("menu_width");
    document.querySelector(".custom_menu-btn").classList.toggle("menu_btn-style");
}


$(document).on("click", '[data-toggle="lightbox"]', function (event) {
    event.preventDefault();
    $(this).ekkoLightbox();
});

document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');

    form.addEventListener('submit', function(event) {
      event.preventDefault(); 

    
      const name = document.querySelector('input[placeholder="Your Name"]').value;
      const email = document.querySelector('input[placeholder="Email"]').value;
      const phoneNumber = document.querySelector('input[placeholder="Phone Number"]').value;
      const age = document.querySelector('input[placeholder="Your Age"]').value;

      if (name.trim() === '' || email.trim() === '' || phoneNumber.trim() === '' || age.trim() === '') {
        alert('Please fill in all fields.');
        return;
      }

      

      
      alert('Form submitted successfully!');
      
      form.reset();
    });
  });

  function submitQuiz() {
    const quizForm = document.getElementById('quizForm');
    const resultDiv = document.getElementById('result');

    const answers = {
      q1: quizForm.elements['q1'].value,
      q2: quizForm.elements['q2'].value,
      q3: quizForm.elements['q3'].value
    };

    
    let correctAnswers = 0;
    if (answers.q1 === 'AI (Artificial Intelligence)') {
      correctAnswers++;
    }
    if (answers.q2 === 'Their vulnerabilities and the importance of disease prevention') {
      correctAnswers++;
    }
    if (answers.q3 === 'Infrastructure challenges and fostering innovation and cultural exchange') {
      correctAnswers++;
    }

    resultDiv.innerHTML = `You got ${correctAnswers} out of 3 questions correct!`;
  }

  document.addEventListener('DOMContentLoaded', function() {
    const submitButton = document.getElementById('submitButton');
    const soundAlert = document.getElementById('soundAlert');
  
    
    function submitQuiz() {
      
  
      
      soundAlert.play();
    }
  
    
    submitButton.addEventListener('click', submitQuiz);
  });

  document.addEventListener('DOMContentLoaded', function() {
    const myButton = document.getElementById('myButton');
  
    myButton.addEventListener('click', function() {
      console.log('Button clicked!');
      
    });
  });

  document.addEventListener('DOMContentLoaded', function() {
    const myDiv = document.getElementById('myDiv');
  
    myDiv.addEventListener('mouseover', function() {
      console.log('Mouse is over the div!');
    });
  });