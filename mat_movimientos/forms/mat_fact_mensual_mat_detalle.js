/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"41091196-49AB-4509-8E85-5FF792871199",variableType:4}
 */
var vl_nuevo = null;

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"304BE2FF-192B-4B64-BFFB-687B9AE5E3C1"}
 */
function onActionVolver(event) 
{
	databaseManager.revertEditedRecords(foundset)
	forms.mat_fact_mensual_mat.controller.show()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"F63F2666-C4C7-4655-8FAB-884BB27B7E34"}
 */
function onActionAnular(event) 
{
	globals.VentanaGenerica(globals.ag_usuariovigente.usu_id,"Atencion","Desea Borrar el Movimiento","atention",controller.getName(),"No",null,"Si","anularMovim",null,null,null,null)
}

/**
 * @properties={typeid:24,uuid:"21BE894F-C722-4ED4-9D9E-FAA8098D3F1D"}
 */
function anularMovim()
{
	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"6276ACD9-3D48-4155-8E4B-611E41634EA0"}
 * @AllowToRunInFind
 */
function onActionGrabar(event) 
{	
	if(foundset.getSelectedRecord().hasChangedData())
	{
		/** @type {JSDataSet} */
		var dataset = foundset.getSelectedRecord().getChangedData()
		for (var i = 1; i <= dataset.getMaxRowIndex(); i++) 
		{
			var row = dataset.getRowAsArray(i);
			if (row[0]!="fact_observa")
			{
				/** @type {JSFoundset<db:/sistemas/mat_fact_mensual>}*/
				var fs_mov = databaseManager.getFoundSet('sistemas','mat_fact_mensual')
				fs_mov.find()
				fs_mov.obsoc_id  = obsoc_id
				fs_mov.fact_anio = fact_anio
				fs_mov.fact_mes  = fact_mes
				if(fs_mov.search()>0)
				{
					scopes.globals.ventanaAceptar("Ya se encuentra cargada la Facturación del mes de "+ application.getValueListDisplayValue("meses",fact_mes)+" del "+fact_anio+" de esa Obra Social.",controller.getName())
					return
				}
			}
		}
	}
	
	var succes = databaseManager.saveData(foundset)
	if(succes)
	{
		scopes.globals.ventanaAceptar("Los datos se grabaron correctamente.",controller.getName())
	}
}

/**
 * Handle changed data.
 *
 * @param {Number} oldValue old value
 * @param {Number} newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"0A3265F3-44C5-4854-9062-F0C153824143"}
 */
function onDataChangeEstado(oldValue, newValue, event) 
{
//	if(mov_estado == 1)
//	{
//		elements.mov_fecha_cobro.enabled = true
//	}
//	else
//	{
//		elements.mov_fecha_cobro.enabled = false
//		mov_fecha_cobro = null
//	}
	return true
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"FF402A29-2F6E-4BCE-AFE1-4F7F6BD8D69D"}
 */
function onShow(firstShow, event)
{
//	elements.fact_anio.enabled 	  = true
//	elements.fact_mes.enabled 	  = true
//	elements.fact_observa.enabled = true
//	elements.obsoc_id.enabled 	  = true
	
	elements.btn_grabar.enabled = true
	forms.mat_fact_mensual_mat_detalle_movi.elements.btn_detalle.enabled = true
	forms.mat_fact_mensual_mat_detalle_movi.elements.btn_agregar.enabled = true
	if(vl_nuevo == 1)
	{
		forms.mat_fact_mensual_mat_detalle_movi.elements.btn_agregar.enabled = false
		elements.btn_borrar.enabled=false
		controller.newRecord(false)
	}
	else
	{
		if(fact_estado ==1)
		{
//			elements.fact_anio.enabled 	  = false
//			elements.fact_mes.enabled 	  = false
//			elements.fact_observa.enabled = false
//			elements.obsoc_id.enabled 	  = false

			elements.btn_grabar.enabled = false
			forms.mat_fact_mensual_mat_detalle_movi.elements.btn_agregar.enabled = false
			forms.mat_fact_mensual_mat_detalle_movi.elements.btn_detalle.enabled = false
			forms.mat_fact_mensual_mat_detalle_movi.elements.btn_borrar.enabled  = false
			elements.btn_borrar.enabled=false
			
			elements.btn_cerrar.imageURL = 'media:///16x16/lock_open.png'
			elements.btn_cerrar.text = 'Re-Abrir Facturación'
			elements.btn_cerrar.toolTipText = 'Re-Abrir Facturación'
		}
		else
		{
			elements.btn_borrar.enabled=false
			forms.mat_fact_mensual_mat_detalle_movi.elements.btn_detalle.enabled = true
			forms.mat_fact_mensual_mat_detalle_movi.elements.btn_agregar.enabled = true
			forms.mat_fact_mensual_mat_detalle_movi.elements.btn_borrar.enabled  = true
			
			elements.btn_cerrar.imageURL = 'media:///16x16/lock_break.png' 
			elements.btn_cerrar.text = 'Cerrar Facturación'
			elements.btn_cerrar.toolTipText = 'Cerrar Facturación'
		}
	}
}


/**
 * TODO generated, please specify type and doc for the params
 * @param event
 *
 * @properties={typeid:24,uuid:"72DD7167-BF15-4B71-B539-E92CEEE2BC99"}
 */
function onActionCerrar(event) 
{
	globals.VentanaGenerica(globals.ag_usuariovigente.usu_id,"Atencion","Desea " + elements.btn_cerrar.text +" del mes de "+ application.getValueListDisplayValue('meses',fact_mes) +" de "+ fact_anio,"atention",controller.getName(),"No",null,"Si","CerrarFacturacion",null,null,null,null)
}

/**
 * @properties={typeid:24,uuid:"F4FD1BF0-218A-4830-88F1-81E148E445F4"}
 */
function CerrarFacturacion()
{
	if(fact_estado == 1)
	{
		
		fact_estado = 0
		elements.btn_grabar.enabled = true
		forms.mat_fact_mensual_mat_detalle_movi.elements.btn_agregar.enabled = true
		forms.mat_fact_mensual_mat_detalle_movi.elements.btn_detalle.enabled = true
		forms.mat_fact_mensual_mat_detalle_movi.elements.btn_borrar.enabled  = true
		databaseManager.saveData(foundset)
			
		elements.btn_cerrar.imageURL = 'media:///16x16/lock_break.png' 
		elements.btn_cerrar.text = 'Cerrar Facturación'
		elements.btn_cerrar.toolTipText = 'Cerrar Facturación'
	}
	else
	{
		fact_estado = 1
		elements.btn_grabar.enabled = false
		forms.mat_fact_mensual_mat_detalle_movi.elements.btn_agregar.enabled = false
		forms.mat_fact_mensual_mat_detalle_movi.elements.btn_borrar.enabled  = false
		databaseManager.saveData(foundset)

		elements.btn_cerrar.imageURL = 'media:///16x16/lock_open.png'
		elements.btn_cerrar.text = 'Re-Abrir Facturación'
		elements.btn_cerrar.toolTipText = 'Re-Abrir Facturación'
	}
}