/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"14C7A721-4AA8-43F6-BA04-1B288F57F0C0",variableType:4}
 */
var vl_cantidad = 0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"F24333C1-4BEF-4F32-89BA-2A499B8B7942",variableType:8}
 */
var vl_total_total = 0.0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"74BF82B3-C0AB-4F50-B5FF-40A3B289A42A",variableType:8}
 */
var vl_total_cobrado = 0.0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"1F949F65-8823-47A6-99D9-EACC4F491826",variableType:8}
 */
var vl_total_pendiente = 0.0;

/**
 * @properties={typeid:24,uuid:"3084AB39-0FA1-4940-8D98-4618A2FFCA71"}
 */
function filtrar()
{
	forms.mat_liquidacion.controller.show()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"4B42680D-A649-437D-99F4-646A98B97250"}
 * @AllowToRunInFind
 */
function onActionGenerarCuotas(event) 
{
	
	/** @type {JSFoundset<db:/sistemas/mat_matriculados>}*/
	var fs_mat = databaseManager.getFoundSet('sistemas','mat_matriculados')
	fs_mat.find()
	fs_mat.mat_estado = 1
	fs_mat.mat_consejo_id  ^= 0
	
	var cant = fs_mat.search()
	if(cant > 0)
	{
		var win1 = application.createWindow("generarLiquidacion", JSWindow.MODAL_DIALOG);
		win1.setInitialBounds(JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT);
		win1.setSize(JSWindow.DEFAULT,JSWindow.DEFAULT)
		win1.resizable = false
		win1.title= 'Liquidacion.';
		win1.show(forms.mat_nueva_liquidacion);
	}
	else
	{
		globals.VentanaGenerica(globals.ag_usuariovigente.usu_id,'Atención', 'No Existe ningun Matriculado Activo.\n Verifique.', 'question', controller.getName(), 'Aceptar', null, null, null, null, null, null, null) 
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"79EC36AF-F462-4F22-97C5-5FE22F5AF298"}
 */
function onActionVolver(event) 
{
	scopes.globals.CargarMenu()
	forms["mat_inicio"].controller.show()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"90027F58-51D7-4FE7-A5DD-4502B5A097C9"}
 */
function onActionDetalle(event) 
{
	forms.mat_liquidacion_resumen_detalle.vl_mes = forms['matriculados'].mes
	forms.mat_liquidacion_resumen_detalle.vl_anio = forms['matriculados'].anio
	forms.mat_liquidacion_resumen_detalle.controller.show()
}
