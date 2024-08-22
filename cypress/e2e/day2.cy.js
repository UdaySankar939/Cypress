describe('template spec', () => {
  it('passes', () => {
    //cy.visit('www.google.co.in');
    //cy.get('#APjFqb').type('movierulz');
    //cy.get("div[class='FPdoLc lJ9FBc'] input[name='btnK']").click();
    cy.visit('www.watchmovierulz.vet');
    cy.get('#search_term').type('kalki 2898 AD');
    cy.get('#searchsubmit').click();
    cy.get('img[src*="https://www.watchmovierulz.vet/uploads/Kalki-2898-AD-Telugu.jpg"]').click();
    cy.get(".mv_button_css[href='magnet:?xt=urn:btih:66bff0d1b8b1dc2166aee103571ccb273f3c4316&dn=www.5MovieRulz.solar%20-%20Kalki%202898%20AD%20(2024)%201080p%20WEB-DL%20-%20HQ%20-%20AVC%20-%20(DD%2b5.1%20-%20640Kbps)%20%5bTel%20%2b%20Tam%20%2b%20Mal%20%2b%20Kan%5d%20-%2015GB%20-%20ESub.mkv&tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&tr=udp%3a%2f%2ftracker.torrent.eu.org%3a451%2fannounce&tr=udp%3a%2f%2ftracker.dler.org%3a6969%2fannounce&tr=udp%3a%2f%2fopen.stealth.si%3a80%2fannounce&tr=udp%3a%2f%2fopentracker.i2p.rocks%3a6969%2fannounce&tr=udp%3a%2f%2ftracker-udp.gbitt.info%3a80%2fannounce&tr=udp%3a%2f%2ftracker.tiny-vps.com%3a6969%2fannounce&tr=udp%3a%2f%2fmovies.zsw.ca%3a6969%2fannounce&tr=https%3a%2f%2fopentracker.i2p.rocks%3a443%2fannounce']");
    cy.get("a[title='MovieRulz Home']").click();
  })
})


echo "# Cypress" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/UdaySankar939/Cypress.git
git push -u origin main