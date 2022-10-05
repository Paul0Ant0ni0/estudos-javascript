/**
 * Métodos de recuperação HTML
 */
// recupera elementos HTML apartir do nome da tag
//const todoForm = document.getElementsByTagName('form')
const todoForm = document.getElementById('todo-form')
const todos = []

/**
 * addEventListener serve para ovir eventos de elementos
 * HTML, sempre que forem emitidos
 */

/**usamos uma função anônima para passá-la como
 parâmetro para outra*/

todoForm.addEventListener('submit', function(evento) {
    /**
     * cancela o comportamento padrão do formulário
     * que seria o carregamento da página tentando fazer um envio
     */

    evento.preventDefault()
    /**
   * cancela a propagação do evento que foi emitido para os elementos pai,
   * evitando que outros eventos sejam emitidos
   */

    evento.stopPropagation()
    /**
     * queryselector recupera o primeiro elemento que atenta
     * a um seletor css informado
     */
    const todoInput = document.querySelector('#todo')
    /**
     * A propriedade value representa o atributo value dos 
     * elementos de fromulário do HTML, para acessarmos o valor que
     * está dentro dele
     */
    todos.push(todoInput.value)
    todoInput.value = ''
    renderizarTodos()
})


function renderizarTodos(){
    const todosListSection = document.querySelector('#todos-list')
    todosListSection.innerHTML = '' // apagando o elemento que tinha antes, para não repetir

    for(let tarefa of todos){
        /**
         * createElement é o método reponsonável por gerar novos elementos
         * HTML dentro do javascript a partir do nome da tag
         */
        const divCard = document.createElement('div')
        divCard.classList.add('card', 'bg-warning')
        
        const divCardBody = document.createElement('div')
        divCardBody.classList.add('card-body', 'd-flex', 'align-items-center')

        const pTodoText = document.createElement('p')
        pTodoText.classList.add('todo-text', 'flex-grow-1', 'text-truncate')
        /**
         * innerText é a propriedade que informa qual o conteúdo do texto que
         * está dentro de um elemento HTML
         */
        pTodoText.innerText = tarefa

        const btnDelete = document.createElement('button')
        btnDelete.classList.add('btn', 'delete-todo')
        /**
         * arrow functions SEMPRE são anônimas
         */
        btnDelete.addEventListener('click', () =>{
            /**
             * descobrir o indece do elemto dentro do array
             */
            /**
             * indexOf informa em qual indice se encontra um determinado valor
             * do seu array
             * 
             * se ele não encontrar o valor do array, ele retorna -1
             */
            const index = todos.indexOf(tarefa)
            /**
             * splice serve para exluir um determinado valor do seu array a partir do seu indice
             */
            todos.splice(index, 1)
            renderizarTodos()
        })

        const spanicon = document.createElement('span')
        spanicon.classList.add('material-symbols-outlined')
        spanicon.innerText = 'delete'

        /**
         * appendChild serve para colocar novos elementos html dentro de outro
         */
        btnDelete.appendChild(spanicon)
        /**
         * append serve para colocar um ou mais elementos html dentro de outro
         */
        divCardBody.append(pTodoText, btnDelete)
        divCard.appendChild(divCardBody)
        todosListSection.appendChild(divCard)
        
    }
}