/**
 * TODO generated, please specify type and doc for the params
 * @param event
 *
 * @properties={typeid:24,uuid:"85C5B2BF-A0A8-43F7-AF38-F33217BA8C50"}
 */
function onActionSalir(event) {
	security.logout('LitoralGestion','InicializaArgento')
}
/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"C31F0E73-BC00-42B7-B3E3-8EA0114206EE"}
 */
function onActionModulos(event) 
{
	forms.admin_lg_modulos.controller.show()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"6734AED2-737F-4DC8-91F3-7660E2BDE874"}
 */
function onActionEmpresas(event) 
{
	forms.admin_lg_empresas.controller.show()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"77213BA3-B710-42A1-B0AB-3EE6EA255751"}
 */
function onActionUsuarios(event) 
{
	forms.admin_lg_usuarios.controller.show()
}