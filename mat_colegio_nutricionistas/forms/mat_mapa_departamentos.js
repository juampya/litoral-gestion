/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"2B1B39A1-2F64-45AB-8D38-5BCD8758512F",variableType:4}
 */
var vl_direccion_real_profesional = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"A844DFCC-08AE-4368-A089-1A9646BBDCC7"}
 */
var vl_frm_anterior = null;

/**
 * @param {Object} event
 *
 * @properties={typeid:24,uuid:"00C47301-5FC1-4F29-B5DC-99BCEAA81E2D"}
 */
function onActionVolver(event) 
{
	scopes.globals.CargarMenu()
	forms[vl_frm_anterior].controller.show()
}

/**
 * @param {Object} event
 *
 * @properties={typeid:24,uuid:"074BFBAF-8E7E-45B6-8FD4-C8EE4397B2BC"}
 */
function onActionNuevo(event) 
{
	forms.sm_frm_departamentos_abm.vl_frm_anterior = controller.getName()
	forms.sm_frm_departamentos_abm.vl_nuevo = 1
	forms.sm_frm_departamentos_abm.vl_titulo = "Nuevo"
	forms.sm_frm_departamentos_abm.controller.loadRecords(depar_id)
	
	var win = application.createWindow("departamentos", JSWindow.MODAL_DIALOG);
		win.setInitialBounds(JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT);
		win.setSize(JSWindow.DEFAULT,JSWindow.DEFAULT)
		win.resizable = false
		win.title= 'Litoral Gestion';
		win.show(forms.sm_frm_departamentos_abm);	
}

/**
 * @param {Object} event
 *
 * @properties={typeid:24,uuid:"7D6976A4-6CC9-4E27-94DF-F140ECAE4277"}
 */
function onActionRefrescar(event) 
{
	
}

/**
 * @param {Object} event
 *
 * @properties={typeid:24,uuid:"602A554C-8993-4655-8398-2A1DC0C7B9B3"}
 */
function onActionDetalle(event) 
{
	forms.sm_frm_departamentos_abm.vl_frm_anterior = controller.getName()
	forms.sm_frm_departamentos_abm.vl_nuevo = 0
	forms.sm_frm_departamentos_abm.vl_titulo = "Modifica"
	forms.sm_frm_departamentos_abm.controller.loadRecords(depar_id)
	
	var win = application.createWindow("departamentos", JSWindow.MODAL_DIALOG);
		win.setInitialBounds(JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT);
		win.setSize(JSWindow.DEFAULT,JSWindow.DEFAULT)
		win.resizable = false
		win.title= 'Litoral Gestion';
		win.show(forms.sm_frm_departamentos_abm);	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"B767A05B-2327-4888-B267-27DFE7EB3A1C"}
 */
function onActionCopiar(event) 
{
	forms.sm_frm_departamentos_abm.vl_frm_anterior = controller.getName()
	forms.sm_frm_departamentos_abm.vl_nuevo = 2
	forms.sm_frm_departamentos_abm.controller.show() 
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"018441FC-C69B-4945-8874-BC698BBCD4FB"}
 */
function onShow(firstShow, event)
{
	if(firstShow)
	{
		vl_direccion_real_profesional = 0
		filtro()
	}
}

/**
 * @properties={typeid:24,uuid:"961F9978-A52E-4273-B199-0E44C02BB9D1"}
 */
function filtro()
{
var query = ""
	
	if(vl_direccion_real_profesional==0)
	{
		query =	"SELECT c.depar_id, "+
			    "c.depar_descripcion, "+
			    "count(mat_id) "+
			    "FROM sistema.mat_matriculados as a "+
			    "left join localidades as b on a.mat_codigo_postal_real = b.localidad_id "+
			    "left join departamentos as c on b.depar_id = c.depar_id "+
				"where a.mat_estado = 1 "+
			    "group by c.depar_id"
	}
	else
	{
		query =	"SELECT c.depar_id, "+
			    "c.depar_descripcion, "+
			    "count(mat_id) "+
			    "FROM sistema.mat_matriculados as a "+
			    "left join localidades as b on a.mat_codigo_postal_profesional = b.localidad_id "+
			    "left join departamentos as c on b.depar_id = c.depar_id "+
			    "where a.mat_estado = 1 "+
			    "group by c.depar_id"
	}
			    
    /** @type {JSDataSet}*/
	var ds = databaseManager.getDataSetByQuery('sistemas', query, null, -1);
	
	for (var j = 1; j <= foundset.getSize(); j++)
	{
		var record = foundset.getRecord(j);
			record.calc_cant_profesionales = 0
		
		for (var i = 1; i <= ds.getMaxRowIndex(); i++) 
		{
			var row = ds.getRowAsArray(i);
			
			if (row[0]==record.depar_id)
			{	
				record.calc_cant_profesionales = row[2]
			}
		}	
	}
}

/**
 * Handle record selected.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"EE64D9BE-DAB7-4C1D-88CA-5EE865F73642"}
 */
function onRecordSelection(event) 
{
	if(vl_direccion_real_profesional==0)
	{
		forms.mat_mapa_matriculados.filtroLocalidadReal(depar_id)
	}
	else
	{
		forms.mat_mapa_matriculados.filtroLocalidadProfesional(depar_id)
	}
}
