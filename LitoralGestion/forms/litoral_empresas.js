/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"E4BC0157-F23A-4441-8B95-79FE82ABFA61",variableType:4}
 */
var codigo = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"B040A513-603C-4C23-8B8E-4E21C0A45012"}
 */
var nombre = null;

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"E7E3D233-6A00-436F-8D71-27F2D9BF9CA6"}
 */
function onActionVolver(event) {
	application.getWindow().hide()
}

/**
 * @properties={typeid:24,uuid:"724E0F98-1EC0-4B49-AFD9-769059D2D168"}
 * @AllowToRunInFind
 */
function filtrarEmpresas() {
	controller.find()
	if (codigo != null && codigo != 0) {
		emp_id = codigo	
	}
	if (nombre != null) {
		emp_nombre = '%' + nombre + '%'
	}
	controller.search()
	codigo = null
	nombre = null
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"BC51CE18-0BD8-4881-A964-24EF6B5995D6"}
 * @AllowToRunInFind
 */
function onShow(firstShow, event) {
	codigo = null
	nombre = null
	controller.loadAllRecords()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"2A9A33EC-B791-4548-B231-9E9EB196B767"}
 * @AllowToRunInFind
 */
function onActionRefresh(event) {
	codigo = null
	nombre = null
	controller.loadAllRecords()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"9EE0DEC6-73FC-4159-9C36-B55DF6B194E2"}
 */
function onActionSeleccionar(event) {
//	 /** @type {JSFoundset<db:/Sistemas/usuarios>}*/
//	var fs_usuario = databaseManager.getFoundSet('Sistemas','usuarios')
//		fs_usuario.loadRecords(scopes.globals.mx_usuario_id)
//		fs_usuario.us_empresa_vigente = emp_id
//	databaseManager.saveData(fs_usuario)
//
//	scopes.globals.mx_empresa_id = emp_id
//	application.getWindow().hide()
}
