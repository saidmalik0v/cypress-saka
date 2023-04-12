class General {
    sidebar_icons = {
        module_button: () => cy.get('.RectangleIconButton').first(),

        couriers_icon: () => cy.get('[aria-label="Поставщики"]'),
        coming_icon: () => cy.get('[aria-label="Приход"]'),
        remainder_icon: () => cy.get('[aria-label="Остаток"]'),
        moving_sending_icon: () => cy.get('[aria-label="Перемещение-Отправка"]'),
        moving_shipping_icon: () => cy.get('[aria-label="Перемещение-Принятие"]'),
        inventarization_icon: () => cy.get('[aria-label="Инвентаризация"]'),
        write_off_icon: () => cy.get('[aria-label="Списание"]'),
        movement_of_products_icon: () => cy.get('[aria-label="Движение товаров"]'),
    }
    table_buttons = {
        add_button: () => cy.get('[style="display: flex; align-items: center; gap: 10px;"] > .undefined'),
        edit_button: () => cy.get('[style="display: flex; align-items: center; gap: 10px;"] > :nth-child(2)'),
        edit_save_button: () => cy.get('[style="display: flex; align-items: center; gap: 10px;"] > :nth-child(2)'),
        add_form_submit_button: () => cy.get('#submit'),
        table_first_item: () => cy.get('.CTableBody > :nth-child(1)'),
        table_first_item_delete_button: () => cy.get(':nth-child(1) > [style="padding: 0px;"]'),
        inner_add_button: () => cy.get('.success'),
        inner_save_button: () => cy.get('*[data-testid = SaveIcon]'),
        back_button: () => cy.get('.BackButton'),
    }
    selectors = {
        select_item: (context) => cy.get('div[role="presentation"]').find('div').contains(context).click(),
        select_first: () => cy.get('div[role="presentation"]').find('div').first().click(),
    }
    errorCheckers = {
        alert_message: () => cy.get('.MuiAlert-message'),
        checkErrorNotiflicationMessage: (message) => {
            this.errorCheckers.alert_message().should('have.text', message)
        },
        opened_item_label: () => cy.get('div[class = label]').first(),
        checkOpenedItemLabel: (context) => {
            this.errorCheckers.opened_item_label().should('have.text', `  ${context}`)
        }
    }
}

module.exports = new General()