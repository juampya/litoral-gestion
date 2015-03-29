
/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"86283674-E639-40B3-883A-C8E06E7A56DA"}
 */
function onActionDetalle(event) 
{
	forms.admin_lg_modulos_detalle.vl_nuevo = 0
	forms.admin_lg_modulos_detalle.controller.show()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"EB29CF3F-6ACD-419D-8E66-96D0EAC18062"}
 */
function onActionVolver(event) 
{
	forms.admin_lg_inicio.controller.show()
}


/**
 * TODO generated, please specify type and doc for the params
 * @param event
 *
 * @properties={typeid:24,uuid:"C232D67A-020C-482F-A756-CA61CCB2379F"}
 */
function onActionAgregar(event) 
{
	forms.admin_lg_modulos_detalle.vl_nuevo = 1
	forms.admin_lg_modulos_detalle.controller.show()
}
/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"0F395874-FD5B-4A06-B4AD-95352210D420"}
 * @AllowToRunInFind
 */
function onShow(firstShow, event) 
{
	controller.loadAllRecords()
}
