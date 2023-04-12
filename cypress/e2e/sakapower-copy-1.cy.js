const general_pom = require("../support/general_pom");

describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://test.app.u-code.io/')
    cy.wait(2000)
    cy.get('input[name="username"]').type("Allstom1234")
    cy.get('input[name="password"]').type("Allstom1234")
    cy.wait(1000)
    cy.get('._button_19zv0_1').click()
    cy.wait(1000)
    cy.contains("Select company").click()
    cy.contains("ALL STOM").click()
    cy.wait(1000)
    cy.contains("Select project").click()
    cy.wait(1000)
    cy.contains("ALL DENTAL").click()
    cy.wait(1000)
    cy.contains("select.environment").click()
    cy.wait(1000)
    cy.contains("Production").click()
    cy.wait(1000)
    cy.contains("Select client type").click()
    cy.wait(1000)
    cy.contains("ADMIN").click()
    cy.get('._button_19zv0_1').click()
    cy.wait(1000)
    cy.get('[data-testid="DashboardIcon"]').click()
    cy.wait(2000)
    general_pom.selectors.select_item('Организация')
    cy.wait(3000)
    cy.get('div[class="_header_184v9_13"]').click()
    cy.wait(500)
    cy.contains("Специализация").click()
    cy.wait(1000)
    general_pom.table_buttons.add_button().click()
    cy.wait(1000)
    cy.get('div[class="MuiInputBase-root MuiOutlinedInput-root MuiInputBase-colorPrimary MuiInputBase-fullWidth MuiInputBase-formControl MuiInputBase-sizeSmall css-15hdnk3"]').type("matrix")
    cy.get('button[id="submit"]').click()
    cy.wait(2000)
    cy.contains("Специализация").click()
    cy.wait(1000)
    cy.get('.CTableBody > :nth-child(2)').click()
    cy.wait(1000)
    cy.get('div[class="MuiInputBase-root MuiOutlinedInput-root MuiInputBase-colorPrimary MuiInputBase-fullWidth MuiInputBase-formControl MuiInputBase-sizeSmall css-15hdnk3"]').type(".").clear().type("sakabek")
    cy.get('button[id="submit"]').click()
    cy.wait(1000)
    cy.contains("Специализация").click()
    cy.wait(2000)
    cy.get('div[class="RectangleIconButton success  small"]').click()
    cy.wait(1000)
    cy.get('.CTableBody > :nth-child(2)').type("edit")
    cy.wait(1000)
    cy.get('[style="display: flex; align-items: center; gap: 10px;"] > :nth-child(2)').click()
    cy.wait(1000)
    cy.get(':nth-child(2) > :nth-child(3) > [style="display: flex; gap: 5px; padding: 3px;"] > .RectangleIconButton').click()
    cy.wait(1000)
    cy.get('div[aria-label="User"]').click()
    cy.wait(1000)
    cy.get('._scrollBlocksss_18ml0_10 > :nth-child(2)').click()
    cy.wait(5000)

  })
})