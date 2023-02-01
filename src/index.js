/**
 * @param {string} id - 아이디
 * @param {string} content - 내용
 * @param {boolean} complete - 완료여부
 * @param {string} category - 카테고리
 * @param {Array<string>} [tags] -태그들
 * @constructor
 */
function Todo(id, content, complete, category, tags) {}

/**
 * @param {string} content
 * @param {boolean} complete
 * @param {string} category
 * @return {Todo} Todo
 */
function createTodo(content, complete, category) {}

/**
 * @param {string} [id]
 * @return {(Array<Todo> | Todo)} TodoList - 특정 할일이나 모든 할일을 반환한다.
 */
function readTodo(id) {}

/**
 * @param {string} id
 * @param {string} oldTag
 * @param {string} newTag
 */
function updateTodo(id, oldTag, newTag ) {}

/**
 * @param {string} [id]
 */
function deleteTodo(id) {}