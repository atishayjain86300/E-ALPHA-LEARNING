// Simple alert when form is submitted
document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Your message has been sent! We will get back to you soon.');
  });

  const webContentButtons = document.querySelectorAll('.webBtn');
  const webContentSection = document.getElementById('webContent-section');


  webContentButtons.forEach(button =>{
    button.addEventListener('click', ()=>{
      appContentSection.classList.add('hidden');
      langContentSection.classList.add('hidden');


      webContentSection.classList.remove('hidden');
      

      webContentSection.scrollIntoView({behavior : 'smooth'});
    });
  });


  const appContentButtons = document.querySelectorAll('.appBtn');
  const appContentSection = document.getElementById('appContent-section');


  appContentButtons.forEach(button =>{
    button.addEventListener('click', ()=>{
      webContentSection.classList.add('hidden');
      // langContentSection.classList.add('hidden');
      // webQuizSection.classList.add('hidden');

      appContentSection.classList.remove('hidden');

      appContentSection.scrollIntoView({behavior : 'smooth'});
    });
  });

  const langContentButtons = document.querySelectorAll('.langBtn');
  const langContentSection = document.getElementById('langContent-section');


  langContentButtons.forEach(button =>{
    button.addEventListener('click', ()=>{
      webContentSection.classList.add('hidden');
      appContentSection.classList.add('hidden');

      langContentSection.classList.remove('hidden');

      langContentSection.scrollIntoView({behavior : 'smooth'});
    });
  });


  const webQuizButtons = document.querySelectorAll('.webQuizBtn');
  const webQuizSection = document.getElementById('webQuiz-section');


  webQuizButtons.forEach(button =>{
    button.addEventListener('click', ()=>{

      appQuizSection.classList.add('hidden');
      cQuizSection.classList.add('hidden');
      ccQuizSection.classList.add('hidden');
      javaQuizSection.classList.add('hidden');


      webQuizSection.classList.remove('hidden');
      webQuizSection.scrollIntoView({behavior : 'smooth'});
    });
  });

  const appQuizButtons = document.querySelectorAll('.appQuizBtn');
  const appQuizSection = document.getElementById('appQuiz-section');

  appQuizButtons.forEach(button =>{
    button.addEventListener('click', ()=>{
      webQuizSection.classList.add('hidden');
      cQuizSection.classList.add('hidden');
      ccQuizSection.classList.add('hidden');
      javaQuizSection.classList.add('hidden');


      appQuizSection.classList.remove('hidden');
      appQuizSection.scrollIntoView({behavior : 'smooth'});
    });
  });

  const cQuizButtons = document.querySelectorAll('.cQuizBtn');
  const cQuizSection = document.getElementById('cQuiz-section');


  cQuizButtons.forEach(button =>{
    button.addEventListener('click', ()=>{
  webQuizSection.classList.add('hidden');
  appQuizSection.classList.add('hidden');
  ccQuizSection.classList.add('hidden');
  javaQuizSection.classList.add('hidden');

      cQuizSection.classList.remove('hidden');
      cQuizSection.scrollIntoView({behavior : 'smooth'});
    });
  });

  const ccQuizButtons = document.querySelectorAll('.ccQuizBtn');
  const ccQuizSection = document.getElementById('ccQuiz-section');


  ccQuizButtons.forEach(button =>{
    button.addEventListener('click', ()=>{
  webQuizSection.classList.add('hidden');
  appQuizSection.classList.add('hidden');
  cQuizSection.classList.add('hidden');
  javaQuizSection.classList.add('hidden');

      ccQuizSection.classList.remove('hidden');
      ccQuizSection.scrollIntoView({behavior : 'smooth'});
    });
  });

  const javaQuizButtons = document.querySelectorAll('.javaQuizBtn');
  const javaQuizSection = document.getElementById('javaQuiz-section');


  javaQuizButtons.forEach(button =>{
    button.addEventListener('click', ()=>{
  webQuizSection.classList.add('hidden');
  appQuizSection.classList.add('hidden');
  cQuizSection.classList.add('hidden');
  ccQuizSection.classList.add('hidden');

      javaQuizSection.classList.remove('hidden');
      javaQuizSection.scrollIntoView({behavior : 'smooth'});
    });
  });



  const certificateButtons = document.querySelectorAll('.certificateBtn');
  const certificateSection = document.getElementById('certifiactes-section');


  certificateButtons.forEach(button =>{
    button.addEventListener('click', (certificateButtons)=>{
      // appContentSection.classList.add('hidden');
      // langContentSection.classList.add('hidden');
      // webContentSection.classList.add('hidden');


      certificateSection.classList.remove('hidden');
      

      certificateSection.scrollIntoView({behavior : 'smooth'});
    });
  });



  function calculateScore() {
    const totalQuestions = 10;
    let score = 0;

    // Store correct answers
    const answers = ['1', '1', '1', '1', '1', '1', '1', '1', '1', '1']; // All correct answers as '1'

    // Loop through each question and get user selection
    for (let i = 1; i <= totalQuestions; i++) {
        const userAnswer = document.querySelector(`input[name="q${i}"]:checked`);
        if (userAnswer && userAnswer.value === answers[i - 1]) {
            score++;
        }
    }

    // Calculate percentage score
    const percentage = (score / totalQuestions) * 100;

    // Display result
    const resultElement = document.getElementById('result');
    resultElement.textContent = `Your Score: ${percentage}%`;

    // Activate certificate button if score is greater than 75%
    const certificateButton = document.getElementById('certificate-button');
    if (percentage > 75) {
        certificateButton.disabled = false;
        certificateButton.classList.add('active');
    } else {
        certificateButton.disabled = true;
        certificateButton.classList.remove('active');
        alert(`Sorry! Your Score Is Not Greater Than 75`);
        
    }
}

function showCertificate() {
    alert('Congratulations! You Can Download your certificate.');
}