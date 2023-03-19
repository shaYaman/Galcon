/// <reference types="cypress" />

describe('This test verify zehuze exist in tv guide on thursday at 21:15', () => {
  it('find zehu-ze program', () => {
    cy.visit('https://www.kan.org.il/tv-guide/#stations_kan11')
    cy.get('#stationsMenu').first().should('have.attr', { name: 'stations_kan11' })

    //SELECTOR for thursday is: #daysMenu > a:nth-child(10) > div.guide_station_txt.day
    cy.get('div.guide_station_txt.day').contains('חמישי')
        //.find('div.guide_station_txt.day').should('contain.html','חמישי').click() -> result contain also past thursday
        .last().click()

    //SELECTOR for program is: #program_content > ul > li:nth-child(26) > div.guide_info_group > a
    cy.get('#program_content > ul > li').contains('זהו זה').then(iframe => {
      cy.wrap(iframe.parent()).each(() => {
        //SELECTOR for timestamp is: #program_content > ul > li:nth-child(26) > div.guide_time_group > div > div
        cy.get('.guide_time_circle > div').contains('21:15')
      })
    })
  })
})