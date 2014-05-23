/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"1E69335F-974E-46E3-9585-F4BEBE9F1BF1"}
 */
var vl_localidad = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"5E563F4B-1883-4E42-A65C-427C46DC4EEE"}
 */
var vl_codigo_postal = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"0E12FAD0-49D7-496A-8138-C1222BDB781E",variableType:4}
 */
var vl_provincia_id = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"7019F86A-7C0C-4EA2-A5CC-83715212F367",variableType:4}
 */
var vl_departamento_id = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"74970A5B-47BE-494D-9876-FB90248B039D"}
 */
var vl_frm_anterior = null;

/**
 * @param {Object} event
 *
 * @properties={typeid:24,uuid:"79AC7C5F-D48E-440B-B44A-E75CA94AC6E0"}
 */
function onActionVolver(event) 
{
	scopes.globals.CargarMenu()
	forms[vl_frm_anterior].controller.show()
}

/**
 * @param {Object} event
 *
 * @properties={typeid:24,uuid:"24375434-6047-4A57-86B3-763A58055542"}
 */
function onActionNuevo(event) 
{
	forms.sm_frm_localidades_abm.vl_frm_anterior = controller.getName()
	forms.sm_frm_localidades_abm.vl_nuevo = 1
	forms.sm_frm_localidades_abm.vl_titulo = "Nuevo"
	forms.sm_frm_localidades_abm.controller.loadRecords(localidad_id)
	
	var win = application.createWindow("localidades", JSWindow.MODAL_DIALOG);
		win.setInitialBounds(JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT);
		win.setSize(JSWindow.DEFAULT,JSWindow.DEFAULT)
		win.resizable = false
		win.title= 'Litoral Gestion';
		win.show(forms.sm_frm_localidades_abm);	
}

/**
 * @param {Object} event
 *
 * @properties={typeid:24,uuid:"654A6B9F-65F5-457F-B779-52B9750DD02E"}
 */
function onActionRefrescar(event) 
{
	vl_codigo_postal   = null
	vl_localidad 	   = null
	vl_provincia_id    = null
	vl_departamento_id = null
	Filtrar()
}

/**
 * @param {Object} event
 *
 * @properties={typeid:24,uuid:"232DBE5D-390E-4D1A-B904-76E1D1F5366A"}
 */
function onActionDetalle(event) 
{
	forms.sm_frm_localidades_abm.vl_frm_anterior = controller.getName()
	forms.sm_frm_localidades_abm.vl_nuevo = 0
	forms.sm_frm_localidades_abm.vl_titulo = "Modifica"
	forms.sm_frm_localidades_abm.controller.loadRecords(localidad_id)
	
	var win = application.createWindow("localidades", JSWindow.MODAL_DIALOG);
		win.setInitialBounds(JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT);
		win.setSize(JSWindow.DEFAULT,JSWindow.DEFAULT)
		win.resizable = false
		win.title= 'Litoral Gestion';
		win.show(forms.sm_frm_localidades_abm);	
}

/**
 * @AllowToRunInFind
 *
 * @properties={typeid:24,uuid:"E5435ED3-6FEB-4DA4-A4BA-7886C69D7A5D"}
 */
function Filtrar()
{
	controller.find()
	if(vl_localidad!=null) localidad_nombre = '%'+vl_localidad+'%'
	if(vl_codigo_postal!=null) localidad_cod_postal = '%'+vl_codigo_postal+'%'
	if(vl_departamento_id!=null) depar_id = vl_departamento_id
	if(vl_provincia_id!=null) localidades_to_departamentos.provincia_id = vl_provincia_id
	controller.search()
}