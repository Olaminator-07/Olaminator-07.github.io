// ...existing code...
document.addEventListener('DOMContentLoaded', function () {
    const kalenderEl = document.getElementById('kalender');
    const modal = document.getElementById('modal');
    const modalTittel = document.getElementById('modal-tittel');
    const modalTekst = document.getElementById('modal-tekst');
    const lukk = document.getElementById('lukk');
    const markerÅpnet = document.getElementById('markerÅpnet');
    const datoEl = document.getElementById('dato');

    // 24 hyggelige oppgaver / beskjeder
    let oppgaver = [
        "Gi noen et ekte kompliment i dag.",
        "Bak eller kjøp noe godt og del med nabo.",
        "Skriv et hyggelig brev til en venn.",
        "Hjelp til med oppvasken uten å bli spurt.",
        "Ta en lang spasertur og plukk søppel underveis.",
        "Ring en bestemor eller bestefar for en prat.",
        "Gi bort en varm genser til noen som trenger det.",
        "Lag et hjemmelaget kort og gi til en kollega.",
        "Si takk til en servicemedarbeider i dag.",
        "Inviter noen på en kopp kakao.",
        "Gjør en god gjerning anonymt.",
        "Les en julefortelling for et barn i familien.",
        "Pynte et vindu eller altan og gjør nabolaget hyggeligere.",
        "Gjør husarbeid for en opptatt husholdning.",
        "Gi bort en bok du likte til noen.",
        "Lag en liten gavepakke for en tilfeldig venn.",
        "Gi noen et kompliment om innsatsen deres.",
        "Skriv en takkemail til en lærer eller trener.",
        "Ta vare på deg selv — gjør noe som gir ro.",
        "Gi bort tid: hjelp noen med digitale problemer.",
        "Plant et frø eller et lite tre (eller planlegg det).",
        "Kjøp en Volvo 940",
        "Arranger en liten skattejakt for barna i familien.",
        "Overrask noen med en hyggelig lapp i posten."
    ];

   

    // hent dagens dato — kun tillat åpning hvis måned er desember (12) og dag >= lukedagen
    const iDag = new Date();
    const dag = iDag.getDate();
    const måned = iDag.getMonth() + 1; // 1..12


    if (datoEl) {
        const iDag = new Date();
        // Norsk format: f.eks. "4. desember 2025"
        const dag = iDag.getDate();
        const månedNavn = iDag.toLocaleString('no-NO', { month: 'long' });
        const år = iDag.getFullYear();
        datoEl.textContent = `Dagens dato: ${dag}. ${månedNavn} ${år}`;
    }

    // localStorage for åpne dager
    const åpnetStr = localStorage.getItem('åpnetDager');
    let åpnetDager = åpnetStr ? JSON.parse(åpnetStr) : [];

    // generer 24 ruter
    for (let i = 1; i <= 24; i++) {
        const kort = document.createElement('div');
        kort.className = 'luke';
        kort.dataset.dag = i;

        const num = document.createElement('div');
        num.className = 'nummer';
        num.textContent = i;

        const stat = document.createElement('div');
        stat.className = 'status';

        // tillat åpning når enten:
        // - måned er desember og dagens dag >= i
        // - eller dagen allerede er åpnet (persist)
        const kanÅpne = (måned === 12 && dag >= i) || åpnetDager.includes(i);

        if (åpnetDager.includes(i)) {
            kort.classList.add('åpnet');
        } else if (!kanÅpne) {
            kort.classList.add('låst');
            stat.textContent = 'Låst';
        } 

        kort.appendChild(num);
        kort.appendChild(stat);

        // klikkhandler
        kort.addEventListener('click', function () {
            const n = Number(this.dataset.dag);
            if (!((måned === 12 && dag >= n) || åpnetDager.includes(n))) {
                // ignore klikks på låste ruter — kan gi feilmelding
                alert('Denne luka er ikke tilgjengelig ennå. Kom tilbake på riktig dato.');
                return;
            }
            // vis modal med oppgave
            modalTittel.textContent = `Luke ${n}`;
            modalTekst.textContent = oppgaver[n - 1] || 'God jul!';
            modal.setAttribute('aria-hidden', 'false');

            // ta vare på valgt dag i en property for markering ved knapp
            modal.dataset.valgt = String(n);
        });

        kalenderEl.appendChild(kort);
    }

    // lukk modal
    lukk.addEventListener('click', closeModal);
    modal.addEventListener('click', function (e) {
        if (e.target === modal) closeModal();
    });

    function closeModal() {
        modal.setAttribute('aria-hidden', 'true');
        delete modal.dataset.valgt;
    }

    // marker som åpnet (lagrer i localStorage og endrer utseende)
    markerÅpnet.addEventListener('click', function () {
        const v = modal.dataset.valgt;
        if (!v) return;
        const dagNum = Number(v);
        if (!åpnetDager.includes(dagNum)) {
            åpnetDager.push(dagNum);
            åpnetDager.sort((a,b)=>a-b);
            localStorage.setItem('åpnetDager', JSON.stringify(åpnetDager));
        }
        // farg opp den aktuelle ruten
        const rute = document.querySelector(`#kalender .luke[data-dag="${dagNum}"]`);
        if (rute) {
            rute.classList.remove('låst');
            rute.classList.add('åpnet');
            rute.querySelector('.status').textContent = 'Åpnet';
        }
        closeModal();
    });

    const tilbakestillBtn = document.getElementById('tilbakestill');
    if (tilbakestillBtn) {
        tilbakestillBtn.addEventListener('click', function () {
            if (!confirm('Vil du tilbakestille kalenderen? Dette sletter hvilke luker som er åpnet.')) return;

            // nullstill åpnetDager og localStorage
            åpnetDager = [];
            localStorage.removeItem('åpnetDager');

            // oppdater alle ruter visuelt
            const ruter = document.querySelectorAll('#kalender .luke');
            ruter.forEach(function (rute) {
                const n = Number(rute.dataset.dag);
                rute.classList.remove('åpnet');

                const kanÅpne = (måned === 12 && dag >= n) || åpnetDager.includes(n);
                if (!kanÅpne) {
                    rute.classList.add('låst');
                    const stat = rute.querySelector('.status');
                    if (stat) stat.textContent = 'Låst';
                } else {
                    rute.classList.remove('låst');
                    const stat = rute.querySelector('.status');
                    if (stat) stat.textContent = '';
                }
            });

             if (typeof closeModal === 'function') closeModal();
        });
    }
});