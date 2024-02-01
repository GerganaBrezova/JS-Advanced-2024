function lockedProfile() {
    Array.from(document.querySelectorAll('.profile button'))
         .forEach(b => b.addEventListener('click', onClick));
 
    function onClick(event) {
     let profile = event.target.parentNode;
     let hiddenInfo = profile.querySelector('div');
     
     let isLocked = profile.querySelector('input[value="lock"]').checked;
 
     if (!isLocked) {
         if (event.target.textContent === 'Show more') {
             event.target.textContent = 'Hide it';
             hiddenInfo.style.display = 'block';
         } else if (event.target.textContent === 'Hide it') {
             event.target.textContent = 'Show more';
             hiddenInfo.style.display = 'none';
         }
     }
    }
 }