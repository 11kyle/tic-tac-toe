describe('Game Menu', () => {
  beforeEach(() => {
    cy.visit("/")
  })

  it('new player to player game button displays the correct text', () => {
    cy.get('[data-test="new-game-p2p-btn"]').contains('New Game (vs Player)', { matchCase: false })
  })

  it('new player to cpu game button displays the correct text', () => {
    cy.get('[data-test="new-game-cpu-btn"]').contains('New Game (vs CPU)', { matchCase: false })
  })

  // it('defaults player 1 as x', () => {
  //   cy.get('[data-test="player-selection"')
  // })
})