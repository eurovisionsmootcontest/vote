// Participants
// const participants = [
//     { name: '01 | United Kingdom', song: 'Harry - Run To The Hills', image: 'imgs/uk.png' },
//     { name: '02 | France', song: 'Remskey - BLECHE', image: 'imgs/fr.png' },
//     { name: '03 | Luxembourg', song: 'Karla - Set Me Free', image: 'imgs/lu.png' },
//     { name: '04 | Ireland', song: 'Lizzie Lasmoothoise - Ils fumaient', image: 'imgs/ie.png' },
//     { name: '05 | United States', song: 'soso.252 - After Glow', image: 'imgs/us.png' },
//     { name: '06 | Netherlands', song: 'Amiral - Pure', image: 'imgs/nl.png' },
//     { name: '07 | Poland', song: 'Wilk - Stay In Your Cage', image: 'imgs/pl.png' },
//     { name: '08 | Canada', song: 'Noah - Kona', image: 'imgs/ca.png' },
//     { name: '09 | Belgium', song: 'Aziourty - Rollercoaster', image: 'imgs/be.png' },
//     { name: '10 | Norway', song: 'DjRedstone - Silence', image: 'imgs/no.png' },
//     { name: '11 | Germany', song: 'Waydrix - In Truth Divided', image: 'imgs/de.png' },
//     { name: '12 | Italy', song: 'BlueCooKies6014 - Pompeii', image: 'imgs/it.png' }
//   ];

  // const participants = [
  //   { name: '01 | United Kingdom', song: 'Harry - Run To The Hills', image: 'imgs/UnitedKingdom.png' },
  //   { name: '02 | France', song: 'Remskey - BLECHE', image: 'imgs/France.png' },
  //   { name: '03 | Luxembourg', song: 'Karla - Set Me Free', image: 'imgs/Luxembourg.png' },
  //   { name: '04 | Ireland', song: 'Lizzie Lasmoothoise - Ils fumaient', image: 'imgs/Ireland.png' },
  //   { name: '05 | United States', song: 'soso.252 - After Glow', image: 'imgs/UnitedStates.png' },
  //   { name: '06 | Netherlands', song: 'Amiral - Pure', image: 'imgs/Netherlands.png' },
  //   { name: '07 | Poland', song: 'Wilk - Stay In Your Cage', image: 'imgs/Poland.png' },
  //   { name: '08 | Canada', song: 'Noah - Kona', image: 'imgs/Canada.png' },
  //   { name: '09 | Belgium', song: 'Aziourty - Rollercoaster', image: 'imgs/Belgium.png' },
  //   { name: '10 | Norway', song: 'DjRedstone - Silence', image: 'imgs/Norway.png' },
  //   { name: '11 | Germany', song: 'Waydrix - In Truth Divided', image: 'imgs/Germany.png' },
  //   { name: '12 | Italy', song: 'BlueCooKies6014 - Pompeii', image: 'imgs/Italy.png' }
  // ];

  const participants = [
    { name: '01 | United Kingdom', song: 'Harry - Run To The Hills', image: 'imgs/AnnounceUK.png' },
    { name: '02 | France', song: 'Remskey - BLECHE', image: 'imgs/AnnounceFR.png' },
    { name: '03 | Luxembourg', song: 'Karla - Set Me Free', image: 'imgs/AnnounceLU.png' },
    { name: '04 | Ireland', song: 'Lizzie Lasmoothoise - Ils fumaient', image: 'imgs/AnnounceIE.png' },
    { name: '05 | United States', song: 'soso.252 - After Glow', image: 'imgs/AnnounceUS.png' },
    { name: '06 | Netherlands', song: 'Amiral - Pure', image: 'imgs/AnnounceNL.png' },
    { name: '07 | Poland', song: 'Wilk - Stay In Your Cage', image: 'imgs/AnnouncePL.png' },
    { name: '08 | Canada', song: 'Noah - Kona', image: 'imgs/AnnounceCA.png' },
    { name: '09 | Belgium', song: 'Aziourty - Rollercoaster', image: 'imgs/AnnounceBE.png' },
    { name: '10 | Norway', song: 'DjRedstone - Silence', image: 'imgs/AnnounceNO.png' },
    { name: '11 | Germany', song: 'Waydrix - In Truth Divided', image: 'imgs/AnnounceDE.png' },
    { name: '12 | Italy', song: 'BlueCooKies6014 - Pompeii', image: 'imgs/AnnounceIT.png' }
  ];
  
  // Grille
  const participantsGrid = document.getElementById('participantsGrid');
  
  participants.forEach((participant, index) => {
    const participantBox = document.createElement('div');
    participantBox.classList.add('participant-box');
  
    const participantImage = document.createElement('img');
    participantImage.src = participant.image;
    participantBox.appendChild(participantImage);
  
    const participantDetails = document.createElement('div');
    participantDetails.classList.add('participant-details');
    participantDetails.innerHTML = `
      <p>${participant.name}</p>
      <p>${participant.song}</p>
    `;
    participantBox.appendChild(participantDetails);
  
    const voteButtons = document.createElement('div');
    voteButtons.classList.add('vote-buttons');
  
    const voteCount = document.createElement('span');
    voteCount.classList.add('vote-count');
    voteCount.innerHTML = '<span class="number">0</span> <span class="text">VOTES</span>';
    voteButtons.appendChild(voteCount);
  
    const upVoteButton = document.createElement('button');
    upVoteButton.innerText = '↑';
    upVoteButton.classList.add('vote-button');
    upVoteButton.addEventListener('click', () => increaseVote(index, voteCount));
    voteButtons.appendChild(upVoteButton);
  
    const downVoteButton = document.createElement('button');
    downVoteButton.innerText = '↓';
    downVoteButton.classList.add('vote-button');
    downVoteButton.addEventListener('click', () => decreaseVote(index, voteCount));
    voteButtons.appendChild(downVoteButton);
  
    participantBox.appendChild(voteButtons);
  
    participantsGrid.appendChild(participantBox);
  });
  
  let totalVotes = 0;
  
  // Plus 1 vote
  function increaseVote(index, voteCount) {
    const currentVotes = parseInt(voteCount.querySelector('.number').innerText);
    if (totalVotes < 12) {
      totalVotes++;
      voteCount.querySelector('.number').innerText = currentVotes + 1;
      updateTotalVotes();
      checkVoteCountForButton();
    }
    if (totalVotes === 12) {
      disableUpVoteButtons();
      checkVoteCountForButton();
    }
  }
  
  // Moins 1 vote
  function decreaseVote(index, voteCount) {
    const currentVotes = parseInt(voteCount.querySelector('.number').innerText);
    if (currentVotes > 0) {
      totalVotes--;
      voteCount.querySelector('.number').innerText = currentVotes - 1;
      updateTotalVotes();
      checkVoteCountForButton();
    }
    if (totalVotes < 12) {
      enableUpVoteButtons();
      checkVoteCountForButton();
    }
  }
  
  // Update le total de votes
  function updateTotalVotes() {
    const totalVotesSpan = document.getElementById('totalVotesSpan');
    totalVotesSpan.innerText = totalVotes;
  }

  // Update le bouton Vote!
  function checkVoteCountForButton() {
    const confirmButton = document.querySelector('.confirm-button');
  
    if (totalVotes >= 0 && totalVotes < 12) {
      confirmButton.style.opacity = '0.5';
      confirmButton.disabled = true;
      confirmButton.style.cursor = 'not-allowed';
    } else if(totalVotes === 12) {
      confirmButton.style.opacity = '1';
      confirmButton.disabled = false;
      confirmButton.style.cursor = 'pointer';
    } else {
      confirmButton.style.opacity = '0.5';
      confirmButton.disabled = true;
      confirmButton.style.cursor = 'not-allowed';
    }
  }
  checkVoteCountForButton();
  
  // Désactiver les boutons Up
  function disableUpVoteButtons() {
    const upVoteButtons = document.querySelectorAll('.vote-button:nth-child(even)');
    upVoteButtons.forEach(button => {
      button.disabled = true;
      button.style.cursor = 'not-allowed';
      button.style.opacity = '0.5';
    });
    if (totalVotes === 12) {
      const zeroVoteBoxes = document.querySelectorAll('.vote-count .number');
      zeroVoteBoxes.forEach(box => {
        const votes = parseInt(box.innerText);
        if (votes === 0) {
          box.closest('.participant-box').style.opacity = '0.5'; // Réduire l'opacité .5 des pays non-sélectionnés
        }
      });
    }
  }
  
  // Réactiver les boutons Up
  function enableUpVoteButtons() {
    const buttons = document.querySelectorAll('.vote-button:nth-child(even)');
    buttons.forEach(button => {
      button.disabled = false;
      button.style.cursor = 'pointer';
      button.style.opacity = '1';
    });
    const msgError = document.querySelector('.msg-error');
    msgError.style.display = "none";
    if (totalVotes < 12) {
      const participantBoxes = document.querySelectorAll('.participant-box');
      participantBoxes.forEach(box => {
        box.style.opacity = '1'; // Remettre l'opacité 1 des pays non-sélectionnés
      });
    }
  }
  
  // Confirmer le vote
  function confirmVotes() {
    const msgError = document.querySelector('.msg-error');
    if (totalVotes !== 12) {
      msgError.classList.remove('success-message');
      msgError.classList.add('error-message');
      msgError.style.display = "block";
      msgError.innerText = "Error : Il doit y avoir un total de 12 votes / There must be a total of 12 votes.";
    } else {
      // Effectuer ici l'envoi des votes via une requête HTTP (non implémentée ici)
      console.log("Votes confirmés !");
      msgError.classList.remove('error-message');
      msgError.classList.add('success-message');
      msgError.style.display = "block";
      msgError.innerText = "Parfait !";
    }
  }
