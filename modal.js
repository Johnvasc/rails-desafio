class modal extends HTMLElement{
    constructor(){
        super();
    }
    connectedCallback(){
        this.innerHTML = `
        <div class="mainModal">
            <div class="text">
                <p class="titleBook">Titulo da obra</p>
                <p class="authorBook">Autor da obra</p>
            </div>
            <div class="button">
                <img src="x-button.png" alt="">
            </div>
        </div>`
    }
}

customElements.define('modal-livros', modal);