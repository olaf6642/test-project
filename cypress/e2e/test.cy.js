beforeEach(() => {
	cy.viewport(1920, 1080)
})

const user = {
	name: 'CrewB',
	pass: '8H8D1n#@LC'
}

function login(user) {
	cy.visit('https://react-dev.digital-office.dso.lanit-tercom.com')
	cy.wait(500)
	cy.get('input[name="loginData"]')
		.type(user.name)
	cy.get('input[type="password"]')
		.type(user.pass, '{enter}')
	cy.get('a[class*="NavItem"]')
		.contains('Доска проектов')
		.click()
	cy.wait(500)
}

it ('DOW-203', () => {
	
	login()

	cy.get('label[class*="Switch_label"]')
		.click()
	cy.get('div[class*="input_with_options_container"]')
		.eq(1)
		.scrollIntoView()
		.click()
	cy.get('div[class*="OptionsWindow_container"] div[class*="OptionsWindow_list_item"]')
		.should('have.length', 3)
		.eq(2)
		.click()
})

it ('DOW-204', () => {
	login()
})
