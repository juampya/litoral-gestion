/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"D94FD057-29C3-49B2-B27F-EC51CBF912F1",variableType:4}
 */
var vl_matriculado = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"A06C7BBE-B872-4171-A260-B6AB3583C59B",variableType:4}
 */
var vl_tipo_movim = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"FCDED7F9-7ED6-4028-A56F-209673BDCAB2",variableType:4}
 */
var vl_mes = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"F878F616-65D7-4B81-A305-4A3B6D9E357A",variableType:4}
 */
var vl_anio = null;


/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"9636A3D0-77D0-4810-99D0-F4063B7F7F3F"}
 */
function onActionVolver(event) 
{
	vl_anio = null
	vl_matriculado = null
	vl_mes = null
	vl_tipo_movim = null
	application.getWindow('nuevoMovim').hide()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"84BCDFF0-63DC-4D8E-8264-E7E238702167"}
 */
function onActionGrabar(event) 
{
	grabarMovimiento()
}

/**
 * @properties={typeid:24,uuid:"F79FC76E-A658-4C06-852D-BCBA4EC0B12B"}
 */
function grabarMovimiento()
{
	if(vl_matriculado == 0 || vl_matriculado == null)
	{
		globals.VentanaGenerica(globals.ag_usuariovigente.usu_id,"Atencion","Debe seleccionar un Matriculado",'atention',controller.getName(),"Aceptar",null,null,null,null,null,null,null)
		return
	}
	switch (vl_tipo_movim) 
	{
	case 0:
		if(!globals.existeMovimiento(vl_mes,vl_anio,vl_matriculado,null,null))
		{	
			globals.generar_cuotas_mensuales_confirmadas(vl_mes,vl_anio,vl_matriculado)
			application.getWindow('nuevoMovim').hide()
		}
		else
		{
			globals.VentanaGenerica(globals.ag_usuariovigente.usu_id,"Atencion","Ya Existe un movimiento con los mismos Parametros",'atention',controller.getName(),"Aceptar",null,null,null,null,null,null,null)
		}
	break;
	case 1:
		if(!globals.existeMovimiento(vl_mes,vl_anio,vl_matriculado,null,null))
		{		
			globals.grabarPrimerMovimiento(vl_matriculado,vl_mes,vl_anio)
			application.getWindow('nuevoMovim').hide()
		}
		else
		{
			globals.VentanaGenerica(globals.ag_usuariovigente.usu_id,"Atencion","Ya Existe un movimiento con los mismos Parametros",'atention',controller.getName(),"Aceptar",null,null,null,null,null,null,null)		
		}
	break;
	case 2:
		if(!globals.existeMovimiento(vl_mes,vl_anio,vl_matriculado,null,null))
		{		
			application.getWindow('nuevoMovim').hide()
			forms.mat_movimientos_nuevo_manual.controller.show()
		}
		else
		{
			globals.VentanaGenerica(globals.ag_usuariovigente.usu_id,"Atencion","Ya Existe un movimiento con los mismos Parametros",'atention',controller.getName(),"Aceptar",null,null,null,null,null,null,null)		
		}		
	break;		
	default:
		break;
	}
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"0FA9F806-D02D-4604-ABF3-FF48C172F22E"}
 */
function onShow(firstShow, event) 
{
	vl_anio = application.getServerTimeStamp().getFullYear()
	vl_matriculado = null
	vl_mes = application.getServerTimeStamp().getMonth() + 1
	vl_tipo_movim = 0
}
