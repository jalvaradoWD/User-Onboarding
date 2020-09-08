import styled from "styled-components";

export default styled.div`
	@import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700&display=swap");
	* {
		font-family: "Open Sans", sans-serif;
		box-sizing: border-box;
	}

	display: grid;

	grid-template-columns: 3fr minmax(0, 2fr);

	h1 {
		grid-area: title;
		text-align: center;
	}

	form {
		grid-area: form;
	}

	section {
		grid-area: users;
	}

	grid-template-areas: "title title" "users form";
`;
