const skjema = document.getElementById('skjema');

skjema.addEventListener('submit', function(event) {
    event.preventDefault();

    const navn = document.getElementById('navn').value;
    const email = document.getElementById('email').value;
    const tlfnummer = document.getElementById('tlfnummer').value;
    const adresse = document.getElementById('adresse').value;
    const kjønn = document.querySelector('input[name="kjønn"]:checked').value;
    const bilett = document.getElementById('bilett').value;
    const uke = document.getElementById('uke').value;

    console.log('Navn: ', navn);
    console.log('E-post:', email);
    console.log('Telefon nummer:', tlfnummer);
    console.log('Adresse:', adresse);
    console.log('Kjønn:', kjønn);
    console.log('Bilett:', bilett);
    console.log('Uke:', uke);
    
});



//  const formData = new FormData(skjema);
//     const data = Object.fromEntries(formData.entries());

//     console.log(data);
//     // Nå kan vi få tilgang til verdiene slik:
//     console.log('E-post:', data.email);