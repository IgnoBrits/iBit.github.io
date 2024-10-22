function showPost(postTitle) {
	let content = '';
	if (postTitle === 'Understanding IT Challenges') {
		content = `
            <h3>${postTitle}</h3>
            <p>In today’s digital age, understanding IT challenges is crucial for any business. These challenges can include cybersecurity threats, data management issues, and the need for ongoing IT support...</p>
        `;
	} else if (postTitle === 'The Value of IT Consulting') {
		content = `
            <h3>${postTitle}</h3>
            <p>IT consulting can streamline your operations and improve efficiency. With expert guidance, businesses can leverage technology to drive growth and innovation...</p>
        `;
	}

	// Display the post content in a modal
	const modal = document.createElement('div');
	modal.classList.add('modal');
	modal.innerHTML = `
        <div class="modal-content">
            <span class="close" onclick="closeModal()">&times;</span>
            ${content}
        </div>
    `;
	document.body.appendChild(modal);
}

function closeModal() {
	const modal = document.querySelector('.modal');
	if (modal) {
		modal.remove();
	}
}
