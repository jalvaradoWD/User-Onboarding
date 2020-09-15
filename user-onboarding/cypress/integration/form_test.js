describe("Testing Form", () => {
	it("Visits the User Onboarding Application", () => {
		const name = "input[name=name]";
		const email = "input[name=email]";
		const password = "input[name=password]";
		const terms = "input[name=terms]";
		const submit = "input[type=submit]";

		cy.visit("http://localhost:3000/");
		cy.get(name).type("Jose Avlarado");
		expect(name).not.to.be.empty;
		cy.get(email).type("josealvarado1337@gmail.com");
		expect(name).not.to.be.empty;
		cy.get(password).type("somepassword");
		expect(name).not.to.be.empty;
		cy.get(terms).check();
		cy.get(submit).click();
	});
});
